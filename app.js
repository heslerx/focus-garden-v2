import { createIcons, Timer, Flower2, ShoppingCart, Moon, Sun, ListChecks, Lightbulb } from 'lucide';

// --- Initialization ---
function initIcons() {
    createIcons({
        icons: {
            Timer,
            Flower2,
            ShoppingCart,
            Moon,
            Sun,
            ListChecks,
            Lightbulb
        }
    });
}
initIcons();

const UI = {
    streakCount: document.getElementById('streak-count'),
    plantCount: document.getElementById('plant-count'),
    totalHours: document.getElementById('total-hours'),
    timerText: document.getElementById('timer-text'),
    dailyProgress: document.getElementById('daily-progress'),
    dailyProgressBar: document.getElementById('daily-progress-bar'),
    focusBtn: document.getElementById('focus-btn'),
    deepFocusCheckbox: document.getElementById('deep-focus-checkbox'),
    deepFocusOverlay: document.getElementById('deep-focus-overlay'),
    trophyCase: document.getElementById('trophy-case'),
    gardenGrid: document.getElementById('garden-grid'),
    todoList: document.getElementById('todo-list'),
    addTodoBtn: document.getElementById('add-todo-btn'),
    todoModal: document.getElementById('todo-modal'),
    saveTodoBtn: document.getElementById('save-todo'),
    cancelTodoBtn: document.getElementById('cancel-todo'),
    todoInput: document.getElementById('todo-input'),
    todoTimeframe: document.getElementById('todo-timeframe'),
    todoDuration: document.getElementById('todo-duration'),
    focusTipsContainer: document.getElementById('focus-tips-container'),
    focusTipText: document.getElementById('focus-tip-text'),
    activeTaskDisplay: document.getElementById('active-task-display'),
    activeTaskName: document.getElementById('active-task-name'),
    activeTaskTimer: document.getElementById('active-task-timer'),
    shopContainer: document.getElementById('shop-items-container'),
    rewardsList: document.getElementById('rewards-list'),
    navBtns: document.querySelectorAll('.nav-btn'),
    screens: document.querySelectorAll('.screen'),
    themeToggle: document.getElementById('theme-toggle'),
    exitDeepFocusBtn: document.getElementById('exit-deep-focus')
};

const CONFIG = {
    GOAL_HOURS: 3,
    MAX_PLANTS_FOR_REWARDS: 20,
    PLANT_TYPES: [
        { id: 'random', name: 'Planta Misteriosa', cost: 3, image: 'plant_1.png' },
        { id: 'orchid', name: 'Orquídea', cost: 5, image: 'plant_6.png' },
        { id: 'rose', name: 'Rosa', cost: 6, image: 'plant_7.png' },
        { id: 'sunflower', name: 'Girasol', cost: 8, image: 'plant_8.png' },
        { id: 'tulip', name: 'Tulipán', cost: 9, image: 'plant_9.png' },
        { id: 'aloe', name: 'Aloe Vera', cost: 10, image: 'plant_10.png' }
    ],
    RANDOM_IMAGES: ['plant_1.png', 'plant_2.png', 'plant_3.png', 'plant_4.png', 'plant_5.png'],
    TIPS: [
        "Puedes activar el Enfoque Profundo para concentrarte más en tu tarea.",
        "Cambia el orden de las notas usando las flechas; ¡la de arriba empieza primero!",
        "Gana 1 punto de hora por cada hora que te enfoques.",
        "La consistencia es clave: enfócate 3 horas diarias para aumentar tu racha.",
        "Si no cumples tu objetivo, ¡hay una pequeña probabilidad de que una planta se marchite!",
        "Colecciona 20 de la misma especie para desbloquear descuentos especiales.",
        "Los hitos de Enfoque Profundo (10, 50, 100h) te otorgan trofeos brillantes.",
        "Prueba el Modo Oscuro arriba a la derecha para una experiencia más relajante."
    ]
};

