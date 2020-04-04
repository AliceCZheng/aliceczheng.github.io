var randomCodeArray = [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],[2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],[3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],[4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2]];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomCodeIndex = [[22, 10, 14, 3, 5 ,0, 6, 1], [13, 16, 12, 21, 23, 8, 7, 17], [ 1,23,17, 5,22, 6, 2, 7],[ 3,14,13,8,15,18, 4,20],[16,2,18,19, 1,11,12, 6],[ 9,4,22, 3,15,10, 5,17],[14,0,23, 8,21, 7,20,13],[18,6, 4, 8,23,10,13,0],[5, 9,21,22,14, 1, 3,11],[17,16,2,20,12,15,19,7],[ 11,8, 5, 6,10,21,12,17],[3, 7,22, 5, 6, 9,11,19]];

var randomWordArray = ["ACCOUNT", "ACE", "ACT", "ACTION", "ACTOR", "ADDITION", "ADVERTISEMENT", "ADVICE", "AFRICA", "AFTERNOON", "AGE", "AGENT", "AGREEMENT", "AIR", "AIRPLANE", "AIRPORT", "ALARM", "ALASKA", "ALIEN", "ALLEY", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "AMUSEMENT", "ANCHOR", "ANGEL", "ANGER", "ANGLE", "ANIMAL", "ANT", "ANTARCTICA", "ANTHEM", "APPARATUS", "APPLE", "APPLIANCE", "APPROVAL", "APRON", "ARC", "ARCH", "ARGUMENT", "ARITHMETIC", "ARM", "ARMOR", "ARMY", "ART", "ARTHUR", "ASH", "ASTRONAUT", "ATLANTIS", "ATTACK", "ATTENTION", "ATTIC", "ATTRACTION", "AUSTRALIA", "AUTHORITY", "AVALANCHE", "AXE", "AZTEC", "BABY", "BACK", "BACON", "BADGE", "BAG", "BAIT", "BALANCE", "BALL", "BALLOON", "BANANA", "BAND", "BANG", "BANK", "BAR", "BARBECUE", "BARK", "BASE", "BASKET", "BASS", "BAT", "BATH", "BATTERY", "BATTLE", "BATTLESHIP", "BAY", "BEACH", "BEAD", "BEAM", "BEAN", "BEAR", "BEARD", "BEAST", "BEAT", "BED", "BEDROOM", "BEE", "BEEF", "BEER", "BEGGAR", "BEGINNER", "BEHAVIOR", "BEIJING", "BELIEF", "BELL", "BELT", "BEN", "BENCH", "BERLIN", "BERMUDA", "BERRY", "BICYCLE", "BIG", "BIKINI", "BILL", "BIRD", "BIRTH", "BIRTHDAY", "BISCUIT", "BIT", "BITE", "BLACKSMITH", "BLADE", "BLIND", "BLIZZARD", "BLOCK", "BLOOD", "BLOW", "BLUES", "BOARD", "BOAT", "BODY", "BOIL", "BOLT", "BOMB", "BOND", "BONE", "BOOK", "BOOM", "BOOT", "BORDER", "BOSS", "BOTTLE", "BOUNDARY", "BOW", "BOWL", "BOWLER", "BOX", "BOXER", "BRAIN", "BRAKE", "BRANCH", "BRASS", "BRAZIL", "BREAD", "BREAK", "BREAKFAST", "BREATH", "BRICK", "BRIDE", "BRIDGE", "BROTHER", "BRUSH", "BUBBLE", "BUCK", "BUCKET", "BUFFALO", "BUG", "BUGLE", "BUILDING", "BULB", "BULL", "BUN", "BUNK", "BURN", "BUSH", "BUSINESS", "BUTTER", "BUTTERFLY", "BUTTON", "CABBAGE", "CABLE", "CACTUS", "CAESAR", "CAKE", "CALCULATOR", "CALENDAR", "CALF", "CAMERA", "CAMP", "CAN", "CANADA", "CANE", "CANNON", "CANVAS", "CAP", "CAPITAL", "CAPTAIN", "CAPTION", "CAR", "CARD", "CARE", "CARPENTER", "CARRIAGE", "CARROT", "CART", "CASINO", "CAST", "CASTLE", "CAT", "CATTLE", "CAVE", "CELERY", "CELL", "CELLAR", "CEMETERY", "CENT", "CENTAUR", "CENTER", "CHAIN", "CHAIR", "CHALK", "CHANCE", "CHANGE", "CHANNEL", "CHARGE", "CHECK", "CHEESE", "CHERRY", "CHESS", "CHEST", "CHICK", "CHICKEN", "CHILDREN", "CHIN", "CHINA", "CHIP", "CHOCOLATE", "CHRISTMAS", "CHURCH", "CIRCLE", "CLAM", "CLASS", "CLEOPATRA", "CLIFF", "CLOAK", "CLOCK", "CLOTH", "CLOUD", "CLUB", "COACH", "COAL", "COAST", "COAT", "COBWEB", "CODE", "COFFEE", "COIL", "COLD", "COLLAR", "COLOR", "COLUMBUS", "COMB", "COMET", "COMFORT", "COMIC", "COMMITTEE", "COMPANY", "COMPETITION", "COMPOUND", "COMPUTER", "CONCERT", "CONDITION", "CONDUCTOR", "CONE", "CONNECTION", "CONTRACT", "CONTROL", "COOK", "COPPER", "COPY", "CORD", "CORK", "CORN", "COTTON", "COUGH", "COUNTRY", "COURT", "COVER", "COW", "COWBOY", "CRAB", "CRACK", "CRACKER", "CRAFT", "CRANE", "CRASH", "CRATE", "CRAYON", "CREAM", "CREATOR", "CREATURE", "CREDIT", "CRIB", "CRICKET", "CRIME", "CROOK", "CROSS", "CROW", "CROWD", "CROWN", "CRUSADER", "CRUSH", "CRYSTAL", "CUB", "CUCKOO", "CUP", "CURRENT", "CURRY", "CURTAIN", "CURVE", "CUSHION", "CYCLE", "DANCE", "DASH", "DATE", "DAY", "DEATH", "DEBT", "DECISION", "DECK", "DEER", "DEGREE", "DELTA", "DENTIST", "DESIGN", "DESIRE", "DESK", "DESTRUCTION", "DETAIL", "DEVELOPMENT", "DIAMOND", "DICE", "DIGESTION", "DIME", "DINNER", "DINOSAUR", "DIRECTION", "DIRECTOR", "DIRT", "DISCOVERY", "DISCUSSION", "DISEASE", "DISGUST", "DISK", "DISTANCE", "DISTRIBUTION", "DIVER", "DIVISION", "DOCK", "DOCTOR", "DOG", "DOLL", "DOLLAR", "DONKEY", "DOOR", "DOWNTOWN", "DRAFT", "DRAGON", "DRAIN", "DRAWER", "DRAWING", "DREAM", "DRESS", "DRESSING", "DRILL", "DRINK", "DRIVER", "DRIVING", "DRONE", "DROP", "DRUG", "DRUM", "DRYER", "DUCK", "DUST", "DWARF", "EAGLE", "EAR", "EARTH", "EARTHQUAKE", "EASTER", "EDEN", "EDGE", "EDUCATION", "EFFECT", "EGG", "EGGNOG", "EGYPT", "EINSTEIN", "ELBOW", "ELEPHANT", "EMBASSY", "END", "ENGINE", "ENGLAND", "ERROR", "EUROPE", "EVENT", "EXAMPLE", "EXCHANGE", "EXISTENCE", "EXPANSION", "EXPERIENCE", "EXPERT", "EYE", "FACE", "FACT", "FAIR", "FAIRY", "FALL", "FAMILY", "FAN", "FANG", "FARM", "FARMER", "FATHER", "FAUCET", "FEAR", "FEAST", "FEATHER", "FEELING", "FENCE", "FEVER", "FICTION", "FIDDLE", "FIELD", "FIGHT", "FIGHTER", "FIGURE", "FILE", "FILM", "FINGER", "FIRE", "FIREMAN", "FISH", "FLAG", "FLAME", "FLAT", "FLAVOR", "FLESH", "FLIGHT", "FLOCK", "FLOOD", "FLOOR", "FLOWER", "FLUTE", "FLY", "FOAM", "FOG", "FOLD", "FOOD", "FOOT", "FORCE", "FOREST", "FORK", "FORM", "FOWL", "FRAME", "FRANCE", "FRICTION", "FRIEND", "FROG", "FROGS", "FRONT", "FROST", "FRUIT", "FUEL", "FURNITURE", "GAME", "GANGSTER", "GARDEN", "GAS", "GATE", "GEAR", "GENIE", "GENIUS", "GERMANY", "GHOST", "GIANT", "GIRAFFE", "GLACIER", "GLASS", "GLASSES", "GLOVE", "GLUE", "GOAT", "GOLD", "GOLDFISH", "GOLDILOCKS", "GOLF", "GOOSE", "GOVERNMENT", "GOVERNOR", "GRACE", "GRADE", "GRAIN", "GRAPE", "GRASS", "GREECE", "GREEN", "GREENHOUSE", "GRIP", "GROOM", "GROUND", "GROUP", "GROWTH", "GUIDE", "GUITAR", "GUM", "GUN", "GYMNAST", "HAIR", "HAIRCUT", "HALL", "HALLOWEEN", "HAM", "HAMBURGER", "HAMMER", "HAND", "HARBOR", "HARMONY", "HAT", "HATE", "HAWAII", "HAWK", "HEAD", "HEALTH", "HEART", "HEAT", "HELICOPTER", "HELMET", "HELP", "HEN", "HERCULES", "HIDE", "HILL", "HIMALAYAS", "HISTORY", "HIT", "HOBBY", "HOLE", "HOLIDAY", "HOLLYWOOD", "HOME", "HOMER", "HONEY", "HOOD", "HOOK", "HOPE", "HORN", "HORSE", "HORSESHOE", "HOSE", "HOSPITAL", "HOT", "HOTEL", "HOUR", "HOUSE", "HUMOR", "HYDRANT", "ICE", "ICELAND", "ICICLE", "IDEA", "IGLOO", "IMPULSE", "INCOME", "INCREASE", "INDIA", "INDUSTRY", "INK", "INSECT", "INSTRUMENT", "INSURANCE", "INTEREST", "INVENTION", "IRON", "ISLAND", "IVORY", "JACK", "JAIL", "JAM", "JAR", "JEANS", "JELLY", "JELLYFISH", "JET", "JEWEL", "JEWELER", "JOAN", "JOCKEY", "JOIN", "JOKE", "JOKER", "JOURNEY", "JUDGE", "JUICE", "JUMP", "JUMPER", "JUPITER", "KANGAROO", "KETCHUP", "KETTLE", "KEY", "KICK", "KID", "KILT", "KING", "KISS", "KITCHEN", "KITE", "KITTEN", "KIWI", "KNEE", "KNIFE", "KNIGHT", "KNOT", "KNOWLEDGE", "KUNG FU", "LAB", "LABORER", "LACE", "LADDER", "LADYBUG", "LAKE", "LAMP", "LAND", "LANGUAGE", "LAP", "LASER", "LAUGH", "LAUNDRY", "LAWYER", "LEAD", "LEAF", "LEARNING", "LEATHER", "LEG", "LEMON", "LEMONADE", "LEPRECHAUN", "LETTER", "LETTUCE", "LEVEL", "LIBRARY", "LIFE", "LIFT", "LIGHT", "LIGHTNING", "LIMIT", "LIMOUSINE", "LINE", "LINEN", "LINK", "LION", "LIP", "LIQUID", "LIST", "LITTER", "LIZARD", "LOAF", "LOCH", "LOCK", "LOCKET", "LOCUST", "LOG", "LONDON", "LOOK", "LOSS", "LOVE", "LUCK", "LUMBERJACK", "LUNCH", "LUNCHROOM", "MACHINE", "MAGAZINE", "MAGIC", "MAGICIAN", "MAID", "MAIL", "MAILBOX", "MAKEUP", "MAMMOTH", "MANAGER", "MANICURE", "MAP", "MAPLE", "MARATHON", "MARBLE", "MARCH", "MARK", "MARKET", "MASK", "MASS", "MATCH", "MEAL", "MEASURE", "MEAT", "MEDIC", "MEETING", "MEMORY", "MERCURY", "MESS", "METAL", "METER", "MEXICO", "MICROSCOPE", "MICROWAVE", "MIDDLE", "MILE", "MILK", "MILL", "MILLIONAIRE", "MIND", "MINE", "MINISTER", "MINOTAUR", "MINT", "MINUTE", "MIRROR", "MISS", "MISSILE", "MIST", "MITTEN", "MODEL", "MOHAWK", "MOLE", "MONEY", "MONKEY", "MONTH", "MOON", "MORNING", "MOSCOW", "MOSES", "MOSQUITO", "MOTHER", "MOTION", "MOUNT", "MOUNTAIN", "MOUNTIE", "MOUSE", "MOUTH", "MOVE", "MUD", "MUG", "MUMMY", "MUSCLE", "MUSIC", "MUSKETEER", "MUSTARD", "NAIL", "NAME", "NAPOLEON", "NATION", "NECK", "NEED", "NEEDLE", "NERVE", "NESS", "NEST", "NET", "NEW", "NEWS", "NEWTON", "NIGHT", "NINJA", "NOAH", "NOISE", "NORTH", "NOSE", "NOTE", "NOTEBOOK", "NOTRE", "NOVEL", "NUMBER", "NURSE", "NUT", "NYLON", "OASIS", "OATMEAL", "OBSERVATION", "OCEAN", "OCTOPUS", "OFFER", "OFFICE", "OIL", "OLIVE", "OLYMPUS", "ONION", "OPERA", "OPERATION", "OPINION", "ORANGE", "ORDER", "ORGAN", "ORGANIZATION", "ORNAMENT", "OVEN", "OWL", "OWNER", "PACIFIC", "PAD", "PADDLE", "PAGE", "PAIN", "PAINT", "PALM", "PAN", "PANCAKE", "PANTS", "PAPER", "PARACHUTE", "PARADE", "PARCEL", "PARENT", "PARK", "PARROT", "PART", "PARTNER", "PARTY", "PASS", "PASSENGER", "PASTE", "PATCH", "PATIENT", "PAYMENT", "PEA", "PEACE", "PEACH", "PEANUT", "PEAR", "PEARL", "PEN", "PENCIL", "PENGUIN", "PENNY", "PENTAGON", "PEPPER", "PEST", "PET", "PEW", "PHOENIX", "PIANO", "PICKLE", "PICTURE", "PIE", "PIG", "PILLOW", "PILOT", "PIN", "PINE", "PIPE", "PIRATE", "PISTOL", "PITCH", "PITCHER", "PIZZA", "PLACE", "PLANE", "PLANT", "PLANTATION", "PLASTIC", "PLATE", "PLATYPUS", "PLAY", "PLAYGROUND", "PLEASURE", "PLOT", "PLOUGH", "POCKET", "POINT", "POISON", "POLE", "POLICE", "POLISH", "POLLUTION", "POLO", "POOL", "POP", "POPCORN", "PORT", "PORTER", "POSITION", "POST", "POT", "POTATO", "POTTER", "POUND", "POWDER", "POWER", "PRESS", "PRICE", "PRINCESS", "PRINT", "PRISON", "PROCESS", "PRODUCE", "PROFIT", "PROPERTY", "PROSE", "PROTEST", "PULL", "PUMP", "PUMPKIN", "PUNISHMENT", "PUPIL", "PUPPET", "PURPOSE", "PURSE", "PUSH", "PYRAMID", "QUACK", "QUARTER", "QUARTZ", "QUEEN", "QUESTION", "QUICKSAND", "QUIET", "QUILL", "QUILT", "QUIVER", "RABBIT", "RACKET", "RADIO", "RAIL", "RAILWAY", "RAIN", "RAINBOW", "RAINSTORM", "RAKE", "RAM", "RANCH", "RANGE", "RAT", "RATE", "RAY", "RAZOR", "REACTION", "READING", "REASON", "RECEIPT", "RECESS", "RECORD", "REGRET", "REINDEER", "RELATION", "RELIGION", "REPRESENTATIVE", "REQUEST", "RESPECT", "REST", "REVOLUTION", "REWARD", "RHYTHM", "RICE", "RIDDLE", "RIFLE", "RING", "RIP", "RIVER", "ROAD", "ROBIN", "ROBOT", "ROCK", "ROD", "RODEO", "ROLL", "ROME", "ROOF", "ROOM", "ROOT", "ROPE", "ROSE", "ROULETTE", "ROUND", "ROUTE", "ROW", "RUB", "RUBBER", "RULE", "RULER", "RUN", "RUSSIA", "RUST", "SACK", "SADDLE", "SAHARA", "SAIL", "SALAD", "SALOON", "SALSA", "SALT", "SAND", "SANTA", "SATELLITE", "SATURN", "SAW", "SCALE", "SCARECROW", "SCARF", "SCENE", "SCENT", "SCHOOL", "SCIENCE", "SCIENTIST", "SCISSORS", "SCORPION", "SCRATCH", "SCREEN", "SCREW", "SCROLL", "SCUBA", "SEA", "SEAL", "SEASHORE", "SEAT", "SECOND", "SECRETARY", "SEED", "SELECTION", "SELF", "SENSE", "SERVANT", "SERVER", "SEX", "SHADE", "SHADOW", "SHAKE", "SHAKESPEARE", "SHAME", "SHAMPOO", "SHAPE", "SHARK", "SHED", "SHEEP", "SHELF", "SHELL", "SHERLOCK", "SHERWOOD", "SHIP", "SHIRT", "SHOCK", "SHOE", "SHOOT", "SHOP", "SHORTS", "SHOT", "SHOULDER", "SHOW", "SHOWER", "SIDE", "SIDEWALK", "SIGN", "SILK", "SILVER", "SINK", "SISTER", "SIZE", "SKATE", "SKI", "SKIN", "SKIRT", "SKULL", "SKY", "SKYSCRAPER", "SLAVE", "SLED", "SLEEP", "SLEET", "SLING", "SLIP", "SLIPPER", "SLOPE", "SLOTH", "SLUG", "SMASH", "SMELL", "SMILE", "SMOKE", "SMOOTHIE", "SMUGGLER", "SNAIL", "SNAKE", "SNAP", "SNEEZE", "SNOW", "SNOWMAN", "SOAP", "SOCIETY", "SOCK", "SODA", "SOFA", "SOLDIER", "SOLO", "SON", "SONG", "SORT", "SOUL", "SOUND", "SOUP", "SPACE", "SPADE", "SPARK", "SPELL", "SPHINX", "SPIDER", "SPIKE", "SPINE", "SPIRIT", "SPONGE", "SPOON", "SPOT", "SPRAY", "SPRING", "SPY", "SQUARE", "SQUASH", "SQUIRREL", "STABLE", "STADIUM", "STAFF", "STAGE", "STAMP", "STAR", "START", "STATE", "STATEMENT", "STATION", "STEAM", "STEEL", "STEM", "STEP", "STETHOSCOPE", "STEW", "STICK", "STICKER", "STITCH", "STOCK", "STOCKING", "STOMACH", "STONE", "STOP", "STORE", "STORM", "STORY", "STOVE", "ST.PATRICK", "STRANGER", "STRAW", "STREAM", "STREET", "STRETCH", "STRIKE", "STRING", "STRUCTURE", "SUB", "SUBSTANCE", "SUGAR", "SUGGESTION", "SUIT", "SUMMER", "SUMO", "SUN", "SUPERHERO", "SUPPORT", "SURPRISE", "SWAMP", "SWEAT", "SWEATER", "SWIM", "SWING", "SWITCH", "SWORD", "SYSTEM", "TABLE", "TABLET", "TAG", "TAIL", "TALK", "TANK", "TAP", "TASTE", "TATTOO", "TAX", "TEA", "TEACHER", "TEAM", "TEAR", "TEETH", "TELESCOPE", "TEMPER", "TEMPLE", "TENT", "TERRITORY", "TEST", "TEXAS", "TEXTURE", "THEATER", "THEORY", "THIEF", "THING", "THOUGHT", "THREAD", "THRILL", "THROAT", "THRONE", "THUMB", "THUNDER", "TICK", "TICKET", "TIE", "TIGER", "TIME", "TIN", "TIP", "TITLE", "TOAD", "TOAST", "TOE", "TOKYO", "TOMATO", "TONGUE", "TOOTH", "TOOTHBRUSH", "TOOTHPASTE", "TOP", "TORCH", "TORNADO", "TOUCH", "TOWER", "TOWN", "TOY", "TRACK", "TRADE", "TRAIL", "TRAIN", "TRAMP", "TRANSPORT", "TRAY", "TREATMENT", "TREE", "TRIANGLE", "TRICK", "TRIP", "TROLL", "TROUBLE", "TRUCK", "TRUNK", "TUB", "TUBE", "TUNNEL", "TURKEY", "TURN", "TURTLE", "TUTU", "TUXEDO", "TWIG", "TWIST", "UMBRELLA", "UNCLE", "UNDERTAKER", "UNDERWEAR", "UNICORN", "UNIT", "UNIVERITY", "VACATION", "VACUUM", "VALENTINE", "VALUE", "VAMPIRE", "VAN", "VASE", "VEGETABLE", "VEIL", "VEIN", "VENUS", "VERSE", "VESSEL", "VEST", "VET", "VIEW", "VIKING", "VIOLET", "VIRUS", "VISITOR", "VOICE", "VOLCANO", "VOLLEYBALL", "VOLUME", "VOYAGE", "WAGON", "WAITRESS", "WAKE", "WALK", "WALL", "WALRUS", "WAR", "WASH", "WASHER", "WASHINGTON", "WASTE", "WATCH", "WATER", "WAVE", "WAX", "WAY", "WEALTH", "WEATHER", "WEB", "WEDDING", "WEEK", "WEIGHT", "WELL", "WEREWOLF", "WHALE", "WHEEL", "WHEELCHAIR", "WHIP", "WHISTLE", "WILDERNESS", "WIND", "WINDOW", "WINE", "WING", "WINTER", "WIRE", "WISH", "WITCH", "WIZARD", "WOMAN", "WOMEN", "WONDERLAND", "WOOD", "WOOL", "WORD", "WORK", "WORM", "WOUND", "WREN", "WRENCH", "WRIST", "WRITER", "WRITING", "YAK", "YAM", "YARD", "YARN", "YEAR", "YELLOWSTONE", "YOKE", "YORK", "ZEBRA", "ZEPHYR", "ZINC", "ZIPPER", "ZOMBIE", "ZOO"];


