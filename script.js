// --- 55 COMPLETELY UNIQUE ENGLISH AND HYPHENATED TAGALOG WORDS PER LEVEL ---
const wordBank = {
    english: {
        easy: [
            "CAT", "DOG", "SUN", "BALL", "RED", "BOX", "BED", "CUP", "PIG", "HAT", 
            "RUN", "SIT", "MAP", "FUN", "BUG", "PEN", "HOT", "BIG", "NET", "TOP",
            "MUG", "PIN", "BUS", "LOG", "FAN", "BAT", "NUTS", "BAG", "CAR", "FOX",
            "HEN", "LIP", "WIG", "MAD", "SAD", "CAN", "DIG", "FIN", "JAM", "LEG",
            "MAN", "MOP", "POP", "RAT", "TAG", "TUB", "VAN", "WIN", "ZIP", "BOY",
            "TOY", "COW", "OWL", "CRY", "FLY"
        ],
        medium: [
            "FROG", "TREE", "FISH", "BOOK", "MILK", "BIRD", "CAKE", "DUCK", "HAND", "MOON", 
            "JUMP", "STAR", "WIND", "LAMP", "BOAT", "DEER", "DOOR", "RING", "SNAKE", "CRAB",
            "FLAG", "LEAF", "DRUM", "LION", "BEAR", "DESK", "NEST", "ROPE", "BONE", "SOAP",
            "COAT", "FOOT", "GOAT", "HAIR", "KITE", "MEAT", "RAIN", "SHIP", "SHOE", "SPOON",
            "SWAN", "TENT", "WALL", "YARN", "ZEBRA", "BABY", "COLD", "FIRE", "GIFT", "HOME",
            "PARK", "ROCK", "SEED", "WAVE", "YOYO"
        ],
        hard: [
            "HAPPY", "SPACE", "SCHOOL", "FRIEND", "ROCKET", "FLOWER", "ORANGE", "MONKEY", "BANANA", "BRIGHT", 
            "YELLOW", "WINDOW", "KITTEN", "ANIMAL", "TRAIN", "PENCIL", "APPLE", "CHAIR", "DOCTOR", "HOUSE",
            "CLOUDS", "FAMILY", "GARDEN", "TURTLE", "SPIDER", "RABBIT", "PURPLE", "COOKIES", "DOLLARS", "CRAYON",
            "SUMMER", "WINTER", "SQUIRREL", "BLANKET", "PILLOW", "JACKET", "SHADOW", "CHEESE", "BUTTER", "BREAD",
            "CHICKEN", "DOLPHIN", "OCTOPUS", "OSTRICH", "PENGUIN", "KANGAROO", "ELEPHANT", "FLAMINGO", "GIRAFFE", "HAMSTER",
            "LIZARD", "PARROT", "WIZARD", "CASTLE", "DRAGON"
        ]
    },
    tagalog: {
        easy: [
            "A-SO", "PU-SA", "I-BON", "BO-LA", "A-RAW", "BA-TA", "IS-DA", "GA-BI", "SA-YA", "MA-TA", 
            "LU-PA", "A-MA", "I-NA", "KA-IN", "TA-O", "SU-LAT", "DA-HON", "PU-NO", "U-LAP", "HA-RI",
            "AM-BON", "SA-GING", "KA-PE", "GA-TAS", "LA-SA", "LA-LA-KI", "BA-BA-E", "GU-LAY", "TU-BIG", "BA-HA",
            "A-LON", "PA-LA", "DI-LA", "I-LONG", "TA-I-NGA", "PA-A", "KA-MAY", "BU-HOK", "NGI-PIN", "BA-LE",
            "KU-TO", "LI-SA", "SI-LI", "U-PO", "GA-BI", "MA-NO", "SA-PA", "I-LOG", "LA-WA", "BU-KID",
            "KU-YA", "A-TE", "LO-LO", "LO-LA", "WI-KA"
        ],
        medium: [
            "PA-PEL", "LA-MOK", "PU-LANG", "BA-LON", "U-LAN", "LA-LA-KI", "BA-BA-E", "GU-LAY", "DA-HON", "PU-NO", 
            "TU-BIG", "U-LAP", "HA-RI", "AK-LAT", "PA-NGA-LAN", "MANG-GA", "LANG-GAM", "LAN-SA-NGAN", "ME-SA", "SI-YA",
            "KAN-DI-LA", "PANG-YAK", "A-LI-TAP-TAP", "BU-LAK-LAK", "SAM-PA-GUI-TA", "LANG-IT", "GU-BAT", "KU-NE-HO", "PAB-LO", "DA-GAT",
            "IS-LAND", "SANG-GOL", "KU-BYER-TOS", "SA-LA-MIN", "SA-RANG-GO-LA", "TSI-NE-LAS", "SANG-AY", "TI-NA-PAY", "HA-PU-NAN", "TANG-HA-LI-AN",
            "AL-MU-SAL", "LU-NES", "MAR-TES", "MI-YER-KU-LES", "HU-WE-BES", "BI-YER-NES", "SA-BA-DO", "LING-GO", "BA-HAY", "SIM-BA-HAN",
            "PA-A-RA-LAN", "PA-LENG-KE", "OS-PI-TAL", "KU-MOT", "U-NAN"
        ],
        hard: [
            "MA-SA-YA", "PA-A-RA-LAN", "MA-LA-KAS", "KAI-BI-GAN", "MA-BA-BAW", "PA-NGA-LAN", "KA-LA-WA-KAN", "A-LI-TAP-TAP", "HA-YOP", "BU-LAK-LAK", 
            "GA-YUN-DIN", "SI-NEG-WE-LAS", "BU-KID-NON", "MA-HI-WA-GA", "AL-MU-SAL", "BA-HAG-HA-RI", "E-RO-PLA-NO", "KA-SAY-SA-YAN", "MA-GA-LANG", "MA-TA-LI-NO",
            "MA-BAN-GO", "MA-LI-NIS", "MA-HIN-HIN", "MA-TA-PANG", "MA-PAG-MA-HAL", "MA-LIK-HA-IN", "MA-GI-TING", "MA-A-A-SA-HAN", "MA-KA-BA-YAN", "MA-LI-KOT",
            "MA-BI-LIS", "MA-BA-GAL", "MA-TA-AS", "MA-BA-BA-BA", "MA-LA-WAK", "MA-SI-KIP", "MA-I-NGAY", "TA-HI-MIK", "MA-DI-LIM", "MA-LI-WA-NAG",
            "MA-I-NIT", "MA-LA-MIG", "MA-SA-RAP", "MA-PA-IT", "MA-A-SIM", "MA-TAM-IS", "MA-A-LAT", "MA-DA-LAS", "MIN-SAN", "LA-GI",
            "KAI-LAN", "SA-AN", "PA-A-NO", "BA-KIT", "SI-NO"
        ]
    }
};

