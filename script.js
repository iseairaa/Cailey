const database = {
    english: {
        words: {
            easy: ["CAT", "SUN", "DOG", "BALL", "RED", "BOX", "BED", "CUP", "PIG", "HAT", "RUN", "SIT", "MAP", "FUN", "BUG"],
            medium: ["FROG", "TREE", "FISH", "BOOK", "MILK", "BIRD", "CAKE", "DUCK", "HAND", "MOON", "JUMP", "STAR", "WIND", "LAMP", "BOAT"],
            hard: ["HAPPY", "SPACE", "SCHOOL", "FRIEND", "ROCKET", "FLOWER", "ORANGE", "MONKEY", "BANANA", "BRIGHT", "YELLOW", "WINDOW", "KITTEN", "ANIMAL", "TRAIN"]
        },
        phrases: {
            easy: ["A BIG RED LOG", "THE FAT PINK PIG", "MY BLUE TOY BOX", "A HOT CUP", "RUN IN THE SUN", "SIT ON THE BED", "TEN YELLOW HATS", "SAD LITTLE DOG", "A NEW MAP", "SEE THE BUG", "CAT AND MOUSE", "A TINY HEN", "FOR THE BOY", "FUN OUTSIDE", "A WET NET"],
            medium: ["UNDER THE GREEN TREE", "A SHINY SILVER RING", "FLY KITES HIGH", "COLD MILK AND CAKE", "SWIM LIKE A FISH", "LOOK AT THE MOON", "THE JUMPING FROG", "SOFT WHITE PILLOW", "A YELLOW BANANA", "FEED THE WILD BIRD", "OPEN THE WOODEN DOOR", "A BRIGHT STAR LIGHT", "BLOWING FRESH WIND", "WASH WITH SOAP", "READ A GOOD BOOK"],
            hard: ["BEAUTIFUL SPARKLING ROCKET", "MY KIND HELPFUL BEST FRIEND", "WALKING COMFORTABLY TO SCHOOL", "LITTLE KITTEN IN THE ATTIC", "THE ELEPHANT IS SO HUGE", "JUICY DELICIOUS ORANGE FRUITS", "FUNNY MONKEY CLIMBING TREES", "A BRIGHT FLAMINGO DANCING", "BLANKETS KEEP US WARM", "GIRAFFE HAS A LONG NECK", "WIZARDS IN THE CASTLE", "EXPLORING THE RED PLANET MARS", "COLORED CRAYONS IN THE BOX", "HAPPY FAMILY GARDEN", "TURTLE WALKING SLOWLY"]
        },
        stories: {
            easy: [
                { story: "Leo is a brown puppy. He loves his blue ball. It is under the bed.", question: "Where is the ball?", choices: ["In the box", "Under the bed", "In the mud"], answer: "Under the bed" },
                { story: "Max is a yellow bird. He sings sweet songs from the top of the tree.", question: "What animal is Max?", choices: ["A cat", "A pig", "A bird"], answer: "A bird" },
                { story: "Kim has a shiny red cup. She drinks sweet juice after playing outside.", question: "What color is the cup?", choices: ["Red", "Blue", "Green"], answer: "Red" },
                { story: "Tim has a fat pink pig. The pig likes to eat crisp green apples all day.", question: "What does the pig eat?", choices: ["Fish", "Green apples", "Cake"], answer: "Green apples" },
                { story: "Ben wears a blue hat. He walks cheerfully to the park with his dad.", question: "Where is Ben going?", choices: ["To school", "To the park", "To the store"], answer: "To the park" }
            ],
            medium: [
                { story: "Mia visits her grandmother's farm. She helps gather fresh eggs and waters tomatoes.", question: "Where does Mia go?", choices: ["To the beach", "To the farm", "To the school"], answer: "To the farm" },
                { story: "Ben builds a big sandcastle. He puts a shiny pink shell on top like a flag.", question: "What is on top of the castle?", choices: ["A leaf", "A pink shell", "A toy car"], answer: "A pink shell" },
                { story: "Toby the frog lives near a clear pond. He jumps high to catch buzzing flies.", question: "What does Toby catch?", choices: ["Worms", "Buzzing flies", "Fishes"], answer: "Buzzing flies" },
                { story: "Sara has a box of crayons. She draws a bright yellow sun and a blue river.", question: "What does she draw with blue?", choices: ["A river", "A sun", "A tree"], answer: "A river" },
                { story: "An owl sits on a branch under the silver moon. He listens to the wind.", question: "When does the story happen?", choices: ["Morning", "Afternoon", "Night"], answer: "Night" }
            ],
            hard: [
                { story: "Pip is an adventurous frog who packed a tiny backpack with flies and hopped into the dark forest looking for the legendary golden pond.", question: "What did Pip pack?", choices: ["Sweet worms", "Delicious flies", "Fresh leaves"], answer: "Delicious flies" },
                { story: "Luna the white kitten discovered a glowing purple key hidden inside an old wooden chest in the attic. Her whiskers sparkled.", question: "Where was the key?", choices: ["In the garden", "Inside a wooden chest", "Under the rug"], answer: "Inside a wooden chest" },
                { story: "Oliver the monkey loves climbing tall banana trees. His best friend is a colorful parrot who helps him find the sweetest fruits.", question: "Who is Oliver's best friend?", choices: ["A colorful parrot", "A frog", "A sleepy tiger"], answer: "A colorful parrot" },
                { story: "Bella went to school on a rainy Tuesday. She brought a big bright umbrella covered in yellow stars to protect her school bag.", question: "What was on the umbrella?", choices: ["Red apples", "Yellow stars", "Blue fish"], answer: "Yellow stars" },
                { story: "A silver rocket ship zoomed past the glowing moon, carrying two brave astronauts on a mission to explore the red planet Mars.", question: "Where is the rocket going?", choices: ["To the sun", "To Mars", "To the deep ocean"], answer: "To Mars" }
            ]
        }
    },
    tagalog: {
        words: {
            easy: ["A-SO", "PU-SA", "I-BON", "BO-LA", "A-RAW", "BA-TA", "IS-DA", "GA-BI", "SA-YA", "MA-TA", "LU-PA", "A-MA", "I-NA", "TA-O", "PU-NO"],
            medium: ["PA-PEL", "LA-MOK", "U-LAN", "AK-LAT", "ME-SA", "SI-YA", "LA-NGIT", "GU-BAT", "DA-GAT", "BA-HAY", "KU-MOT", "U-NAN", "SA-PA", "I-LOG", "LA-WA"],
            hard: ["MA-SA-YA", "PA-A-RA-LAN", "MA-LA-KAS", "KAI-BI-GAN", "MA-BA-BAW", "HA-YOP", "BU-LAK-LAK", "MA-HI-WA-GA", "AL-MU-SAL", "BA-HAG-HA-RI", "MA-GA-LANG", "MA-TA-LI-NO", "MA-BAN-GO", "MA-LI-NIS", "TA-HI-MIK"]
        },
        phrases: {
            easy: ["ANG A-SO AT PU-SA", "MA-LA-KING BO-LA", "MA-LI-WA-NAG NA A-RAW", "MAB-A-IT NA BA-TA", "ANG A-MA AT I-NA", "MA-SAY-ANG TA-O", "MA-TA-AS NA PU-NO", "IS-DA SA TU-BIG", "MA-PUL-ANG SA-YA", "MA-TA-AS NA PA-A", "MA-LI-IT NA I-BON", "ANG M-GA MA-TA", "ANG KA-MAY KO", "GAB-I NA NA-MA-AN", "BU-HOK NI A-NA"],
            medium: ["PUT-ING PA-PEL AT AK-LAT", "MA-LA-WAK NA DA-GAT", "MANG-GA SA ME-SA", "MA-TA-AS NA LA-NGIT", "MA-LI-IT NA BA-HAY", "MAK-A-PAL NA KU-MOT", "U-NAN SA SI-YA", "MA-LA-KAS NA U-LAN", "M-GA LA-MOK SA GU-BAT", "MA-LI-NIS NA I-LOG", "SA-PA SA BU-KID", "MA-LA-MIG NA LA-WA", "PANG-A-LAN NI KUP-A", "KA-PE AT TI-NA-PAY", "MANG-GA AT SA-GING"],
            hard: ["MA-SA-YANG PA-A-RA-LAN", "MA-LA-KAS NA KAI-BI-GAN", "MA-HI-WA-GANG BA-HAG-HA-RI", "MA-BAN-GONG BU-LAK-LAK", "MAS-A-RAP NA AL-MU-SAL", "MA-GA-LANG NA BA-TA", "MA-TA-LI-NONG TA-O", "MA-LI-NIS NA BA-HAY", "TA-HI-MIK NA GAB-I", "MA-BA-BAW NA SA-PA", "MA-BO-TING PANG-A-LAN", "MA-LA-KHAI-ING KA-MAY", "ER-O-PLA-NO SA LA-NGIT", "OS-PI-TAL SA BA-YAN", "TSI-NE-LAS NI LO-LA"]
        },
        stories: {
            easy: [
                { story: "May alagang pusa si Lito. Muning ang pangalan nito. Kulay puti ang pusa at mahilig uminom ng gatas.", question: "Ano ang pangalan ng pusa?", choices: ["Tagpi", "Muning", "Lito"], answer: "Muning" },
                { story: "Si Susi ay isang pulang bola. Gumugulong siya sa berdeng damuhan araw-araw kasama ang aso.", question: "Ano si Susi?", choices: ["Isang aso", "Isang pusa", "Isang bola"], answer: "Isang bola" },
                { story: "Maliwanag ang araw ngayon. Lumabas si Ana para maglaro ng saranggola sa malawak na bukid.", question: "Ano ang nilaro ni Ana?", choices: ["Saranggola", "Bola", "Pusa"], answer: "Saranggola" },
                { story: "Masarap ang gatas na iniinom ni Baby bago matulog. Binili ito ni Nanay sa malapit na tindahan.", question: "Sino ang bumili ng gatas?", choices: ["Si Tatay", "Si Nanay", "Si Kuya"], answer: "Si Nanay" },
                { story: "May lumilipad na munting ibon sa tapat ng bahay. Umaawit siya ng kanta sa ibabaw ng puno.", question: "Saan umaawit ang ibon?", choices: ["Sa bubong", "Sa puno", "Sa daan"], answer: "Sa puno" }
            ],
            medium: [
                { story: "Maagang gumising si Ana para tulungan si Nanay. Nagluto sila ng pandesal at sinangag para sa almusal.", question: "Ano ang niluto nila?", choices: ["Isda", "Pandesal at sinangag", "Sopas"], answer: "Pandesal at sinangag" },
                { story: "Bumili si Tatay ng limang matamis na mangga galing palengke para sa mga batang masipag maglinis.", question: "Ilang mangga ang binili?", choices: ["Tatlo", "Lima", "Sampu"], answer: "Lima" },
                { story: "Lumilipad nang mataas ang saranggola ni Pablo. Gawa ito sa makulay na papel at manipis na kawayan.", question: "Saan gawa ang saranggola?", choices: ["Papel at kawayan", "Plastik", "Dahon"], answer: "Papel at kawayan" },
                { story: "May maliit na kuneho na nagtatago sa ilalim ng halaman. Mahilig siyang kumain ng gulay tuwing umaga.", question: "Saan nagtatago ang kuneho?", choices: ["Sa bahay", "Sa ilalim ng halaman", "Sa kahon"], answer: "Sa ilalim ng halaman" },
                { story: "Malakas ang ulan kagabi kaya natulog si Lito gamit ang makapal na kumot na bigay ng kanyang Lola.", question: "Ano ang ginamit ni Lito?", choices: ["Makapal na kumot", "Banig", "Unan"], answer: "Makapal na kumot" }
            ],
            hard: [
                { story: "Si Tikoy ay isang munting alitaptap na takot sa dilim. Sa tulong ng bubuyog, nakahanap siya ng mahiwagang bulaklak.", question: "Sino ang tumulong kay Tikoy?", choices: ["Mga bubuyog", "Munting ibon", "Pusa"], answer: "Mga bubuyog" },
                { story: "Si Caleb ay sumakay sa malaking bangka. Nakakita siya ng mga lumba-lumba na sumasayaw sa asul na dagat.", question: "Anong hayop ang nakita ni Caleb?", choices: ["Mga pating", "Mga lumba-lumba", "Pugita"], answer: "Mga lumba-lumba" },
                { story: "Isang mahiwagang ibon ang lumapag sa hardin. Bahaghari ang kulay ng balahibo nito at nakakapagpagaling ang awit.", question: "Ano ang kapangyarihan ng awit?", choices: ["Nakakapagpagaling", "Nakakapagpatubo ng puno", "Nakakapagpaulan"], answer: "Nakakapagpagaling" },
                { story: "Maagang sumakay sa eroplano si Maria patungong Palawan para bisitahin ang sikat na Underground River kasama ang pamilya.", question: "Saan pumunta si Maria?", choices: ["Underground River", "Luneta", "Mayon"], answer: "Underground River" },
                { story: "Si Lolo Manuel ay gumagawa ng magandang mesa gamit ang matibay na kahoy mula sa puno ng narra na itinanim niya.", question: "Anong puno ang ginamit?", choices: ["Mangga", "Narra", "Niyog"], answer: "Narra" }
            ]
        }
    }
};