var yourWordSet=[];
var theirWordSet=[];


var yourCodeIndex=[];
var theirCodeIndex=[];


var letter;

var numCodes = 24;

var round = 1;
var oldround;

var teamBoolean =0;
var roomBoolean = 0;

var combo;

var x1 = false;
var x3 = false;
var x4 = false;
var x2 = false;

var check1 = false;
var check3 = false;
var check4 = false;
var check2 = false;

var yourTeamName;
var theirTeamName;


//HANDLE TEAM NAME ENTERING FUNCTIONS
function teamName() {  
    //SHOW ENTERED TEAM NAME
    var teamNameInput = document.getElementById("team-name-input");
    var teamName = document.getElementById("team-name");
    teamName.innerHTML = teamNameInput.value;
    yourTeamName = teamNameInput.value;
    //CHECK TEAM HAS CORRECT VALUE
    if (teamNameInput.value != "") {
        teamBoolean += 1;
    } else { 
        teamBoolean = 0;
    }
    //CHECK BOTH INPUTS FULFILLED
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }
}

//HANDLE CODE ENTERING FUNCTIONS
function roomCombo() {
    //SHOW ENTERED COMBO NAME
    var roomComboInput = document.getElementById("room-combo-input");
    var roomCombo = document.getElementById("room-combo");
    roomCombo.innerHTML = roomComboInput.value;
    roomComboInput.value = roomComboInput.value.replace(/\s+/g, '');
    combo = roomComboInput.value;
    
    //CHECK COMBO HAS CORRECT VALUE
    if (roomComboInput.value != "") {
        roomBoolean = 1;
    }  else {
        roomBoolean = 0;
    }
    //CHECK BOTH INPUTS FULFILLED
    if ((teamBoolean>0)&& (roomBoolean>0)) {
        document.getElementById("continue-button").disabled = false;
    } else {
        document.getElementById("continue-button").disabled = true;
    }  
}