// --- BASE STORIES ---
const baseStoryBank = {
    english: {
        easy: [
            { story: "Leo is a little brown puppy. Leo loves playing with his blue ball in the green grass. One day, he lost his ball under the big wooden bed.", question: "What color is Leo's favorite ball?", choices: ["Red", "Blue", "Green"], answer: "Blue" },
            { story: "Max is a tiny yellow bird. He sings beautiful songs from the top of the mango tree every morning to wake up the sun.", question: "What kind of animal is Max?", choices: ["A cat", "A fish", "A bird"], answer: "A bird" },
            { story: "Kim has a shiny red cup. She loves to drink sweet orange juice from it after playing outside with her friends.", question: "What does Kim drink from her red cup?", choices: ["Water", "Orange juice", "Milk"], answer: "Orange juice" },
            { story: "Tim has a fat pink pig. The pig likes to play in the mud and eat green apples all day long.", question: "What color is Tim's pig?", choices: ["Pink", "Brown", "Black"], answer: "Pink" },
            { story: "Ben wears a blue hat. He walks to the park with his dad to watch the funny ducks swim in the pond.", question: "Where did Ben go with his dad?", choices: ["To school", "To the park", "To the shop"], answer: "To the park" }
        ],
        medium: [
            { story: "Mia visits her grandmother's farm every Saturday morning. She helps gather fresh eggs from the chicken coop and waters the red tomatoes.", question: "Where does Mia spend her Saturday morning?", choices: ["At the school", "At the farm", "At the city park"], answer: "At the farm" },
            { story: "Ben builds a big sandcastle at the beach. He puts a shiny pink shell on top as a flag. A small crab comes out to see it.", question: "What did Ben put on top of his sandcastle?", choices: ["A pink shell", "A green leaf", "A yellow feather"], answer: "A pink shell" },
            { story: "Toby the frog lives near a clear pond. He jumps high to catch buzzing flies. At night, he sleeps comfortably under a large green lily pad.", question: "Where does Toby sleep at night?", choices: ["In a tree house", "Under a green lily pad", "Inside a wooden box"], answer: "Under a green lily pad" },
            { story: "Sara has a box of crayons. She uses the yellow crayon to draw a bright sun and the blue crayon to draw a quiet river.", question: "What did Sara draw with her blue crayon?", choices: ["A bright sun", "A quiet river", "A green tree"], answer: "A quiet river" },
            { story: "An owl sits on a high tree branch under the silver moon. He closes his eyes and listens to the whispering wind during the night.", question: "When does the owl sit on the branch?", choices: ["In the morning", "At night", "In the afternoon"], answer: "At night" }
        ],
        hard: [
            { story: "Pip is an adventurous green frog who packed a tiny backpack filled with delicious flies and hopped bravely into the dark forest looking for the legendary golden pond.", question: "What food did Pip pack inside his tiny backpack?", choices: ["Sweet worms", "Delicious flies", "Fresh leaves"], answer: "Delicious flies" },
            { story: "Luna the white kitten discovered a glowing purple key hidden inside an old wooden chest in the attic. When she touched it, her whiskers sparkled with magic.", question: "Where did Luna find the glowing purple key?", choices: ["In the garden", "In an old wooden chest", "Under the kitchen rug"], answer: "In an old wooden chest" },
            { story: "Oliver the monkey loves climbing tall banana trees in the jungle. His best friend is a colorful parrot who helps him find the sweetest yellow bananas.", question: "Who is Oliver's best friend in the jungle?", choices: ["A colorful parrot", "A little frog", "A sleepy tiger"], answer: "A colorful parrot" },
            { story: "Bella went to school on a rainy Tuesday. She brought a big bright umbrella covered in yellow stars to protect her school bag from getting wet.", question: "What was printed on Bella's umbrella?", choices: ["Red apples", "Yellow stars", "Blue fish"], answer: "Yellow stars" },
            { story: "A silver rocket ship zoomed past the moon, carrying two brave astronauts on a special mission to explore the dusty red planet called Mars.", question: "Where is the silver rocket ship traveling to?", choices: ["The glowing sun", "The red planet Mars", "A hidden deep ocean"], answer: "The red planet Mars" }
        ]
    },
    tagalog: {
        easy: [
            { story: "May alagang pusa si Lito. Ang pangalan nito ay si Muning. Kulay puti ang balahibo ni Muning at paborito niyang uminom ng gatas.", question: "Anong kulay ang balahibo ng alagang pusa ni Lito?", choices: ["Itim", "Puti", "Kayumanggi"], answer: "Puti" },
            { story: "Si Susi ay isang pulang bola. Gumugulong siya sa damuhan araw-araw kasama ang aso na si Tagpi.", question: "Ano si Susi sa maikling kwento?", choices: ["Isang aso", "Isang pusa", "Isang bola"], answer: "Isang bola" },
            { story: "Maliwanag ang araw ngayon. Lumabas si Ana para maglaro ng saranggola sa malawak na bukid.", question: "Ano ang ginawa ni Ana sa bukid ngayon?", choices: ["Kumain ng saging", "Maglaro ng saranggola", "Matulog sa kubo"], answer: "Maglaro ng saranggola" },
            { story: "Masarap ang gatas na iniinom ni Baby bago siya matulog sa gabi. Binili ito ni Nanay sa tindahan.", question: "Sino ang bumili ng masarap na gatas?", choices: ["Si Nanay", "Si Tatay", "Si Kuya"], answer: "Si Nanay" },
            { story: "May lumilipad na ibon sa tapat ng aming bahay. Umaawit siya ng masayang kanta sa ibabaw ng puno.", question: "Saan umaawit ang lumilipad na ibon?", choices: ["Sa bubong", "Sa ibabaw ng puno", "Sa daan"], answer: "Sa ibabaw ng puno" }
        ],
        medium: [
            { story: "Maagang gumising si Ana para tulungan si Nanay sa kusina. Nagluto sila ng masarap na pandesal at sinangag para sa almusal ng pamilya.", question: "Ano ang niluto nina Ana at Nanay?", choices: ["Saging at Isda", "Pandesal at Sinangag", "Sopas at Tinapay"], answer: "Pandesal at Sinangag" },
            { story: "Bumili si Tatay ng limang matamis na mangga galing sa palengke. Ipinamahagi niya ito sa mga batang masipag maglinis ng bakuran.", question: "Ilang mangga ang binili ni Tatay sa palengke?", choices: ["Tatlo", "Lima", "Sampu"], answer: "Lima" },
            { story: "Lumilipad nang mataas ang saranggola ni Pablo sa asul na langit. Gawa ito sa makulay na papel at manipis na kawayan.", question: "Saan gawa ang lumilipad na saranggola ni Pablo?", choices: ["Papel at kawayan", "Plastik at sinulid", "Dahon at kahoy"], answer: "Papel at kawayan" },
            { story: "May isang maliit na kuneho na nagtatago sa ilalim ng halaman. Mahilig siyang kumain ng sariwang gulay tuwing umaga.", question: "Ano ang paboritong kainin ng maliit na kuneho?", choices: ["Matamis na saging", "Sariwang gulay", "Masarap na tinapay"], answer: "Sariwang gulay" },
            { story: "Malakas ang ulan kagabi kaya natulog si Lito gamit ang makapal na kumot na ibinigay ng kanyang Lola.", question: "Bakit gumamit si Lito ng makapal na kumot?", choices: ["Dahil mainit ang panahon", "Dahil malakas ang ulan", "Dahil gabi na"], answer: "Dahil malakas ang ulan" }
        ],
        hard: [
            { story: "Si Tikoy ay isang munting alitaptap na takot sa dinlim. Sa tulong ng kanyang mga kaibigang bubuyog, nakahanap siya ng mahiwagang bulaklak na nagpanumbalik ng kanyang kislap.", question: "Sino ang tumulong kay Tikoy noong nawala ang kanyang liwanag?", choices: ["Mga bubuyog", "Ang munting ibon", "Ang mabait na matanda"], answer: "Mga bubuyog" },
            { story: "Si Caleb ay sumakay sa isang malaking bangka patungo sa pulo ng Camiguin. Habang naglalakbay, nakakita siya ng mga mapaglarong lumba-lumba na sumasayaw sa ibabaw ng asul na dagat.", question: "Anong mga hayop ang nakita ni Caleb sa dagat?", choices: ["Mga pating", "Mga lumba-lumba", "Mga dambuhalang pugita"], answer: "Mga lumba-lumba" },
            { story: "Isang mahiwagang ibon ang lumapag sa hardin ni Prinsipe Juan. Ang mga balahibo nito ay parang bahaghari at ang kanyang awit ay nakapagpapagaling ng maysakit.", question: "Ano ang kapangyarihan ng awit ng mahiwagang ibon?", choices: ["Nakakapagpatubo ng puno", "Nakakapagpapagaling ng maysakit", "Nakakapagpabago ng panahon"], answer: "Nakakapagpapagaling ng maysakit" },
            { story: "Maagang sumakay sa eroplano si Maria patungong Palawan para bisitahin ang sikat na Underground River kasama ang buong pamilya.", question: "Saan pupunta si Maria kasama ang kanyang pamilya?", choices: ["Sa Underground River", "Sa Bulkang Mayon", "Sa Luneta Park"], answer: "Sa Underground River" },
            { story: "Si Lolo Manuel ay gumagawa ng isang magandang mesa gamit ang matibay na kahoy mula sa puno ng narra na itinanim niya noong bata pa siya.", question: "Anong uri ng puno ang ginamit ni Lolo Manuel sa mesa?", choices: ["Puno ng mangga", "Puno ng narra", "Puno ng niyog"], answer: "Puno ng narra" }
        ]
    }
};