// --- RACK CONFIGURATION LIST ---
const ALL_POSSIBLE_MEDALS = [
    { id: "english_words_easy", label: "English Words", level: "Easy" },
    { id: "english_words_medium", label: "English Words", level: "Medium" },
    { id: "english_words_hard", label: "English Words", level: "Hard" },
    { id: "english_phrases_easy", label: "English Phrases", level: "Easy" },
    { id: "english_phrases_medium", label: "English Phrases", level: "Medium" },
    { id: "english_phrases_hard", label: "English Phrases", level: "Hard" },
    { id: "english_stories_easy", label: "English Stories", level: "Easy" },
    { id: "english_stories_medium", label: "English Stories", level: "Medium" },
    { id: "english_stories_hard", label: "English Stories", level: "Hard" },
    { id: "tagalog_words_easy", label: "Tagalog Words", level: "Easy" },
    { id: "tagalog_words_medium", label: "Tagalog Words", level: "Medium" },
    { id: "tagalog_words_hard", label: "Tagalog Words", level: "Hard" },
    { id: "tagalog_phrases_easy", label: "Tagalog Phrases", level: "Easy" },
    { id: "tagalog_phrases_medium", label: "Tagalog Phrases", level: "Medium" },
    { id: "tagalog_phrases_hard", label: "Tagalog Phrases", level: "Hard" },
    { id: "tagalog_stories_easy", label: "Tagalog Stories", level: "Easy" },
    { id: "tagalog_stories_medium", label: "Tagalog Stories", level: "Medium" },
    { id: "tagalog_stories_hard", label: "Tagalog Stories", level: "Hard" },
    { id: "math_addition_easy", label: "Math Addition", level: "Easy" },
    { id: "math_addition_medium", label: "Math Addition", level: "Medium" },
    { id: "math_addition_hard", label: "Math Addition", level: "Hard" },
    { id: "math_subtraction_easy", label: "Math Subtraction", level: "Easy" },
    { id: "math_subtraction_medium", label: "Math Subtraction", level: "Medium" },
    { id: "math_subtraction_hard", label: "Math Subtraction", level: "Hard" }
];