//HANDLE DATA INPUT AND GENERATION OF FIRST SCREEN
function onDisplay() {
    
    //CHANGE DISPLAY ON SCREEN - testing
    document.getElementById("mainbox").style.display = "none";
    document.getElementById("mainbox2").style.display = "flex";
    
    document.getElementById("mainbox3").style.display = "flex";
    document.getElementById("mainbox4").style.display = "flex";
    
    //GENERATE SET RANDOM STUFF
    var current_date = new Date();
    var cday = current_date.getDate();
    var chour = current_date.getHours();
    
    //WORD SET ASSIGNMENT
    var j;
    var codeIndex
    for (j = 0; j < 2; j++) {
        var wordIndex;
        if (isNaN(combo[j])) {
          wordIndex =alphabet.indexOf((combo[j].toLowerCase())) + 1;
        } else {
            wordIndex = combo[j];
        }
        
        codeIndex = (wordIndex*17 +cday*(cday+13)*2459-2)%randomCodeIndex.length;
        wordIndex = ((wordIndex + cday)*(cday*214)+33-cday) % randomWordArray.length;
        

        if (document.getElementById("warmGradientRadio").checked) {
            yourWordSet.push(randomWordArray[wordIndex]);

        } else {
            theirWordSet.push(randomWordArray[wordIndex]);

        }
        randomWordArray.splice(wordIndex,1);
        wordIndex = (wordIndex + cday*cday*(184+wordIndex)+4*cday) % randomWordArray.length;
        if ((document.getElementById("warmGradientRadio").checked)) {
            yourWordSet.push(randomWordArray[wordIndex]);
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
        }
        
        randomWordArray.splice(wordIndex,1);   
    }
    
    if (document.getElementById("warmGradientRadio").checked) {
            yourCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        } else {
            theirCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        }
    for (j = 2; j < 4; j++) {
        
        if (isNaN(combo[j])) {
          wordIndex =alphabet.indexOf((combo[j].toLowerCase()));
        } else {
            wordIndex = combo[j];
        }
        codeIndex = (wordIndex*17 +cday*(cday+13)*2459-2)%randomCodeIndex.length;
        wordIndex = ((wordIndex + cday)*(cday*214)+33-cday) % randomWordArray.length;

        if (document.getElementById("coldGradientRadio").checked) {
            yourWordSet.push(randomWordArray[wordIndex]);
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
        }
        randomWordArray.splice(wordIndex,1);
        wordIndex = (wordIndex + cday*cday*(184+wordIndex)+4*cday) % randomWordArray.length;
        if ((document.getElementById("coldGradientRadio").checked)) {
            yourWordSet.push(randomWordArray[wordIndex]);
            yourCodeIndex = codeIndex
        } else {
            theirWordSet.push(randomWordArray[wordIndex]);
            theirCodeIndex = codeIndex;
        }
        
        randomWordArray.splice(wordIndex,1);   
    }
    
    if (document.getElementById("coldGradientRadio").checked) {
            yourCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        } else {
            theirCodeIndex = randomCodeIndex[codeIndex];
            randomCodeIndex.splice(codeIndex,1);
        }
    
    //COLOR CHANGE
    if (document.getElementById("warmGradientRadio").checked) {
        document.getElementById("mainbox2").style.background = "url('images/Warm-Gradient.png') no-repeat center center";
        document.getElementById("mainbox4").style.background = "url('images/Warm-Gradient.png') no-repeat center center";
    } else {
        document.getElementById("mainbox2").style.background = "url('images/Cold-Gradient.jpg') no-repeat center center";
        document.getElementById("mainbox4").style.background = "url('images/Cold-Gradient.jpg') no-repeat center center";
    }
    
    //SHOW WORD SET ON SCREEN
    var k;
    for (k = 0; k < 4; k++) {
        document.getElementById("word" + (k+1)).innerHTML = yourWordSet[k];
    }
    document.getElementById("code").innerHTML = randomCodeArray[yourCodeIndex[round-1]];
    
    document.getElementById("yourTeamName").innerHTML = yourTeamName;
   
 
}





