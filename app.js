/**
 * AUCTION PORTAL BACK OFFICE EXECUTIVE ASSESSMENT
 * Application Logic (HTML / CSS / Vanilla JavaScript)
 * Company: Hecta Proptech Private Limited
 */

// ==========================================
// 15 QUESTIONS DATASET WITH OFFICIAL KEY
// ==========================================
const QUESTIONS = [
  // EASY QUESTIONS (Q1–Q5, 4 points each = 20 points)
  {
    id: 1,
    difficulty: "EASY",
    points: 4,
    skill: "Auction Knowledge",
    text: "What does EMD stand for in property auctions?",
    options: [
      { id: "A", text: "Earnest Money Deposit" },
      { id: "B", text: "Estimated Market Deposit" },
      { id: "C", text: "Emergency Mortgage Debt" },
      { id: "D", text: "Equated Monthly Deduction" }
    ],
    correctAnswer: "A",
    explanation: "EMD stands for Earnest Money Deposit. It is the mandatory security deposit submitted by interested bidders prior to the auction to establish genuine bidding intent."
  },
  {
    id: 2,
    difficulty: "EASY",
    points: 4,
    skill: "Excel & Data Handling",
    text: "Which Excel function adds up all numbers in a range of cells?",
    options: [
      { id: "A", text: "COUNT" },
      { id: "B", text: "SUM" },
      { id: "C", text: "TOTAL" },
      { id: "D", text: "ADDALL" }
    ],
    correctAnswer: "B",
    explanation: "=SUM(...) is the standard Excel/Sheets arithmetic function used to calculate the total summation of values across a specified cell range."
  },
  {
    id: 3,
    difficulty: "EASY",
    points: 4,
    skill: "Banking & Auction Knowledge",
    text: "What does NPA stand for in banking?",
    options: [
      { id: "A", text: "New Property Acquisition" },
      { id: "B", text: "Non-Performing Asset" },
      { id: "C", text: "National Payment Authority" },
      { id: "D", text: "Net Profit Account" }
    ],
    correctAnswer: "B",
    explanation: "NPA stands for Non-Performing Asset. In banking, a loan account is classified as an NPA when principal or interest payments remain overdue for 90 days."
  },
  {
    id: 4,
    difficulty: "EASY",
    points: 4,
    skill: "Auction Knowledge",
    text: "What is the \"reserve price\" in a bank auction?",
    options: [
      { id: "A", text: "The highest price a bidder can offer" },
      { id: "B", text: "The minimum price below which the property will not be sold" },
      { id: "C", text: "The registration fee for bidders" },
      { id: "D", text: "The bank's brokerage charge" }
    ],
    correctAnswer: "B",
    explanation: "The reserve price is the benchmark minimum price established by the secured creditor/bank below which no bid will be accepted."
  },
  {
    id: 5,
    difficulty: "EASY",
    points: 4,
    skill: "Excel & Data Handling",
    text: "Which keyboard shortcut in Excel/Google Sheets copies selected cells?",
    options: [
      { id: "A", text: "Ctrl + V" },
      { id: "B", text: "Ctrl + X" },
      { id: "C", text: "Ctrl + C" },
      { id: "D", text: "Ctrl + Z" }
    ],
    correctAnswer: "C",
    explanation: "Ctrl + C copies selected cells to the clipboard (Ctrl + V pastes, Ctrl + X cuts, Ctrl + Z undos)."
  },

  // MEDIUM QUESTIONS (Q6–Q10, 6 points each = 30 points)
  {
    id: 6,
    difficulty: "MEDIUM",
    points: 6,
    skill: "Excel & Data Handling",
    text: "You have a list of auction IDs in column A and a master sheet with IDs and reserve prices. Which function best fetches the reserve price for each ID?",
    options: [
      { id: "A", text: "VLOOKUP / XLOOKUP" },
      { id: "B", text: "CONCATENATE" },
      { id: "C", text: "ROUND" },
      { id: "D", text: "LEN" }
    ],
    correctAnswer: "A",
    explanation: "VLOOKUP or modern XLOOKUP is designed to search for a lookup key (such as Auction ID) in a master dataset and retrieve matching attributes like Reserve Price."
  },
  {
    id: 7,
    difficulty: "MEDIUM",
    points: 6,
    skill: "SARFAESI & Legal Operations",
    text: "What does the SARFAESI Act allow banks to do?",
    options: [
      { id: "A", text: "Recover secured loans by taking possession of and auctioning the collateral without going to court" },
      { id: "B", text: "Waive off all loans of small borrowers" },
      { id: "C", text: "Issue property registration certificates" },
      { id: "D", text: "Regulate stock market trading" }
    ],
    correctAnswer: "A",
    explanation: "The SARFAESI Act empowers secured lenders (banks, ARCs, NBFCs) to take possession of and auction mortgaged collateral for NPA recovery without prior judicial intervention."
  },
  {
    id: 8,
    difficulty: "MEDIUM",
    points: 6,
    skill: "Document Verification",
    text: "Which document is the official public notice that lists property details, reserve price, EMD and auction date?",
    options: [
      { id: "A", text: "Sale notice / Auction notice" },
      { id: "B", text: "Encumbrance certificate" },
      { id: "C", text: "Sale deed" },
      { id: "D", text: "Power of attorney" }
    ],
    correctAnswer: "A",
    explanation: "The Sale Notice / Auction Notice is the official public statutory announcement specifying the property description, reserve price, EMD amount, and auction schedule."
  },
  {
    id: 9,
    difficulty: "MEDIUM",
    points: 6,
    skill: "Excel & Data Handling",
    text: "In Excel, which feature helps you quickly highlight duplicate auction IDs in a column?",
    options: [
      { id: "A", text: "Conditional Formatting > Duplicate Values" },
      { id: "B", text: "Freeze Panes" },
      { id: "C", text: "Text to Columns" },
      { id: "D", text: "Goal Seek" }
    ],
    correctAnswer: "A",
    explanation: "Under Home > Conditional Formatting > Highlight Cells Rules > Duplicate Values, Excel highlights repeated auction IDs to prevent double uploads."
  },
  {
    id: 10,
    difficulty: "MEDIUM",
    points: 6,
    skill: "Document Verification & KYC",
    text: "What does KYC verification for a bidder typically involve?",
    options: [
      { id: "A", text: "Checking the bidder's identity and address proofs such as PAN and Aadhaar" },
      { id: "B", text: "Valuing the property" },
      { id: "C", text: "Calculating the bank's interest rate" },
      { id: "D", text: "Registering the sale deed" }
    ],
    correctAnswer: "A",
    explanation: "KYC (Know Your Customer) requires verifying official identity and address credentials (e.g., PAN card, Aadhaar, Board Resolution for corporate bidders) prior to auction approval."
  },

  // HARD QUESTIONS (Q11–Q15, 10 points each = 50 points)
  {
    id: 11,
    difficulty: "HARD",
    points: 10,
    skill: "Excel & Data Handling",
    text: "A reserve price is in cell B2 and EMD is 10% of it. Which formula correctly gives EMD, rounded to the nearest thousand, and can be copied down the column?",
    options: [
      { id: "A", text: "=ROUND(B2*10%,-3)" },
      { id: "B", text: "=ROUND(B2*10%,3)" },
      { id: "C", text: "=B2/10%" },
      { id: "D", text: "=ROUNDUP(B2,10)" }
    ],
    correctAnswer: "A",
    explanation: "=ROUND(B2*10%, -3) rounds the calculated 10% EMD to the nearest thousand (negative 3 places rounds to thousands, whereas positive 3 rounds to decimals)."
  },
  {
    id: 12,
    difficulty: "HARD",
    points: 10,
    skill: "SARFAESI & Legal Operations",
    text: "Under SARFAESI Rules, what is the minimum notice period for a public auction sale of an immovable secured asset?",
    options: [
      { id: "A", text: "7 days" },
      { id: "B", text: "15 days" },
      { id: "C", text: "30 days" },
      { id: "D", text: "60 days" }
    ],
    correctAnswer: "C",
    explanation: "Under Security Interest (Enforcement) Rules 2002, the authorized officer must provide a 30-day public notice to the borrower/public for the initial sale of immovable property."
  },
  {
    id: 13,
    difficulty: "HARD",
    points: 10,
    skill: "Operational Judgment",
    text: "What is the difference between symbolic possession and physical possession in a bank auction?",
    options: [
      { id: "A", text: "Symbolic: bank takes legal possession by notice without physically occupying the property; Physical: bank actually takes control of the property" },
      { id: "B", text: "Symbolic possession applies only to vehicles" },
      { id: "C", text: "Physical possession means the borrower has cleared all dues" },
      { id: "D", text: "There is no legal difference" }
    ],
    correctAnswer: "A",
    explanation: "Symbolic possession is legal constructive possession established by demand/possession notice under Section 13(4). Physical possession occurs when the bank actually takes physical handover/locks the premises."
  },
  {
    id: 14,
    difficulty: "HARD",
    points: 10,
    skill: "Excel & Data Handling",
    text: "Auction dates are in column D (real dates). Which formula returns the number of auctions scheduled in the next 7 days from today?",
    options: [
      { id: "A", text: "=COUNTIFS(D:D,\">=\"&TODAY(),D:D,\"<=\"&TODAY()+7)" },
      { id: "B", text: "=COUNTIF(D:D,TODAY()+7)" },
      { id: "C", text: "=SUMIF(D:D,\">7\")" },
      { id: "D", text: "=COUNT(TODAY(),D:D)" }
    ],
    correctAnswer: "A",
    explanation: "=COUNTIFS(D:D,\">=\"&TODAY(), D:D,\"<=\"&TODAY()+7) accurately counts dates falling within the 7-day rolling window starting from today."
  },
  {
    id: 15,
    difficulty: "HARD",
    points: 10,
    skill: "SARFAESI & Auction Operations",
    text: "A bidder wins an auction. Under SARFAESI rules, what portion of the bid amount must generally be deposited immediately, and by when is the balance due?",
    options: [
      { id: "A", text: "25% immediately (adjusting EMD); balance within 15 days" },
      { id: "B", text: "50% immediately; balance within 7 days" },
      { id: "C", text: "100% immediately; no balance" },
      { id: "D", text: "10% immediately; balance within 90 days" }
    ],
    correctAnswer: "A",
    explanation: "Under SARFAESI Rule 9(3) & 9(4), the successful bidder must deposit 25% of the purchase price on the auction day (adjusting EMD), and the remaining 75% balance within 15 days."
  }
];