let currentSubject = '';   
let currentReadingType = ''; 
let currentMathType = ''; 
let currentLevel = 'easy';      

let currentItemIndex = 0; 
let readingScore = 0;
let storyScore = 0;
let mathScore = 0;
let currentMathAnswer = 0;
let currentStreak = 0; 

// Initialized Medals Array Storage Hook
let earnedMedals = JSON.parse(localStorage.getItem("caileyEarnedMedals")) || [];

const synth = window.speechSynthesis;

function playSoundEffect(type) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (type === 'correct') {
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
            oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
            gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'wrong') {
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(220, audioCtx.currentTime); 
            oscillator.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.25);
            gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'victory') {
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
            oscillator.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3); 
            gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
            oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.6);
        }
    } catch(e) { console.log("Audio contextual blockages handled."); }
}

function saveGameProgress() {
    const progressData = {
        currentSubject, currentReadingType, currentMathType,
        currentLevel, currentItemIndex, readingScore, storyScore, mathScore, currentStreak
    };
    localStorage.setItem("caileysStudyProgress", JSON.stringify(progressData));
}

function checkSavedProgress() {
    const savedData = localStorage.getItem("caileysStudyProgress");
    if (savedData) {
        const progress = JSON.parse(savedData);
        let modeLabel = progress.currentSubject === 'math' ? "Math" : `${progress.currentSubject.toUpperCase()} ${progress.currentReadingType.toUpperCase()}`;
        
        if (confirm(`👑 Welcome Back Cailey!\nWant to continue playing ${modeLabel} (${progress.currentLevel.toUpperCase()})?`)) {
            currentSubject = progress.currentSubject;
            currentReadingType = progress.currentReadingType;
            currentMathType = progress.currentMathType;
            currentLevel = progress.currentLevel;
            currentItemIndex = progress.currentItemIndex;
            readingScore = progress.readingScore || 0;
            storyScore = progress.storyScore || 0;
            mathScore = progress.mathScore || 0;
            currentStreak = progress.currentStreak || 0;
            launchActiveGameView();
        } else {
            localStorage.removeItem("caileysStudyProgress");
        }
    }
}