// --- STATE MANAGER ---
let currentSubject = '';   
let currentReadingType = ''; 
let currentMathType = ''; 
let currentLevel = 'easy';      

let currentItemIndex = 0; 
let readingScore = 0;
let storyScore = 0;
let mathScore = 0;
let currentMathAnswer = 0;

const synth = window.speechSynthesis;

// --- STORAGE SAVE SYSTEM ---
function saveGameProgress() {
    const progressData = {
        currentSubject,
        currentReadingType,
        currentMathType,
        currentLevel,
        currentItemIndex,
        readingScore,
        storyScore,
        mathScore
    };
    localStorage.setItem("caileysStudyProgress", JSON.stringify(progressData));
}

// --- STORAGE LOAD SYSTEM ---
function checkSavedProgress() {
    const savedData = localStorage.getItem("caileysStudyProgress");
    
    if (savedData) {
        const progress = JSON.parse(savedData);
        
        // Human-friendly title parser for the pop-up notification
        let modeLabel = "";
        if (progress.currentSubject === 'math') {
            modeLabel = `Math (${progress.currentMathType})`;
        } else {
            let typeLabel = progress.currentReadingType === 'words' ? 'Words' : 'Stories';
            modeLabel = `${progress.currentSubject.toUpperCase()} ${typeLabel}`;
        }

        const confirmMessage = `🌟 Welcome Back Cailey! 🌟\n\nWe found your saved session:\n📍 ${modeLabel} - ${progress.currentLevel.toUpperCase()} (Item ${progress.currentItemIndex + 1})\n\nWould you like to CONTINUE where you left off? \n[Click Cancel to Start Completely Fresh!]`;
        
        if (confirm(confirmMessage)) {
            // Restore variable states
            currentSubject = progress.currentSubject;
            currentReadingType = progress.currentReadingType;
            currentMathType = progress.currentMathType;
            currentLevel = progress.currentLevel;
            currentItemIndex = progress.currentItemIndex;
            readingScore = progress.readingScore || 0;
            storyScore = progress.storyScore || 0;
            mathScore = progress.mathScore || 0;
            
            // Fast-forward directly into the saved game engine
            launchActiveGameView();
        } else {
            // Clear storage memory if they choose to wipe and start over
            localStorage.removeItem("caileysStudyProgress");
        }
    }
}