// 5 Core Competency Skills
const SKILL_CATEGORIES = [
  { name: "Auction Knowledge", desc: "Understanding EMD, reserve prices, bidding procedures, and auction schedules." },
  { name: "Excel & Data Handling", desc: "Formulas (SUM, ROUND, COUNTIFS, XLOOKUP), duplicate checks, and MIS lookups." },
  { name: "SARFAESI & Legal Operations", desc: "Statutory 30-day notice rules, possession workflows, and 25%/75% settlement rules." },
  { name: "Document Verification", desc: "Reviewing sale notices, property titles, encumbrances, and bidder KYC." },
  { name: "Operational Judgment", desc: "Spotting discrepancies, resolving anomalies, and prioritizing back-office tasks." }
];

// Initial Mock Candidates for Evaluator Dashboard
const INITIAL_MOCK_CANDIDATES = [
  {
    id: "cand-101",
    fullName: "Priya Venkatesh",
    email: "priya.v@example.com",
    phone: "+91 98112 34567",
    qualification: "BBA",
    experience: "2–3 years",
    city: "Bengaluru",
    score: 94,
    percentage: 94,
    easyScore: 20,
    mediumScore: 24,
    hardScore: 50,
    timeTaken: "21:15",
    timeSeconds: 1275,
    date: "2026-09-28T14:30:00.000Z",
    status: "Completed",
    answers: { 1:"A", 2:"B", 3:"B", 4:"B", 5:"C", 6:"A", 7:"A", 8:"A", 9:"A", 10:"B", 11:"A", 12:"C", 13:"A", 14:"A", 15:"A" }
  },
  {
    id: "cand-102",
    fullName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    qualification: "B.Com",
    experience: "1–2 years",
    city: "Hyderabad",
    score: 84,
    percentage: 84,
    easyScore: 20,
    mediumScore: 24,
    hardScore: 40,
    timeTaken: "24:40",
    timeSeconds: 1480,
    date: "2026-09-28T16:45:00.000Z",
    status: "Completed",
    answers: { 1:"A", 2:"B", 3:"B", 4:"B", 5:"C", 6:"A", 7:"A", 8:"A", 9:"B", 10:"A", 11:"A", 12:"C", 13:"A", 14:"B", 15:"A" }
  },
  {
    id: "cand-103",
    fullName: "Sneha Kulkarni",
    email: "sneha.k@example.com",
    phone: "+91 94455 66778",
    qualification: "MBA",
    experience: "3+ years",
    city: "Pune",
    score: 90,
    percentage: 90,
    easyScore: 20,
    mediumScore: 30,
    hardScore: 40,
    timeTaken: "19:50",
    timeSeconds: 1190,
    date: "2026-09-29T10:15:00.000Z",
    status: "Completed",
    answers: { 1:"A", 2:"B", 3:"B", 4:"B", 5:"C", 6:"A", 7:"A", 8:"A", 9:"A", 10:"A", 11:"A", 12:"B", 13:"A", 14:"A", 15:"A" }
  },
  {
    id: "cand-104",
    fullName: "Amit Verma",
    email: "amit.verma89@example.com",
    phone: "+91 97234 56789",
    qualification: "BCA",
    experience: "Less than 1 year",
    city: "Mumbai",
    score: 66,
    percentage: 66,
    easyScore: 16,
    mediumScore: 20,
    hardScore: 30,
    timeTaken: "27:10",
    timeSeconds: 1630,
    date: "2026-09-29T11:40:00.000Z",
    status: "Completed",
    answers: { 1:"A", 2:"B", 3:"A", 4:"B", 5:"C", 6:"B", 7:"A", 8:"A", 9:"A", 10:"B", 11:"A", 12:"A", 13:"A", 14:"B", 15:"B" }
  },
  {
    id: "cand-105",
    fullName: "Ananya Reddy",
    email: "ananya.reddy@example.com",
    phone: "+91 99887 76655",
    qualification: "B.Tech",
    experience: "Fresher",
    city: "Hyderabad",
    score: 76,
    percentage: 76,
    easyScore: 20,
    mediumScore: 26,
    hardScore: 30,
    timeTaken: "25:30",
    timeSeconds: 1530,
    date: "2026-09-29T13:20:00.000Z",
    status: "Completed",
    answers: { 1:"A", 2:"B", 3:"B", 4:"B", 5:"C", 6:"A", 7:"A", 8:"B", 9:"A", 10:"A", 11:"B", 12:"C", 13:"A", 14:"B", 15:"A" }
  }
];

// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
const STORAGE_KEYS = {
  STATE: "hecta_assessment_pure_js_state_v3",
  ADMIN: "hecta_assessment_pure_js_admin_v3"
};

const TOTAL_TIME_SECONDS = 30 * 60; // 30 minutes

let appState = {
  currentView: "landing",
  currentQuestionIndex: 0,
  candidateInfo: {
    fullName: "Candidate",
    email: "candidate@hecta.co",
    phone: "—",
    qualification: "Graduate",
    experience: "Standard",
    currentCity: "—"
  },
  answers: {}, // { 1: "A", 2: "B", ... }
  flaggedQuestions: [], // [1, 5, ...]
  secondsRemaining: TOTAL_TIME_SECONDS,
  isTimerRunning: false,
  result: null
};

let adminCandidates = [];
let isAdminAuthenticated = false;
let timerInterval = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadAdminCandidates();
  restoreAssessmentSession();
  setupEventListeners();
  renderCurrentView();
});

function loadAdminCandidates() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ADMIN);
    if (stored) {
      adminCandidates = JSON.parse(stored);
    } else {
      adminCandidates = [...INITIAL_MOCK_CANDIDATES];
      saveAdminCandidates();
    }
  } catch (e) {
    adminCandidates = [...INITIAL_MOCK_CANDIDATES];
  }
}

function saveAdminCandidates() {
  try {
    localStorage.setItem(STORAGE_KEYS.ADMIN, JSON.stringify(adminCandidates));
  } catch (e) {
    console.error("Failed to save admin candidates:", e);
  }
}

function saveAssessmentSession() {
  try {
    const dataToSave = {
      currentView: appState.currentView,
      currentQuestionIndex: appState.currentQuestionIndex,
      candidateInfo: appState.candidateInfo,
      answers: appState.answers,
      flaggedQuestions: appState.flaggedQuestions,
      secondsRemaining: appState.secondsRemaining,
      isTimerRunning: appState.isTimerRunning,
      result: appState.result
    };
    localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(dataToSave));
  } catch (e) {
    console.error("Failed to save session:", e);
  }
}

function restoreAssessmentSession() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.STATE);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState = { ...appState, ...parsed };

      // If active assessment was in progress, resume timer
      if (appState.currentView === "assessment" && appState.secondsRemaining > 0) {
        startTimer();
      }
    }
  } catch (e) {
    console.error("Session restore error:", e);
  }
}