function launchActiveGameView() {
    hideAllSections();
    if (currentSubject === 'math') {
        let label = currentMathType === 'addition' ? "ADD" : "SUB";
        document.getElementById('math-level-title').innerText = `Math Magic! (${label})`;
        document.getElementById('math-game').classList.add('active-view');
        updateScoreboardDisplay('math');
        generateMathQuestion();
    } else {
        if (currentReadingType === 'words' || currentReadingType === 'phrases') {
            let titleTag = currentReadingType === 'words' ? 'Words' : 'Phrases';
            document.getElementById('reading-title').innerText = `${currentSubject === 'english' ? 'English' : 'Tagalog'} ${titleTag}`;
            document.getElementById('reading-game').classList.add('active-view');
            document.getElementById('audio-btn').style.display = (currentSubject === 'tagalog') ? 'none' : 'inline-block';
            updateScoreboardDisplay('reading');
            displayWord();
        } else {
            document.getElementById('story-title').innerText = `${currentSubject === 'english' ? 'English' : 'Tagalog'} Stories`;
            document.getElementById('story-game').classList.add('active-view');
            updateScoreboardDisplay('story');
            loadStory();
        }
    }
}

function hideAllSections() {
    document.querySelectorAll('.screen-view').forEach(view => {
        view.classList.remove('active-view');
    });
}