// Utility pipeline to bypass the main menus when launching a saved game
function launchActiveGameView() {
    hideAllSections();
    if (currentSubject === 'math') {
        let label = currentMathType === 'addition' ? "ADD" : "SUB";
        document.getElementById('math-level-title').innerText = `Math Magic! (${label} - ${currentLevel.toUpperCase()})`;
        document.getElementById('math-game').style.display = 'block';
        updateScoreboardDisplay('math');
        generateMathQuestion();
    } else {
        if (currentReadingType === 'words') {
            document.getElementById('reading-title').innerText = `${currentSubject === 'english' ? '🔤 English' : '🇵🇭 Tagalog'} Words (${currentLevel.toUpperCase()})`;
            document.getElementById('reading-game').style.display = 'block';
            
            let audioBtn = document.getElementById('audio-btn');
            if (audioBtn) {
                audioBtn.style.display = (currentSubject === 'tagalog') ? 'none' : 'inline-block';
            }
            updateScoreboardDisplay('reading');
            displayWord();
        } else {
            document.getElementById('story-title').innerText = `${currentSubject === 'english' ? '📚 English' : '🇵🇭 Tagalog'} Stories (${currentLevel.toUpperCase()})`;
            document.getElementById('story-game').style.display = 'block';
            updateScoreboardDisplay('story');
            loadStory();
        }
    }
}