function roundclick(roundnum) {
    

    
    oldround = round;
    round = roundnum;
    
    document.getElementById("roundnum" + round).style.textDecoration= "overline underline";
    
    document.getElementById("code").innerHTML = randomCodeArray[yourCodeIndex[round-1]];

    document.getElementById("round"+roundnum).style.background = "rgba(255,255,255,.7)";
    document.getElementById("round"+roundnum+roundnum).style.background = "rgba(255,255,255,.7)";
    document.getElementById("round"+roundnum+roundnum+roundnum).style.background = "rgba(255,255,255,.7)";
    document.getElementById("round"+roundnum+roundnum+roundnum+roundnum).style.background = "rgba(255,255,255,.7)";
    document.getElementById("round"+roundnum+roundnum+roundnum+roundnum+roundnum).style.background = "rgba(255,255,255,.7)";
    document.getElementById("round"+roundnum+roundnum+roundnum+roundnum+roundnum+roundnum).style.background = "rgba(255,255,255,.7)";
    
    document.getElementById("round"+oldround).style.background = "rgba(0,0,0,.05)";
    document.getElementById("round"+oldround+oldround).style.background = "rgba(0,0,0,.05)";
    document.getElementById("round"+oldround+oldround+oldround).style.background = "rgba(0,0,0,.05)";
    document.getElementById("round"+oldround+oldround+oldround+oldround).style.background = "rgba(0,0,0,.05)";
    document.getElementById("round"+oldround+oldround+oldround+oldround+oldround).style.background = "rgba(0,0,0,.05)";
    document.getElementById("round"+oldround+oldround+oldround+oldround+oldround+oldround).style.background = "rgba(0,0,0,.05)";
    
    
    
    document.getElementById("roundnum" + oldround).style.textDecoration= "none";
    
}