function goHome() {
    currentStreak = 0;
    hideAllSections();
    document.getElementById('main-menu').classList.add('active-view');
}

function handleDifficultyBack() {
    hideAllSections();
    if (currentSubject === 'math') {
        document.getElementById('math-type-menu').classList.add('active-view'); 
    } else {
        document.getElementById('type-menu').classList.add('active-view');
    }
}

function handleGameBack() {
    currentStreak = 0;
    hideAllSections();
    document.getElementById('difficulty-menu').classList.add('active-view');
}

function selectSubject(subject) {
    currentSubject = subject;
    hideAllSections();
    if (subject === 'math') {
        document.getElementById('math-type-menu').classList.add('active-view'); 
    } else {
        document.getElementById('type-menu-title').innerText = subject === 'english' ? "🔤 English Mission" : "🇵🇭 Tagalog Mission";
        document.getElementById('type-menu').classList.add('active-view');
    }
}

function selectReadingType(type) {
    currentReadingType = type;
    hideAllSections();
    let subjectText = currentSubject === 'english' ? "English" : "Tagalog";
    let modeText = type === 'words' ? "Words" : (type === 'phrases' ? "Phrases" : "Stories");
    document.getElementById('difficulty-menu-title').innerText = `✨ ${subjectText} ${modeText}`;
    document.getElementById('difficulty-menu').classList.add('active-view');
}