// --- Simple i18n ---
const I18N = {
    en: {
        start_focus: "Start Focus",
        stop_focus: "Stop Focus",
        deep_focus: "Deep Focus",
        hint_open: "Keep the app open to grow your garden.",
        todo_title: "My Goals",
        modal_title: "New Goal",
        duration_label: "Duration (minutes):",
        cancel: "Cancel",
        save: "Save",
        shop_title: "Plant Nursery",
        shop_desc: "Spend your earned hours to grow your garden.",
        nav: {
            focus: "Focus",
            garden: "Garden",
            todos: "To-Dos",
            shop: "Shop"
        },
        buy: "Buy",
        remaining: "left.",
        today_label: "Today",
        // placeholders/examples for the todo modal inputs
        todo_input_placeholder: "e.g. Write proposal",
        todo_timeframe_placeholder: "e.g. Due Fri",
        todo_duration_placeholder: "e.g. 25",
        TIPS: [
            "You can enable Deep Focus to concentrate more on your task.",
            "Change the order of notes; the top one starts first.",
            "Earn 1 Hour point per hour spent focusing.",
            "Consistency matters: aim for 3 hours daily to build a streak.",
            "If you miss your daily goal there's a small chance a plant will wilt.",
            "Collect 20 of the same species to unlock special discounts.",
            "Deep Focus milestones (10, 50, 100h) grant trophies.",
            "Try Dark Mode in the top-right for a calmer look."
        ]
    },
    es: {
        start_focus: "Start Focus",
        stop_focus: "Stop Focus",
        deep_focus: "Enfoque Profundo",
        hint_open: "Deja la aplicación abierta para cultivar tu jardín.",
        todo_title: "Mis Objetivos",
        modal_title: "Nuevo Objetivo",
        duration_label: "Duración (minutos):",
        cancel: "Cancel",
        save: "Save",
        shop_title: "Vivero de Plantas",
        shop_desc: "Gasta tus horas ganadas para cultivar tu jardín.",
        nav: {
            focus: "Focus",
            garden: "Garden",
            todos: "To-Dos",
            shop: "Shop"
        },
        buy: "Buy",
        remaining: "rest.",
        today_label: "Hoy",
        // placeholders/examples for the todo modal inputs (Spanish)
        todo_input_placeholder: "ej. Escribir propuesta",
        todo_timeframe_placeholder: "ej. Para el viernes",
        todo_duration_placeholder: "ej. 25",
        TIPS: [
            "Puedes activar el Enfoque Profundo para concentrarte más en tu tarea.",
            "Cambia el orden de las notas usando las flechas; ¡la de arriba empieza primero!",
            "Gana 1 punto de hora por cada hora que te enfoques.",
            "La consistencia es clave: enfócate 3 horas diarias para aumentar tu racha.",
            "Si no cumples tu objetivo, ¡hay una pequeña probabilidad de que una planta se marchite!",
            "Colecciona 20 de la misma especie para desbloquear descuentos especiales.",
            "Los hitos de Enfoque Profundo (10, 50, 100h) te otorgan trofeos brillantes.",
            "Prueba el Modo Oscuro arriba a la derecha para una experiencia más relajante."
        ]
    }
};

// --- State Management ---
let state = {
    totalHours: 0,
    dailyHours: 0,
    streak: 0,
    plants: [],
    lastUpdateDate: null,
    isFocusing: false,
    isDeepFocus: false,
    deepFocusHours: 0,
    startTime: null,
    accumulatedSessionTime: 0,
    darkMode: false,
    todos: [],
    lang: 'es' // default to Spanish as existing copy was Spanish
};

// --- Audio ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
async function playSound(url) {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start(0);
    } catch (e) {
        console.error("Audio failed", e);
    }
}

// --- Persistence ---
function loadData() {
    const saved = localStorage.getItem('focus_garden_data');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    checkDailyReset();
    applyTheme();
    applyLanguage();
    updateUI();
}

function saveData() {
    localStorage.setItem('focus_garden_data', JSON.stringify(state));
}

function checkDailyReset() {
    const now = new Date();
    const today = now.toDateString();
    
    if (state.lastUpdateDate && state.lastUpdateDate !== today) {
        // Evaluate yesterday
        if (state.dailyHours >= CONFIG.GOAL_HOURS) {
            state.streak += 1;
        } else {
            state.streak = 0;
            // 1 in 6 chance for a plant to wilt if goal not met
            if (state.plants.length > 0 && Math.random() < 1/6) {
                state.plants.splice(Math.floor(Math.random() * state.plants.length), 1);
                alert("¡Una de tus plantas se marchitó porque no se cumplió el objetivo de enfoque ayer! 🥀");
            }
        }
        state.dailyHours = 0;
    }
    state.lastUpdateDate = today;
}

