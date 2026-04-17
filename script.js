// Global variables
let currentQuestions = [];
let originalQuestions = [];
let currentMateri = "";
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime = 0;
let timerInterval = null;
let userAnswers = {};
let flaggedQuestions = new Set();
let showAnswersImmediately = false;
let isMobile = window.innerWidth <= 768;

// Theme management
const themeToggle = document.getElementById('theme-toggle');

function initTheme() {
    document.body.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
}

function updateThemeIcon(theme) {
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', next);
        updateThemeIcon(next);
    });
}

// Page navigation
function showPage(pageId) {
    const pages = ['menu-page', 'materi-page', 'quiz-page'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = id === pageId ? 'flex' : 'none';
            el.style.flexDirection = 'column';
        }
    });
}

function backToMenu() {
    window.location.reload();
}

function backToMateri() {
    showPage('materi-page');
    resetQuizState();
}

// Shuffle helpers
function shuffleArray(array) {
    const s = [...array];
    for (let i = s.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
}

function shuffleAnswers(question) {
    return { ...question, answers: shuffleArray(question.answers) };
}

// Load subject
function loadMateri(mapel) {
    resetAllState();

    document.querySelectorAll('script[data-mapel]').forEach(s => s.remove());

    const script = document.createElement('script');
    script.src = `mapel/${mapel}.js`;
    script.setAttribute('data-mapel', mapel);
    script.setAttribute('id', `script-${mapel}`);

    let checkTimeout;

    script.onload = () => {
        checkTimeout = setTimeout(() => {
            const m = typeof materi !== 'undefined' ? materi : window.materi;
            const s = typeof soal !== 'undefined' ? soal : window.soal;

            if (m && s) {
                document.getElementById("judul-materi").innerText = m.judul;
                document.getElementById("isi-materi").innerText = m.deskripsi;
                originalQuestions = [...s];
                currentQuestions = shuffleArray(s.map(q => shuffleAnswers(q)));
                currentMateri = m.judul;
                showPage('materi-page');
            } else {
                showNotification('Materi untuk mata pelajaran ini belum tersedia.', 'warning');
            }

            const sc = document.getElementById(`script-${mapel}`);
            if (sc) document.body.removeChild(sc);
        }, 100);
    };

    script.onerror = () => {
        showNotification('Gagal memuat materi. Silakan coba lagi.', 'error');
        clearTimeout(checkTimeout);
        const sc = document.getElementById(`script-${mapel}`);
        if (sc) document.body.removeChild(sc);
    };

    document.body.appendChild(script);
}

function resetAllState() {
    originalQuestions = [];
    currentQuestions = [];
    currentMateri = "";
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    userAnswers = {};
    flaggedQuestions = new Set();
    clearInterval(timerInterval);
    startTime = 0;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    clearInterval(timerInterval);
    startTime = 0;
}

// Start quiz modal
function mulaiKuis() {
    if (currentQuestions.length === 0) {
        showNotification('Tidak ada soal yang tersedia.', 'warning');
        return;
    }
    const radios = document.querySelectorAll('input[name="answer-display"]');
    radios.forEach(r => { r.checked = r.value === 'end'; });
    document.getElementById('quiz-options-modal').style.display = 'flex';
}

function startQuizWithOptions() {
    const selected = document.querySelector('input[name="answer-display"]:checked').value;
    showAnswersImmediately = selected === 'immediate';
    document.getElementById('quiz-options-modal').style.display = 'none';

    currentQuestions = shuffleArray(originalQuestions.map(q => shuffleAnswers(q)));
    userAnswers = {};
    flaggedQuestions = new Set();

    showPage('quiz-page');
    document.getElementById("kuis-title").innerText = currentMateri;
    document.getElementById("statusbar-subject").innerText = currentMateri;
    resetQuizState();
    buildNavGrid();
    startTimer();
    showQuestion();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1);
}

// Timer
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const m = Math.floor(elapsed / 60);
        const s = elapsed % 60;
        const timerEl = document.getElementById('timer');
        if (timerEl) timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

// Navigation grid
function buildNavGrid() {
    const grid = document.getElementById('nav-grid');
    if (!grid) return;
    grid.innerHTML = '';
    currentQuestions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = i + 1;
        btn.onclick = () => { currentQuestionIndex = i; showQuestion(); };
        btn.id = `nav-btn-${i}`;
        grid.appendChild(btn);
    });
    updateNavGrid();
}