function selectMathType(type) {
    currentMathType = type;
    hideAllSections();
    let label = type === 'addition' ? "Addition" : "Subtraction";
    document.getElementById('difficulty-menu-title').innerText = `🔢 Math: ${label}`;
    document.getElementById('difficulty-menu').classList.add('active-view');
}

function selectLevel(level) {
    currentLevel = level;
    currentItemIndex = 0; 
    currentStreak = 0;
    saveGameProgress();
    launchActiveGameView();
}

function launchStarBurstEffect(isEpicCelebration = false) {
    const container = document.getElementById('star-animation-container');
    const starCount = isEpicCelebration ? 60 : 12;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'burst-star';
        const candy = ['⭐', '🌸', '👑', '🌈', '🍭', '✨'];
        star.innerText = candy[Math.floor(Math.random() * candy.length)];
        
        if (isEpicCelebration) {
            star.style.top = `${Math.random() * 40}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.setProperty('--tw-x', `${-50 + Math.random() * 100}px`);
            star.style.setProperty('--tw-y', `${300 + Math.random() * 400}px`);
        } else {
            star.style.top = '50%';
            star.style.left = '50%';
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 150;
            star.style.setProperty('--tw-x', `${Math.cos(angle) * distance}px`);
            star.style.setProperty('--tw-y', `${Math.sin(angle) * distance}px`);
        }
        
        star.style.setProperty('--tw-r', `${120 + Math.random() * 240}deg`);
        container.appendChild(star);
        setTimeout(() => star.remove(), isEpicCelebration ? 1500 : 800);
    }
}

function calculateRankLabel(score) {
    if (score >= 60) return '👑 Queen';
    if (score >= 30) return '💎 Expert';
    return '🥉 Rookie';
}

function updateScoreboardDisplay(mode) {
    let scoreVal, scoreEl, rankEl, streakBadgeEl, streakNumberEl;
    if (mode === 'reading') {
        scoreVal = readingScore; scoreEl = document.getElementById('reading-score'); rankEl = document.getElementById('reading-rank');
        streakBadgeEl = document.getElementById('reading-streak-badge'); streakNumberEl = document.getElementById('reading-streak');
    } else if (mode === 'story') {
        scoreVal = storyScore; scoreEl = document.getElementById('story-score'); rankEl = document.getElementById('story-rank');
        streakBadgeEl = document.getElementById('story-streak-badge'); streakNumberEl = document.getElementById('story-streak');
    } else {
        scoreVal = mathScore; scoreEl = document.getElementById('math-score'); rankEl = document.getElementById('math-rank');
        streakBadgeEl = document.getElementById('math-streak-badge'); streakNumberEl = document.getElementById('math-streak');
    }
    
    scoreEl.innerText = scoreVal;
    rankEl.innerText = calculateRankLabel(scoreVal);
    let wrapper = scoreEl.parentElement;
    wrapper.classList.remove('score-pop');
    void wrapper.offsetWidth; 
    wrapper.classList.add('score-pop');

    if (currentStreak >= 2) {
        streakNumberEl.innerText = currentStreak;
        streakBadgeEl.classList.remove('hide-streak');
    } else {
        streakBadgeEl.classList.add('hide-streak');
    }
}

function adjustProgressBar(elementId, current, total) {
    let percentage = (current / total) * 100;
    document.getElementById(elementId).style.width = `${percentage}%`;
}

// --- 🎖️ LEVEL COMPLETION TRIGGER HUB ---
function handleLevelCompletionMedal() {
    let levelKey = "";
    let cleanTextLabel = "";

    if (currentSubject === 'math') {
        levelKey = `math_${currentMathType}_${currentLevel}`;
        cleanTextLabel = `Math: ${currentMathType.toUpperCase()} (${currentLevel.toUpperCase()})`;
    } else {
        levelKey = `${currentSubject}_${currentReadingType}_${currentLevel}`;
        cleanTextLabel = `${currentSubject.toUpperCase()} ${currentReadingType.toUpperCase()} (${currentLevel.toUpperCase()})`;
    }

    // Save earned level code to inventory string arrays if not already earned
    if (!earnedMedals.includes(levelKey)) {
        earnedMedals.push(levelKey);
        localStorage.setItem("caileyEarnedMedals", JSON.stringify(earnedMedals));
    }

    // Reset temporary state machine values
    currentItemIndex = 0;
    currentStreak = 0;
    localStorage.removeItem("caileysStudyProgress");

    // Launch full modal layout injection
    document.getElementById('medal-popup-text').innerText = `You completed ${cleanTextLabel}!`;
    document.getElementById('medal-overlay').classList.add('show-popup');
    
    playSoundEffect('victory');
    launchStarBurstEffect(true);
}

function closeMedalPopup() {
    document.getElementById('medal-overlay').classList.remove('show-popup');
    goHome();
}

// --- Dynamic Achievement Engine Builder ---
function viewTrophyRoom() {
    hideAllSections();
    document.getElementById('trophy-room').classList.add('active-view');
    
    const container = document.getElementById('medals-grid-display');
    container.innerHTML = ""; // Wipe content box

    ALL_POSSIBLE_MEDALS.forEach(m => {
        const isUnlocked = earnedMedals.includes(m.id);
        const card = document.createElement('div');
        card.className = `trophy-item-card ${isUnlocked ? 'unlocked-medal' : ''}`;
        
        card.innerHTML = `
            <div class="trophy-medal-icon">${isUnlocked ? '🏅' : '🔒'}</div>
            <div class="trophy-label">${m.label}</div>
            <div class="trophy-subtier">${m.level}</div>
        `;
        container.appendChild(card);
    });
}

// --- DATA READ MODULES ---
function displayWord() {
    let list = database[currentSubject][currentReadingType][currentLevel];
    document.getElementById('word-item-num').innerText = currentItemIndex + 1;
    document.getElementById('word-text').innerText = list[currentItemIndex];
    adjustProgressBar('reading-progress', currentItemIndex, list.length);
}

function nextWord() {
    readingScore += 1;
    currentStreak += 1;
    playSoundEffect('correct');
    launchStarBurstEffect();
    updateScoreboardDisplay('reading');
    currentItemIndex++;
    let list = database[currentSubject][currentReadingType][currentLevel];
    
    if (currentItemIndex >= list.length) {
        adjustProgressBar('reading-progress', list.length, list.length);
        setTimeout(() => {
            handleLevelCompletionMedal();
        }, 300);
        return;
    }
    saveGameProgress();
    displayWord();
}

function speakWord() {
    if (currentSubject === 'english') {
        let text = document.getElementById('word-text').innerText;
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    }
}

function loadStory() {
    let stories = database[currentSubject].stories[currentLevel];
    document.getElementById('story-item-num').innerText = currentItemIndex + 1;
    document.getElementById('story-feedback').innerText = "";
    adjustProgressBar('story-progress', currentItemIndex, stories.length);
    
    let data = stories[currentItemIndex];
    document.getElementById('story-text').innerText = data.story;
    document.getElementById('story-question').innerText = data.question;
    
    let choicesBox = document.getElementById('story-answers');
    choicesBox.innerHTML = "";
    data.choices.forEach(choice => {
        let btn = document.createElement('button');
        btn.className = "option-node";
        btn.innerText = choice;
        btn.onclick = function() { checkStoryAnswer(choice, data.answer); };
        choicesBox.appendChild(btn);
    });
}

function checkStoryAnswer(chosen, correct) {
    let feedback = document.getElementById('story-feedback');
    if (chosen === correct) {
        feedback.innerHTML = "🎉 AWESOME! +5 Stars! ✨";
        feedback.style.color = "#4cd137";
        storyScore += 5;
        currentStreak += 1;
        playSoundEffect('correct');
        launchStarBurstEffect();
        updateScoreboardDisplay('story');
        
        let totalStories = database[currentSubject].stories[currentLevel].length;
        setTimeout(() => {
            currentItemIndex++;
            if (currentItemIndex >= totalStories) {
                adjustProgressBar('story-progress', totalStories, totalStories);
                setTimeout(() => {
                    handleLevelCompletionMedal();
                }, 300);
            } else {
                saveGameProgress();
                loadStory();
            }
        }, 1400);
    } else {
        feedback.innerHTML = "❌ Try looking closely again!";
        feedback.style.color = "#ff4757";
        currentStreak = 0;
        playSoundEffect('wrong');
        updateScoreboardDisplay('story');
    }
}

function generateMathQuestion() {
    document.getElementById('math-item-num').innerText = currentItemIndex + 1;
    document.getElementById('math-feedback').innerText = "";
    document.getElementById('math-answer').value = "";
    adjustProgressBar('math-progress', currentItemIndex, 15);
    
    let num1 = 0, num2 = 0;
    let isAddition = (currentMathType === 'addition');

    if (currentLevel === 'easy') {
        num1 = Math.floor(Math.random() * 6); num2 = Math.floor(Math.random() * 6);
    } else if (currentLevel === 'medium') {
        num1 = Math.floor(Math.random() * 11); num2 = Math.floor(Math.random() * 11);
    } else {
        num1 = Math.floor(Math.random() * 16) + 5; num2 = Math.floor(Math.random() * 11);
    }

    if (!isAddition && num1 < num2) { let t = num1; num1 = num2; num2 = t; }

    if (isAddition) {
        currentMathAnswer = num1 + num2; document.getElementById('math-question').innerText = `${num1} + ${num2}`;
    } else {
        currentMathAnswer = num1 - num2; document.getElementById('math-question').innerText = `${num1} - ${num2}`;
    }
}

function checkMathAnswer() {
    let userAnswer = parseInt(document.getElementById('math-answer').value);
    let feedback = document.getElementById('math-feedback');
    if (isNaN(userAnswer)) return;

    if (userAnswer === currentMathAnswer) {
        feedback.innerHTML = "🎉 CORRECT! Magic math power unlocked!";
        feedback.style.color = "#4cd137";
        mathScore += currentLevel === 'hard' ? 4 : 2;
        currentStreak += 1;
        playSoundEffect('correct');
        launchStarBurstEffect();
        updateScoreboardDisplay('math');
        setTimeout(() => {
            currentItemIndex++;
            if (currentItemIndex >= 15) {
                adjustProgressBar('math-progress', 15, 15);
                setTimeout(() => {
                    handleLevelCompletionMedal();
                }, 300);
            } else {
                saveGameProgress();
                generateMathQuestion();
            }
        }, 1400);
    } else {
        feedback.innerHTML = "❌ Take another look, you can do it!";
        feedback.style.color = "#ff4757";
        currentStreak = 0;
        playSoundEffect('wrong');
        updateScoreboardDisplay('math');
    }
}

window.onload = function() { checkSavedProgress(); };