// --- Timer Logic ---
let timerInterval = null;

function toggleFocus() {
    if (state.isFocusing) {
        stopFocus();
    } else {
        startFocus();
    }
}

function startFocus() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    state.isFocusing = true;
    state.isDeepFocus = UI.deepFocusCheckbox.checked;
    state.startTime = Date.now();
    UI.focusBtn.textContent = "Stop Focus";
    UI.focusBtn.classList.add('focusing');
    
    UI.focusTipsContainer.classList.add('hidden');

    if (state.isDeepFocus) {
        UI.deepFocusOverlay.classList.add('active');
    }
    
    timerInterval = setInterval(tick, 1000);
}

function stopFocus() {
    state.isFocusing = false;
    clearInterval(timerInterval);
    
    const elapsedMs = Date.now() - state.startTime;
    const elapsedHours = elapsedMs / (1000 * 60 * 60);
    
    state.totalHours += elapsedHours;
    state.dailyHours += elapsedHours;

    if (state.isDeepFocus) {
        state.deepFocusHours += elapsedHours;
        UI.deepFocusOverlay.classList.remove('active');
    }
    
    UI.focusBtn.textContent = "Start Focus";
    UI.focusBtn.classList.remove('focusing');
    UI.timerText.textContent = "00:00:00";
    
    showRandomTip();
    UI.focusTipsContainer.classList.remove('hidden');
    
    saveData();
    updateUI();
}

function showRandomTip() {
    // Pick a random tip index and show it (persist index in state)
    state.currentTipIndex = Math.floor(Math.random() * CONFIG.TIPS.length);
    showTipByIndex(state.currentTipIndex);
}

function showTipByIndex(index = 0) {
    // Ensure index is stored and use I18N for translated tip text when available
    state.currentTipIndex = index;
    const L = I18N[state.lang] || I18N.es;
    const tips = (L && L.TIPS && L.TIPS.length) ? L.TIPS : CONFIG.TIPS;
    const tip = tips[index % tips.length];
    UI.focusTipText.textContent = tip;
}

function tick() {
    const elapsedMs = Date.now() - state.startTime;
    const totalSeconds = Math.floor(elapsedMs / 1000);
    
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    
    UI.timerText.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    
    // Handle Active Task
    const activeTask = state.todos.find(t => !t.completed);
    if (activeTask) {
        UI.activeTaskDisplay.classList.remove('hidden');
        UI.activeTaskName.textContent = activeTask.name;
        
        // Active task timer logic
        if (activeTask.remainingSeconds > 0) {
            activeTask.remainingSeconds -= 1;
        }

        const taskM = Math.floor(activeTask.remainingSeconds / 60);
        const taskS = activeTask.remainingSeconds % 60;
        UI.activeTaskTimer.textContent = `${taskM.toString().padStart(2, '0')}:${taskS.toString().padStart(2, '0')}`;

        if (activeTask.remainingSeconds <= 0) {
            activeTask.completed = true;
            playSound('success_chime.mp3');
            renderTodos();
        }
    } else {
        UI.activeTaskDisplay.classList.add('hidden');
    }

    // Live update stats if user is watching
    const currentSessionHours = elapsedMs / (1000 * 60 * 60);
    const tempDaily = state.dailyHours + currentSessionHours;
    updateDailyProgress(tempDaily);
    
    // Save occasionally or just keep in memory until stop
    if (totalSeconds % 30 === 0) saveData();
}

// --- UI Updates ---
function updateUI() {
    UI.streakCount.textContent = state.streak;
    UI.plantCount.textContent = state.plants.length;
    UI.totalHours.textContent = state.totalHours.toFixed(1);
    
    updateDailyProgress(state.dailyHours);
    renderGarden();
    renderRewards();
    renderShop();
    renderTrophies();
    renderTodos();
}

function updateDailyProgress(hours) {
    UI.dailyProgress.textContent = hours.toFixed(1);
    const percent = Math.min((hours / CONFIG.GOAL_HOURS) * 100, 100);
    UI.dailyProgressBar.style.width = `${percent}%`;
    
    if (percent >= 100) {
        UI.dailyProgressBar.style.backgroundColor = '#4caf50';
    } else {
        UI.dailyProgressBar.style.backgroundColor = '#ff9800';
    }
}