function updateNavGrid() {
    currentQuestions.forEach((_, i) => {
        const btn = document.getElementById(`nav-btn-${i}`);
        if (!btn) return;
        btn.className = 'nav-btn';
        if (i === currentQuestionIndex) {
            btn.classList.add('nav-active');
        } else if (flaggedQuestions.has(i)) {
            btn.classList.add('nav-flagged');
        } else if (userAnswers[i]) {
            btn.classList.add('nav-answered');
        }
    });
}

// Flag
function toggleFlag() {
    const btn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(currentQuestionIndex)) {
        flaggedQuestions.delete(currentQuestionIndex);
        if (btn) btn.classList.remove('flagged');
    } else {
        flaggedQuestions.add(currentQuestionIndex);
        if (btn) btn.classList.add('flagged');
    }
    updateNavGrid();
}

// Show question
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        if (!showAnswersImmediately) showAllAnswers();
        endQuiz();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];

    // Question label
    const label = document.getElementById('question-label');
    if (label) label.textContent = `Soal ${currentQuestionIndex + 1}`;

    // Flag state
    const flagBtn = document.getElementById('flag-btn');
    if (flagBtn) {
        flagBtn.classList.toggle('flagged', flaggedQuestions.has(currentQuestionIndex));
    }

    // Progress
    updateProgress();

    // Question text
    const qEl = document.getElementById("question");
    if (qEl) qEl.innerHTML = `<div class="question-content">${q.question}</div>`;

    // Answers
    const ansEl = document.getElementById("answer-buttons");
    if (ansEl) {
        ansEl.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        q.answers.forEach((answer, idx) => {
            const btn = document.createElement("button");
            btn.className = "answer-btn";
            btn.dataset.correct = answer.correct;

            btn.innerHTML = `<span class="answer-letter">${letters[idx]}.</span>${answer.text}`;
            btn.addEventListener("click", selectAnswer);

            // Restore previous answer state
            if (userAnswers[currentQuestionIndex] &&
                userAnswers[currentQuestionIndex].selected === answer.text) {
                if (showAnswersImmediately) {
                    btn.classList.add(userAnswers[currentQuestionIndex].isCorrect ? "correct" : "incorrect");
                    setTimeout(() => {
                        Array.from(document.getElementById("answer-buttons").children).forEach(b => {
                            b.disabled = true;
                            if (b.dataset.correct === "true") b.classList.add("correct");
                        });
                    }, 0);
                } else {
                    btn.classList.add("selected");
                }
            }

            ansEl.appendChild(btn);
        });
    }

    // Difficulty
    const diffEl = document.getElementById("difficulty");
    if (diffEl) {
        diffEl.innerHTML = `
            <div class="difficulty-indicator">
                <i class="fas fa-chart-bar"></i>
                <span>Kesulitan: ${getDifficultyText(q.difficulty || 'medium')}</span>
            </div>`;
    }

    // Nav buttons
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    if (prevBtn) prevBtn.style.display = currentQuestionIndex > 0 ? "inline-flex" : "none";
    if (nextBtn) nextBtn.style.display = userAnswers[currentQuestionIndex] ? "inline-flex" : "none";

    // Score
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.textContent = `Skor: ${score}`;

    // Update nav grid
    updateNavGrid();
}

function getDifficultyText(d) {
    return { easy:'Mudah', medium:'Sedang', hard:'Susah', mudah:'Mudah', sedang:'Sedang', susah:'Susah' }[d.toLowerCase()] || 'Sedang';
}

function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    const pct = (answeredCount / currentQuestions.length) * 100;
    const bar = document.getElementById('quiz-progress');
    if (bar) bar.style.width = `${pct}%`;
    const txt = document.getElementById('progress-text');
    if (txt) txt.textContent = `${answeredCount} dari ${currentQuestions.length}`;
}

function selectAnswer(e) {
    const selected = e.currentTarget;
    const isCorrect = selected.dataset.correct === "true";

    // Reset all
    const all = document.getElementById("answer-buttons").children;
    Array.from(all).forEach(b => b.classList.remove("selected","correct","incorrect"));

    userAnswers[currentQuestionIndex] = { selected: selected.querySelector('.answer-letter').nextSibling ? selected.textContent.trim().substring(2).trim() : selected.innerText, isCorrect };
    // Fix: store actual answer text
    const letter = selected.querySelector('.answer-letter').textContent;
    const text = selected.textContent.replace(letter, '').trim();
    userAnswers[currentQuestionIndex].selected = text;

    if (showAnswersImmediately) {
        if (isCorrect) { correctAnswers++; score += 10; selected.classList.add("correct"); }
        else { wrongAnswers++; selected.classList.add("incorrect"); }
        Array.from(all).forEach(b => {
            b.disabled = true;
            if (b.dataset.correct === "true") b.classList.add("correct");
        });
    } else {
        selected.classList.add("selected");
    }

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.style.display = "inline-flex";

    if (showAnswersImmediately) {
        const scoreEl = document.getElementById('score');
        if (scoreEl) scoreEl.textContent = `Skor: ${score}`;
    }

    updateNavGrid();
}