function roundMO(roundnum) {   
    document.getElementById("roundnum" + roundnum).style.textDecoration= "overline underline";
    

    
}
function roundMOut(roundnum) {
    

    if (roundnum != round) {
    document.getElementById("roundnum" + roundnum).style.textDecoration= "none";
    }

    document.getElementById("roundnum" + oldround).style.textDecoration= "none";

    
    document.getElementById("roundnum" + round).style.textDecoration= "overline underline";
}







//Win Tracker X's and Checks
function x1click() {
   if (x1) {
       document.getElementById("x1").style.backgroundImage="url(images/x.png)";
       x1=false;
   } else { 
        document.getElementById("x1").style.backgroundImage="url(images/x-circle-fill.png)";
       x1 = true;
    }
}
function x1MO() {   document.getElementById("x1").style.backgroundImage="url(images/x-circle-fill.png)";
    
}
function x1MOut() {
    if (x1) {
        document.getElementById("x1").style.backgroundImage="url(images/x-circle-fill.png)";
    } else {
         document.getElementById("x1").style.backgroundImage="url(images/x.png)";
    }
}
function x2click() {
   if (x2) {
       document.getElementById("x2").style.backgroundImage="url(images/x.png)";
       x2=false;
   } else { 
        document.getElementById("x2").style.backgroundImage="url(images/x-circle-fill.png)";
       x2 = true;
    }
}
function x2MO() {   document.getElementById("x2").style.backgroundImage="url(images/x-circle-fill.png)";
    
}
function x2MOut() {
    if (x2) {
        document.getElementById("x2").style.background2Image="url(images/x-circle-fill.png)";
    } else {
         document.getElementById("x2").style.backgroundImage="url(images/x.png)";
    }
}
function x3click() {
   if (x3) {
       document.getElementById("x3").style.backgroundImage="url(images/x.png)";
       x3=false;
   } else { 
        document.getElementById("x3").style.backgroundImage="url(images/x-circle-fill.png)";
       x3 = true;
    }
}
function x3MO() {   document.getElementById("x3").style.backgroundImage="url(images/x-circle-fill.png)";
    
}
function x3MOut() {
    if (x3) {
        document.getElementById("x3").style.backgroundImage="url(images/x-circle-fill.png)";
    } else {
         document.getElementById("x3").style.backgroundImage="url(images/x.png)";
    }
}
function x4click() {
   if (x4) {
       document.getElementById("x4").style.backgroundImage="url(images/x.png)";
       x4=false;
   } else { 
        document.getElementById("x4").style.backgroundImage="url(images/x-circle-fill.png)";
       x4 = true;
    }
}
function x4MO() {   document.getElementById("x4").style.backgroundImage="url(images/x-circle-fill.png)";
    
}
function x4MOut() {
    if (x4) {
        document.getElementById("x4").style.backgroundImage="url(images/x-circle-fill.png)";
    } else {
         document.getElementById("x4").style.backgroundImage="url(images/x.png)";
    }
}
function check1click() {
   if (check1) {
       document.getElementById("check1").style.backgroundImage="url(images/check.png)";
       check1=false;
   } else { 
        document.getElementById("check1").style.backgroundImage="url(images/check-circle.png)";
       check1 = true;
    }
}
function check1MO() {   document.getElementById("check1").style.backgroundImage="url(images/check-circle.png)";
    
}
function check1MOut() {
    if (check1) {
        document.getElementById("check1").style.backgroundImage="url(images/check-circle.png)";
    } else {
         document.getElementById("check1").style.backgroundImage="url(images/check.png)";
    }
}
function check2click() {
   if (check2) {
       document.getElementById("check2").style.backgroundImage="url(images/check.png)";
       check2=false;
   } else { 
        document.getElementById("check2").style.backgroundImage="url(images/check-circle.png)";
       check2 = true;
    }
}
function check2MO() {   document.getElementById("check2").style.backgroundImage="url(images/check-circle.png)";
    
}
function check2MOut() {
    if (check2) {
        document.getElementById("check2").style.backgroundImage="url(images/check-circle.png)";
    } else {
         document.getElementById("check2").style.backgroundImage="url(images/check.png)";
    }
}
function check3click() {
   if (check3) {
       document.getElementById("check3").style.backgroundImage="url(images/check.png)";
       check3=false;
   } else { 
        document.getElementById("check3").style.backgroundImage="url(images/check-circle.png)";
       check3 = true;
    }
}
function check3MO() {   document.getElementById("check3").style.backgroundImage="url(images/check-circle.png)";
    
}
function check3MOut() {
    if (check3) {
        document.getElementById("check3").style.backgroundImage="url(images/check-circle.png)";
    } else {
         document.getElementById("check3").style.backgroundImage="url(images/check.png)";
    }
}
function check4click() {
   if (check4) {
       document.getElementById("check4").style.backgroundImage="url(images/check.png)";
       check4=false;
   } else { 
        document.getElementById("check4").style.backgroundImage="url(images/check-circle.png)";
       check4 = true;
    }
}
function check4MO() {   document.getElementById("check4").style.backgroundImage="url(images/check-circle.png)";
    
}
function check4MOut() {
    if (check4) {
        document.getElementById("check4").style.backgroundImage="url(images/check-circle.png)";
    } else {
         document.getElementById("check4").style.backgroundImage="url(images/check.png)";
    }
}