function renderGarden() {
    UI.gardenGrid.innerHTML = '';
    // Always show at least 12 slots
    const slotCount = Math.max(12, Math.ceil((state.plants.length + 4) / 4) * 4);
    
    for (let i = 0; i < slotCount; i++) {
        const slot = document.createElement('div');
        slot.className = 'garden-slot';
        
        if (state.plants[i]) {
            const img = document.createElement('img');
            img.src = state.plants[i].image;
            slot.appendChild(img);
        }
        
        UI.gardenGrid.appendChild(slot);
    }
}

function renderRewards() {
    const plantCounts = state.plants.reduce((acc, p) => {
        acc[p.type] = (acc[p.type] || 0) + 1;
        return acc;
    }, {});

    const has20Of = (type) => plantCounts[type] >= 20;

    let rewardHTML = '';
    const isGardenFull = state.plants.length >= CONFIG.MAX_PLANTS_FOR_REWARDS;

    if (!isGardenFull) {
        rewardHTML = `
            <div class="reward-locked">
                <span class="lock-icon">🔒</span>
                <p>Desbloquea más con 20 Plantas (${state.plants.length}/20)</p>
            </div>
        `;
    } else {
        // Base Rewards
        rewardHTML += `
            <div class="reward-card">
                <div><h4>Recompensa Base: 10% Descuento</h4><p>Código: GARDEN10</p></div>
                <span>🎟️</span>
            </div>
        `;

        // Specific Pure Garden Rewards
        if (has20Of('orchid')) {
            rewardHTML += `<div class="reward-card" style="border-color: #ba68c8;"><div><h4>Maestría de Orquídeas: 20-40% Desc.</h4><p>Código: ORCHID40</p></div><span>🌸</span></div>`;
        }
        if (has20Of('rose')) {
            rewardHTML += `<div class="reward-card" style="border-color: #ef5350;"><div><h4>Maestría de Rosas: 25-40% Desc.</h4><p>Código: ROSE40</p></div><span>🌹</span></div>`;
        }
        if (has20Of('sunflower')) {
            rewardHTML += `<div class="reward-card" style="border-color: #fbc02d;"><div><h4>Maestría de Girasoles: 30-45% Desc.</h4><p>Código: SUN45</p></div><span>🌻</span></div>`;
        }
        if (has20Of('tulip')) {
            rewardHTML += `<div class="reward-card" style="border-color: #ec407a;"><div><h4>Maestría de Tulipanes: 35-50% Desc.</h4><p>Código: TULIP50</p></div><span>🌷</span></div>`;
        }
        if (has20Of('aloe')) {
            rewardHTML += `<div class="reward-card" style="border-color: #66bb6a;"><div><h4>Maestría de Aloe: 40-60% Desc.</h4><p>Código: ALOE60</p></div><span>🌵</span></div>`;
        }
    }
    
    UI.rewardsList.innerHTML = rewardHTML || '<p class="hint-text">No hay recompensas activas. ¡Cultiva más plantas específicas!</p>';
}