// ==========================================
// NAVIGATION & VIEW SWITCHING
// ==========================================
function switchView(viewName) {
  appState.currentView = viewName;
  saveAssessmentSession();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentView() {
  // Hide all view panels
  const panels = document.querySelectorAll(".view-panel");
  panels.forEach(p => p.classList.remove("active"));

  // Header components visibility
  const headerProgress = document.getElementById("header-assessment-progress");
  const timerBadge = document.getElementById("timer-badge");
  const adminBadge = document.getElementById("admin-badge");
  const evaluatorBtnLabel = document.getElementById("evaluator-btn-label");

  const targetPanel = document.getElementById(`view-${appState.currentView}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }

  const headerSubmitBtn = document.getElementById("btn-header-submit");

  if (appState.currentView === "assessment") {
    headerProgress.classList.remove("hidden");
    timerBadge.classList.remove("hidden");
    if (headerSubmitBtn) headerSubmitBtn.classList.remove("hidden");
    adminBadge.classList.add("hidden");
    evaluatorBtnLabel.textContent = "Evaluator Portal";
    renderQuestion(appState.currentQuestionIndex);
    updateNavigatorGrid();
  } else if (appState.currentView === "admin") {
    headerProgress.classList.add("hidden");
    timerBadge.classList.add("hidden");
    if (headerSubmitBtn) headerSubmitBtn.classList.add("hidden");
    adminBadge.classList.remove("hidden");
    evaluatorBtnLabel.textContent = "Exit Evaluator";
    renderAdminDashboard();
  } else {
    headerProgress.classList.add("hidden");
    timerBadge.classList.add("hidden");
    if (headerSubmitBtn) headerSubmitBtn.classList.add("hidden");
    adminBadge.classList.add("hidden");
    evaluatorBtnLabel.textContent = "Evaluator Portal";

    if (appState.currentView === "completion") {
      renderCompletionScreen();
    } else if (appState.currentView === "detailed-results") {
      renderDetailedResults();
    }
  }
}

// ==========================================
// TIMER FUNCTIONALITY
// ==========================================
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  appState.isTimerRunning = true;

  timerInterval = setInterval(() => {
    if (appState.secondsRemaining <= 1) {
      clearInterval(timerInterval);
      appState.secondsRemaining = 0;
      updateTimerDisplay();
      autoSubmitTimerExpired();
      return;
    }

    appState.secondsRemaining--;
    updateTimerDisplay();

    // Auto-save state every 5 seconds
    if (appState.secondsRemaining % 5 === 0) {
      saveAssessmentSession();
    }
  }, 1000);

  updateTimerDisplay();
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  appState.isTimerRunning = false;
  saveAssessmentSession();
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-display");
  const badge = document.getElementById("timer-badge");
  if (!display || !badge) return;

  const m = Math.floor(appState.secondsRemaining / 60);
  const s = appState.secondsRemaining % 60;
  display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  badge.classList.remove("warning", "critical");
  if (appState.secondsRemaining <= 60) {
    badge.classList.add("critical");
  } else if (appState.secondsRemaining <= 300) {
    badge.classList.add("warning");
  }
}

function autoSubmitTimerExpired() {
  alert("Time has expired (30:00). Your assessment is automatically being submitted now.");
  finalizeAssessmentSubmission();
}

// ==========================================
// ASSESSMENT WORKSPACE RENDERING
// ==========================================
function renderQuestion(index) {
  if (index < 0 || index >= QUESTIONS.length) return;
  appState.currentQuestionIndex = index;

  const q = QUESTIONS[index];
  const qNum = index + 1;

  // Header indicators
  document.getElementById("header-q-counter").textContent = `Question ${qNum} of 15`;
  document.getElementById("current-q-label").textContent = `Question ${qNum} of 15`;
  document.getElementById("q-number-badge").textContent = `QUESTION ${qNum}`;
  document.getElementById("q-skill-badge").textContent = q.skill;
  document.getElementById("badge-points").textContent = `${q.points} Points`;

  // Difficulty badge
  const diffBadge = document.getElementById("badge-difficulty");
  diffBadge.textContent = q.difficulty;
  diffBadge.className = `badge-difficulty ${q.difficulty.toLowerCase()}`;

  // Progress Bar percentage
  const pct = Math.round((qNum / QUESTIONS.length) * 100);
  document.getElementById("progress-pct-text").textContent = `${pct}% Completed`;
  document.getElementById("progress-fill").style.width = `${pct}%`;

  // Question Text
  document.getElementById("question-text").textContent = `Q${qNum}. ${q.text}`;

  // Options List
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const currentSelected = appState.answers[q.id];

  q.options.forEach(opt => {
    const isSelected = currentSelected === opt.id;
    const card = document.createElement("div");
    card.className = `option-card ${isSelected ? 'selected' : ''}`;
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", isSelected ? "true" : "false");

    card.innerHTML = `
      <div class="option-badge">${opt.id}</div>
      <div class="option-label-text">${opt.text}</div>
      <div class="option-check">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    `;

    card.addEventListener("click", () => {
      appState.answers[q.id] = opt.id;
      saveAssessmentSession();
      renderQuestion(appState.currentQuestionIndex);
      updateNavigatorGrid();
    });

    optionsContainer.appendChild(card);
  });

  // Flag Button State
  const isFlagged = appState.flaggedQuestions.includes(q.id);
  const flagBtn = document.getElementById("btn-flag-question");
  const flagBtnText = document.getElementById("flag-btn-text");
  if (isFlagged) {
    flagBtn.classList.add("active");
    flagBtnText.textContent = "Flagged";
  } else {
    flagBtn.classList.remove("active");
    flagBtnText.textContent = "Flag Question";
  }

  // Navigation Buttons
  const prevBtn = document.getElementById("btn-prev-question");
  const nextBtn = document.getElementById("btn-next-question");
  const submitDirectBtn = document.getElementById("btn-submit-test-direct");

  prevBtn.disabled = index === 0;

  if (index === QUESTIONS.length - 1) {
    nextBtn.classList.add("hidden");
    if (submitDirectBtn) {
      submitDirectBtn.classList.remove("btn-secondary", "hidden");
      submitDirectBtn.classList.add("btn-primary");
    }
  } else {
    nextBtn.classList.remove("hidden");
    if (submitDirectBtn) {
      submitDirectBtn.classList.remove("hidden", "btn-primary");
      submitDirectBtn.classList.add("btn-secondary");
    }
  }

  updateNavigatorGrid();
}

function updateNavigatorGrid() {
  const grid = document.getElementById("navigator-buttons-grid");
  if (!grid) return;
  grid.innerHTML = "";

  let answeredCount = 0;

  QUESTIONS.forEach((q, idx) => {
    const isAnswered = Boolean(appState.answers[q.id]);
    const isFlagged = appState.flaggedQuestions.includes(q.id);
    const isCurrent = appState.currentQuestionIndex === idx;

    if (isAnswered) answeredCount++;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-grid-btn";
    btn.textContent = q.id;
    btn.title = `Question ${q.id} (${q.difficulty} - ${q.points} pts)`;

    if (isCurrent) btn.classList.add("current");
    if (isAnswered) btn.classList.add("answered");
    if (isFlagged) btn.classList.add("flagged");

    btn.addEventListener("click", () => {
      renderQuestion(idx);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    grid.appendChild(btn);
  });

  const total = QUESTIONS.length;
  const unansweredCount = total - answeredCount;
  const flaggedCount = appState.flaggedQuestions.length;

  document.getElementById("legend-answered-count").textContent = answeredCount;
  document.getElementById("legend-unanswered-count").textContent = unansweredCount;
  document.getElementById("legend-flagged-count").textContent = flaggedCount;
}

// ==========================================
// SUBMIT CONFIRMATION & SCORING
// ==========================================
function openSubmitConfirmationModal() {
  const total = QUESTIONS.length;
  let answeredCount = 0;
  QUESTIONS.forEach(q => {
    if (appState.answers[q.id]) answeredCount++;
  });
  const unansweredCount = total - answeredCount;
  const flaggedCount = appState.flaggedQuestions.length;

  document.getElementById("modal-stat-answered").textContent = `${answeredCount}/${total}`;
  document.getElementById("modal-stat-unanswered").textContent = unansweredCount;
  document.getElementById("modal-stat-flagged").textContent = flaggedCount;

  const warningBox = document.getElementById("modal-unanswered-warning");
  if (unansweredCount > 0) {
    warningBox.classList.remove("hidden");
  } else {
    warningBox.classList.add("hidden");
  }

  document.getElementById("modal-submit-confirmation").classList.remove("hidden");
}

function closeSubmitConfirmationModal() {
  document.getElementById("modal-submit-confirmation").classList.add("hidden");
}

function finalizeAssessmentSubmission() {
  closeSubmitConfirmationModal();
  stopTimer();

  // Compute Scores
  let totalScore = 0;
  let correctCount = 0;
  let answeredCount = 0;

  let easyScore = 0;
  let mediumScore = 0;
  let hardScore = 0;

  const questionResults = {};

  QUESTIONS.forEach(q => {
    const candidateChoice = appState.answers[q.id];
    const isAnswered = Boolean(candidateChoice);
    if (isAnswered) answeredCount++;

    const isCorrect = candidateChoice === q.correctAnswer;
    const pointsEarned = isCorrect ? q.points : 0;

    if (isCorrect) correctCount++;
    totalScore += pointsEarned;

    if (q.difficulty === "EASY") easyScore += pointsEarned;
    else if (q.difficulty === "MEDIUM") mediumScore += pointsEarned;
    else if (q.difficulty === "HARD") hardScore += pointsEarned;

    questionResults[q.id] = {
      isAnswered,
      isCorrect,
      candidateChoice: candidateChoice || "<None>",
      correctAnswer: q.correctAnswer,
      pointsEarned,
      maxPoints: q.points
    };
  });

  const timeSpentSeconds = TOTAL_TIME_SECONDS - appState.secondsRemaining;
  const m = Math.floor(timeSpentSeconds / 60);
  const s = timeSpentSeconds % 60;
  const formattedTime = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  const percentage = Math.round((totalScore / 100) * 100);

  appState.result = {
    totalScore,
    percentage,
    correctCount,
    answeredCount,
    timeSpentSeconds,
    formattedTime,
    easyScore,
    mediumScore,
    hardScore,
    questionResults,
    submittedAt: new Date().toISOString()
  };

  // Add to Admin records
  const newCandidateRecord = {
    id: `cand-${Date.now()}`,
    fullName: appState.candidateInfo.fullName || "Candidate",
    email: appState.candidateInfo.email || "candidate@example.com",
    phone: appState.candidateInfo.phone || "—",
    qualification: appState.candidateInfo.qualification || "—",
    experience: appState.candidateInfo.experience || "—",
    city: appState.candidateInfo.currentCity || "—",
    score: totalScore,
    percentage: percentage,
    easyScore: easyScore,
    mediumScore: mediumScore,
    hardScore: hardScore,
    timeTaken: formattedTime,
    timeSeconds: timeSpentSeconds,
    date: new Date().toISOString(),
    status: "Completed",
    answers: { ...appState.answers }
  };

  adminCandidates.unshift(newCandidateRecord);
  saveAdminCandidates();
  saveAssessmentSession();

  // Navigate to Completion Screen
  switchView("completion");
}

// ==========================================
// VIEW 5: PERSONALIZED COMPLETION SCREEN
// ==========================================
function renderCompletionScreen() {
  if (!appState.result) return;

  const scoreEl = document.getElementById("final-dynamic-score");
  const accuracyEl = document.getElementById("final-dynamic-accuracy");
  const timeEl = document.getElementById("final-dynamic-time");

  accuracyEl.textContent = `${appState.result.percentage}%`;
  timeEl.textContent = appState.result.formattedTime;

  // Score count-up micro-animation
  animateScoreCounter(scoreEl, appState.result.totalScore, 1000);
}

function animateScoreCounter(element, targetScore, duration) {
  let start = 0;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = targetScore / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= targetScore) {
      clearInterval(timer);
      element.textContent = targetScore;
    } else {
      element.textContent = Math.round(start);
    }
  }, stepTime);
}

// ==========================================
// VIEW 6: DETAILED RESULTS
// ==========================================
function renderDetailedResults() {
  if (!appState.result) return;

  const r = appState.result;

  document.getElementById("res-candidate-name").textContent = appState.candidateInfo.fullName || "Candidate";
  document.getElementById("res-score-num").textContent = r.totalScore;
  document.getElementById("res-accuracy-num").textContent = `${r.percentage}%`;
  document.getElementById("res-time-taken").textContent = r.formattedTime;
  document.getElementById("res-answered-count").textContent = `${r.answeredCount} / 15`;
  document.getElementById("res-correct-count").textContent = `${r.correctCount} / 15`;
  document.getElementById("res-experience-val").textContent = appState.candidateInfo.experience || "—";

  // Section scores
  document.getElementById("sec-easy-score").textContent = r.easyScore;
  document.getElementById("sec-easy-bar").style.width = `${(r.easyScore / 20) * 100}%`;

  document.getElementById("sec-medium-score").textContent = r.mediumScore;
  document.getElementById("sec-medium-bar").style.width = `${(r.mediumScore / 30) * 100}%`;

  document.getElementById("sec-hard-score").textContent = r.hardScore;
  document.getElementById("sec-hard-bar").style.width = `${(r.hardScore / 50) * 100}%`;

  // Skill breakdown computation
  renderSkillBreakdown();

  // Question review items
  renderQuestionReviewList("ALL");
}

function renderSkillBreakdown() {
  const container = document.getElementById("skills-breakdown-list");
  container.innerHTML = "";

  SKILL_CATEGORIES.forEach(skill => {
    // Collect all questions under this skill
    const matchingQs = QUESTIONS.filter(q => q.skill.includes(skill.name) || skill.name.includes(q.skill));
    const maxPoints = matchingQs.reduce((acc, q) => acc + q.points, 0) || 20;
    
    let earnedPoints = 0;
    matchingQs.forEach(q => {
      const qRes = appState.result.questionResults[q.id];
      if (qRes && qRes.isCorrect) earnedPoints += q.points;
    });

    const pct = Math.round((earnedPoints / maxPoints) * 100);

    const row = document.createElement("div");
    row.className = "skill-row";
    row.innerHTML = `
      <div class="skill-meta">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-pts">${earnedPoints} / ${maxPoints} pts (${pct}%)</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width: ${pct}%;"></div>
      </div>
      <div class="skill-desc">${skill.desc}</div>
    `;
    container.appendChild(row);
  });
}

function renderQuestionReviewList(filter) {
  const container = document.getElementById("review-questions-list");
  container.innerHTML = "";

  const filteredQs = QUESTIONS.filter(q => {
    if (filter === "ALL") return true;
    return q.difficulty === filter;
  });

  filteredQs.forEach(q => {
    const qRes = appState.result.questionResults[q.id] || {
      isCorrect: false,
      candidateChoice: "<Unanswered>",
      pointsEarned: 0
    };

    const isCorrect = qRes.isCorrect;
    const card = document.createElement("div");
    card.className = `review-q-item ${isCorrect ? 'correct' : 'incorrect'}`;

    const candOpt = q.options.find(o => o.id === qRes.candidateChoice);
    const correctOpt = q.options.find(o => o.id === q.correctAnswer);

    const candText = candOpt ? `${candOpt.id}) ${candOpt.text}` : "<Unanswered>";
    const correctText = correctOpt ? `${correctOpt.id}) ${correctOpt.text}` : "";

    card.innerHTML = `
      <div class="review-q-top">
        <div class="review-q-title">Q${q.id}. ${q.text}</div>
        <span class="review-badge-status ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? `+${q.points} Pts Correct` : `0 / ${q.points} Pts`}
        </span>
      </div>

      <div class="review-answers-grid">
        <div class="review-ans-col">
          <strong>Your Answer:</strong>
          <span style="color: ${isCorrect ? '#059669' : '#dc2626'}; font-weight: 600;">${candText}</span>
        </div>
        <div class="review-ans-col">
          <strong>Correct Answer:</strong>
          <span style="color: #047857; font-weight: 700;">${correctText}</span>
        </div>
      </div>

      <div class="review-explanation">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================
// VIEW 7: ADMIN / EVALUATOR DASHBOARD
// ==========================================
function renderAdminDashboard() {
  const authGate = document.getElementById("admin-auth-gate");
  const dashContent = document.getElementById("admin-dashboard-content");

  if (!isAdminAuthenticated) {
    authGate.classList.remove("hidden");
    dashContent.classList.add("hidden");
    return;
  }

  authGate.classList.add("hidden");
  dashContent.classList.remove("hidden");

  // Summary Metrics
  const total = adminCandidates.length;
  const completed = adminCandidates.filter(c => c.status === "Completed");
  const compCount = completed.length;

  const avgScore = compCount > 0 
    ? Math.round(completed.reduce((acc, c) => acc + c.score, 0) / compCount) 
    : 0;

  const highestScore = compCount > 0 
    ? Math.max(...completed.map(c => c.score)) 
    : 0;

  const avgSeconds = compCount > 0 
    ? Math.round(completed.reduce((acc, c) => acc + (c.timeSeconds || 0), 0) / compCount) 
    : 0;
  const m = Math.floor(avgSeconds / 60);
  const s = avgSeconds % 60;
  const formattedAvgTime = `${m}m ${s}s`;

  document.getElementById("stat-total-candidates").textContent = total;
  document.getElementById("stat-completed-candidates").textContent = compCount;
  document.getElementById("stat-avg-score").textContent = `${avgScore}/100`;
  document.getElementById("stat-highest-score").textContent = `${highestScore}/100`;
  document.getElementById("stat-avg-time").textContent = formattedAvgTime;

  renderAdminCandidateTable();
}

function renderAdminCandidateTable() {
  const tbody = document.getElementById("admin-candidates-tbody");
  tbody.innerHTML = "";

  const search = (document.getElementById("admin-search-input").value || "").toLowerCase();
  const scoreFilter = document.getElementById("admin-filter-score").value;
  const expFilter = document.getElementById("admin-filter-experience").value;
  const sortBy = document.getElementById("admin-sort-by").value;

  let filtered = adminCandidates.filter(c => {
    // Search
    const matchSearch = 
      c.fullName.toLowerCase().includes(search) || 
      c.email.toLowerCase().includes(search) || 
      c.city.toLowerCase().includes(search);
    if (!matchSearch) return false;

    // Score filter
    if (scoreFilter === "90+") { if (c.score < 90) return false; }
    else if (scoreFilter === "75-89") { if (c.score < 75 || c.score >= 90) return false; }
    else if (scoreFilter === "<75") { if (c.score >= 75) return false; }

    // Experience filter
    if (expFilter !== "ALL" && c.experience !== expFilter) return false;

    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (sortBy === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sortBy === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sortBy === "score-desc") return b.score - a.score;
    if (sortBy === "score-asc") return a.score - b.score;
    if (sortBy === "time-asc") return (a.timeSeconds || 0) - (b.timeSeconds || 0);
    return 0;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 2rem;">No candidate records found matching current filters.</td></tr>`;
    return;
  }

  filtered.forEach(c => {
    const tr = document.createElement("tr");
    const dateFormatted = new Date(c.date).toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric"
    });

    tr.innerHTML = `
      <td class="cand-name-cell">
        <strong>${c.fullName}</strong>
        <span>${c.email} • ${c.city}</span>
      </td>
      <td>${c.experience}</td>
      <td><strong>${c.score}</strong>/100</td>
      <td><span style="color: #059669; font-weight: 700;">${c.percentage}%</span></td>
      <td><code class="code-pill">${c.timeTaken}</code></td>
      <td>${dateFormatted}</td>
      <td><span class="badge-status-completed">${c.status}</span></td>
      <td style="text-align: right;">
        <button class="btn-secondary btn-sm" onclick="openCandidateDossier('${c.id}')">Details</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Expose openCandidateDossier globally for table buttons
window.openCandidateDossier = function(candidateId) {
  const candidate = adminCandidates.find(c => c.id === candidateId);
  if (!candidate) return;

  document.getElementById("dossier-name").textContent = candidate.fullName;
  document.getElementById("dossier-meta").textContent = `${candidate.email} • ${candidate.phone} • ${candidate.city} (${candidate.experience})`;

  document.getElementById("dossier-score").textContent = `${candidate.score}/100`;
  document.getElementById("dossier-accuracy").textContent = `${candidate.percentage}%`;
  document.getElementById("dossier-time").textContent = candidate.timeTaken;
  document.getElementById("dossier-qualification").textContent = candidate.qualification;

  document.getElementById("dossier-sec-easy").textContent = `Easy: ${candidate.easyScore ?? 0}/20`;
  document.getElementById("dossier-sec-medium").textContent = `Medium: ${candidate.mediumScore ?? 0}/30`;
  document.getElementById("dossier-sec-hard").textContent = `Hard: ${candidate.hardScore ?? 0}/50`;

  const answersList = document.getElementById("dossier-answers-list");
  answersList.innerHTML = "";

  QUESTIONS.forEach(q => {
    const ans = candidate.answers ? candidate.answers[q.id] : null;
    const isCorrect = ans === q.correctAnswer;
    const candOpt = q.options.find(o => o.id === ans);
    const candOptText = candOpt ? `${candOpt.id}) ${candOpt.text}` : "<Unanswered>";

    const item = document.createElement("div");
    item.className = "dossier-ans-item";
    item.innerHTML = `
      <div class="dossier-ans-head">
        <span>Q${q.id}. ${q.text.substring(0, 70)}...</span>
        <span style="color: ${isCorrect ? '#059669' : '#dc2626'}">
          ${isCorrect ? `Correct (+${q.points})` : `Incorrect (0/${q.points})`}
        </span>
      </div>
      <div>Selected: <strong>${candOptText}</strong> | Correct: <strong>Option ${q.correctAnswer}</strong></div>
    `;
    answersList.appendChild(item);
  });

  document.getElementById("modal-candidate-dossier").classList.remove("hidden");
};

// CSV Export Utility
function exportResultsCSV() {
  const headers = [
    "Candidate Name",
    "Email",
    "Phone",
    "Qualification",
    "Experience",
    "City",
    "Score",
    "Percentage",
    "Easy Score",
    "Medium Score",
    "Hard Score",
    "Time Taken",
    "Completion Date",
    "Status"
  ];

  const rows = adminCandidates.map(c => [
    `"${(c.fullName || "").replace(/"/g, '""')}"`,
    `"${(c.email || "").replace(/"/g, '""')}"`,
    `"${(c.phone || "").replace(/"/g, '""')}"`,
    `"${(c.qualification || "").replace(/"/g, '""')}"`,
    `"${(c.experience || "").replace(/"/g, '""')}"`,
    `"${(c.city || "").replace(/"/g, '""')}"`,
    `"${c.score}/100"`,
    `"${c.percentage}%"`,
    `"${c.easyScore || 0}/20"`,
    `"${c.mediumScore || 0}/30"`,
    `"${c.hardScore || 0}/50"`,
    `"${c.timeTaken || "00:00"}"`,
    `"${c.date ? new Date(c.date).toLocaleString('en-IN') : ""}"`,
    `"${c.status || "Completed"}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Hecta_Auction_Assessment_Results_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==========================================
// EVENT LISTENERS BINDING
// ==========================================
function setupEventListeners() {
  // Brand Header Click
  document.getElementById("brand-home-btn").addEventListener("click", () => {
    if (appState.currentView === "assessment") {
      if (confirm("Return to home? Your current assessment timer will continue in background.")) {
        switchView("landing");
      }
    } else {
      switchView("landing");
    }
  });

  // Evaluator Switcher
  document.getElementById("btn-toggle-evaluator").addEventListener("click", () => {
    if (appState.currentView === "admin") {
      switchView("landing");
    } else {
      switchView("admin");
    }
  });

  document.getElementById("footer-evaluator-link").addEventListener("click", () => {
    switchView("admin");
  });

  // Landing Page Start CTA - Immediately starts the test without asking any personal info
  document.getElementById("btn-landing-start").addEventListener("click", () => {
    startTimer();
    switchView("assessment");
  });

  // Instructions Page Back to Home
  const btnBackToHome = document.getElementById("btn-back-to-form");
  if (btnBackToHome) {
    btnBackToHome.addEventListener("click", () => {
      switchView("landing");
    });
  }

  // Instructions Page Start Assessment
  const btnStartTest = document.getElementById("btn-start-test");
  if (btnStartTest) {
    btnStartTest.addEventListener("click", () => {
      startTimer();
      switchView("assessment");
    });
  }

  // Assessment Question Navigation Buttons
  document.getElementById("btn-prev-question").addEventListener("click", () => {
    if (appState.currentQuestionIndex > 0) {
      renderQuestion(appState.currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.getElementById("btn-next-question").addEventListener("click", () => {
    if (appState.currentQuestionIndex < QUESTIONS.length - 1) {
      renderQuestion(appState.currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // Flag Question Toggle
  document.getElementById("btn-flag-question").addEventListener("click", () => {
    const qId = QUESTIONS[appState.currentQuestionIndex].id;
    const idx = appState.flaggedQuestions.indexOf(qId);
    if (idx > -1) {
      appState.flaggedQuestions.splice(idx, 1);
    } else {
      appState.flaggedQuestions.push(qId);
    }
    saveAssessmentSession();
    renderQuestion(appState.currentQuestionIndex);
  });

  // Submit Triggers (Header, Top of Card, Bottom Footer, Navigator shortcut)
  const headerSubmitBtn = document.getElementById("btn-header-submit");
  if (headerSubmitBtn) {
    headerSubmitBtn.addEventListener("click", openSubmitConfirmationModal);
  }

  const cardSubmitTopBtn = document.getElementById("btn-card-submit-top");
  if (cardSubmitTopBtn) {
    cardSubmitTopBtn.addEventListener("click", openSubmitConfirmationModal);
  }

  const submitDirectBtn = document.getElementById("btn-submit-test-direct");
  if (submitDirectBtn) {
    submitDirectBtn.addEventListener("click", openSubmitConfirmationModal);
  }

  const reviewSubmitShortcut = document.getElementById("btn-review-submit-shortcut");
  if (reviewSubmitShortcut) {
    reviewSubmitShortcut.addEventListener("click", openSubmitConfirmationModal);
  }

  // Modal Buttons
  document.getElementById("btn-modal-cancel").addEventListener("click", closeSubmitConfirmationModal);
  document.getElementById("btn-modal-confirm-submit").addEventListener("click", finalizeAssessmentSubmission);

  // Completion Screen Buttons
  document.getElementById("btn-view-detailed-results").addEventListener("click", () => {
    switchView("detailed-results");
  });

  document.getElementById("btn-finish-assessment").addEventListener("click", () => {
    if (confirm("Reset current assessment and return to landing page?")) {
      resetAssessmentSession();
    }
  });

  // Detailed Results Navigation
  document.getElementById("btn-back-to-completion").addEventListener("click", () => {
    switchView("completion");
  });

  document.getElementById("btn-retake-assessment").addEventListener("click", () => {
    if (confirm("Start a fresh assessment session?")) {
      resetAssessmentSession();
    }
  });

  // Detailed Results Review Filter Pills
  const filterPills = document.querySelectorAll("#review-filter-pills .pill-btn");
  filterPills.forEach(btn => {
    btn.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      renderQuestionReviewList(btn.dataset.filter);
    });
  });

  // Admin Auth Gate
  const adminLoginForm = document.getElementById("admin-login-form");
  adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const passInput = document.getElementById("admin-password").value;
    const errEl = document.getElementById("err-admin-pass");

    if (passInput === "admin123") {
      isAdminAuthenticated = true;
      errEl.textContent = "";
      renderAdminDashboard();
    } else {
      errEl.textContent = "Invalid passcode. Please enter admin123";
    }
  });

  document.getElementById("btn-admin-logout").addEventListener("click", () => {
    isAdminAuthenticated = false;
    document.getElementById("admin-password").value = "";
    renderAdminDashboard();
  });

  // Admin Search & Filters
  document.getElementById("admin-search-input").addEventListener("input", renderAdminCandidateTable);
  document.getElementById("admin-filter-score").addEventListener("change", renderAdminCandidateTable);
  document.getElementById("admin-filter-experience").addEventListener("change", renderAdminCandidateTable);
  document.getElementById("admin-sort-by").addEventListener("change", renderAdminCandidateTable);

  // Admin CSV Export
  document.getElementById("btn-export-csv").addEventListener("click", exportResultsCSV);

  // Dossier Modal Close
  document.getElementById("btn-close-dossier").addEventListener("click", () => {
    document.getElementById("modal-candidate-dossier").classList.add("hidden");
  });
  document.getElementById("btn-close-dossier-foot").addEventListener("click", () => {
    document.getElementById("modal-candidate-dossier").classList.add("hidden");
  });
}

function resetAssessmentSession() {
  stopTimer();
  appState = {
    currentView: "landing",
    currentQuestionIndex: 0,
    candidateInfo: {
      fullName: "",
      email: "",
      phone: "",
      qualification: "",
      experience: "",
      currentCity: ""
    },
    answers: {},
    flaggedQuestions: [],
    secondsRemaining: TOTAL_TIME_SECONDS,
    isTimerRunning: false,
    result: null
  };
  localStorage.removeItem(STORAGE_KEYS.STATE);
  switchView("landing");
}