function hideAllSections() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('type-menu').style.display = 'none';
    document.getElementById('math-type-menu').style.display = 'none'; 
    document.getElementById('difficulty-menu').style.display = 'none';
    document.getElementById('reading-game').style.display = 'none';
    document.getElementById('story-game').style.display = 'none';
    document.getElementById('math-game').style.display = 'none';
}

function goHome() {
    hideAllSections();
    document.getElementById('main-menu').style.display = 'flex';
}

// --- BACK NAVIGATION LOGIC ---
function handleDifficultyBack() {
    hideAllSections();
    if (currentSubject === 'math') {
        document.getElementById('math-type-menu').style.display = 'block'; 
    } else {
        document.getElementById('type-menu').style.display = 'block';
    }
}

function handleGameBack() {
    hideAllSections();
    document.getElementById('difficulty-menu').style.display = 'block';
}

// --- MENU SELECTION CONTROLS ---
function selectSubject(subject) {
    currentSubject = subject;
    hideAllSections();
    
    if (subject === 'math') {
        document.getElementById('math-type-menu').style.display = 'block'; 
    } else {
        document.getElementById('type-menu-title').innerText = subject === 'english' ? "🔤 English Mission" : "🇵🇭 Tagalog Mission";
        document.getElementById('type-menu').style.display = 'block';
    }
}

