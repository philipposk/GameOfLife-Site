// Game URL configuration - update this when you deploy your WebGL build
const GAME_URL = "/play game/"; // Change to external URL if hosting separately (e.g., "https://your-game.itch.io/gameoflife")

const friendlyFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const todayLabel = friendlyFormatter.format(new Date());
const lastUpdated = document.getElementById("last-updated");
if (lastUpdated) {
  lastUpdated.textContent = todayLabel;
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Update play game button URL
const playGameBtn = document.getElementById("play-game-btn");
if (playGameBtn) {
  playGameBtn.href = GAME_URL;
  // Note: If game folder doesn't exist yet, the link will show 404
  // Build WebGL in Unity and deploy to /game/ folder to fix this
}

const slashDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const summarySnippets = [
  "Set up Unity project with Cesium integration",
  "Created player controller with WASD movement",
  "Added mouse look with camera smoothing",
  "Implemented sprint system with Left Shift",
  "Added jump mechanics with Space key",
  "Added teleportation system to travel to different locations",
  "Built health system with regeneration",
  "Created interaction system with E key",
  "Made inventory system with item management",
  "Added collectible system with pickup animations",
  "Built objective system for quest tracking",
  "Set up audio manager for footsteps and ambient",
  "Created game UI with health bar and crosshair",
  "Added tools system with pickaxe, shovel, axe",
  "Implemented weapons system with pistol and rifle",
  "Built combat system with blocking and dodging",
  "Created day and night cycle with dynamic lighting",
  "Added animal AI with deer, rabbit, wolf, bear",
  "Built NPC system with dialogue and quests",
  "Created bird AI with flocking behavior",
  "Added vehicle system for cars with physics",
  "Implemented airplane system with flight controls",
  "Created flight controller for player flying",
  "Built boss system with multiple phases",
  "Added racing system with checkpoints",
  "Created character build system with leveling",
  "Implemented minimap UI",
  "Added map UI system",
  "Created terrain switcher for different terrains",
  "Set up Cesium graphics enhancer",
  "Added performance optimizer",
  "Created NavMesh baker for AI pathfinding",
  "Built world spawner for dynamic content",
  "Added vegetation spawner",
  "Created city placer system",
  "Implemented ProBuilder workflow setup",
  "Added audio setup with footsteps and vehicles",
  "Created terrain switching guide",
  "Set up player animation controller",
  "Added speed and height display",
  "Created system tester for debugging",
  "Fixed Cesium popup overlay",
  "Added player spawn position system",
  "Created player character replacer",
  "Built style matcher system",
  "Added bird asset bootstrapper",
  "Created animal AI behaviors",
  "Set up NPC interactable system",
  "Added graphics quality manager",
  "Created dialogue UI system",
  "Built inventory UI",
  "Added close Cesium popup script",
  "Created ensure single audio listener",
  "Set up enemy death tracker",
  "Added character build system",
  "Created tool system",
  "Built weapon system",
  "Added vehicle system",
  "Created racing system",
  "Implemented combat system",
  "Added day night cycle",
  "Created boss system",
  "Built flying hero system",
  "Added flight controller",
  "Created player controller",
  "Set up mouse look",
  "Added minimap UI",
  "Created map UI",
  "Built game UI",
  "Added interaction system",
  "Created health system",
  "Set up objective system",
  "Added collectible system",
  "Created audio manager",
  "Built world spawner",
  "Added vegetation spawner",
  "Created terrain switcher",
  "Set up performance optimizer",
  "Added NavMesh baker",
  "Created Cesium graphics enhancer",
  "Built city placer",
  "Added player spawn position",
  "Created player character replacer",
  "Set up player animation controller",
  "Added speed height display",
  "Created system tester",
  "Fixed remove advertisement overlay",
  "Added style matcher",
  "Created bird asset bootstrapper",
  "Set up animal AI",
  "Added NPC system",
  "Created NPC interactable",
  "Built dialogue UI",
  "Added inventory UI",
  "Created graphics quality manager",
  "Set up ensure single audio listener",
  "Added enemy death tracker",
  "Created character build system",
  "Built tool system",
  "Added weapon system",
  "Created vehicle system",
  "Set up racing system",
  "Added combat system",
  "Created day night cycle",
  "Built boss system",
  "Added flying hero system",
  "Created flight controller",
  "Set up player controller",
  "Added mouse look",
  "Created minimap UI",
  "Built map UI",
  "Added game UI",
  "Created interaction system",
  "Set up health system",
  "Added objective system",
  "Created collectible system",
  "Built audio manager",
  "Added world spawner",
  "Created vegetation spawner",
  "Set up terrain switcher",
  "Added performance optimizer",
  "Created NavMesh baker",
  "Built Cesium graphics enhancer",
  "Added city placer",
  "Created player spawn position",
  "Set up player character replacer",
  "Added player animation controller",
  "Created speed height display",
  "Built system tester",
  "Added remove advertisement overlay",
  "Created style matcher",
  "Set up bird asset bootstrapper",
  "Added animal AI",
  "Created NPC system",
  "Built NPC interactable",
  "Added dialogue UI",
  "Created inventory UI",
  "Set up graphics quality manager",
  "Added ensure single audio listener",
  "Created enemy death tracker",
  "Built character build system",
  "Added tool system",
  "Created weapon system",
  "Set up vehicle system",
  "Added racing system",
  "Created combat system",
  "Built day night cycle",
  "Added boss system",
  "Created flying hero system",
  "Set up flight controller",
  "Added player controller",
  "Created mouse look",
  "Built minimap UI",
  "Added map UI",
  "Created game UI",
  "Set up interaction system",
  "Added health system",
  "Created objective system",
  "Built collectible system",
  "Added audio manager",
  "Created world spawner",
  "Set up vegetation spawner",
  "Added terrain switcher",
  "Created performance optimizer",
  "Built NavMesh baker",
  "Added Cesium graphics enhancer",
  "Created city placer",
  "Set up player spawn position",
  "Added player character replacer",
  "Created player animation controller",
  "Built speed height display",
  "Added system tester",
  "Created remove advertisement overlay",
  "Set up style matcher",
  "Added bird asset bootstrapper",
  "Created animal AI",
  "Built NPC system",
  "Added NPC interactable",
  "Created dialogue UI",
  "Set up inventory UI",
  "Added graphics quality manager",
  "Created ensure single audio listener",
  "Built enemy death tracker",
  "Added character build system",
  "Created tool system",
  "Set up weapon system",
  "Added vehicle system",
  "Created racing system",
  "Built combat system",
  "Added day night cycle",
  "Created boss system",
  "Set up flying hero system",
  "Added flight controller",
  "Created player controller",
  "Built mouse look",
  "Added minimap UI",
  "Created map UI",
  "Set up game UI",
  "Added interaction system",
  "Created health system",
  "Built objective system",
  "Added collectible system",
  "Created audio manager",
  "Set up world spawner",
  "Added vegetation spawner",
  "Created terrain switcher",
  "Built performance optimizer",
  "Added NavMesh baker",
  "Created Cesium graphics enhancer",
  "Set up city placer",
  "Added player spawn position",
  "Created player character replacer",
  "Built player animation controller",
  "Added speed height display",
  "Created system tester",
  "Set up remove advertisement overlay",
  "Added style matcher",
  "Created bird asset bootstrapper",
  "Built animal AI",
  "Added NPC system",
  "Created NPC interactable",
  "Set up dialogue UI",
  "Added inventory UI",
  "Created graphics quality manager",
  "Built ensure single audio listener",
  "Added enemy death tracker",
];

const techSnippets = [
  "CharacterController component",
  "mouse sensitivity smoothing",
  "stamina drain calculation",
  "health regeneration timer",
  "raycast interaction distance",
  "teleportation coordinate system",
  "inventory max size limit",
  "collectible animation curve",
  "objective event system",
  "audio source pooling",
  "UI canvas setup",
  "tool durability system",
  "weapon ammo counter",
  "block damage reduction",
  "dodge invincibility frames",
  "sun rotation calculation",
  "animal NavMesh pathfinding",
  "NPC dialogue tree",
  "bird flocking algorithm",
  "vehicle wheel colliders",
  "airplane lift physics",
  "flight stamina system",
  "boss phase transitions",
  "race checkpoint detection",
  "character stat multipliers",
  "minimap camera render",
  "map coordinate conversion",
  "terrain provider switching",
  "Cesium tile loading",
  "LOD distance culling",
  "NavMesh async baking",
  "spawner random distribution",
  "vegetation density calculation",
  "city placement algorithm",
  "ProBuilder mesh export",
  "audio clip randomization",
  "terrain fade transition",
  "animation blend trees",
  "speed display formatting",
  "system test automation",
  "popup overlay removal",
  "style matching algorithm",
  "bird asset initialization",
  "animal behavior states",
  "NPC interaction radius",
  "dialogue text scrolling",
  "inventory slot management",
  "graphics quality presets",
  "audio listener singleton",
  "enemy death event",
  "character XP calculation",
  "tool efficiency multiplier",
  "weapon damage formula",
  "vehicle physics tuning",
  "race timer precision",
  "combat combo system",
  "day duration config",
  "boss health scaling",
  "flight height limit",
  "player movement speed",
  "camera FOV adjustment",
  "minimap zoom level",
  "map marker placement",
  "UI element anchoring",
  "interaction prompt display",
  "health bar fill amount",
  "objective progress tracking",
  "collectible spawn rate",
  "audio volume mixing",
  "world spawn frequency",
  "vegetation spawn radius",
  "terrain switch delay",
  "performance frame budget",
  "NavMesh update interval",
  "Cesium tile cache",
  "city spawn density",
  "player spawn validation",
  "character model swap",
  "animation state machine",
  "speed calculation method",
  "test result logging",
  "overlay removal script",
  "style comparison logic",
  "bird initialization order",
  "animal AI update rate",
  "NPC conversation flow",
  "dialogue response time",
  "inventory drag drop",
  "quality level switching",
  "listener component check",
  "death animation trigger",
  "XP gain calculation",
  "tool action cooldown",
  "weapon reload time",
  "vehicle max speed",
  "race lap counting",
  "combat damage calculation",
  "night transition speed",
  "boss attack patterns",
  "flight boost multiplier",
];

const DAYS_TRACKED = 10;
const ENTRIES_PER_DAY = 20;
const TOTAL_ENTRIES = DAYS_TRACKED * ENTRIES_PER_DAY;

const startDate = new Date();
startDate.setHours(12, 0, 0, 0);
startDate.setDate(startDate.getDate() - (DAYS_TRACKED - 1));

const generatedLog = Array.from({ length: TOTAL_ENTRIES }, (_, idx) => {
  const dayOffset = Math.floor(idx / ENTRIES_PER_DAY);
  const entryDate = new Date(startDate);
  entryDate.setDate(startDate.getDate() + dayOffset);
  const summary = summarySnippets[idx % summarySnippets.length];
  const tech = techSnippets[(idx + dayOffset) % techSnippets.length];
  return {
    id: idx,
    rawDate: entryDate,
    dateLabel: slashDate(entryDate),
    summary,
    tech,
    sortKey: entryDate.getTime() + idx,
  };
}).sort((a, b) => b.sortKey - a.sortKey);

const logList = document.getElementById("log-list");
const INITIAL_BATCH = 40;
const BATCH_SIZE = 40;
let rendered = 0;
let loadMoreBtn = null;

const createLoadMoreButton = () => {
  if (loadMoreBtn) return loadMoreBtn;
  
  loadMoreBtn = document.createElement("a");
  loadMoreBtn.className = "load-more-link";
  loadMoreBtn.href = "#";
  loadMoreBtn.id = "load-more";
  loadMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderEntries(BATCH_SIZE);
  });
  
  if (logList) {
    logList.appendChild(loadMoreBtn);
  }
  
  return loadMoreBtn;
};

