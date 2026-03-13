/* =============================================
   NAME THAT UI — quiz.js
   Vanilla JS, no dependencies
   ============================================= */

(function () {
  'use strict';

  // ── i18n ─────────────────────────────────────
  const I18N = {
    fr: {
      title:            'Nommez ce\ncomposant',
      subtitle:         'Identifiez les composants UI courants et enrichissez votre vocabulaire design.',
      btn_start:        'Commencer le quiz',
      question_prompt:  'Quel est ce composant\u00a0UI\u00a0?',
      btn_next:         'Suivant',
      btn_retry:        'Réessayer',
      end_title:        'Quiz terminé',
      score_label:      (i, n) => `Question ${i} / ${n}`,
      feedback_correct: 'Bonne réponse\u00a0!',
      feedback_wrong:   (name) => `C\u2019est\u00a0: ${name}`,
      end_perfect:      'Score parfait — vous maîtrisez le vocabulaire UI.',
      end_good:         'Bien joué. Continuez à pratiquer pour tout maîtriser.',
      end_keep_going:   'Bon effort. Relisez les définitions et réessayez.',
      hint_label:       'À retenir',
      manifesto:        `L'IA exige de la clarté. La lumière appartient à ceux qui <em>savent ce qu'ils veulent</em> — et peuvent le communiquer avec précision.`,
      manifesto_more:   'Pourquoi ce quiz\u00a0?',
      manifesto_less:   'Fermer',
      // XP / Level
      xp_gained:        (n) => `+${n} XP`,
      level_up:         (title) => `Niveau supérieur\u00a0! Vous êtes désormais\u00a0: ${title}`,
      // Achievements
      achievement_unlocked: 'Exploit débloqué',
      // Hint token
      joker_label:      'Joker',
      joker_used:       'Joker utilisé',
      joker_tooltip:    'Éliminer 2 mauvaises réponses',
      // Category filters
      filter_all:        'Tout',
      filter_navigation: 'Navigation',
      filter_feedback:   'Feedback',
      filter_input:      'Input',
      filter_layout:     'Layout',
      // Streak
      streak_label:     'série',
      // Timer
      timer_toggle_label: 'Mode chrono',
      // History
      history_title:    'Historique',
      // Share
      btn_share:        'Partager',
      share_copied:     'Copié !',
      // Tournament / Contest
      btn_back:                '← Retour',
      btn_tournament:          'Tournoi',
      lobby_title:             'Salle des guerriers',
      lobby_subtitle:          'Chaque membre de l\'équipe ouvre cette page sur son propre écran. Choisissez votre nom de guerre — que le meilleur gagne.',
      lobby_name_label:        'Votre nom de guerre',
      lobby_name_placeholder:  'Ex\u00a0: Athos, Ragnar…',
      btn_start_contest:       'Que le tournoi commence\u00a0!',
      lobby_waiting:           (n) => n === 1 ? '1 guerrier dans la salle…' : `${n} guerriers dans la salle`,
      leaderboard_title:       'Tableau d\'honneur',
      leaderboard_subtitle_win:  (name) => `${name} remporte le tournoi !`,
      leaderboard_subtitle_solo: 'Mode solo — gloire personnelle.',
      btn_play_again:          'Nouveau tournoi',
      contest_no_support:      'Votre navigateur ne supporte pas le mode tournoi.',
      // Label challenge
      btn_label_challenge:     '🏷️ Nommer les éléments',
      label_title:             'Glissez les étiquettes',
      label_subtitle:          'Déposez chaque terme sur la bonne zone du composant.',
      label_validate:          'Valider mes réponses',
      label_reveal_subtitle:   'Voici les bonnes réponses.',
      label_result_perfect:    'Parfait — tout est au bon endroit\u00a0!',
      label_result_good:       (n, t) => `${n} sur ${t} corrects — pas mal\u00a0!`,
      label_result_bad:        (n, t) => `${n} sur ${t} corrects — réessayez\u00a0!`,
    },
    en: {
      title:            'Name That\nUI',
      subtitle:         'Identify common UI components and build your design vocabulary.',
      btn_start:        'Start quiz',
      question_prompt:  'What UI component is this?',
      btn_next:         'Next',
      btn_retry:        'Try again',
      end_title:        'Quiz complete',
      score_label:      (i, n) => `Question ${i} of ${n}`,
      feedback_correct: 'Correct!',
      feedback_wrong:   (name) => `It\u2019s a ${name}`,
      end_perfect:      'Perfect score — you know your UI components.',
      end_good:         'Well done. Keep practising to get them all.',
      end_keep_going:   'Good effort. Review the definitions and try again.',
      hint_label:       'Remember',
      manifesto:        `AI demands clarity. The light belongs to those who <em>know what they want</em> — and can communicate it precisely.`,
      manifesto_more:   'Why this quiz?',
      manifesto_less:   'Close',
      // XP / Level
      xp_gained:        (n) => `+${n} XP`,
      level_up:         (title) => `Level up! You are now: ${title}`,
      // Achievements
      achievement_unlocked: 'Achievement unlocked',
      // Hint token
      joker_label:      'Joker',
      joker_used:       'Joker used',
      joker_tooltip:    'Eliminate 2 wrong answers',
      // Category filters
      filter_all:        'All',
      filter_navigation: 'Navigation',
      filter_feedback:   'Feedback',
      filter_input:      'Input',
      filter_layout:     'Layout',
      // Streak
      streak_label:     'streak',
      // Timer
      timer_toggle_label: 'Timer mode',
      // History
      history_title:    'History',
      // Share
      btn_share:        'Share',
      share_copied:     'Copied!',
      // Tournament / Contest
      btn_back:                '← Back',
      btn_tournament:          'Tournament',
      lobby_title:             'Warriors\' Hall',
      lobby_subtitle:          'Each team member opens this page on their own screen. Pick your war name — may the best warrior win.',
      lobby_name_label:        'Your war name',
      lobby_name_placeholder:  'e.g. Aramis, Björn…',
      btn_start_contest:       'Let the tournament begin!',
      lobby_waiting:           (n) => n === 1 ? '1 warrior in the hall…' : `${n} warriors in the hall`,
      leaderboard_title:       'Hall of Fame',
      leaderboard_subtitle_win:  (name) => `${name} wins the tournament!`,
      leaderboard_subtitle_solo: 'Solo mode — personal glory.',
      btn_play_again:          'New tournament',
      contest_no_support:      'Your browser doesn\'t support tournament mode.',
      // Label challenge
      btn_label_challenge:     '🏷️ Name the Elements',
      label_title:             'Drag the labels',
      label_subtitle:          'Drop each term onto the matching area of the component.',
      label_validate:          'Check my answers',
      label_reveal_subtitle:   'Here are the correct answers.',
      label_result_perfect:    'Perfect — every label in the right place!',
      label_result_good:       (n, t) => `${n} of ${t} correct — not bad!`,
      label_result_bad:        (n, t) => `${n} of ${t} correct — keep practising!`,
    },
  };

  let lang = 'fr';

  function t(key, ...args) {
    const val = I18N[lang][key];
    return typeof val === 'function' ? val(...args) : val;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!I18N[lang][key]) return;
      if (key === 'title') {
        el.innerHTML = t('title').replace('\n', '<br>');
      } else if (key === 'manifesto') {
        el.innerHTML = t('manifesto');
      } else if (el.tagName === 'BUTTON' && (el.id === 'btn-next' || el.id === 'btn-next-desktop')) {
        el.innerHTML = `${t('btn_next')} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="ml-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      } else if (el.tagName === 'BUTTON' && el.id === 'btn-tournament') {
        // Preserve the inline SVG icon, only update the text node
        const svgEl = el.querySelector('svg');
        el.textContent = ' ' + t(key);
        if (svgEl) el.insertBefore(svgEl, el.firstChild);
      } else {
        el.textContent = t(key);
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Update category chip labels
    document.querySelectorAll('.category-chip').forEach(chip => {
      const cat = chip.dataset.category;
      const key = cat === 'all' ? 'filter_all' : 'filter_' + cat.toLowerCase();
      if (I18N[lang][key]) chip.textContent = t(key);
    });
    // Update timer toggle label
    const timerLabel = document.getElementById('timer-toggle-label');
    if (timerLabel) timerLabel.textContent = t('timer_toggle_label') + ' (10s)';
    // Update streak label
    updateStreakDisplay();
    // Update history title
    const histTitle = document.getElementById('history-title');
    if (histTitle) histTitle.textContent = t('history_title');
    // Update share button (if not in copied state)
    const shareBtn = document.getElementById('btn-share');
    if (shareBtn && !shareBtn.dataset.copied) shareBtn.textContent = t('btn_share');
    // Update live score label if quiz is running
    if (scoreLabel && questions.length) {
      scoreLabel.textContent = t('score_label', currentIndex + 1, questions.length);
    }
    // Update lobby input placeholder
    const nameInput = document.getElementById('player-name-input');
    if (nameInput) nameInput.placeholder = t('lobby_name_placeholder');
    // Update leaderboard live if visible
    if (screens.leaderboard && screens.leaderboard.classList.contains('active')) {
      renderLeaderboard();
    }
    // Update manifesto text
    const manifestoEl = document.querySelector('.manifesto-text');
    if (manifestoEl) manifestoEl.innerHTML = t('manifesto');
    const manifestoToggle = document.getElementById('btn-manifesto-toggle');
    const manifestoOpen = document.querySelector('.manifesto')?.classList.contains('open');
    if (manifestoToggle) manifestoToggle.textContent = manifestoOpen ? t('manifesto_less') : t('manifesto_more');
  }

  // ── Manifesto toggle ─────────────────────────
  document.getElementById('btn-manifesto-toggle')?.addEventListener('click', function() {
    const m = document.querySelector('.manifesto');
    if (!m) return;
    const opening = !m.classList.contains('open');
    m.classList.toggle('open', opening);
    this.textContent = opening ? t('manifesto_less') : t('manifesto_more');
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      applyLang();
    });
  });

  // ── SVG Icons ─────────────────────────────────
  const ICONS = {
    correct: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 12.5l5 5L19.5 7" stroke="#009A58" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    wrong: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="#CB1617" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    trophy: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3h12v14a6 6 0 01-12 0V3z" stroke="#C6A669" stroke-width="1.75" fill="none" stroke-linejoin="round"/>
      <path d="M12 8H7a4 4 0 004 4" stroke="#C6A669" stroke-width="1.75" stroke-linecap="round"/>
      <path d="M24 8h5a4 4 0 01-4 4" stroke="#C6A669" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="18" y1="23" x2="18" y2="28" stroke="#C6A669" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="12" y1="28" x2="24" y2="28" stroke="#C6A669" stroke-width="1.75" stroke-linecap="round"/>
    </svg>`,
    ribbon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="14" r="9" stroke="#C6A669" stroke-width="1.75" fill="none"/>
      <path d="M13 23l-3 9 8-4 8 4-3-9" stroke="#C6A669" stroke-width="1.75" stroke-linejoin="round" fill="none"/>
    </svg>`,
    book: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6h11a5 5 0 015 5v17a3 3 0 00-3-3H6V6z" stroke="#C6A669" stroke-width="1.75" fill="none" stroke-linejoin="round"/>
      <path d="M30 6H19a5 5 0 00-5 5v17a3 3 0 013-3h13V6z" stroke="#C6A669" stroke-width="1.75" fill="none" stroke-linejoin="round"/>
    </svg>`,
    hint: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.25"/>
      <path d="M7 6v4M7 4.5v.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
    </svg>`,
    flame: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1C7 1 9.5 3.5 9.5 6C9.5 6 10.5 5 10.5 3.5C10.5 3.5 12 5.5 12 7.5C12 10.0376 9.76142 12 7 12C4.23858 12 2 10.0376 2 7.5C2 5.5 3.5 4 3.5 4C3.5 5 4 6 4.5 6C4.5 4 7 1 7 1Z" fill="#CB1617"/>
    </svg>`,
    swords: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5l10 10M27 27l-10-10" stroke="#C6A669" stroke-width="2" stroke-linecap="round"/>
      <path d="M27 5L5 27" stroke="#C6A669" stroke-width="2" stroke-linecap="round"/>
      <path d="M5 5l3 1-1-3" stroke="#C6A669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M27 5l-3 1 1-3" stroke="#C6A669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M5 27l3-1-1 3" stroke="#C6A669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M27 27l-3-1 1 3" stroke="#C6A669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,
    dice: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="5" cy="5" r="1" fill="currentColor"/>
      <circle cx="11" cy="5" r="1" fill="currentColor"/>
      <circle cx="8" cy="8" r="1" fill="currentColor"/>
      <circle cx="5" cy="11" r="1" fill="currentColor"/>
      <circle cx="11" cy="11" r="1" fill="currentColor"/>
    </svg>`,
    crown: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 26h26M5 26l3-14 6 7 4-10 4 10 6-7 3 14" stroke="#C6A669" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,
  };

  // ── State ────────────────────────────────────
  let questions        = [];
  let currentIndex     = 0;
  let score            = 0;
  let answered         = false;
  let streak           = 0;
  let selectedCategory = 'all';
  let timerModeEnabled = false;
  let timerTimeout     = null;
  let timerAnimFrame   = null;
  let timerStartTime   = null;
  const TIMER_DURATION = 10000; // ms

  // ── Contest state ─────────────────────────────
  let contestMode      = false;
  let playerName       = '';
  let broadcastChannel = null;
  let contestPlayers   = {}; // { [playerName]: { score, total, done } }

  // ── Audio state ───────────────────────────────
  let audioCtx         = null;
  let muted            = false;
  try { muted = localStorage.getItem('pduf_muted') === '1'; } catch(_) {}

  // ── XP & Levels ───────────────────────────────
  const LEVELS = [
    { min: 0,    fr: 'Stagiaire perdu',         en: 'Lost Intern' },
    { min: 50,   fr: 'Apprenti des interfaces', en: 'Interface Apprentice' },
    { min: 150,  fr: 'Padawan du Design',       en: 'Design Padawan' },
    { min: 300,  fr: 'Écuyer des Composants',   en: 'Component Squire' },
    { min: 500,  fr: 'Chevalier du Bouton',     en: 'Button Knight' },
    { min: 750,  fr: 'Mousquetaire UX',         en: 'UX Musketeer' },
    { min: 1100, fr: 'Viking des Wireframes',   en: 'Wireframe Viking' },
    { min: 1600, fr: 'Gardien du Design System',en: 'Design System Guardian' },
    { min: 2200, fr: 'Légende de l\'UI',        en: 'UI Legend' },
  ];

  const XP_KEY = 'pduf_xp';
  let totalXP = 0;
  try { totalXP = parseInt(localStorage.getItem(XP_KEY) || '0', 10) || 0; } catch(_) {}

  function getLevel(xp) {
    let lvl = LEVELS[0];
    for (const l of LEVELS) { if (xp >= l.min) lvl = l; else break; }
    return lvl;
  }

  function getLevelTitle(xp) {
    return getLevel(xp)[lang] || getLevel(xp).fr;
  }

  function calcXP(score, total, streakMax, timerMode, elapsed) {
    let xp = score * 10;                          // 10 XP per correct answer
    if (score === total) xp += 50;               // perfect bonus
    if (streakMax >= 5) xp += 30;               // streak hero
    else if (streakMax >= 3) xp += 15;
    if (timerMode) xp = Math.round(xp * 1.5);   // timer multiplier
    if (timerMode && elapsed && elapsed < total * 5000) xp += 20; // speed bonus
    return xp;
  }

  function addXP(gained) {
    const prevXP    = totalXP;
    const prevLevel = getLevel(prevXP);
    totalXP += gained;
    try { localStorage.setItem(XP_KEY, String(totalXP)); } catch(_) {}
    const newLevel = getLevel(totalXP);
    return prevLevel !== newLevel ? newLevel : null; // returns new level if levelled up
  }

  // ── Achievements ──────────────────────────────
  const ACHIEVEMENTS = [
    {
      id: 'first_blood',
      fr: { name: 'Premier sang', desc: 'Terminer un quiz pour la première fois.' },
      en: { name: 'First Blood',  desc: 'Finish a quiz for the first time.' },
      icon: '⚔️',
      check: (stats) => stats.gamesPlayed >= 1,
    },
    {
      id: 'perfectionist',
      fr: { name: 'Sans peur et sans reproche', desc: 'Score parfait sur un quiz.' },
      en: { name: 'Flawless Victory',            desc: 'Get a perfect score.' },
      icon: '🏆',
      check: (stats) => stats.perfectRuns >= 1,
    },
    {
      id: 'comeback_kid',
      fr: { name: 'Encore ?!', desc: 'Jouer 5 fois.' },
      en: { name: 'Glutton for Punishment', desc: 'Play 5 times.' },
      icon: '🔁',
      check: (stats) => stats.gamesPlayed >= 5,
    },
    {
      id: 'floki',
      fr: { name: 'Le Floki',   desc: 'Atteindre une série de 5 bonnes réponses.' },
      en: { name: 'The Floki',  desc: 'Get a streak of 5 correct answers.' },
      icon: '🔥',
      check: (stats) => stats.maxStreak >= 5,
    },
    {
      id: 'bouclier_brise',
      fr: { name: 'Bouclier brisé', desc: 'Se faire avoir 3 fois par le chrono.' },
      en: { name: 'Broken Shield',   desc: 'Run out of time 3 times.' },
      icon: '🛡️',
      check: (stats) => stats.timeouts >= 3,
    },
    {
      id: 'all_for_one',
      fr: { name: 'Un pour tous', desc: 'Terminer un tournoi.' },
      en: { name: 'All for One',  desc: 'Complete a tournament.' },
      icon: '🤝',
      check: (stats) => stats.tournamentsPlayed >= 1,
    },
    {
      id: 'speedrunner',
      fr: { name: 'Mousquetaire rapide', desc: 'Score parfait en mode chrono.' },
      en: { name: 'Speed Musketeer',      desc: 'Perfect score in timer mode.' },
      icon: '⚡',
      check: (stats) => stats.timerPerfect >= 1,
    },
    {
      id: 'joker_king',
      fr: { name: 'Malin comme Floki', desc: 'Utiliser le joker 3 fois.' },
      en: { name: 'Sly as Floki',       desc: 'Use the joker 3 times.' },
      icon: '🃏',
      check: (stats) => stats.jokersUsed >= 3,
    },
  ];

  const STATS_KEY = 'pduf_stats';
  const UNLOCKED_KEY = 'pduf_achievements';

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY) || '{}'); } catch(_) { return {}; }
  }

  function saveStats(patch) {
    const s = loadStats();
    const merged = { ...s, ...Object.fromEntries(
      Object.entries(patch).map(([k, v]) => [k, (s[k] || 0) + v])
    )};
    try { localStorage.setItem(STATS_KEY, JSON.stringify(merged)); } catch(_) {}
    return merged;
  }

  function loadUnlocked() {
    try { return JSON.parse(localStorage.getItem(UNLOCKED_KEY) || '[]'); } catch(_) { return []; }
  }

  function checkAchievements(stats) {
    const unlocked = loadUnlocked();
    const newlyUnlocked = [];
    for (const ach of ACHIEVEMENTS) {
      if (!unlocked.includes(ach.id) && ach.check(stats)) {
        unlocked.push(ach.id);
        newlyUnlocked.push(ach);
      }
    }
    if (newlyUnlocked.length) {
      try { localStorage.setItem(UNLOCKED_KEY, JSON.stringify(unlocked)); } catch(_) {}
    }
    return newlyUnlocked;
  }

  // ── Joker (hint token) ────────────────────────
  let jokerAvailable = true;
  let jokerUsedThisQuiz = false;

  function useJoker() {
    if (!jokerAvailable || jokerUsedThisQuiz || answered) return;
    jokerUsedThisQuiz = true;
    jokerAvailable = false;

    // Collect wrong option buttons
    const btns = [...optionsGrid.querySelectorAll('.option-btn:not(:disabled)')];
    const wrong = btns.filter(b => b.dataset.value !== questions[currentIndex].correct);
    // Eliminate 2 random wrong options
    shuffle(wrong).slice(0, 2).forEach(b => {
      b.disabled = true;
      b.style.opacity = '0.3';
      b.style.textDecoration = 'line-through';
    });

    // Update joker button
    const jBtn = document.getElementById('btn-joker');
    if (jBtn) {
      jBtn.disabled = true;
      jBtn.title = t('joker_used');
      jBtn.style.opacity = '0.4';
    }

    // Track stat
    saveStats({ jokersUsed: 1 });
  }

  // ── DOM refs ─────────────────────────────────
  const screens = {
    start:       document.getElementById('screen-start'),
    quiz:        document.getElementById('screen-quiz'),
    end:         document.getElementById('screen-end'),
    lobby:       document.getElementById('screen-lobby'),
    leaderboard: document.getElementById('screen-leaderboard'),
    label:       document.getElementById('screen-label'),
  };

  const progressBar     = document.getElementById('progress-bar');
  const timerBar        = document.getElementById('timer-bar');
  const scoreLabel      = document.getElementById('score-label');
  const streakBadge     = document.getElementById('streak-badge');
  const componentRender        = document.getElementById('component-render');
  const componentRenderDesktop = document.getElementById('component-render-desktop');
  const optionsGrid            = document.getElementById('options-grid');
  const optionsGridDesktop     = document.getElementById('options-grid-desktop');
  const feedbackPanel          = document.getElementById('feedback-panel');
  const feedbackPanelDesktop   = document.getElementById('feedback-panel-desktop');
  const feedbackIcon           = document.getElementById('feedback-icon');
  const feedbackIconDesktop    = document.getElementById('feedback-icon-desktop');
  const feedbackTitle          = document.getElementById('feedback-title');
  const feedbackTitleDesktop   = document.getElementById('feedback-title-desktop');
  const feedbackDef            = document.getElementById('feedback-definition');
  const feedbackDefDesktop     = document.getElementById('feedback-definition-desktop');
  const questionStage          = document.getElementById('question-stage');

  // Helper: is desktop layout active?
  function isDesktop() { return window.innerWidth >= 900; }
  const endScore        = document.getElementById('end-score');
  const endMessage      = document.getElementById('end-message');
  const endIcon         = document.getElementById('end-icon');
  const scoreHistory    = document.getElementById('score-history');
  const btnShare        = document.getElementById('btn-share');

  // Initial language render — must run after all const declarations above
  applyLang();

  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  document.getElementById('btn-next-desktop')?.addEventListener('click', nextQuestion);
  document.getElementById('btn-retry').addEventListener('click', restartQuiz);

  // ── Category filter chips ────────────────────
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      selectedCategory = chip.dataset.category;
      document.querySelectorAll('.category-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.category === selectedCategory);
      });
    });
  });

  // ── Timer mode toggle ────────────────────────
  const timerToggle = document.getElementById('timer-toggle');
  if (timerToggle) {
    timerToggle.addEventListener('change', () => {
      timerModeEnabled = timerToggle.checked;
    });
  }

  // ── Audio (Web Audio API, no files needed) ────
  const SOUNDS = {
    // Meme-grade ascending "ding" — correct answer
    correct() {
      const ac = getAC(); if (!ac) return;
      const t = ac.currentTime;
      [[523.25, 0, 0.08], [659.25, 0.09, 0.08], [783.99, 0.18, 0.12], [1046.5, 0.3, 0.18]]
        .forEach(([freq, delay, dur]) => tone(ac, freq, t + delay, dur, 0.18, 'sine'));
    },
    // Sad trombone / "womp womp" — wrong answer
    wrong() {
      const ac = getAC(); if (!ac) return;
      const t = ac.currentTime;
      [[311, 0, 0.18, 0.22, 'sawtooth'], [261.63, 0.18, 0.18, 0.22, 'sawtooth'], [220, 0.36, 0.28, 0.18, 'sawtooth']]
        .forEach(([freq, delay, dur, vol, type]) => tone(ac, freq, t + delay, dur, vol, type));
    },
    // Fanfare — 3+ streak ("dun dun DUUUN" style)
    streak() {
      const ac = getAC(); if (!ac) return;
      const t = ac.currentTime;
      [[392, 0, 0.1], [392, 0.12, 0.1], [523.25, 0.24, 0.25]]
        .forEach(([freq, delay, dur]) => tone(ac, freq, t + delay, dur, 0.2, 'square'));
    },
    // Time's up — descending "dun dun dun"
    timeout() {
      const ac = getAC(); if (!ac) return;
      const t = ac.currentTime;
      [[440, 0, 0.1], [349.23, 0.12, 0.1], [261.63, 0.24, 0.22]]
        .forEach(([freq, delay, dur]) => tone(ac, freq, t + delay, dur, 0.15, 'sawtooth'));
    },
    // Victory jingle — end screen perfect score
    win() {
      const ac = getAC(); if (!ac) return;
      const t = ac.currentTime;
      [[523.25,0,0.1],[659.25,0.11,0.1],[783.99,0.22,0.1],[1046.5,0.33,0.22],[783.99,0.56,0.08],[1046.5,0.65,0.3]]
        .forEach(([freq, delay, dur]) => tone(ac, freq, t + delay, dur, 0.15, 'sine'));
    },
  };

  function getAC() {
    if (muted) return null;
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(_) { return null; }
    }
    // Resume if suspended (browser autoplay policy)
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function tone(ac, freq, startTime, duration, volume, type) {
    const osc  = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.01);
  }

  // ── End-screen effects ────────────────────────
  function launchEffects(pct) {
    clearEffects();
    if (pct === 1) {
      // Perfect — glorious Puy du Fou confetti: gold, red, cream
      const colors = ['#C6A669', '#CB1617', '#FBF7F0', '#E8C328', '#211C12'];
      const fire = (origin, angle) => confetti({
        particleCount: 80,
        spread: 70,
        angle,
        origin,
        colors,
        shapes: ['square', 'circle'],
        scalar: 1.1,
        gravity: 0.9,
        drift: 0.2,
      });
      fire({ x: 0.1, y: 0.6 }, 60);
      fire({ x: 0.9, y: 0.6 }, 120);
      setTimeout(() => fire({ x: 0.5, y: 0.7 }, 90), 300);
      setTimeout(() => {
        fire({ x: 0.15, y: 0.55 }, 65);
        fire({ x: 0.85, y: 0.55 }, 115);
      }, 700);
    } else if (pct >= 0.6) {
      // Good — modest burst from center, musketeer gold
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#C6A669', '#E8C328', '#FBF7F0'],
        gravity: 1.1,
        scalar: 0.9,
      });
    } else {
      // Lose — rain of UI component names falling like a wall of shame
      launchUIRain();
    }
  }

  function clearEffects() {
    // Stop any running confetti
    if (typeof confetti !== 'undefined' && confetti.reset) confetti.reset();
    // Remove rain overlay if present
    const old = document.getElementById('ui-rain');
    if (old) old.remove();
  }

  // The rain of shame: falling UI terms the player didn't know
  const RAIN_TERMS = ['Modal','Tooltip','Accordion','Drawer','Toggle','Skeleton','Breadcrumb','Toast','Stepper','Checkbox','Dropdown','Popover','Snackbar','Badge'];
  function launchUIRain() {
    const overlay = document.createElement('div');
    overlay.id = 'ui-rain';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;';

    const style = document.createElement('style');
    style.textContent = `
      @keyframes rain-fall {
        0%   { transform: translateY(-60px) rotate(var(--r)); opacity: 0; }
        10%  { opacity: 0.8; }
        90%  { opacity: 0.6; }
        100% { transform: translateY(110vh) rotate(calc(var(--r) + 180deg)); opacity: 0; }
      }
      .rain-drop {
        position: absolute;
        top: 0;
        font-size: 0.65rem;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.04em;
        color: #CB1617;
        background: #FBF7F0;
        border: 1px solid #E6D7BA;
        border-radius: 999px;
        padding: 2px 7px;
        white-space: nowrap;
        animation: rain-fall var(--dur) var(--delay) linear infinite;
      }
    `;
    overlay.appendChild(style);

    const shuffled = shuffle([...RAIN_TERMS, ...RAIN_TERMS]); // double up for density
    shuffled.forEach((term, i) => {
      const drop = document.createElement('span');
      drop.className = 'rain-drop';
      drop.textContent = term;
      drop.style.setProperty('--r', `${Math.random() * 20 - 10}deg`);
      drop.style.setProperty('--dur', `${2.2 + Math.random() * 2}s`);
      drop.style.setProperty('--delay', `${Math.random() * 3}s`);
      drop.style.left = `${(i / shuffled.length) * 105 - 2}%`;
      overlay.appendChild(drop);
    });

    document.body.appendChild(overlay);
    // Auto-clear after 5s — nobody needs the full shame loop
    setTimeout(clearEffects, 5000);
  }

  // ── Mute button ───────────────────────────────
  const btnMute = document.getElementById('btn-mute');
  function updateMuteUI() {
    const on  = document.getElementById('icon-sound-on');
    const off = document.getElementById('icon-sound-off');
    if (on)  on.style.display  = muted ? 'none'  : 'inline';
    if (off) off.style.display = muted ? 'inline' : 'none';
    if (btnMute) {
      btnMute.classList.toggle('muted', muted);
      btnMute.setAttribute('aria-label', muted
        ? (lang === 'fr' ? 'Activer le son' : 'Unmute')
        : (lang === 'fr' ? 'Couper le son'  : 'Mute'));
    }
  }
  if (btnMute) {
    btnMute.addEventListener('click', () => {
      muted = !muted;
      try { localStorage.setItem('pduf_muted', muted ? '1' : '0'); } catch(_) {}
      updateMuteUI();
    });
  }
  updateMuteUI();

  // ── BroadcastChannel helpers ──────────────────
  const SHARED_CHANNEL = 'pduf_quiz_shared';

  function hasBroadcastChannel() {
    return typeof BroadcastChannel !== 'undefined';
  }

  function openChannel() {
    closeChannel();
    if (!hasBroadcastChannel()) return;
    broadcastChannel = new BroadcastChannel(SHARED_CHANNEL);
    broadcastChannel.onmessage = (evt) => handleRoomMessage(evt.data);
  }

  function closeChannel() {
    if (broadcastChannel) {
      broadcastChannel.close();
      broadcastChannel = null;
    }
  }

  function broadcastMsg(type, payload) {
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type, player: playerName, ...payload });
    }
  }

  function handleRoomMessage(msg) {
    if (!msg || !msg.player) return;
    switch (msg.type) {
      case 'join':
        contestPlayers[msg.player] = contestPlayers[msg.player] || { score: 0, total: 0, done: false };
        broadcastMsg('hello', { score: contestPlayers[playerName]?.score || 0, total: contestPlayers[playerName]?.total || 0 });
        renderLobbyPlayers();
        break;
      case 'hello':
        contestPlayers[msg.player] = { score: msg.score || 0, total: msg.total || 0, done: false };
        renderLobbyPlayers();
        break;
      case 'score':
        contestPlayers[msg.player] = { score: msg.score, total: msg.total, done: msg.done || false };
        if (screens.leaderboard && screens.leaderboard.classList.contains('active')) {
          renderLeaderboard();
        }
        break;
      case 'leave':
        delete contestPlayers[msg.player];
        renderLobbyPlayers();
        break;
    }
  }

  // ── Lobby functions ───────────────────────────
  function openLobby() {
    if (!hasBroadcastChannel()) {
      alert(t('contest_no_support'));
      return;
    }
    showScreen('lobby');
    const savedName = localStorage.getItem('pduf_player_name') || '';
    const nameInput = document.getElementById('player-name-input');
    if (nameInput && savedName) nameInput.value = savedName;
  }

  function joinRoom() {
    const nameInput = document.getElementById('player-name-input');
    const name = (nameInput?.value || '').trim();
    if (!name) return;
    playerName = name;
    try { localStorage.setItem('pduf_player_name', name); } catch (_) {}
    contestPlayers = {};
    contestPlayers[playerName] = { score: 0, total: 0, done: false };
    openChannel();
    broadcastMsg('join');
    renderLobbyPlayers();
  }

  function renderLobbyPlayers() {
    const container = document.getElementById('lobby-players');
    if (!container) return;
    const names = Object.keys(contestPlayers);
    if (!names.length) {
      container.innerHTML = `<p class="text-xs text-base-content/40 text-center py-2">${t('lobby_waiting', 0)}</p>`;
      return;
    }
    container.innerHTML = names.map(n => `
      <div class="flex items-center gap-2 text-sm">
        <span class="w-2 h-2 rounded-full bg-success flex-shrink-0"></span>
        <span class="font-semibold ${n === playerName ? 'text-primary' : 'text-base-content'}">${n}</span>
        ${n === playerName ? `<span class="text-xs text-base-content/40">(vous)</span>` : ''}
      </div>
    `).join('');
  }


  // ── Leaderboard functions ─────────────────────
  function showLeaderboard() {
    showScreen('leaderboard');
    const leaderboardIcon = document.getElementById('leaderboard-icon');
    if (leaderboardIcon) {
      leaderboardIcon.innerHTML = ICONS.crown;
      leaderboardIcon.style.background = '#FBF0DA';
    }
    renderLeaderboard();
    setTimeout(() => {
      const btn = document.getElementById('btn-play-again');
      if (btn) btn.focus();
    }, 60);
  }

  function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    const subtitle = document.getElementById('leaderboard-subtitle');
    if (!list) return;

    const rankLabels = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

    const players = Object.entries(contestPlayers)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

    list.innerHTML = players.map((p, i) => {
      const isMe = p.name === playerName;
      const isDone = p.done;
      const label = rankLabels[i] || String(i + 1);
      return `
        <li class="leaderboard-item ${isMe ? 'leaderboard-item-me' : ''} ${i === 0 ? 'leaderboard-item-first' : ''}">
          <span class="leaderboard-rank">${label}</span>
          <span class="leaderboard-name">${p.name}</span>
          <span class="leaderboard-score">${isDone ? `${p.score}/${p.total}` : '...'}</span>
          ${!isDone ? `<span class="leaderboard-pending">${lang === 'fr' ? 'en cours' : 'playing'}</span>` : ''}
        </li>
      `;
    }).join('');

    if (subtitle) {
      const allDone = players.every(p => p.done);
      if (allDone && players.length > 1) {
        const winner = players[0];
        subtitle.textContent = t('leaderboard_subtitle_win', winner.name);
      } else if (players.length <= 1) {
        subtitle.textContent = t('leaderboard_subtitle_solo');
      } else {
        subtitle.textContent = lang === 'fr' ? 'Les guerriers jouent encore…' : 'Warriors still playing…';
      }
    }
  }

  // ── Contest button wiring ─────────────────────
  document.getElementById('btn-tournament')?.addEventListener('click', openLobby);

  document.getElementById('btn-back-lobby')?.addEventListener('click', () => {
    closeChannel();
    contestMode = false;
    showScreen('start');
  });

  document.getElementById('btn-start-contest')?.addEventListener('click', () => {
    joinRoom();
    contestMode = true;
    startQuiz();
  });

  document.getElementById('btn-play-again')?.addEventListener('click', () => {
    if (contestPlayers[playerName]) {
      contestPlayers[playerName] = { score: 0, total: 0, done: false };
    }
    broadcastMsg('join');
    showScreen('lobby');
    renderLobbyPlayers();
  });

  // ── Label Challenge ───────────────────────────
  const LABEL_ANSWERS = {
    'Overlay Badge': 'Overlay Badge / Floating Label',
    'Kicker':        'Kicker / Overline',
    'Headline':      'Headline / H2 Heading',
    'Body Copy':     'Body Copy / Supporting Text',
    'Bullet List':   'Bullet List / Feature List',
    'Chip Group':    'Chip Group / Pill Buttons',
    'CTA Button':    'Floating Call To Action Button',
  };

  // { zoneKey: placedTokenKey }  — shared state for both panels
  let labelPlacements = {};
  let labelDragKey    = null;  // key being dragged via mouse
  let touchToken      = null;
  let touchGhost      = null;

  function isLabelDesktop() { return window.innerWidth >= 900; }

  function openLabelChallenge() {
    labelPlacements = {};
    labelDragKey    = null;
    showScreen('label');

    // Show/hide correct panels
    const mobile  = document.getElementById('label-phase-drag');
    const mReveal = document.getElementById('label-phase-reveal');
    const deskBody  = document.getElementById('label-desktop-body');
    const dDrag     = document.getElementById('label-desktop-phase-drag');
    const dReveal   = document.getElementById('label-desktop-phase-reveal');

    if (isLabelDesktop()) {
      mobile.style.display  = 'none';
      mReveal.style.display = 'none';
      deskBody.style.display = '';
      dDrag.style.display    = '';
      dReveal.style.display  = 'none';
      document.getElementById('label-answer-overlay-desktop').style.display = 'none';
    } else {
      mobile.style.display  = '';
      mReveal.style.display = 'none';
      deskBody.style.display = 'none';
    }

    document.getElementById('label-score-display').textContent = '';

    // Clear all zones
    document.querySelectorAll('.label-zone').forEach(z => {
      z.classList.remove('placed', 'drag-over');
      z.innerHTML = '';
    });

    // Build tokens for both pools
    buildTokenPool('label-tokens',         'mobile');
    buildTokenPool('label-tokens-desktop', 'desktop');

    // Wire all drop zones
    document.querySelectorAll('.label-zone').forEach(wireZone);
  }

  function buildTokenPool(containerId, panel) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    Object.keys(LABEL_ANSWERS).forEach(key => {
      const tok = document.createElement('span');
      tok.className = 'label-token';
      tok.textContent = key;
      tok.dataset.key = key;
      tok.dataset.panel = panel;
      tok.setAttribute('draggable', 'true');

      tok.addEventListener('dragstart', (e) => {
        labelDragKey = key;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', key);
      });
      tok.addEventListener('dragend', () => { labelDragKey = null; });
      tok.addEventListener('touchstart', handleTokenTouchStart, { passive: false });

      container.appendChild(tok);
    });
  }

  function wireZone(zone) {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', (e) => {
      // Only remove if leaving the zone itself, not a child
      if (!zone.contains(e.relatedTarget)) zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const key = e.dataTransfer.getData('text/plain') || labelDragKey;
      if (key) placeTokenInZone(zone, key);
    });
  }

  function placeTokenInZone(zone, key) {
    const zoneKey = zone.dataset.label;

    // Return previous occupant to pool
    const prev = labelPlacements[zoneKey];
    if (prev && prev !== key) {
      document.querySelectorAll(`.label-token[data-key="${prev}"]`).forEach(t => t.classList.remove('used'));
    }

    // If token was placed elsewhere, clear that zone
    Object.entries(labelPlacements).forEach(([k, v]) => {
      if (v === key && k !== zoneKey) {
        delete labelPlacements[k];
        document.querySelectorAll(`.label-zone[data-label="${k}"]`).forEach(z => {
          z.innerHTML = '';
          z.classList.remove('placed');
        });
      }
    });

    labelPlacements[zoneKey] = key;

    // Update ALL zones with this data-label (mobile + desktop in sync)
    document.querySelectorAll(`.label-zone[data-label="${zoneKey}"]`).forEach(z => {
      z.innerHTML = `<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#211C12;color:#FBF7F0;font-size:0.6rem;font-weight:700;font-family:'Inter',sans-serif;padding:0.15rem 0.45rem;border-radius:999px;white-space:nowrap;pointer-events:none;">${key}</span>`;
      z.classList.add('placed');
    });

    // Mark all copies of this token as used
    document.querySelectorAll(`.label-token[data-key="${key}"]`).forEach(t => t.classList.add('used'));
  }

  // ── Touch drag ────────────────────────────────
  function handleTokenTouchStart(e) {
    e.preventDefault();
    touchToken = e.currentTarget.dataset.key;
    const touch = e.touches[0];

    touchGhost = e.currentTarget.cloneNode(true);
    touchGhost.style.cssText = `position:fixed;pointer-events:none;z-index:9999;opacity:0.9;left:${touch.clientX - 40}px;top:${touch.clientY - 16}px;transition:none;`;
    document.body.appendChild(touchGhost);

    document.addEventListener('touchmove', handleTokenTouchMove, { passive: false });
    document.addEventListener('touchend', handleTokenTouchEnd, { once: true });
  }

  function handleTokenTouchMove(e) {
    e.preventDefault();
    if (!touchGhost) return;
    const touch = e.touches[0];
    touchGhost.style.left = `${touch.clientX - 40}px`;
    touchGhost.style.top  = `${touch.clientY - 16}px`;

    document.querySelectorAll('.label-zone').forEach(z => z.classList.remove('drag-over'));
    // Use elementFromPoint on the point beneath the ghost
    touchGhost.style.visibility = 'hidden';
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    touchGhost.style.visibility = '';
    el?.closest('.label-zone')?.classList.add('drag-over');
  }

  function handleTokenTouchEnd(e) {
    document.removeEventListener('touchmove', handleTokenTouchMove);
    if (touchGhost) { touchGhost.remove(); touchGhost = null; }
    document.querySelectorAll('.label-zone').forEach(z => z.classList.remove('drag-over'));
    if (!touchToken) return;

    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = el?.closest('.label-zone');
    if (zone) placeTokenInZone(zone, touchToken);
    touchToken = null;
  }

  // ── Validate ──────────────────────────────────
  function validateLabels() {
    const total   = Object.keys(LABEL_ANSWERS).length;
    let   correct = 0;
    Object.keys(LABEL_ANSWERS).forEach(zk => { if (labelPlacements[zk] === zk) correct++; });

    const resultText = correct === total
      ? t('label_result_perfect')
      : correct >= Math.ceil(total / 2)
        ? t('label_result_good',  correct, total)
        : t('label_result_bad',   correct, total);

    if (correct === total) SOUNDS.win();
    else if (correct >= Math.ceil(total / 2)) SOUNDS.correct();
    else SOUNDS.wrong();

    document.getElementById('label-score-display').textContent = `${correct} / ${total}`;

    // Build overlays (mobile + desktop)
    ['label-answer-overlay', 'label-answer-overlay-desktop'].forEach(id => {
      const overlay = document.getElementById(id);
      if (!overlay) return;
      overlay.innerHTML = '';
      overlay.style.display = '';
      Object.keys(LABEL_ANSWERS).forEach(zoneKey => {
        const zoneEl = document.querySelector(`.label-zone[data-label="${zoneKey}"]`);
        if (!zoneEl) return;
        const isCorrect = labelPlacements[zoneKey] === zoneKey;
        const lbl = document.createElement('span');
        lbl.className = `answer-label ${isCorrect ? 'correct' : 'wrong'}`;
        // Position matches the zone's CSS
        const s = zoneEl.style;
        lbl.style.left = s.left;
        lbl.style.top  = s.top;
        lbl.textContent = LABEL_ANSWERS[zoneKey];
        overlay.appendChild(lbl);
      });
    });

    // Set result titles
    ['label-result-title', 'label-result-title-desktop'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = resultText;
    });

    // Switch phases
    if (isLabelDesktop()) {
      document.getElementById('label-desktop-phase-drag').style.display   = 'none';
      document.getElementById('label-desktop-phase-reveal').style.display = '';
    } else {
      document.getElementById('label-phase-drag').style.display   = 'none';
      document.getElementById('label-phase-reveal').style.display = '';
    }
  }

  function resetLabelChallenge() { openLabelChallenge(); }

  document.getElementById('btn-label-challenge')?.addEventListener('click', openLabelChallenge);
  document.getElementById('btn-back-label')?.addEventListener('click', () => showScreen('end'));
  document.getElementById('btn-label-validate')?.addEventListener('click', validateLabels);
  document.getElementById('btn-label-validate-desktop')?.addEventListener('click', validateLabels);
  document.getElementById('btn-label-done')?.addEventListener('click', () => { clearEffects(); showEndScreen(); });
  document.getElementById('btn-label-done-desktop')?.addEventListener('click', () => { clearEffects(); showEndScreen(); });
  document.getElementById('btn-label-try-again')?.addEventListener('click', resetLabelChallenge);
  document.getElementById('btn-label-try-again-desktop')?.addEventListener('click', resetLabelChallenge);

  // ── Question bank (inlined — no fetch needed) ──
  const QUESTIONS = [
    {
      id: 1,
      category: 'Feedback',
      correct: 'Modal',
      options: ['Drawer', 'Modal', 'Bottom sheet', 'Side panel'],
      definition: 'Une fenêtre de dialogue qui s\'affiche par-dessus le contenu principal et bloque toute interaction avec le reste de la page jusqu\'à ce qu\'elle soit fermée.',
      distractors: {
        'Drawer': 'Un <strong>Drawer</strong> (ou tiroir) s\'ouvre depuis un bord de l\'écran (gauche ou droite) et reste ancré — il ne bloque pas le reste de la page comme une modale.',
        'Bottom sheet': 'Une <strong>Bottom sheet</strong> glisse depuis le bas, reste partiellement visible et ne bloque pas nécessairement toute interaction. La modale, elle, est toujours centrée et impose une action.',
        'Side panel': 'Un <strong>Side panel</strong> est une zone latérale persistante (ex. : panneau de filtres). Il coexiste avec le contenu, contrairement à la modale qui prend le focus exclusivement.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6" style="min-height:200px">
        <div class="card bg-base-100 shadow-xl w-full max-w-xs border border-base-300">
          <div class="card-body gap-3 p-5">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-base">Confirmation</h3>
              <button class="btn btn-ghost btn-xs btn-circle opacity-60">✕</button>
            </div>
            <p class="text-sm text-base-content/70">Voulez-vous vraiment supprimer cet élément ? Cette action est irréversible.</p>
            <div class="flex justify-end gap-2 pt-1">
              <button class="btn btn-sm btn-ghost">Annuler</button>
              <button class="btn btn-sm btn-error">Supprimer</button>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 2,
      category: 'Feedback',
      correct: 'Toast notification',
      options: ['Snackbar', 'Alert banner', 'Toast notification', 'Tooltip'],
      definition: 'Un message court qui apparaît temporairement pour donner un retour sur une action, puis disparaît automatiquement après quelques secondes.',
      distractors: {
        'Snackbar': 'Un <strong>Snackbar</strong> (terme Material Design) est très similaire, mais propose souvent une action (ex. "Annuler"). Le toast est purement informatif et disparaît seul. En pratique, les deux termes sont souvent confondus.',
        'Alert banner': 'Une <strong>Alert banner</strong> est persistante et intégrée dans la page (ex. : bandeau d\'avertissement RGPD). Elle ne disparaît pas toute seule.',
        'Tooltip': 'Un <strong>Tooltip</strong> s\'affiche uniquement au survol d\'un élément et disparaît dès qu\'on s\'en éloigne. Il n\'est jamais déclenché par une action.',
      },
      component: `<div data-theme="pduf" class="flex flex-col items-center justify-center w-full h-full bg-base-200 gap-3 p-6" style="min-height:200px">
        <div class="alert alert-success shadow w-full max-w-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span class="text-sm font-medium">Fichier sauvegardé !</span>
        </div>
        <div class="alert alert-error shadow w-full max-w-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span class="text-sm font-medium">Erreur lors du chargement.</span>
        </div>
      </div>`
    },
    {
      id: 3,
      category: 'Layout',
      correct: 'Bottom sheet',
      options: ['Modal', 'Drawer', 'Action bar', 'Bottom sheet'],
      definition: 'Une surface qui glisse depuis le bas de l\'écran pour présenter du contenu ou des actions supplémentaires sans quitter le contexte actuel.',
      distractors: {
        'Modal': 'Une <strong>Modal</strong> est centrée à l\'écran et bloque toute interaction. La bottom sheet, elle, monte depuis le bas et peut être partielle — l\'utilisateur voit encore le contexte derrière.',
        'Drawer': 'Un <strong>Drawer</strong> s\'ouvre depuis le côté (gauche/droite), généralement pour la navigation. La bottom sheet vient du bas et sert plutôt aux actions contextuelles.',
        'Action bar': 'Une <strong>Action bar</strong> est une barre persistante en haut ou bas de l\'écran avec des actions globales. Elle ne "glisse" pas et est toujours visible.',
      },
      component: `<div data-theme="pduf" class="relative flex items-end w-full h-full bg-base-200 overflow-hidden" style="min-height:200px">
        <div class="absolute inset-0 p-4 flex flex-col gap-2">
          <div class="skeleton h-3 w-3/4"></div>
          <div class="skeleton h-3 w-1/2"></div>
          <div class="skeleton h-3 w-5/6"></div>
          <div class="skeleton h-3 w-2/3"></div>
        </div>
        <div class="relative z-10 w-full bg-base-100 rounded-t-2xl shadow-2xl px-4 pt-3 pb-4 flex flex-col gap-2">
          <div class="mx-auto w-10 h-1 rounded-full bg-base-300 mb-1"></div>
          <p class="font-bold text-sm mb-1">Actions</p>
          <button class="btn btn-ghost btn-sm justify-start gap-2 w-full">✏️ Modifier</button>
          <button class="btn btn-ghost btn-sm justify-start gap-2 w-full">🔗 Partager</button>
          <button class="btn btn-ghost btn-sm justify-start gap-2 w-full text-error">🗑️ Supprimer</button>
        </div>
      </div>`
    },
    {
      id: 4,
      category: 'Navigation',
      correct: 'Breadcrumb',
      options: ['Pagination', 'Tab bar', 'Breadcrumb', 'Progress stepper'],
      definition: 'Un fil d\'Ariane qui indique la position de l\'utilisateur dans la hiérarchie du site et lui permet de remonter à n\'importe quel niveau.',
      distractors: {
        'Pagination': 'La <strong>Pagination</strong> permet de naviguer entre des pages numérotées d\'un même contenu (ex. résultats de recherche). Elle n\'indique pas où on est dans l\'arborescence.',
        'Tab bar': 'Une <strong>Tab bar</strong> permet de basculer entre des sections parallèles sur la même page. Le breadcrumb lui, montre le chemin parcouru dans une hiérarchie.',
        'Progress stepper': 'Un <strong>Progress stepper</strong> guide un tunnel ordonné (étape 1 → 2 → 3). Le breadcrumb, lui, montre où l\'on est dans l\'arborescence du site, sans notion d\'ordre obligatoire.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6" style="min-height:200px">
        <div class="card bg-base-100 shadow w-full max-w-xs border border-base-300">
          <div class="card-body p-5 gap-4">
            <div class="breadcrumbs text-sm">
              <ul>
                <li><a class="text-secondary font-medium">Accueil</a></li>
                <li><a class="text-secondary font-medium">Catalogue</a></li>
                <li class="text-base-content/50">Détail produit</li>
              </ul>
            </div>
            <div class="flex flex-col gap-2">
              <div class="skeleton h-3 w-full"></div>
              <div class="skeleton h-3 w-4/5"></div>
              <div class="skeleton h-3 w-3/5"></div>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 5,
      category: 'Input',
      correct: 'Toggle switch',
      options: ['Checkbox', 'Radio button', 'Toggle switch', 'Slider'],
      definition: 'Un interrupteur binaire (on/off) à effet immédiat. Il active ou désactive un paramètre sans nécessiter de validation.',
      distractors: {
        'Checkbox': 'Une <strong>Checkbox</strong> (case à cocher) est carrée et fait partie d\'un formulaire — son effet s\'applique à la soumission. Le toggle, lui, est arrondi et agit immédiatement, comme un interrupteur physique.',
        'Radio button': 'Un <strong>Radio button</strong> fait choisir une option parmi plusieurs dans un groupe — une seule sélection possible. Le toggle est toujours seul et représente un état binaire indépendant.',
        'Slider': 'Un <strong>Slider</strong> sélectionne une valeur sur une plage continue (ex. volume, prix). Le toggle n\'a que deux états : activé ou désactivé.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6" style="min-height:200px">
        <div class="card bg-base-100 shadow w-full max-w-xs border border-base-300">
          <div class="card-body p-5 gap-4">
            <p class="font-bold text-sm">Préférences</p>
            <div class="flex items-center justify-between">
              <span class="text-sm">Notifications push</span>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Mode sombre</span>
              <input type="checkbox" class="toggle toggle-primary" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Emails marketing</span>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 6,
      category: 'Feedback',
      correct: 'Skeleton loader',
      options: ['Progress bar', 'Placeholder card', 'Skeleton loader', 'Spinner'],
      definition: 'Un espace réservé animé qui reproduit la forme du contenu en cours de chargement, réduisant la perception du temps d\'attente.',
      distractors: {
        'Progress bar': 'Une <strong>Progress bar</strong> indique un pourcentage de complétion (0→100%). Le skeleton lui, n\'a pas de valeur chiffrée — il simule visuellement la structure de la page.',
        'Placeholder card': 'Une <strong>Placeholder card</strong> est une carte vide statique, sans animation. Le skeleton loader, lui, est animé (effet de shimmer) pour signaler que quelque chose se charge.',
        'Spinner': 'Un <strong>Spinner</strong> est un indicateur générique (cercle tournant) qui dit "ça charge" sans montrer quoi. Le skeleton montre la forme exacte du contenu attendu — bien plus rassurant pour l\'utilisateur.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6" style="min-height:200px">
        <div class="card bg-base-100 shadow w-full max-w-xs border border-base-300">
          <div class="card-body p-5 gap-3">
            <div class="flex items-center gap-3">
              <div class="skeleton w-10 h-10 rounded-full shrink-0"></div>
              <div class="flex flex-col gap-2 flex-1">
                <div class="skeleton h-3 w-3/4"></div>
                <div class="skeleton h-3 w-1/2"></div>
              </div>
            </div>
            <div class="skeleton h-24 w-full rounded-lg"></div>
            <div class="flex flex-col gap-1.5">
              <div class="skeleton h-3 w-full"></div>
              <div class="skeleton h-3 w-5/6"></div>
              <div class="skeleton h-3 w-4/6"></div>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 7,
      category: 'Feedback',
      correct: 'Tooltip',
      options: ['Popover', 'Dropdown menu', 'Tooltip', 'Badge'],
      definition: 'Une petite bulle d\'aide qui apparaît au survol ou au focus d\'un élément pour expliquer sa fonction. Aucune interaction requise.',
      distractors: {
        'Popover': 'Un <strong>Popover</strong> est plus riche : il peut contenir des boutons, des formulaires, des liens — et reste ouvert jusqu\'à un clic. Le tooltip n\'affiche que du texte et disparaît dès qu\'on quitte l\'élément.',
        'Dropdown menu': 'Un <strong>Dropdown menu</strong> s\'ouvre au clic et présente une liste d\'actions ou d\'options à choisir. Le tooltip, lui, s\'ouvre au survol et ne contient aucune action cliquable.',
        'Badge': 'Un <strong>Badge</strong> est un indicateur visuel permanent (ex. : "3 notifications"). Il ne se déclenche pas à l\'interaction et fait partie du layout, contrairement au tooltip qui est contextuel.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6 gap-8" style="min-height:200px">
        <div class="tooltip tooltip-open tooltip-top" data-tip="Cliquez pour copier le lien">
          <button class="btn btn-secondary btn-sm">Partager</button>
        </div>
        <div class="tooltip tooltip-open tooltip-bottom" data-tip="Suppression irréversible">
          <button class="btn btn-error btn-sm btn-outline">Supprimer</button>
        </div>
      </div>`
    },
    {
      id: 8,
      category: 'Feedback',
      correct: 'Accordion',
      options: ['Tabs', 'Accordion', 'Stepper', 'Sidebar'],
      definition: 'Un composant qui affiche une liste de sections repliables. Un clic sur l\'en-tête révèle ou masque le contenu associé.',
      distractors: {
        'Tabs': 'Les <strong>Tabs</strong> affichent une seule section à la fois dans un espace fixe — on bascule entre les onglets. L\'accordion, lui, peut avoir plusieurs sections ouvertes simultanément et occupe l\'espace vertical.',
        'Stepper': 'Un <strong>Stepper</strong> guide un processus linéaire étape par étape. L\'accordion est un simple mécanisme d\'affichage/masquage de contenu, sans notion de progression.',
        'Sidebar': 'Une <strong>Sidebar</strong> est une colonne latérale persistante de navigation ou de filtres. L\'accordion est un composant de contenu, souvent intégré dans la page principale.',
      },
      component: `<div data-theme="pduf" class="flex items-center justify-center w-full h-full bg-base-200 p-6" style="min-height:200px">
        <div class="w-full max-w-xs flex flex-col gap-1">
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="acc" checked />
            <div class="collapse-title text-sm font-semibold">Livraison</div>
            <div class="collapse-content text-xs text-base-content/70"><p>Livraison offerte dès 50 €. Délai : 3–5 jours ouvrés.</p></div>
          </div>
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="acc" />
            <div class="collapse-title text-sm font-semibold">Retours</div>
            <div class="collapse-content text-xs text-base-content/70"><p>Retours acceptés sous 30 jours.</p></div>
          </div>
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="acc" />
            <div class="collapse-title text-sm font-semibold">Paiement sécurisé</div>
            <div class="collapse-content text-xs"><p>Paiement chiffré SSL.</p></div>
          </div>
        </div>
      </div>`
    },
    {
      id: 9,
      category: 'Navigation',
      correct: 'Progress stepper',
      options: ['Progress bar', 'Pagination', 'Progress stepper', 'Tab bar'],
      definition: 'Un indicateur visuel qui montre la progression dans un tunnel ordonné (ex. : réservation en plusieurs étapes). On le voit quand on passe de la sélection de la date au paiement.',
      distractors: {
        'Progress bar': 'Une <strong>Progress bar</strong> affiche un pourcentage de complétion sur une tâche (chargement, téléchargement). Elle est continue et sans étapes nommées.',
        'Pagination': 'La <strong>Pagination</strong> navigue entre des pages de contenu non ordonnées (résultats, articles). On peut aller à la page 5 sans passer par la 4.',
        'Tab bar': 'Une <strong>Tab bar</strong> bascule entre des vues parallèles et indépendantes. Le stepper, lui, impose un ordre : on ne peut pas sauter l\'étape 2 pour aller à l\'étape 3.',
      },
      component: `<div data-theme="pduf" style="background:#FBF7F0;display:flex;align-items:center;justify-content:center;padding:2rem;min-height:200px;">
        <div style="display:flex;align-items:center;width:100%;max-width:320px;">
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #C6A669;background:#FBF7F0;flex-shrink:0;"></div>
          <div style="flex:1;height:2px;background:#CB1617;"></div>
          <div style="width:22px;height:22px;border-radius:50%;background:#7B1A1A;border:2px solid #7B1A1A;flex-shrink:0;"></div>
          <div style="flex:1;height:2px;background:#C6A669;"></div>
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #C6A669;background:#FBF7F0;flex-shrink:0;"></div>
          <div style="flex:1;height:2px;background:#C6A669;"></div>
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #C6A669;background:#FBF7F0;flex-shrink:0;"></div>
          <div style="flex:1;height:2px;background:#C6A669;"></div>
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #C6A669;background:#FBF7F0;flex-shrink:0;"></div>
          <div style="flex:1;height:2px;background:#C6A669;"></div>
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #C6A669;background:#FBF7F0;flex-shrink:0;"></div>
        </div>
      </div>`
    },
    {
      id: 10,
      category: 'Input',
      correct: 'Number stepper',
      options: ['Slider', 'Number stepper', 'Dropdown', 'Spinner'],
      definition: 'Un champ numérique avec des boutons + et − pour incrémenter ou décrémenter une valeur. On le voit quand on choisit le nombre de billets adultes/enfants.',
      distractors: {
        'Slider': 'Un <strong>Slider</strong> sélectionne une valeur en glissant un curseur sur une piste. Il est utile pour des plages larges (ex. prix). Le number stepper est plus précis pour de petites quantités entières.',
        'Dropdown': 'Un <strong>Dropdown</strong> présente une liste déroulante d\'options prédéfinies. Le number stepper permet d\'incrémenter librement sans liste — adapté aux quantités variables.',
        'Spinner': 'Un <strong>Spinner</strong> (roue de chargement) indique qu\'une opération est en cours. Le number stepper est un contrôle de saisie numérique, sans notion de chargement.',
      },
      component: `<div data-theme="pduf" style="background:#F1E8D7;display:flex;align-items:center;justify-content:center;padding:1.5rem;min-height:200px;">
        <div style="background:#FBF7F0;border-radius:12px;padding:1.25rem;width:100%;max-width:300px;display:flex;flex-direction:column;gap:1rem;border:1px solid #E6D7BA;">
          <p style="font-size:0.8rem;font-weight:700;color:#75633F;text-transform:uppercase;letter-spacing:0.05em;margin:0;">Billets</p>
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <p style="font-size:0.9rem;font-weight:600;color:#211C12;margin:0;">Adulte</p>
              <p style="font-size:0.75rem;color:#75633F;margin:0;">12 ans et +</p>
            </div>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <button style="width:32px;height:32px;border-radius:50%;border:2px solid #C6A669;background:transparent;font-size:1.1rem;color:#211C12;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;">−</button>
              <span style="font-size:1rem;font-weight:700;min-width:1.5rem;text-align:center;color:#211C12;">2</span>
              <button style="width:32px;height:32px;border-radius:50%;border:2px solid #C6A669;background:transparent;font-size:1.1rem;color:#211C12;cursor:pointer;display:flex;align-items:center;justify-content:center;">+</button>
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <p style="font-size:0.9rem;font-weight:600;color:#211C12;margin:0;">Enfant</p>
              <p style="font-size:0.75rem;color:#75633F;margin:0;">3–11 ans</p>
            </div>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <button style="width:32px;height:32px;border-radius:50%;border:2px solid #E6D7BA;background:transparent;font-size:1.1rem;color:#C6A669;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;opacity:0.5;">−</button>
              <span style="font-size:1rem;font-weight:700;min-width:1.5rem;text-align:center;color:#211C12;">0</span>
              <button style="width:32px;height:32px;border-radius:50%;border:2px solid #C6A669;background:transparent;font-size:1.1rem;color:#211C12;cursor:pointer;display:flex;align-items:center;justify-content:center;">+</button>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 11,
      category: 'Input',
      correct: 'Radio button',
      options: ['Checkbox', 'Toggle switch', 'Radio button', 'Select dropdown'],
      definition: 'Un contrôle de sélection exclusive : dans un groupe, un seul choix peut être actif à la fois. Idéal pour choisir une formule tarifaire.',
      distractors: {
        'Checkbox': 'Une <strong>Checkbox</strong> permet de cocher plusieurs options indépendantes simultanément (ex. : "J\'accepte les CGU" + "Recevoir la newsletter"). Le radio impose un choix unique dans le groupe.',
        'Toggle switch': 'Un <strong>Toggle switch</strong> est indépendant — chaque interrupteur gère son propre état on/off. Le radio button fait partie d\'un groupe où activer un choix désactive automatiquement les autres.',
        'Select dropdown': 'Un <strong>Select dropdown</strong> cache les options dans une liste déroulante. Les radio buttons les montrent toutes visibles, facilitant la comparaison — ce qui est préférable quand il y a peu d\'options.',
      },
      component: `<div data-theme="pduf" style="background:#F1E8D7;display:flex;align-items:center;justify-content:center;padding:1.25rem;min-height:200px;">
        <div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:0.6rem;">
          <p style="font-size:0.8rem;font-weight:700;color:#75633F;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.25rem 0;">Choisir votre formule</p>
          <!-- Selected -->
          <div style="display:flex;align-items:center;justify-content:space-between;background:#FBF7F0;border:2px solid #211C12;border-radius:10px;padding:0.75rem 1rem;">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:18px;height:18px;border-radius:50%;border:2px solid #CB1617;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <div style="width:10px;height:10px;border-radius:50%;background:#CB1617;"></div>
              </div>
              <span style="font-size:0.9rem;font-weight:700;color:#211C12;">Classique</span>
            </div>
            <span style="font-size:0.8rem;color:#75633F;font-weight:500;">Inclus</span>
          </div>
          <!-- Unselected -->
          <div style="display:flex;align-items:center;justify-content:space-between;background:#FBF7F0;border:1.5px solid #E6D7BA;border-radius:10px;padding:0.75rem 1rem;">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:18px;height:18px;border-radius:50%;border:2px solid #C6A669;flex-shrink:0;"></div>
              <span style="font-size:0.9rem;font-weight:600;color:#211C12;">Préférentiel</span>
            </div>
            <span style="font-size:0.8rem;color:#75633F;font-weight:500;">+8€/pers.</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;background:#FBF7F0;border:1.5px solid #E6D7BA;border-radius:10px;padding:0.75rem 1rem;">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:18px;height:18px;border-radius:50%;border:2px solid #C6A669;flex-shrink:0;"></div>
              <span style="font-size:0.9rem;font-weight:600;color:#211C12;">Premium</span>
            </div>
            <span style="font-size:0.8rem;color:#75633F;font-weight:500;">+16€/pers.</span>
          </div>
        </div>
      </div>`
    },
    {
      id: 12,
      category: 'Input',
      correct: 'Checkbox',
      options: ['Radio button', 'Toggle switch', 'Checkbox', 'Link'],
      definition: 'Une case à cocher carrée pour valider une affirmation unique (ex. : accepter les CGU). Contrairement au radio button, elle est indépendante et n\'appartient pas à un groupe exclusif.',
      distractors: {
        'Radio button': 'Un <strong>Radio button</strong> fait partie d\'un groupe — cocher l\'un décoche les autres. La checkbox est autonome : cocher "J\'accepte les CGU" n\'affecte aucune autre option.',
        'Toggle switch': 'Un <strong>Toggle switch</strong> agit instantanément (ex. activer le mode sombre). La checkbox fait partie d\'un formulaire et son effet s\'applique à la soumission.',
        'Link': 'Un <strong>Lien</strong> navigue vers une autre page. Ici, le texte souligné est dans le label de la checkbox — c\'est un lien dans un label, mais le composant principal reste la checkbox.',
      },
      component: `<div data-theme="pduf" style="background:#F1E8D7;display:flex;align-items:center;justify-content:center;padding:2rem;min-height:200px;">
        <div style="background:#FBF7F0;border-radius:10px;padding:1.25rem 1.5rem;width:100%;max-width:300px;border:1px solid #E6D7BA;">
          <label style="display:flex;align-items:flex-start;gap:0.75rem;cursor:pointer;">
            <div style="width:18px;height:18px;border:2px solid #C6A669;border-radius:4px;margin-top:2px;flex-shrink:0;background:#FBF7F0;"></div>
            <span style="font-size:0.85rem;color:#211C12;line-height:1.5;">
              J'accepte les
              <span style="text-decoration:underline;font-weight:600;color:#211C12;">Conditions Générales de Vente</span>
              et la
              <span style="text-decoration:underline;font-weight:600;color:#211C12;">Politique de confidentialité</span>
            </span>
          </label>
          <div style="margin-top:1rem;display:flex;align-items:flex-start;gap:0.75rem;">
            <div style="width:18px;height:18px;border:2px solid #CB1617;border-radius:4px;margin-top:2px;flex-shrink:0;background:#FBF7F0;display:flex;align-items:center;justify-content:center;">
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4L4 7.5L10 1" stroke="#CB1617" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span style="font-size:0.85rem;color:#211C12;line-height:1.5;">
              Je souhaite recevoir les offres
              <span style="text-decoration:underline;font-weight:600;">Allianz Assurance Voyage</span>
            </span>
          </div>
        </div>
      </div>`
    },
    {
      id: 13,
      category: 'Input',
      correct: 'Date picker',
      options: ['Calendar', 'Date picker', 'Tab bar', 'Segmented control'],
      definition: 'Un sélecteur de date qui permet à l\'utilisateur de choisir un ou plusieurs jours. On le voit lors de la réservation pour sélectionner la date de visite.',
      distractors: {
        'Calendar': 'Un <strong>Calendar</strong> (calendrier) est un affichage d\'agenda avec des événements existants. Un date picker est un champ de saisie interactif qui demande à l\'utilisateur de choisir une date.',
        'Tab bar': 'Une <strong>Tab bar</strong> bascule entre des sections de contenu. Les options Jeu./Ven. ici sont des sélecteurs de date présentés comme des cartes, pas des onglets de navigation.',
        'Segmented control': 'Un <strong>Segmented control</strong> bascule entre des vues ou modes (ex. Liste / Carte). Les cartes dates ici sont un date picker stylisé — leur rôle est de sélectionner un jour de visite, pas de changer la vue.',
      },
      component: `<div data-theme="pduf" style="background:#F1E8D7;display:flex;align-items:center;justify-content:center;padding:1.5rem;min-height:200px;">
        <div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:0.75rem;">
          <p style="font-size:0.8rem;font-weight:700;color:#75633F;text-transform:uppercase;letter-spacing:0.05em;margin:0;">Date de visite</p>
          <div style="display:flex;gap:0.75rem;">
            <!-- Selected date -->
            <div style="flex:1;background:#211C12;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;align-items:center;gap:0.1rem;">
              <span style="font-size:0.7rem;color:#C6A669;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Jeu.</span>
              <span style="font-size:1rem;font-weight:700;color:#FBF7F0;">16 juil.</span>
              <span style="font-size:0.7rem;color:#C6A669;">2025</span>
            </div>
            <!-- Unselected date -->
            <div style="flex:1;background:#FBF7F0;border:1.5px solid #CB1617;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;align-items:center;gap:0.1rem;">
              <span style="font-size:0.7rem;color:#75633F;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Ven.</span>
              <span style="font-size:1rem;font-weight:600;color:#211C12;">17 juil.</span>
              <span style="font-size:0.7rem;color:#75633F;">2025</span>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: 14,
      category: 'Feedback',
      correct: 'Notification banner',
      options: ['Toast notification', 'Notification banner', 'Modal', 'Tooltip'],
      definition: 'Un bandeau d\'information persistant intégré dans la page pour communiquer un message important (promotionnel, informatif ou d\'alerte). Il ne disparaît pas seul.',
      distractors: {
        'Toast notification': 'Une <strong>Toast notification</strong> apparaît en superposition (flottante) et disparaît automatiquement après quelques secondes. La notification banner, elle, est intégrée dans le flux de la page et reste affichée.',
        'Modal': 'Une <strong>Modal</strong> bloque toute interaction avec la page et nécessite une action de l\'utilisateur. La notification banner s\'intègre dans le contenu sans interruption.',
        'Tooltip': 'Un <strong>Tooltip</strong> n\'apparaît qu\'au survol d\'un élément spécifique et disparaît immédiatement. La notification banner est toujours visible, sans interaction requise.',
      },
      component: `<div data-theme="pduf" style="background:#F1E8D7;display:flex;align-items:center;justify-content:center;padding:1.5rem;min-height:200px;">
        <div style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:0.75rem;">
          <div style="background:#C6A669;border-radius:8px;padding:0.85rem 1rem;display:flex;align-items:flex-start;gap:0.75rem;">
            <span style="font-size:1rem;flex-shrink:0;">ℹ️</span>
            <p style="font-size:0.82rem;color:#FBF7F0;font-weight:500;line-height:1.5;margin:0;">Le Puy du Fou, Les Noces de Feu et la Cinéscénie sont <strong>inclus</strong> dans votre billet d'entrée.</p>
          </div>
          <div style="background:#CB1617;border-radius:8px;padding:0.85rem 1rem;display:flex;align-items:flex-start;gap:0.75rem;">
            <span style="font-size:1rem;flex-shrink:0;">⚠️</span>
            <p style="font-size:0.82rem;color:#FBF7F0;font-weight:500;line-height:1.5;margin:0;">Places limitées pour la Cinéscénie du <strong>14 juillet</strong>. Réservez vite !</p>
          </div>
        </div>
      </div>`
    }
  ];

  // ── Quiz flow ─────────────────────────────────
  function startQuiz() {
    showScreen('quiz');
    const pool = selectedCategory === 'all'
      ? QUESTIONS
      : QUESTIONS.filter(q => q.category === selectedCategory);
    questions = shuffle(pool);
    currentIndex = 0;
    score = 0;
    streak = 0;
    if (contestMode) {
      contestPlayers[playerName] = { score: 0, total: questions.length, done: false };
    }
    updateStreakDisplay();
    // Show/hide timer bar based on mode
    if (timerBar) timerBar.style.display = timerModeEnabled ? 'block' : 'none';
    renderQuestion();
  }

  function makeOptionBtn(opt, i, q) {
    const btn = document.createElement('button');
    btn.className = 'option-btn btn btn-sm h-auto py-3 px-3 text-sm font-semibold leading-tight text-center rounded-lg';
    btn.textContent = opt;
    btn.dataset.value = opt;
    btn.setAttribute('aria-label', `Option ${i + 1} : ${opt}`);
    btn.addEventListener('click', () => selectAnswer(btn, q));
    return btn;
  }

  function renderQuestion() {
    const q = questions[currentIndex];
    answered = false;

    // Progress
    const pct = (currentIndex / questions.length) * 100;
    progressBar.value = pct;
    progressBar.setAttribute('aria-valuenow', Math.round(pct));
    scoreLabel.textContent = t('score_label', currentIndex + 1, questions.length);

    // Render component into both panels
    const html = q.component || '';
    componentRender.innerHTML = html;
    if (componentRenderDesktop) componentRenderDesktop.innerHTML = html;

    // Build options (same shuffled order for both grids)
    const opts = shuffle([...q.options]);

    optionsGrid.innerHTML = '';
    if (optionsGridDesktop) optionsGridDesktop.innerHTML = '';

    opts.forEach((opt, i) => {
      optionsGrid.appendChild(makeOptionBtn(opt, i, q));
      if (optionsGridDesktop) optionsGridDesktop.appendChild(makeOptionBtn(opt, i, q));
    });

    // Hide feedback panels
    feedbackPanel.classList.add('hidden');
    if (feedbackPanelDesktop) feedbackPanelDesktop.classList.add('hidden');

    // Slide-in animation (mobile stage only)
    questionStage.classList.remove('slide-out', 'slide-in');
    void questionStage.offsetWidth;
    questionStage.classList.add('slide-in');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        questionStage.classList.remove('slide-in');
      });
    });

    // Focus first option in active grid
    setTimeout(() => {
      const activeGrid = isDesktop() ? optionsGridDesktop : optionsGrid;
      const firstBtn = activeGrid?.querySelector('.option-btn');
      if (firstBtn) firstBtn.focus();
    }, 50);

    if (timerModeEnabled) startTimer(q);
  }

  function selectAnswer(selectedBtn, question, timedOut) {
    if (answered) return;
    answered = true;

    stopTimer();

    const chosen = timedOut ? null : selectedBtn.dataset.value;
    const isCorrect = !timedOut && chosen === question.correct;
    if (isCorrect) { score++; streak++; } else { streak = 0; }
    updateStreakDisplay();

    // Sound
    if (timedOut)        SOUNDS.timeout();
    else if (isCorrect)  streak >= 3 ? SOUNDS.streak() : SOUNDS.correct();
    else                 SOUNDS.wrong();

    // Broadcast
    if (contestMode && broadcastChannel) {
      broadcastMsg('score', { score, total: questions.length, done: false });
    }

    // Mark buttons in BOTH grids
    [optionsGrid, optionsGridDesktop].forEach(grid => {
      if (!grid) return;
      grid.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.value === question.correct) {
          btn.classList.add('correct');
        } else if (!timedOut && btn.dataset.value === chosen && !isCorrect) {
          btn.classList.add('wrong');
        }
      });
    });

    // Build feedback content
    const iconClass   = isCorrect ? 'feedback-icon-wrap correct' : 'feedback-icon-wrap wrong';
    const iconHTML    = isCorrect ? ICONS.correct : ICONS.wrong;
    const titleText   = isCorrect ? t('feedback_correct') : t('feedback_wrong', question.correct);
    const titleClass  = `font-serif text-xl font-bold ${isCorrect ? 'text-success' : 'text-error'}`;
    const hint = !isCorrect && chosen && question.distractors?.[chosen] ? question.distractors[chosen] : '';
    const defHTML = isCorrect
      ? question.definition
      : `<p class="mb-2">${question.definition}</p>`
        + (hint ? `<p class="text-xs text-base-content/50 border-t border-base-300 pt-2 mt-2 flex gap-1.5 items-start"><span class="shrink-0 mt-0.5 text-base-content/40">${ICONS.hint}</span><span>${hint}</span></p>` : '');

    // Apply to mobile panel
    feedbackIcon.className   = iconClass;
    feedbackIcon.innerHTML   = iconHTML;
    feedbackTitle.textContent = titleText;
    feedbackTitle.className  = titleClass;
    if (isCorrect) feedbackDef.textContent = question.definition;
    else           feedbackDef.innerHTML   = defHTML;
    feedbackPanel.classList.remove('hidden');

    // Apply to desktop panel
    if (feedbackIconDesktop)  { feedbackIconDesktop.className  = iconClass; feedbackIconDesktop.innerHTML = iconHTML; }
    if (feedbackTitleDesktop) { feedbackTitleDesktop.textContent = titleText; feedbackTitleDesktop.className = titleClass; }
    if (feedbackDefDesktop)   { if (isCorrect) feedbackDefDesktop.textContent = question.definition; else feedbackDefDesktop.innerHTML = defHTML; }
    if (feedbackPanelDesktop) feedbackPanelDesktop.classList.remove('hidden');

    // Focus next button in active panel
    setTimeout(() => {
      const nextBtn = isDesktop()
        ? document.getElementById('btn-next-desktop')
        : document.getElementById('btn-next');
      if (nextBtn) nextBtn.focus();
    }, 60);
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      questionStage.classList.add('slide-out');
      setTimeout(renderQuestion, 180);
    } else if (!contestMode) {
      // Label challenge is the last step (solo only)
      openLabelChallenge();
    } else {
      showEndScreen();
    }
  }

  function showEndScreen() {
    progressBar.value = 100;
    stopTimer();
    if (timerBar) timerBar.style.display = 'none';

    const total = questions.length;

    // In contest mode, broadcast final score and go straight to leaderboard
    if (contestMode && broadcastChannel) {
      contestPlayers[playerName] = { score, total, done: true };
      broadcastMsg('score', { score, total, done: true });
      saveHistory(score, total);
      setTimeout(showLeaderboard, 600);
      return;
    }

    showScreen('end');

    const pct = score / total;
    endScore.textContent = `${score} / ${total}`;

    if (pct === 1) {
      endIcon.innerHTML = ICONS.trophy;
      endIcon.style.background = '#FBF0DA';
      endMessage.textContent = t('end_perfect');
      SOUNDS.win();
    } else if (pct >= 0.6) {
      endIcon.innerHTML = ICONS.ribbon;
      endIcon.style.background = '#FBF0DA';
      endMessage.textContent = t('end_good');
      SOUNDS.correct();
    } else {
      endIcon.innerHTML = ICONS.book;
      endIcon.style.background = '#F1E8D7';
      endMessage.textContent = t('end_keep_going');
      SOUNDS.wrong();
    }

    // Visual effect — confetti for glory, UI-term rain for shame
    setTimeout(() => launchEffects(pct), 200);

    saveHistory(score, total);
    renderHistory();
    document.getElementById('btn-retry').focus();
  }

  function restartQuiz() {
    if (contestMode) {
      if (contestPlayers[playerName]) {
        contestPlayers[playerName] = { score: 0, total: 0, done: false };
      }
      broadcastMsg('join');
      showScreen('lobby');
      renderLobbyPlayers();
    } else {
      startQuiz();
    }
  }

  // ── Streak ────────────────────────────────────
  function updateStreakDisplay() {
    if (!streakBadge) return;
    if (streak >= 2) {
      streakBadge.style.display = 'flex';
      streakBadge.innerHTML = `${ICONS.flame}<span>${streak}</span><span class="streak-label-text">${t('streak_label')}</span>`;
      if (streak >= 3) {
        streakBadge.classList.add('on-fire');
      } else {
        streakBadge.classList.remove('on-fire');
      }
    } else {
      streakBadge.style.display = 'none';
      streakBadge.classList.remove('on-fire');
    }
  }

  // ── Timer ─────────────────────────────────────
  function startTimer(question) {
    stopTimer();
    if (!timerBar) return;

    timerBar.style.transition = 'none';
    timerBar.style.width = '100%';

    // Force reflow so the transition resets
    void timerBar.offsetWidth;

    timerBar.style.transition = `width ${TIMER_DURATION}ms linear`;
    timerBar.style.width = '0%';

    timerStartTime = Date.now();
    timerTimeout = setTimeout(() => {
      if (!answered) {
        // Time's up — treat as wrong answer, highlight correct
        answered = false; // reset so selectAnswer can run
        const fakeBtn = { dataset: { value: '__timeout__' } };
        selectAnswer(fakeBtn, question, true);
      }
    }, TIMER_DURATION);
  }

  function stopTimer() {
    if (timerTimeout) {
      clearTimeout(timerTimeout);
      timerTimeout = null;
    }
    if (timerAnimFrame) {
      cancelAnimationFrame(timerAnimFrame);
      timerAnimFrame = null;
    }
    // Freeze the bar at current visual position
    if (timerBar && timerModeEnabled) {
      const elapsed = timerStartTime ? Date.now() - timerStartTime : TIMER_DURATION;
      const remaining = Math.max(0, 1 - elapsed / TIMER_DURATION);
      timerBar.style.transition = 'none';
      timerBar.style.width = (remaining * 100) + '%';
    }
    timerStartTime = null;
  }

  // ── Score history (localStorage) ─────────────
  const HISTORY_KEY = 'pduf_quiz_history';

  function saveHistory(s, total) {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      const entries = raw ? JSON.parse(raw) : [];
      entries.unshift({ score: s, total, date: new Date().toISOString(), lang });
      // Keep max 3
      const trimmed = entries.slice(0, 3);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
    } catch (_) {
      // localStorage unavailable (private browsing, etc.) — fail silently
    }
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function formatHistoryDate(isoString, entryLang) {
    const d = new Date(isoString);
    const useLang = entryLang || lang;
    if (useLang === 'fr') {
      const months = ['jan.','fév.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
      return `${d.getDate()} ${months[d.getMonth()]}`;
    } else {
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return `${months[d.getMonth()]} ${d.getDate()}`;
    }
  }

  function renderHistory() {
    if (!scoreHistory) return;
    const entries = loadHistory();
    const histTitle = document.getElementById('history-title');
    if (histTitle) histTitle.textContent = t('history_title');

    if (!entries.length) {
      scoreHistory.style.display = 'none';
      return;
    }
    scoreHistory.style.display = 'block';

    const list = document.getElementById('history-list');
    if (!list) return;
    list.innerHTML = '';
    entries.forEach(entry => {
      const li = document.createElement('li');
      const dateStr = formatHistoryDate(entry.date, lang);
      li.textContent = `${dateStr} · ${entry.score}/${entry.total}`;
      list.appendChild(li);
    });
  }

  // ── Share result ──────────────────────────────
  if (btnShare) {
    btnShare.addEventListener('click', async () => {
      const total = questions.length;
      const text = lang === 'fr'
        ? `J'ai reconnu ${score}/${total} composants UI — Name That UI · Design Quiz`
        : `I scored ${score}/${total} on the UI components quiz — Name That UI · Design Quiz`;

      if (navigator.share) {
        try {
          await navigator.share({ text });
        } catch (_) {
          // User cancelled or API failed — fall back to clipboard
          copyToClipboard(text);
        }
      } else {
        copyToClipboard(text);
      }
    });
  }

  function copyToClipboard(text) {
    if (!btnShare) return;
    const fallback = () => {
      // execCommand fallback for very old browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
      showCopiedFeedback();
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopiedFeedback).catch(fallback);
    } else {
      fallback();
    }
  }

  function showCopiedFeedback() {
    if (!btnShare) return;
    const original = t('btn_share');
    btnShare.dataset.copied = '1';
    btnShare.textContent = t('share_copied');
    setTimeout(() => {
      delete btnShare.dataset.copied;
      btnShare.textContent = original;
    }, 2000);
  }

  // ── Helpers ───────────────────────────────────
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Keyboard navigation ───────────────────────
  document.addEventListener('keydown', (e) => {
    if (!screens.quiz.classList.contains('active')) return;

    const activeGrid = isDesktop() ? optionsGridDesktop : optionsGrid;
    const btns = [...(activeGrid || optionsGrid).querySelectorAll('.option-btn:not(:disabled)')];
    if (!btns.length) return;

    const idx = btns.indexOf(document.activeElement);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      btns[(idx + 1) % btns.length].focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      btns[(idx - 1 + btns.length) % btns.length].focus();
    } else if (e.key >= '1' && e.key <= '4') {
      const n = parseInt(e.key) - 1;
      if (btns[n]) btns[n].click();
    }
  });

})();