function showAllAnswers() {
    correctAnswers = 0; wrongAnswers = 0; score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i]) {
            if (userAnswers[i].isCorrect) { score += 10; correctAnswers++; }
            else wrongAnswers++;
        } else {
            wrongAnswers++;
        }
    }
}

// Event listeners for next/prev
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    showPage('menu-page');

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentQuestionIndex++;
            showQuestion();
        });
    }

    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(); }
        });
    }

    // Update isMobile on window resize
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 768;
    });

    // Add touch gesture support for swiping between questions
    let touchStartX = 0;
    let touchEndX = 0;

    const quizPage = document.getElementById('quiz-page');
    if (quizPage) {
        quizPage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        quizPage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }

    function handleSwipe() {
        const minDistance = 50;
        if (touchStartX - touchEndX > minDistance) {
            // Swiped left - next question
            const nextBtn = document.getElementById("next-btn");
            if (nextBtn && nextBtn.style.display !== 'none') nextBtn.click();
        } else if (touchEndX - touchStartX > minDistance) {
            // Swiped right - previous question
            const prevBtn = document.getElementById("prev-btn");
            if (prevBtn && prevBtn.style.display !== 'none') prevBtn.click();
        }
    }
});

function openFinishQuizModal() {
    document.getElementById('finish-quiz-modal').style.display = 'flex';
}

function closeFinishQuizModal() {
    document.getElementById('finish-quiz-modal').style.display = 'none';
}

function confirmFinishQuiz() {
    document.getElementById('finish-quiz-modal').style.display = 'none';
    if (!showAnswersImmediately) showAllAnswers();
    endQuiz();
}

function finishQuiz() {
    openFinishQuizModal();
}

function endQuiz() {
    stopTimer();
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(totalTime / 60);
    const s = totalTime % 60;
    const pct = currentQuestions.length > 0 ? Math.round((correctAnswers / currentQuestions.length) * 100) : 0;

    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${pct}%`;
    document.getElementById('total-time').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    document.getElementById('results-modal').style.display = 'flex';
}

function restartQuiz() {
    document.getElementById('results-modal').style.display = 'none';
    mulaiKuis();
}

// Notifications
function showNotification(message, type = 'info') {
    const n = document.createElement('div');
    const colors = { success: '#22c55e', warning: '#f59e0b', error: '#ef4444', info: '#3b82f6' };
    n.style.cssText = `position:fixed;top:20px;right:20px;padding:.75rem 1.25rem;border-radius:8px;color:white;font-weight:500;z-index:99999;max-width:300px;box-shadow:0 4px 12px rgba(0,0,0,.2);background:${colors[type]||colors.info};animation:slideInRight .3s ease;font-size:.875rem;`;
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity = '0'; n.style.transition = 'opacity .3s'; setTimeout(() => n.remove(), 300); }, 3000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const quizVisible = document.getElementById('quiz-page') && document.getElementById('quiz-page').style.display !== 'none';
    const modalVisible = document.getElementById('quiz-options-modal').style.display === 'flex' ||
                         document.getElementById('results-modal').style.display === 'flex';

    if (quizVisible && !modalVisible) {
        const answerBtns = document.querySelectorAll('.answer-btn:not(:disabled)');
        const nextBtn = document.getElementById('next-btn');

        if (e.key >= '1' && e.key <= '5') {
            const idx = parseInt(e.key) - 1;
            if (answerBtns[idx]) { e.preventDefault(); answerBtns[idx].click(); }
        }
        if ((e.key === 'Enter' || e.key === ' ') && nextBtn && nextBtn.style.display !== 'none') {
            e.preventDefault(); nextBtn.click();
        }
        if (e.key === 'f' || e.key === 'F') { toggleFlag(); }
    }
});

// Notification animation
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight { from { transform:translateX(100%);opacity:0 } to { transform:translateX(0);opacity:1 } }
`;
document.head.appendChild(style);