function renderShop() {
    UI.shopContainer.innerHTML = '';
    CONFIG.PLANT_TYPES.forEach(item => {
        const div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="shop-item-info">
                <h4>${item.name}</h4>
                <p>${state.lang === 'es' ? 'Coste' : 'Cost'}: ${item.cost} ${state.lang === 'es' ? 'Horas' : 'h'}</p>
            </div>
            <button class="buy-btn" ${state.totalHours < item.cost ? 'disabled' : ''} data-id="${item.id}">${I18N[state.lang].buy}</button>
        `;
        div.querySelector('button').addEventListener('click', () => buyPlant(item));
        UI.shopContainer.appendChild(div);
    });
}

// --- Actions ---
function buyPlant(item) {
    if (state.totalHours >= item.cost) {
        state.totalHours -= item.cost;
        
        let finalImage = item.image;
        if (item.id === 'random') {
            finalImage = CONFIG.RANDOM_IMAGES[Math.floor(Math.random() * CONFIG.RANDOM_IMAGES.length)];
        }

        state.plants.push({
            id: Date.now(),
            type: item.id,
            image: finalImage,
            boughtAt: Date.now()
        });
        
        playSound('purchase.mp3');
        saveData();
        updateUI();
    }
}

function toggleTheme() {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveData();
}

function renderTrophies() {
    UI.trophyCase.innerHTML = '';
    const milestones = [
        { hours: 10, img: 'trophy_10.png' },
        { hours: 50, img: 'trophy_50.png' },
        { hours: 100, img: 'trophy_100.png' }
    ];

    milestones.forEach(m => {
        if (state.deepFocusHours >= m.hours) {
            const img = document.createElement('img');
            img.src = m.img;
            img.className = 'trophy-icon';
            img.title = `${m.hours} Horas de Enfoque Profundo`;
            UI.trophyCase.appendChild(img);
        }
    });
}

function renderTodos() {
    UI.todoList.innerHTML = '';
    state.todos.forEach((todo, index) => {
        const div = document.createElement('div');
        div.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        const remMins = Math.ceil((todo.remainingSeconds || 0) / 60);
        const remLabel = (I18N && I18N[state.lang]) ? I18N[state.lang].remaining : 'rest.';
        const editLabel = state.lang === 'es' ? 'Edit' : 'Edit';
        const resetLabel = state.lang === 'es' ? 'Reset' : 'Reset';
        
        div.innerHTML = `
            <div class="todo-reorder">
                <button class="reorder-btn move-up" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button class="reorder-btn move-down" ${index === state.todos.length - 1 ? 'disabled' : ''}>▼</button>
            </div>
            <div class="todo-info">
                <strong>${todo.name}</strong>
                <span>${todo.timeframe} • ${remMins}m ${remLabel}</span>
                <div class="todo-meta-actions">
                    <button class="text-action-btn edit-task">${editLabel}</button>
                    ${todo.completed ? `<button class="text-action-btn reset-task">${resetLabel}</button>` : ''}
                </div>
            </div>
            <div class="todo-actions">
                <button class="check-btn">${todo.completed ? '✓' : '○'}</button>
                <button class="delete-btn">×</button>
            </div>
        `;
        
        div.querySelector('.edit-task').onclick = () => {
            const promptText = state.lang === 'es' ? "Ingresa la nueva duración en minutos:" : "Enter new duration in minutes:";
            const newMins = prompt(promptText, Math.ceil(todo.remainingSeconds / 60) || todo.durationMinutes);
            if (newMins !== null) {
                const mins = parseInt(newMins) || 25;
                state.todos[index].durationMinutes = mins;
                state.todos[index].remainingSeconds = mins * 60;
                state.todos[index].completed = false;
                saveData();
                renderTodos();
            }
        };

        const resetBtn = div.querySelector('.reset-task');
        if (resetBtn) {
            resetBtn.onclick = () => {
                state.todos[index].remainingSeconds = state.todos[index].durationMinutes * 60;
                state.todos[index].completed = false;
                saveData();
                renderTodos();
            };
        }

        div.querySelector('.move-up').onclick = () => {
            if (index > 0) {
                const temp = state.todos[index];
                state.todos[index] = state.todos[index - 1];
                state.todos[index - 1] = temp;
                saveData();
                renderTodos();
            }
        };
        
        div.querySelector('.move-down').onclick = () => {
            if (index < state.todos.length - 1) {
                const temp = state.todos[index];
                state.todos[index] = state.todos[index + 1];
                state.todos[index + 1] = temp;
                saveData();
                renderTodos();
            }
        };

        div.querySelector('.check-btn').onclick = () => {
            state.todos[index].completed = !state.todos[index].completed;
            saveData();
            renderTodos();
        };
        div.querySelector('.delete-btn').onclick = () => {
            state.todos.splice(index, 1);
            saveData();
            renderTodos();
        };
        UI.todoList.appendChild(div);
    });
}

function applyTheme() {
    if (state.darkMode) {
        document.body.classList.add('dark-mode');
        UI.themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        UI.themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    }
    initIcons();
}

// --- Language helpers ---
function applyLanguage() {
    const L = I18N[state.lang] || I18N.es;
    UI.focusBtn.textContent = state.isFocusing ? L.stop_focus : L.start_focus;
    document.getElementById('deep-focus-label').textContent = L.deep_focus;
    // set exit button text (translated per language)
    const exitBtn = document.getElementById('exit-deep-focus');
    if (exitBtn) exitBtn.textContent = L.exit_deep_focus || (state.lang === 'es' ? 'Salir de Enfoque Profundo' : 'Exit Deep Focus');
    document.getElementById('hint-text').textContent = L.hint_open;
    document.getElementById('todo-title').textContent = L.todo_title;
    document.getElementById('modal-title').textContent = L.modal_title;
    document.getElementById('duration-label').textContent = L.duration_label;
    document.getElementById('cancel-todo').textContent = L.cancel;
    document.getElementById('save-todo').textContent = L.save;
    document.getElementById('shop-title').textContent = L.shop_title;
    document.getElementById('shop-desc').textContent = L.shop_desc;
    document.getElementById('nav-focus').textContent = L.nav.focus;
    document.getElementById('nav-garden').textContent = L.nav.garden;
    document.getElementById('nav-todos').textContent = L.nav.todos;
    document.getElementById('nav-shop').textContent = L.nav.shop;
    document.getElementById('lang-code').textContent = state.lang.toUpperCase();

    // update the "today" label under the timer
    const todayLabelEl = document.getElementById('today-label');
    if (todayLabelEl) todayLabelEl.textContent = L.today_label || todayLabelEl.textContent;

    // update the modal input placeholders/examples to match language
    const todoInput = document.getElementById('todo-input');
    const todoTimeframe = document.getElementById('todo-timeframe');
    const todoDuration = document.getElementById('todo-duration');

    if (todoInput) todoInput.placeholder = L.todo_input_placeholder || todoInput.placeholder;
    if (todoTimeframe) todoTimeframe.placeholder = L.todo_timeframe_placeholder || todoTimeframe.placeholder;
    if (todoDuration) todoDuration.placeholder = L.todo_duration_placeholder || todoDuration.placeholder;

    // re-render parts affected by language
    renderShop();
    renderTodos();
    renderRewards();
}

UI.langToggle = document.getElementById('lang-toggle');

// language toggle with 1-second cooldown
UI.langToggle && UI.langToggle.addEventListener('click', () => {
    const now = Date.now();
    if (!state._langCooldownUntil) state._langCooldownUntil = 0;
    if (now < state._langCooldownUntil) return; // ignore clicks during cooldown

    // flip language
    state.lang = state.lang === 'es' ? 'en' : 'es';
    // set 1 second cooldown
    state._langCooldownUntil = now + 1000;
    // give a subtle disabled visual while in cooldown
    UI.langToggle.disabled = true;
    UI.langToggle.style.opacity = '0.6';

    applyLanguage();
    saveData();

    // update tips immediately to the new language but keep the same tip (translated)
    showTipByIndex(state.currentTipIndex ?? 0);

    setTimeout(() => {
        UI.langToggle.disabled = false;
        UI.langToggle.style.opacity = '';
    }, 1000);
});

UI.addTodoBtn.onclick = () => {
    UI.todoModal.classList.add('active');
};

UI.cancelTodoBtn.onclick = () => {
    UI.todoModal.classList.remove('active');
};

UI.saveTodoBtn.onclick = () => {
    const name = UI.todoInput.value.trim();
    const duration = parseInt(UI.todoDuration.value) || 25;
    if (name) {
        state.todos.push({
            name: name,
            timeframe: UI.todoTimeframe.value,
            durationMinutes: duration,
            remainingSeconds: duration * 60,
            completed: false
        });
        UI.todoInput.value = '';
        UI.todoTimeframe.value = '';
        UI.todoDuration.value = '25';
        UI.todoModal.classList.remove('active');
        saveData();
        renderTodos();
    }
};

// --- Visibility Handling (Pausing) ---
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        if (state.isFocusing) {
            stopFocus();
        }
    }
});

// --- Navigation Handling ---
UI.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-screen');
        
        UI.navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        UI.screens.forEach(s => {
            s.classList.remove('active');
            if (s.id === target) s.classList.add('active');
        });
    });
});

// --- Event Listeners ---
UI.focusBtn.addEventListener('click', toggleFocus);
UI.themeToggle.addEventListener('click', toggleTheme);
UI.exitDeepFocusBtn.addEventListener('click', () => {
    state.isDeepFocus = false;
    UI.deepFocusCheckbox.checked = false;
    UI.deepFocusOverlay.classList.remove('active');
    saveData();
});

 // Start app
showRandomTip();
loadData();