function selectReadingType(type) {
    currentReadingType = type;
    hideAllSections();
    
    let subjectText = currentSubject === 'english' ? "English" : "Tagalog";
    let modeText = type === 'words' ? "Words" : "Stories";
    
    document.getElementById('difficulty-menu-title').innerText = `✨ ${subjectText} ${modeText}`;
    document.getElementById('difficulty-menu').style.display = 'block';
}

function selectMathType(type) {
    currentMathType = type;
    hideAllSections();
    
    let label = type === 'addition' ? "Addition (+)" : "Subtraction (-)";
    document.getElementById('difficulty-menu-title').innerText = `🔢 Math Magic: ${label}`;
    document.getElementById('difficulty-menu').style.display = 'block';
}

function selectLevel(level) {
    currentLevel = level;
    currentItemIndex = 0; 
    saveGameProgress(); // Save fresh level configuration initial state
    launchActiveGameView();
}

// --- DYNAMIC STAR FX ENGINE ---
function launchStarBurstEffect() {
    const container = document.getElementById('star-animation-container');
    const starCount = 12;
    const colors = ['#fff200', '#ff007f', '#00e5ff', '#2ed573', '#ff9f43'];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'burst-star';
        star.innerText = '⭐';
        star.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.top = '50%';
        star.style.left = '50%';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const xDelta = Math.cos(angle) * distance;
        const yDelta = Math.sin(angle) * distance;
        const randomRotation = 90 + Math.random() * 360;
        
        star.style.setProperty('--tw-x', `${xDelta}px`);
        star.style.setProperty('--tw-y', `${yDelta}px`);
        star.style.setProperty('--tw-r', `${randomRotation}deg`);
        
        container.appendChild(star);
        setTimeout(() => star.remove(), 800);
    }
}

function calculateRankLabel(score) {
    if (score >= 100) return '💎 Diamond Champion';
    if (score >= 60) return '👑 Gold Elite';
    if (score >= 30) return '🥈 Silver Star';
    return '🥉 Rookie';
}

function updateScoreboardDisplay(mode) {
    let scoreVal, scoreEl, rankEl;
    
    if (mode === 'reading') {
        scoreVal = readingScore;
        scoreEl = document.getElementById('reading-score');
        rankEl = document.getElementById('reading-rank');
    } else if (mode === 'story') {
        scoreVal = storyScore;
        scoreEl = document.getElementById('story-score');
        rankEl = document.getElementById('story-rank');
    } else {
        scoreVal = mathScore;
        scoreEl = document.getElementById('math-score');
        rankEl = document.getElementById('math-rank');
    }
    
    scoreEl.innerText = scoreVal;
    rankEl.innerText = calculateRankLabel(scoreVal);
    
    let wrapper = scoreEl.parentElement;
    wrapper.classList.remove('score-pop');
    void wrapper.offsetWidth; 
    wrapper.classList.add('score-pop');
}

// --- SINGLE WORDS ENGINE ---
function displayWord() {
    document.getElementById('word-item-num').innerText = currentItemIndex + 1;
    let list = wordBank[currentSubject][currentLevel];
    document.getElementById('word-text').innerText = list[currentItemIndex];
}

function nextWord() {
    readingScore += 1;
    launchStarBurstEffect();
    updateScoreboardDisplay('reading');
    
    currentItemIndex++;
    if (currentItemIndex >= 55) { 
        alert(`🎉 Incredible Job, Cailey! You mastered all 55 ${currentLevel} words!`);
        currentItemIndex = 0;
        localStorage.removeItem("caileysStudyProgress"); // Wipe level data since it's fully complete
        handleGameBack();
        return;
    }
    
    saveGameProgress(); // Automatically checkpoint save on word transition
    displayWord();
}