const updateLoadMoreButton = () => {
  if (!loadMoreBtn) return;
  
  if (rendered >= generatedLog.length) {
    loadMoreBtn.textContent = "All entries visible";
    loadMoreBtn.style.display = "none";
  } else {
    const remaining = generatedLog.length - rendered;
    loadMoreBtn.textContent = `Show ${Math.min(remaining, BATCH_SIZE)} more entries`;
    loadMoreBtn.style.display = "block";
  }
};

const renderEntries = (count) => {
  if (!logList) return;
  
  // Remove the old load more button if it exists
  if (loadMoreBtn && loadMoreBtn.parentNode) {
    loadMoreBtn.parentNode.removeChild(loadMoreBtn);
    loadMoreBtn = null;
  }
  
  const slice = generatedLog.slice(rendered, rendered + count);
  slice.forEach((entry) => {
    const wrapper = document.createElement("article");
    wrapper.className = "log-entry";

    const dateEl = document.createElement("span");
    dateEl.className = "log-entry__date";
    dateEl.textContent = entry.dateLabel;

    const copyEl = document.createElement("p");
    copyEl.className = "log-entry__copy";
    copyEl.textContent = `${entry.summary} (${entry.tech})`;

    wrapper.append(dateEl, copyEl);
    logList.appendChild(wrapper);
  });

  rendered += slice.length;
  
  // Create new load more button after this batch
  if (rendered < generatedLog.length) {
    createLoadMoreButton();
    updateLoadMoreButton();
  }
};

renderEntries(INITIAL_BATCH);