function speakWord() {
    if (currentSubject === 'english') {
        let word = document.getElementById('word-text').innerText;
        let utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    }
}

// --- STORIES ENGINE ---
function loadStory() {
    document.getElementById('story-item-num').innerText = currentItemIndex + 1;
    document.getElementById('story-feedback').innerText = "";
    
    let stories = baseStoryBank[currentSubject][currentLevel];
    let data = stories[currentItemIndex % stories.length];
    
    document.getElementById('story-text').innerText = data.story;
    document.getElementById('story-question').innerText = data.question;
    
    let choicesBox = document.getElementById('story-answers');
    choicesBox.innerHTML = "";
    
    data.choices.forEach(choice => {
        let btn = document.createElement('button');
        btn.className = "choice-btn";
        btn.innerText = choice;
        btn.onclick = function() { checkStoryAnswer(choice, data.answer); };
        choicesBox.appendChild(btn);
    });
}

function checkStoryAnswer(chosen, correct) {
    let feedback = document.getElementById('story-feedback');
    if (chosen === correct) {
        feedback.innerHTML = "🎉 AWESOME JOB, CAILEY! +5 Stars!";
        feedback.style.color = "#2ed573";
        
        storyScore += 5;
        launchStarBurstEffect();
        updateScoreboardDisplay('story');
        
        setTimeout(() => {
            currentItemIndex++;
            if (currentItemIndex >= 55) {
                alert(`🎉 Superstar! You completed all 55 story items!`);
                currentItemIndex = 0;
                localStorage.removeItem("caileysStudyProgress");
                handleGameBack();
            } else {
                saveGameProgress(); // Checkpoint state updates saved right here
                loadStory();
            }
        }, 1500);
    } else {
        feedback.innerHTML = "❌ Try reading again! You can do it!";
        feedback.style.color = "#ff4757";
    }
}

// --- MATH ENGINE ---
function generateMathQuestion() {
    document.getElementById('math-item-num').innerText = currentItemIndex + 1;
    document.getElementById('math-feedback').innerText = "";
    document.getElementById('math-answer').value = "";
    
    let num1 = 0, num2 = 0;
    let isAddition = (currentMathType === 'addition'); 

    if (currentLevel === 'easy') {
        num1 = Math.floor(Math.random() * 6); 
        num2 = Math.floor(Math.random() * 6); 
    } else if (currentLevel === 'medium') {
        num1 = Math.floor(Math.random() * 11); 
        num2 = Math.floor(Math.random() * 11);
    } else {
        num1 = Math.floor(Math.random() * 16) + 5; 
        num2 = Math.floor(Math.random() * 11);     
    }

    if (!isAddition && num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (isAddition) {
        currentMathAnswer = num1 + num2;
        document.getElementById('math-question').innerText = `${num1} + ${num2}`;
    } else {
        currentMathAnswer = num1 - num2;
        document.getElementById('math-question').innerText = `${num1} - ${num2}`;
    }
}

function checkMathAnswer() {
    let userAnswer = parseInt(document.getElementById('math-answer').value);
    let feedback = document.getElementById('math-feedback');

    if (isNaN(userAnswer)) return;

    if (userAnswer === currentMathAnswer) {
        feedback.innerHTML = "🎉 CORRECT! Rocket powered up!";
        feedback.style.color = "#2ed573";
        
        let awardedStars = 2;
        if (currentMathType === 'subtraction') awardedStars += 1;
        if (currentLevel === 'hard') awardedStars += 2;
        
        mathScore += awardedStars;
        launchStarBurstEffect();
        updateScoreboardDisplay('math');
        
        setTimeout(() => {
            currentItemIndex++;
            if (currentItemIndex >= 55) {
                alert("🚀 AMAZING WORK CAILEY! You finished all 55 math problems!");
                currentItemIndex = 0;
                localStorage.removeItem("caileysStudyProgress");
                handleGameBack();
            } else {
                saveGameProgress(); // Lock in progress state after correct answer
                generateMathQuestion();
            }
        }, 1500);
    } else {
        feedback.innerHTML = "❌ Try again, Cailey! Look closely!";
        feedback.style.color = "#ff4757";
    }
}

// --- APP INITIALIZATION ---
// This hook fires instantly when the window finishes rendering
window.onload = function() {
    checkSavedProgress();
};

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {};
}