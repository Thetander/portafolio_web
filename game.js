// === Datos completos de proyectos por nivel ===
const allProjects = {
  csharp: [
    {
      title: "AuthServiceEcoF",
      description: "Servicio de autenticación en .NET para la gestión de usuarios y roles.",
      technologies: ["C#", ".NET 8", "Entity Framework", "JWT", "gRPC"],
      role: "Backend Developer",
      url: "https://github.com/Thetander/AuthServiceEcoF",
      demo: "Repository available",
      level: "csharp"
    },
    {
      title: "VehicleServiceEcoF", 
      description: "Microservicio en .NET para la gestión de vehículos en el sistema de combustible.",
      technologies: ["C#", ".NET 8", "Microservices", "Clean Architecture", "Docker"],
      role: "Fullstack Developer",
      url: "https://github.com/Thetander/VehicleServiceEcoF",
      demo: "Repository available",
      level: "csharp"
    }
  ],
  typescript: [
    {
      title: "GITT - Inventory Management System",
      description: "Sistema de gestión de inventarios para talleres tecnológicos FISEI con códigos de barras.",
      technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
      role: "Frontend Developer",
      url: "https://github.com/vKail/inventory-management-frontend",
      demo: "Equipment management system",
      level: "typescript"
    },
    {
      title: "Cemetery Management Backend",
      description: "API robusta para gestión de cementerios con Node.js y TypeScript.",
      technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
      role: "Backend Developer",
      url: "https://github.com/devjaes/cementery_back",
      demo: "API available",
      level: "typescript"
    },
    {
      title: "Sistema de Alquiler de Vehículos",
      description: "Sistema integral para gestión de alquiler de vehículos con roles de administrador, empleado y cliente.",
      technologies: ["TypeScript", "NestJS", "Node.js", "Enterprise Architecture", "REST APIs"],
      role: "Backend Developer",
      url: "https://github.com/Thetander/alquiler-vehiculo",
      demo: "Vehicle rental system",
      level: "typescript"
    },
    {
      title: "Portfolio Web Game",
      description: "Portafolio interactivo estilo juego retro 8-bits (proyecto actual).",
      technologies: ["TypeScript", "Canvas API", "Game Physics", "Responsive Design"],
      role: "Game Developer",
      url: "https://github.com/Thetander/portafolio_web",
      demo: "Live demo available",
      level: "typescript"
    }
  ],
  java: [
    {
      title: "FacturaSRI",
      description: "Sistema de facturación electrónica integrado con el SRI del Ecuador.",
      technologies: ["Java", "Spring Boot", "Maven", "XML Processing", "Web Services"],
      role: "Backend Developer",
      url: "https://github.com/Thetander/FacturaSRI",
      demo: "Enterprise solution",
      level: "java"
    }
  ]
};

// === Sistema de niveles ===
const LEVELS = {
  csharp: {
    id: "csharp",
    level: "csharp",
    name: "C# Kingdom", 
    projects: allProjects.csharp,
    theme: {
      background: "radial-gradient(circle at top, #3b82f6 0%, #1f2937 55%, #020617 100%)",
      labelColor: "rgba(148, 163, 184, 0.15)",
      label: "C# KINGDOM",
      groundGradient: "linear-gradient(#1f2937, #020617)",
      blockGradient: "linear-gradient(#1d4ed8, #1e40af)",
      pipeColor: "#16a34a"
    }
  },
  typescript: {
    id: "typescript",
    level: "typescript",
    name: "TypeScript Desert",
    projects: allProjects.typescript,
    theme: {
      background: "radial-gradient(circle at top, #f6d860 0%, #3178c6 45%, #fff2da 100%)",
      labelColor: "rgba(49, 120, 198, 0.2)",
      label: "TS DESERT", 
      groundGradient: "linear-gradient(#d97706, #92400e)",
      blockGradient: "linear-gradient(#3178c6, #1e40af)",
      pipeColor: "#059669"
    }
  },
  java: {
    id: "java",
    level: "java",
    name: "Java Volcano",
    projects: allProjects.java, 
    theme: {
      background: "radial-gradient(circle at top, #d62828 0%, #1a1a1a 60%, #000000 100%)",
      labelColor: "rgba(214, 40, 40, 0.15)",
      label: "JAVA VOLCANO",
      groundGradient: "linear-gradient(#7f1d1d, #1f2937)",
      blockGradient: "linear-gradient(#dc2626, #991b1b)", 
      pipeColor: "#dc2626"
    }
  }
};

// === Funciones de navegación de pantallas ===
function showScreen(screenName) {
  // Ocultar todas las pantallas
  document.getElementById("loading-screen")?.classList.add("hidden");
  startScreen?.classList.add("hidden");
  levelSelectScreen?.classList.add("hidden");
  gameScreen?.classList.add("hidden");
  
  // Mostrar la pantalla solicitada
  switch(screenName) {
    case "loading":
      gameState = "loading";
      document.getElementById("loading-screen")?.classList.remove("hidden");
      break;
    case "start":
      gameState = "menu";
      startScreen?.classList.remove("hidden");
      break;
    case "level-select":
      gameState = "level-select";
      levelSelectScreen?.classList.remove("hidden");
      break;
    case "game":
      gameState = "playing";
      gameScreen?.classList.remove("hidden");
      break;
  }
}

function initializeMenuEvents() {
  // Botón Play
  document.getElementById("play-btn")?.addEventListener("click", () => {
    showScreen("game");
  });
  
  // Botón Level Select
  document.getElementById("level-select-btn")?.addEventListener("click", () => {
    showScreen("level-select");
  });
  
  // Botón About
  document.getElementById("about-btn")?.addEventListener("click", () => {
    aboutModal?.classList.remove("hidden");
  });
  
  // Botón Contact
  document.getElementById("contact-btn")?.addEventListener("click", () => {
    contactModal?.classList.remove("hidden");
  });
  
  // Botón Achievements
  document.getElementById("achievements-btn")?.addEventListener("click", () => {
    achievementSystem.showAchievementScreen();
  });
  
  // Botones Back
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => showScreen("start"));
  });
  
  // Cards de niveles
  document.querySelectorAll(".level-card").forEach(card => {
    card.addEventListener("click", () => {
      const levelId = card.getAttribute("data-level");
      if (levelId && LEVELS[levelId]) {
        loadLevel(levelId);
        showScreen("game");
      }
    });
  });
  
  // Cerrar modales adicionales
  const allModals = [aboutModal, contactModal];
  allModals.forEach(modal => {
    if (!modal) return;
    
    // Click en X
    modal.querySelector(".close-modal")?.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    
    // Click en fondo
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
}

// === Sistema de progreso ===
function checkLevelCompletion() {
  const currentProjects = LEVELS[currentLevel].projects;
  const levelProjectsViewed = Array.from(visitedProjects)
    .filter(key => key.startsWith(`${currentLevel}-`)).length;
  
  const isCompleted = levelProjectsViewed >= currentProjects.length;
  
  if (isCompleted && !completedLevels.has(currentLevel)) {
    completedLevels.add(currentLevel);
    
    // Track analytics de nivel completado
    analyticsManager.trackLevelCompletion(currentLevel);
    
    // Reproducir sonido de nivel completado
    audioSystem.play('levelComplete');
    
    // Verificar logros después de completar nivel
    achievementSystem.checkAchievements();
    
    showLevelCompletedMessage();
    updateLevelSelectProgress();
    
    // No crear portal de completado - el transporte se hace por el túnel verde
  }
  
  return isCompleted;
}

function showLevelCompletedMessage() {
  const levelName = LEVELS[currentLevel].name;
  showNotification(`🎉 ¡${levelName} completado! Todos los proyectos explorados`, 4000);
}

function updateLevelSelectProgress() {
  const levelCards = document.querySelectorAll('.level-card');
  levelCards.forEach(card => {
    const levelId = card.getAttribute('data-level');
    if (completedLevels.has(levelId)) {
      card.classList.add('completed');
      
      // Agregar indicador visual de completado
      if (!card.querySelector('.completion-badge')) {
        const badge = document.createElement('div');
        badge.className = 'completion-badge';
        badge.textContent = '✅';
        card.appendChild(badge);
      }
    }
  });
}

function updateHUDProgress() {
  const currentProjects = LEVELS[currentLevel].projects;
  const levelProjectsViewed = Array.from(visitedProjects)
    .filter(key => key.startsWith(`${currentLevel}-`)).length;
  
  const progressText = document.getElementById("project-count");
  if (progressText) {
    progressText.textContent = `${levelProjectsViewed}/${currentProjects.length}`;
    
    // Cambiar color si está completado
    if (levelProjectsViewed >= currentProjects.length) {
      progressText.style.color = "#10b981";
      progressText.style.fontWeight = "bold";
    } else {
      progressText.style.color = "#fff";
      progressText.style.fontWeight = "normal";
    }
  }
}

function loadLevel(levelId) {
  const level = LEVELS[levelId];
  if (!level) return;
  
  const previousLevel = currentLevel;
  currentLevel = levelId;
  
  // Track analytics de cambio de nivel
  if (previousLevel !== levelId) {
    analyticsManager.trackLevelSwitch(previousLevel, levelId);
  }
  
  // Actualizar proyectos del nivel
  window.projects = level.projects;
  
  // Actualizar tema visual
  applyLevelTheme(level.theme);
  
  // Crear zonas de física especial
  createPhysicsZones(levelId);
  
  // Actualizar HUD
  updateHUD();
  updateHUDProgress();
  updateProgressIndicator();
  
  // Reset player position
  player.reset();

  // No crear portal de completado - solo se usa el túnel verde para transporte

  // Mostrar notificación de cambio de nivel
  showLevelChangeNotification(level.name);
  
  // Agregar tooltips
  setTimeout(() => addHoverTooltips(), 100);
  
  // Configurar event listeners del túnel después de cargar nivel
  setTimeout(() => setupTunnelEventListeners(), 150);
  
  // Configurar event listeners de project blocks
  setTimeout(() => setupProjectBlockEventListeners(), 200);
  
  // Agregar elementos decorativos específicos del nivel
  setTimeout(() => addLevelDecorations(levelId), 250);
  
  // Verificar si este nivel ya estaba completado
  setTimeout(() => checkLevelCompletion(), 100);
}

function createPhysicsZones(levelId) {
  const world = document.getElementById("world");
  
  // Limpiar zonas existentes y sus event listeners
  const existingZones = world.querySelectorAll('.sand-zone, .lava-zone');
  existingZones.forEach(zone => {
    eventManager.removeElementListeners(zone);
    zone.remove();
  });
  
  // Invalidar cache de bloques al cambiar nivel
  cachedBlocks = null;
  
  if (levelId === 'typescript') {
    // Crear zonas de arena para TypeScript Desert
    const sandZones = [
      { x: 200, width: 150 },
      { x: 450, width: 200 },
      { x: 750, width: 100 }
    ];
    
    sandZones.forEach(zone => {
      const sandElement = document.createElement('div');
      sandElement.className = 'sand-zone';
      sandElement.style.left = zone.x + 'px';
      sandElement.style.width = zone.width + 'px';
      world.appendChild(sandElement);
    });
  } 
  else if (levelId === 'java') {
    // Crear zonas de lava para Java Volcano
    const lavaZones = [
      { x: 300, width: 120 },
      { x: 600, width: 150 },
      { x: 900, width: 100 }
    ];
    
    lavaZones.forEach(zone => {
      const lavaElement = document.createElement('div');
      lavaElement.className = 'lava-zone';
      lavaElement.style.left = zone.x + 'px';
      lavaElement.style.width = zone.width + 'px';
      world.appendChild(lavaElement);
    });
  }
}

// Función para agregar decoraciones específicas del nivel
function addLevelDecorations(levelId) {
  const world = document.getElementById("world");
  
  // Limpiar decoraciones anteriores
  const existingDecorations = world.querySelectorAll('.level-decoration');
  existingDecorations.forEach(decoration => decoration.remove());
  
  switch(levelId) {
    case 'java':
      // Agregar fire flowers para Java Volcano
      addFireFlower(world, 200, 240);
      addFireFlower(world, 650, 240);
      break;
      
    case 'typescript':
      // Agregar fence elements como barreras en TypeScript Desert - solo fila inferior
      // Vallas cerca de zonas de arena (ajustadas para tocar correctamente el suelo)
      addFenceElement(world, 100, 240);  // Y=240 -> bottom: 80px (toca el suelo)
      addFenceElement(world, 148, 240);  // 
      
      addFenceElement(world, 380, 240);  // Entre primera y segunda zona de arena
      addFenceElement(world, 428, 240);  // 
      
      addFenceElement(world, 680, 240);  // Entre segunda y tercera zona de arena
      addFenceElement(world, 728, 240);  // 
      break;
      
    case 'csharp':
      // Agregar montañas de fondo para C# Kingdom
      addBackgroundMountain(world, 20, 180, 'mountain1.png', 'large');
      addBackgroundMountain(world, 720, 180, 'mountain2.png', 'large');
      
      // Agregar arbustos decorativos (ahora se posicionan automáticamente sobre el suelo)
      addBush(world, 150, 0, 'bush1.png');
      addBush(world, 580, 0, 'bush2.png');
      addBush(world, 820, 0, 'bush1.png');
      break;
  }
}

function addFireFlower(world, x, y) {
  const fireFlower = document.createElement('div');
  fireFlower.className = 'level-decoration fire-flower';
  fireFlower.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: 288px;
    width: 48px;
    height: 48px;
    background-image: url('./assets/collectibles/overworld/fire-flower.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: fire-flower-glow 2s ease-in-out infinite alternate;
    z-index: 1;
  `;
  world.appendChild(fireFlower);
}

function addFenceElement(world, x, y) {
  const fence = document.createElement('div');
  fence.className = 'level-decoration fence-element';
  fence.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: 288px;
    width: 48px;
    height: 48px;
    background-image: url('./assets/scenery/overworld/fence.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  `;
  world.appendChild(fence);
}

function addBackgroundMountain(world, x, y, mountainFile, size) {
  const mountain = document.createElement('div');
  mountain.className = 'level-decoration background-mountain';
  
  const sizeConfig = {
    'small': { width: 120, height: 80 },
    'medium': { width: 160, height: 110 },
    'large': { width: 200, height: 140 }
  };
  
  const config = sizeConfig[size] || sizeConfig['medium'];
  
  mountain.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    width: ${config.width}px;
    height: ${config.height}px;
    background-image: url('./assets/scenery/overworld/${mountainFile}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    opacity: 0.85;
    z-index: 0;
    filter: hue-rotate(200deg) saturate(0.8) brightness(1.2) contrast(0.9);
  `;
  world.appendChild(mountain);
}

function addBush(world, x, y, bushFile) {
  const bush = document.createElement('div');
  bush.className = 'level-decoration background-bush';
  bush.style.cssText = `
    position: absolute;
    left: ${x}px;
    bottom: 78px;
    width: 64px;
    height: 32px;
    background-image: url('./assets/scenery/overworld/${bushFile}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    opacity: 0.8;
    z-index: 5;
  `;
  world.appendChild(bush);
}

function applyFloorTexture(ground, levelId) {
  // Limpiar estilos de textura anteriores
  ground.style.backgroundImage = '';
  
  switch(levelId) {
    case 'csharp':
      // Underground floor bricks para C# Kingdom
      ground.style.backgroundImage = "url('./assets/scenery/underground/floorbricks.png')";
      ground.style.backgroundRepeat = 'repeat-x';
      ground.style.backgroundPosition = 'bottom';
      ground.style.backgroundSize = 'auto 100%';
      break;
      
    case 'java':
      // Overworld floor bricks para Java Volcano (más rojizo)
      ground.style.backgroundImage = "url('./assets/scenery/overworld/floorbricks.png')";
      ground.style.backgroundRepeat = 'repeat-x';
      ground.style.backgroundPosition = 'bottom';
      ground.style.backgroundSize = 'auto 100%';
      ground.style.filter = 'hue-rotate(30deg) saturate(1.3)'; // Más rojizo
      break;
      
    case 'typescript':
      // Sin textura específica para desert - mantener gradiente
      ground.style.filter = 'none';
      break;
      
    default:
      ground.style.filter = 'none';
      break;
  }
}

function applyLevelTheme(theme) {
  const world = document.getElementById("world");
  const levelLabel = document.querySelector(".level-label");
  const ground = document.querySelector(".ground");
  const blocks = document.querySelectorAll(".project-block");
  const pipe = document.getElementById("pipe-skill");
  
  // Limpiar elementos específicos anteriores
  clearLevelSpecificElements();
  
  // Aplicar estilos del tema
  world.style.background = theme.background;
  levelLabel.textContent = theme.label;
  levelLabel.style.color = theme.labelColor;
  
  // Aplicar gradiente de respaldo primero
  ground.style.background = theme.groundGradient;
  
  // Aplicar textura de suelo específica según el nivel (sobrescribe gradiente)
  applyFloorTexture(ground, theme.level);
  
  // Aplicar estilos específicos a bloques
  blocks.forEach((block, index) => {
    // Remover clases anteriores
    block.classList.remove('ts-transparent', 'java-hot');
    
    // Usar sprite de mystery block en lugar de gradiente
    block.style.backgroundImage = "url('./assets/blocks/overworld/misteryBlock.png')"; 
    block.style.backgroundSize = "144px 48px";
    block.style.backgroundRepeat = "no-repeat";
    block.style.backgroundPosition = "0px 0px";
    block.style.background = ""; // Limpiar gradientes anteriores
    
    // Agregar clases específicas del nivel
    if (currentLevel === 'typescript') {
      block.classList.add('ts-transparent');
    } else if (currentLevel === 'java') {
      block.classList.add('java-hot');
    }
  });
  
  if (pipe) {
    // Mantener el sprite del pipe y aplicar tinte según el nivel
    pipe.style.backgroundImage = "url('./assets/scenery/pipe1.png')";
    pipe.style.backgroundSize = "contain";
    pipe.style.backgroundRepeat = "no-repeat";
    pipe.style.backgroundPosition = "center";
    pipe.style.background = ""; // Limpiar background sólido
    
    // Aplicar filtros de color según el nivel
    switch(currentLevel) {
      case 'csharp':
        pipe.style.filter = "hue-rotate(210deg) saturate(1.2)"; // Azulado
        break;
      case 'typescript':
        pipe.style.filter = "hue-rotate(45deg) saturate(1.1)"; // Amarillento
        break;
      case 'java':
        pipe.style.filter = "hue-rotate(0deg) saturate(1.3) brightness(1.1)"; // Rojizo
        break;
      default:
        pipe.style.filter = "none";
    }
  }
  
  // Crear elementos específicos del nivel
  createLevelSpecificElements();
}

function clearLevelSpecificElements() {
  // Remover elementos específicos anteriores
  document.querySelectorAll('.ts-pyramid, .ts-cloud, .java-mountain, .lava-bubble, .volcanic-smoke')
    .forEach(el => el.remove());
}

function createLevelSpecificElements() {
  const world = document.getElementById("world");
  
  if (currentLevel === 'typescript') {
    createTypescriptDesertElements(world);
  } else if (currentLevel === 'java') {
    createJavaVolcanoElements(world);
  }
}

function createTypescriptDesertElements(world) {
  // Pirámides geométricas
  const pyramids = [
    { size: 'small', left: '150px', top: '180px' },
    { size: 'medium', left: '600px', top: '160px' },
    { size: 'large', left: '750px', top: '140px' },
    { size: 'small', left: '50px', top: '200px' }
  ];
  
  pyramids.forEach(pyramid => {
    const pyramidEl = document.createElement('div');
    pyramidEl.className = `ts-pyramid ${pyramid.size}`;
    pyramidEl.style.left = pyramid.left;
    pyramidEl.style.top = pyramid.top;
    world.appendChild(pyramidEl);
  });
  
  // Nubes low-poly específicas de TypeScript
  const tsClouds = [
    { size: 'small', left: '100px', top: '50px' },
    { size: 'medium', left: '400px', top: '70px' },
    { size: 'large', left: '650px', top: '40px' }
  ];
  
  tsClouds.forEach((cloud, index) => {
    const cloudEl = document.createElement('div');
    cloudEl.className = `ts-cloud low-poly ${cloud.size}`;
    cloudEl.style.left = cloud.left;
    cloudEl.style.top = cloud.top;
    cloudEl.style.width = cloud.size === 'small' ? '50px' : cloud.size === 'medium' ? '70px' : '90px';
    cloudEl.style.height = cloud.size === 'small' ? '25px' : cloud.size === 'medium' ? '35px' : '45px';
    cloudEl.style.animationDelay = `${index * 2}s`;
    world.appendChild(cloudEl);
  });
}

function createJavaVolcanoElements(world) {
  // Montañas volcánicas - ajustadas para tocar el suelo
  const mountains = [
    { size: 'small', left: '100px', top: '240px' },  // Ajustado para tocar suelo
    { size: 'large', left: '650px', top: '200px' }   // Ajustado para tocar suelo
  ];
  
  mountains.forEach(mountain => {
    const mountainEl = document.createElement('div');
    mountainEl.className = `java-mountain ${mountain.size}`;
    mountainEl.style.left = mountain.left;
    mountainEl.style.top = mountain.top;
    world.appendChild(mountainEl);
  });
  
  // Burbujas de lava
  const lavaBubbles = [
    { size: 'small', left: '200px', top: '300px', delay: '0s' },
    { size: 'medium', left: '450px', top: '290px', delay: '1s' },
    { size: 'small', left: '650px', top: '295px', delay: '2s' },
    { size: 'medium', left: '800px', top: '285px', delay: '0.5s' }
  ];
  
  lavaBubbles.forEach(bubble => {
    const bubbleEl = document.createElement('div');
    bubbleEl.className = `lava-bubble ${bubble.size}`;
    bubbleEl.style.left = bubble.left;
    bubbleEl.style.top = bubble.top;
    bubbleEl.style.animationDelay = bubble.delay;
    world.appendChild(bubbleEl);
  });
  
  // Humo volcánico
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const smokeEl = document.createElement('div');
      smokeEl.className = 'volcanic-smoke';
      smokeEl.style.left = `${720 + Math.random() * 40}px`;
      smokeEl.style.top = '150px';
      smokeEl.style.width = '15px';
      smokeEl.style.height = '15px';
      world.appendChild(smokeEl);
      
      // Remover después de la animación
      setTimeout(() => smokeEl.remove(), 8000);
    }, i * 2000);
  }
}

function updateHUD() {
  const level = LEVELS[currentLevel];
  const hud = document.getElementById("hud");
  
  if (hud) {
    let hudContent = `
      <span>THETANDER • ${level.name.toUpperCase()}</span>
      <span>PROYECTOS: ${level.projects.length}</span>
      <span>← → moverse • SPACE saltar • ↓ túnel • 1/2/3 niveles • N/P siguiente/anterior</span>
    `;
    
    // Agregar info de debug si está activado
    if (gameTester.isDebugMode) {
      hudContent += `<span style="color: #00ff00;">🐛 DEBUG: F1=Debug F2=Test F3=State F4=Achievements F5=Analytics</span>`;
    } else {
      hudContent += `<span style="color: #f59e0b;">F4=Achievements • F5=Analytics</span>`;
    }
    
    hud.innerHTML = hudContent;
  }
}

function nextLevel() {
  const levelOrder = ["csharp", "typescript", "java"];
  const currentIndex = levelOrder.indexOf(currentLevel);
  
  if (currentIndex < levelOrder.length - 1) {
    loadLevel(levelOrder[currentIndex + 1]);
    return true;
  }
  return false; // No hay más niveles
}

function prevLevel() {
  const levelOrder = ["csharp", "typescript", "java"];
  const currentIndex = levelOrder.indexOf(currentLevel);
  
  if (currentIndex > 0) {
    loadLevel(levelOrder[currentIndex - 1]);
    return true;
  }
  return false; // Es el primer nivel
}

// === Sistema de Audio ===
class AudioSystem {
  constructor() {
    this.context = null;
    this.enabled = true;
    this.volume = 0.3;
    this.sounds = {};
    this.init();
  }
  
  init() {
    try {
      // Crear contexto de audio al primer input del usuario
      this.initOnFirstInteraction();
    } catch (e) {
      console.log('Audio no disponible');
      this.enabled = false;
    }
  }
  
  initOnFirstInteraction() {
    const startAudio = () => {
      if (!this.context) {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.createSounds();
        document.removeEventListener('click', startAudio);
        document.removeEventListener('keydown', startAudio);
      }
    };
    
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
  }
  
  createSounds() {
    if (!this.context || !this.enabled) return;
    
    // Sonido de salto - tono ascendente
    this.sounds.jump = () => {
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      
      osc.connect(gain);
      gain.connect(this.context.destination);
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(300, this.context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, this.context.currentTime + 0.1);
      
      gain.gain.setValueAtTime(this.volume * 0.3, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.15);
      
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + 0.15);
    };
    
    // Sonido de colisión con bloques - ping
    this.sounds.blockHit = () => {
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      
      osc.connect(gain);
      gain.connect(this.context.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.context.currentTime + 0.05);
      
      gain.gain.setValueAtTime(this.volume * 0.4, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.1);
      
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + 0.1);
    };
    
    // Sonido de completar nivel - triunfo
    this.sounds.levelComplete = () => {
      const playNote = (freq, delay, duration) => {
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.connect(gain);
        gain.connect(this.context.destination);
        
        osc.type = 'square';
        osc.frequency.value = freq;
        
        const startTime = this.context.currentTime + delay;
        gain.gain.setValueAtTime(this.volume * 0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
      };
      
      // Melodía de victoria C-E-G-C
      playNote(523, 0, 0.2);    // C
      playNote(659, 0.15, 0.2); // E  
      playNote(784, 0.3, 0.2);  // G
      playNote(1047, 0.45, 0.4); // C alto
    };
    
    // Sonido de movimiento por túneles - whoosh
    this.sounds.pipeEnter = () => {
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      
      osc.connect(gain);
      gain.connect(this.context.destination);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, this.context.currentTime + 0.3);
      
      gain.gain.setValueAtTime(this.volume * 0.2, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.3);
      
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + 0.3);
    };
  }
  
  play(soundName) {
    if (!this.enabled || !this.context || !this.sounds[soundName]) return;
    
    try {
      this.sounds[soundName]();
    } catch (e) {
      console.log('Error reproduciendo sonido:', e);
    }
  }
  
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }
  
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

// Instancia global del sistema de audio
const audioSystem = new AudioSystem();

// === Sistema de limpieza de memoria ===
class EventManager {
  constructor() {
    this.listeners = new Map();
  }
  
  addEventListener(element, event, handler, options = {}) {
    if (!this.listeners.has(element)) {
      this.listeners.set(element, []);
    }
    
    this.listeners.get(element).push({ event, handler, options });
    element.addEventListener(event, handler, options);
  }
  
  removeAllListeners() {
    this.listeners.forEach((eventList, element) => {
      eventList.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
    });
    this.listeners.clear();
  }
  
  removeElementListeners(element) {
    if (this.listeners.has(element)) {
      this.listeners.get(element).forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      this.listeners.delete(element);
    }
  }
}

const eventManager = new EventManager();

// === Utilidades de optimización ===
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Versiones optimizadas de funciones críticas
const throttledUpdateContextHelp = throttle(updateContextHelp, 100);
const debouncedResize = debounce(handleResize, 250);

// === Estado actual del juego ===
let currentLevel = "csharp";
let gameState = "menu"; // "menu", "playing", "paused", "level-select"
let visitedProjects = new Set();
let completedLevels = new Set();
let totalProjectsViewed = 0;

// Referencias DOM de pantallas
const startScreen = document.getElementById("start-screen");
const levelSelectScreen = document.getElementById("level-select-screen");
const gameScreen = document.getElementById("game-screen");

// Referencias DOM de modales adicionales
const aboutModal = document.getElementById("about-modal");
const contactModal = document.getElementById("contact-modal");

// Compatibility: mantener projects para el nivel actual
const projects = allProjects.csharp;

document.getElementById("project-count").textContent = projects.length;

// Referencias DOM
const world = document.getElementById("world");
const playerEl = document.getElementById("player");
const blocks = Array.from(document.querySelectorAll(".project-block"));
const pipeEl = document.getElementById("pipe-skill");

// Modales
const projectModal = document.getElementById("project-modal");
const pipeModal = document.getElementById("pipe-modal");
const projectTitleEl = document.getElementById("project-title");
const projectDescriptionEl = document.getElementById("project-description");
const projectLinkEl = document.getElementById("project-link");
const closeButtons = document.querySelectorAll(".close-modal");

// === Clase Player modular ===
class Player {
  constructor() {
    this.x = 100;
    this.y = 288; // 400 - 80 (ground) - 32 (height) = 288
    this.prevX = 100;
    this.prevY = 288;
    this.width = 32;  // Cambiar a 32px para coincidir con sprite visual
    this.height = 32; // Cambiar a 32px para coincidir con sprite visual
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.maxSpeed = 5;
    this.acceleration = 0.8;
    this.friction = 0.85;
    this.jumpForce = 11;
    this.maxJumpTime = 200; // ms para salto variable
    this.onGround = true;
    
    // Físicas avanzadas
    this.coyoteTime = 100; // ms para saltar después de dejar el suelo
    this.coyoteTimer = 0;
    this.jumpBuffer = 150; // ms para buffer de salto
    this.jumpBufferTimer = 0;
    this.isJumping = false;
    this.jumpStartTime = 0;
    
    // Referencias DOM
    this.element = document.getElementById("player");
  }
  
  update() {
    // Guardamos posición anterior
    this.prevX = this.x;
    this.prevY = this.y;

    // Actualizar temporizadores
    const deltaTime = 16; // Aproximadamente 60fps
    this.coyoteTimer = Math.max(0, this.coyoteTimer - deltaTime);
    this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - deltaTime);

    // Movimiento horizontal mejorado
    if (keys.left) {
      this.vx -= this.acceleration;
    } else if (keys.right) {
      this.vx += this.acceleration;
    } else {
      // Aplicar fricción cuando no hay input
      this.vx *= this.friction;
    }

    // Limitar velocidad horizontal
    this.vx = Math.max(-this.maxSpeed, Math.min(this.maxSpeed, this.vx));
    
    // Aplicar movimiento horizontal
    this.x += this.vx;

    // Física especial por nivel
    this.applyLevelPhysics();

    // Límites laterales
    const worldWidth = world.clientWidth;
    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }
    if (this.x + this.width > worldWidth) {
      this.x = worldWidth - this.width;
      this.vx = 0;
    }

    // Gravedad con salto variable
    if (this.isJumping) {
      const jumpTime = Date.now() - this.jumpStartTime;
      if (jumpTime < this.maxJumpTime && this.vy < 0 && 
          (keys.left || keys.right || keys.down)) {
        // Reducir gravedad durante el salto mantenido
        this.vy += gravity * 0.4;
      } else {
        this.isJumping = false;
        this.vy += gravity;
      }
    } else {
      this.vy += gravity;
    }
    
    this.y += this.vy;

    // Manejo de suelo con coyote time
    const floorY = worldHeight - groundHeight - this.height;
    const wasOnGround = this.onGround;
    
    if (this.y >= floorY) {
      this.y = floorY;
      this.vy = 0;
      this.onGround = true;
      this.isJumping = false;
      
      // Jump buffering: saltar si se intentó durante la caída
      if (this.jumpBufferTimer > 0) {
        this.performJump();
      }
    } else {
      // Activar coyote time cuando deja el suelo
      if (wasOnGround && !this.onGround) {
        this.coyoteTimer = this.coyoteTime;
      }
      this.onGround = false;
    }
  }
  
  render() {
    if (this.element) {
      // Ahora sprite visual y hitbox son ambos 32x32px - sin offset necesario
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
      
      // Track movement analytics
      analyticsManager.trackPlayerMovement(this.x, this.y);
    }
  }
  
  handleInput(key, isPressed) {
    if (key === " " || key === "ArrowUp" || key === "w") {
      if (isPressed) {
        // Jump buffering: almacenar intento de salto
        this.jumpBufferTimer = this.jumpBuffer;
        
        // Salto inmediato si está en el suelo o coyote time activo
        if (this.onGround || this.coyoteTimer > 0) {
          this.performJump();
        }
      } else {
        // Terminar salto variable
        this.isJumping = false;
      }
    }
  }
  
  performJump() {
    this.vy = -this.jumpForce;
    this.onGround = false;
    this.isJumping = true;
    this.jumpStartTime = Date.now();
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
    
    // Reproducir sonido de salto
    audioSystem.play('jump');
    
    // Track analytics
    analyticsManager.trackJump();
  }
  
  reset() {
    this.x = 100;
    this.y = 272;
    this.vx = 0;
    this.vy = 0;
    this.onGround = true;
    this.isJumping = false;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
  }
  
  updateWithDelta(deltaTime) {
    // Usar el método update existente con normalización de delta
    this.update();
  }
  
  hasMoved() {
    return this.prevX !== this.x || this.prevY !== this.y;
  }
  
  applyLevelPhysics() {
    if (currentLevel === 'typescript') {
      // TypeScript Desert: Zonas de arena que reducen velocidad (efecto más suave)
      const sandZones = [
        { x: 200, width: 150, slowdown: 0.8 },  // Menos lentitud: 0.6 -> 0.8
        { x: 450, width: 200, slowdown: 0.75 }, // Menos lentitud: 0.5 -> 0.75
        { x: 750, width: 100, slowdown: 0.85 }  // Menos lentitud: 0.7 -> 0.85
      ];
      
      for (const zone of sandZones) {
        if (this.x >= zone.x && this.x <= zone.x + zone.width) {
          this.vx *= zone.slowdown;
          
          // Efecto visual de partículas de arena (simulado con opacidad)
          if (Math.random() < 0.2) {  // Reducido de 0.3 a 0.2
            this.createSandParticle();
          }
          break;
        }
      }
    } 
    else if (currentLevel === 'java') {
      // Java Volcano: Lava bounce zones
      const lavaZones = [
        { x: 300, width: 120, bounceForce: 8 },
        { x: 600, width: 150, bounceForce: 10 },
        { x: 900, width: 100, bounceForce: 12 }
      ];
      
      for (const zone of lavaZones) {
        if (this.x >= zone.x && this.x <= zone.x + zone.width && 
            this.y + this.height >= worldHeight - groundHeight - 10) {
          // Bounce effect en lava
          this.vy = -zone.bounceForce;
          this.onGround = false;
          
          // Efecto visual de lava splash
          this.createLavaSplash();
          
          // Sonido especial para lava bounce
          audioSystem.play('jump');
          break;
        }
      }
    }
  }
  
  createSandParticle() {
    // Efecto visual simple de arena usando el mismo elemento player
    const originalOpacity = this.element.style.opacity || '1';
    this.element.style.opacity = '0.8';
    setTimeout(() => {
      this.element.style.opacity = originalOpacity;
    }, 100);
  }
  
  createLavaSplash() {
    // Efecto visual de splash de lava
    const originalFilter = this.element.style.filter || '';
    this.element.style.filter = 'hue-rotate(30deg) brightness(1.2)';
    setTimeout(() => {
      this.element.style.filter = originalFilter;
    }, 200);
  }
  
  // Getters para compatibilidad con código existente
  getBounds() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
}

// === Funciones adicionales faltantes ===
function initVirtualControls() {
  const virtualBtns = document.querySelectorAll('.virtual-btn');
  
  virtualBtns.forEach(btn => {
    const key = btn.getAttribute('data-key');
    
    btn.addEventListener('mousedown', () => {
      btn.classList.add('pressed');
      simulateKeyPress(key, true);
    });
    
    btn.addEventListener('mouseup', () => {
      btn.classList.remove('pressed');
      simulateKeyPress(key, false);
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pressed');
      simulateKeyPress(key, false);
    });
    
    // Touch events para móviles
    btn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      btn.classList.add('pressed');
      simulateKeyPress(key, true);
    });
    
    btn.addEventListener('touchend', (e) => {
      e.preventDefault();
      btn.classList.remove('pressed');
      simulateKeyPress(key, false);
    });
  });
}

function simulateKeyPress(key, isPressed) {
  if (gameState !== 'playing') return;
  
  const event = new KeyboardEvent(isPressed ? 'keydown' : 'keyup', {
    key: key,
    bubbles: true,
    cancelable: true
  });
  
  if (isPressed) {
    if (key === "ArrowLeft" || key === "a") keys.left = true;
    if (key === "ArrowRight" || key === "d") keys.right = true;
    if (key === "ArrowDown" || key === "s") keys.down = true;
    if (key === " " || key === "ArrowUp" || key === "w") {
      player.handleInput(key, true);
    }
    if (key === "1") loadLevel("csharp");
    if (key === "2") loadLevel("typescript");
    if (key === "3") loadLevel("java");
    if (key === "n") nextLevel();
    if (key === "p") prevLevel();
    if (key === "Escape") showScreen("start");
  } else {
    if (key === "ArrowLeft" || key === "a") keys.left = false;
    if (key === "ArrowRight" || key === "d") keys.right = false;
    if (key === "ArrowDown" || key === "s") keys.down = false;
    if (key === " " || key === "ArrowUp" || key === "w") {
      player.handleInput(key, false);
    }
  }
}

function updateContextHelp() {
  const contextHelp = document.querySelector('.context-help');
  if (!contextHelp) return;
  
  const helpItems = contextHelp.querySelectorAll('.help-item');
  const currentProjects = LEVELS[currentLevel].projects;
  const levelProjectsViewed = Array.from(visitedProjects)
    .filter(key => key.startsWith(`${currentLevel}-`)).length;
  
  // Actualizar el texto dinámicamente
  if (helpItems[3]) {
    const completedText = completedLevels.has(currentLevel) ? '✅' : '';
    helpItems[3].querySelector('.help-text').textContent = 
      `${currentLevel === 'csharp' ? '1' : currentLevel === 'typescript' ? '2' : '3'}/3 ${LEVELS[currentLevel].name} ${completedText}`;
  }
}

// Instancia del player
const player = new Player();

const keys = {
  left: false,
  right: false,
  down: false
};

const gravity = 0.5;
const worldHeight = 400;
const groundHeight = 80;

// === Controles ===
window.addEventListener("keydown", (e) => {
  // Atajos de debug (F-keys)
  if (e.key === "F1") {
    e.preventDefault();
    gameTester.enableDebug();
    return;
  }
  if (e.key === "F2") {
    e.preventDefault();
    gameTester.runTests();
    return;
  }
  if (e.key === "F3") {
    e.preventDefault();
    console.log('🎮 Game State:', {
      level: currentLevel,
      state: gameState,
      playerPos: { x: Math.round(player.x), y: Math.round(player.y) },
      visitedProjects: Array.from(visitedProjects),
      completedLevels: Array.from(completedLevels)
    });
    return;
  }
  if (e.key === "F4") {
    e.preventDefault();
    achievementSystem.showAchievementScreen();
    return;
  }
  if (e.key === "F5") {
    e.preventDefault();
    analyticsManager.showAnalyticsDashboard();
    return;
  }
  
  // Control global: ESC para menú principal
  if (e.key === "Escape") {
    if (gameState === "playing") {
      showScreen("start");
    }
    return;
  }
  
  if (gameState !== "playing") return;
  
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
  if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
  if (e.key === "ArrowDown" || e.key === "s") keys.down = true;

  if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
    e.preventDefault(); // Evitar scroll en página
    player.handleInput(e.key, true);
  }
  
  // Controles de nivel
  if (e.key === "1") loadLevel("csharp");
  if (e.key === "2") loadLevel("typescript");
  if (e.key === "3") loadLevel("java");
  
  // Navegación entre niveles
  if (e.key === "n" || e.key === "N") nextLevel();
  if (e.key === "p" || e.key === "P") prevLevel();
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
  if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
  if (e.key === "ArrowDown" || e.key === "s") keys.down = false;
  
  // Terminar salto variable
  if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
    player.handleInput(e.key, false);
  }
});



// === Bucle principal ===
// === Optimización de rendimiento ===
let lastUpdateTime = 0;
const targetFPS = 60;
const frameTime = 1000 / targetFPS;

function update(currentTime = performance.now()) {
  // Throttle de FPS para consistencia
  if (currentTime - lastUpdateTime < frameTime) {
    requestAnimationFrame(update);
    return;
  }
  
  const deltaTime = Math.min(currentTime - lastUpdateTime, 32); // Cap delta time
  lastUpdateTime = currentTime;
  
  if (gameState === 'playing') {
    // Actualizar player con delta time
    player.updateWithDelta(deltaTime);

    // Optimización: Solo hacer colisiones si el player se movió
    if (player.hasMoved()) {
      // Colisiones con bloques (usar caché de elementos)
      checkBlockCollisions();

      // Colisión con el túnel
      handlePipeCollision();

      // Túnel: si está encima y presiona ↓
      handlePipeEntry();
    }

    // Actualizar ayuda contextual con throttling
    throttledUpdateContextHelp();
  }

  // Render solo si algo cambió
  if (gameState === 'playing') {
    player.render();
  }

  requestAnimationFrame(update);
}

// Cache de elementos para optimización
let cachedBlocks = null;
let lastBlockCacheTime = 0;

function checkBlockCollisions() {
  // Cache elements para evitar DOM queries repetidas
  if (!cachedBlocks || performance.now() - lastBlockCacheTime > 1000) {
    cachedBlocks = Array.from(document.querySelectorAll('.project-block'));
    lastBlockCacheTime = performance.now();
  }
  
  cachedBlocks.forEach((blockEl) => handleBlockCollision(blockEl));
}

// === Utilidades ===
function isColliding(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

// Colisión con bloques de proyectos (con bump)
function handleBlockCollision(blockEl) {
  const rect = blockEl.getBoundingClientRect();
  const worldRect = world.getBoundingClientRect();

  const block = {
    x: rect.left - worldRect.left,
    y: rect.top - worldRect.top,
    width: rect.width,
    height: rect.height
  };

  const playerBounds = player.getBounds();
  if (!isColliding(playerBounds, block)) return;

  const prevBottom = player.prevY + player.height;
  const prevTop = player.prevY;
  const prevRight = player.prevX + player.width;
  const prevLeft = player.prevX;

  const blockTop = block.y;
  const blockBottom = block.y + block.height;
  const blockLeft = block.x;
  const blockRight = block.x + block.width;

  // 1. Cayendo sobre el bloque (suelo sólido)
  if (prevBottom <= blockTop && player.y + player.height > blockTop) {
    player.y = blockTop - player.height;
    player.vy = 0;
    player.onGround = true;
    return;
  }

  // 2. Golpe desde abajo → animar + abrir modal de proyecto
  if (prevTop >= blockBottom && player.y < blockBottom) {
    player.y = blockBottom;
    player.vy = 0;

    // Animación bump
    blockEl.classList.add("bump");
    blockEl.addEventListener(
      "animationend",
      () => blockEl.classList.remove("bump"),
      { once: true }
    );

    // Reproducir sonido de golpe al bloque
    audioSystem.play('blockHit');

    const index = parseInt(blockEl.dataset.project, 10);
    showProjectExploredNotification(index);
    return;
  }

  // 3. Colisión lateral → frenar
  if (prevRight <= blockLeft && player.x + player.width > blockLeft) {
    player.x = blockLeft - player.width;
    return;
  }

  if (prevLeft >= blockRight && player.x < blockRight) {
    player.x = blockRight;
    return;
  }
}

// === Colisión con el túnel (pipe sólido) ===
function handlePipeCollision() {
  if (!pipeEl) return;

  const pipeRect = pipeEl.getBoundingClientRect();
  const worldRect = world.getBoundingClientRect();

  const pipe = {
    x: pipeRect.left - worldRect.left,
    y: pipeRect.top - worldRect.top,
    width: pipeRect.width,
    height: pipeRect.height
  };

  const playerBounds = player.getBounds();
  if (!isColliding(playerBounds, pipe)) return;

  const prevBottom = player.prevY + player.height;
  const prevTop = player.prevY;
  const prevRight = player.prevX + player.width;
  const prevLeft = player.prevX;

  const pipeTop = pipe.y;
  const pipeBottom = pipe.y + pipe.height;
  const pipeLeft = pipe.x;
  const pipeRight = pipe.x + pipe.width;

  // 1. Aterrizar sobre el túnel
  if (prevBottom <= pipeTop && player.y + player.height > pipeTop) {
    player.y = pipeTop - player.height;
    player.vy = 0;
    player.onGround = true;
    return;
  }

  // 2. Desde abajo (evitamos que lo atraviese hacia arriba)
  if (prevTop >= pipeBottom && player.y < pipeBottom) {
    player.y = pipeBottom;
    player.vy = 0;
    return;
  }

  // 3. Colisión lateral
  if (prevRight <= pipeLeft && player.x + player.width > pipeLeft) {
    player.x = pipeLeft - player.width;
    return;
  }

  if (prevLeft >= pipeRight && player.x < pipeRight) {
    player.x = pipeRight;
    return;
  }
}

// === Entrada al túnel ===
function handlePipeEntry() {
  if (!pipeEl) return;

  const pipeRect = pipeEl.getBoundingClientRect();
  const worldRect = world.getBoundingClientRect();

  const pipe = {
    x: pipeRect.left - worldRect.left,
    y: pipeRect.top - worldRect.top,
    width: pipeRect.width,
    height: pipeRect.height
  };

  // Tolerancia pequeña para "estar encima"
  const playerFeet = player.y + player.height;
  const onTopOfPipe =
    playerFeet >= pipe.y - 2 &&
    playerFeet <= pipe.y + 4 &&
    player.x + player.width > pipe.x + 5 &&
    player.x < pipe.x + pipe.width - 5;

  // Debug info (solo mostrar cada 100 frames para reducir spam)
  if (onTopOfPipe && Math.random() < 0.01) { // 1% chance de mostrar log
    console.log("Player on pipe! Keys.down:", keys.down, "Projects:", visitedProjects.size);
  }

  if (onTopOfPipe && keys.down) {
    // Evitar spam de logs - solo ejecutar una vez por presión de tecla
    if (!this.tunnelTriggered) {
      this.tunnelTriggered = true;
      console.log("🚇 Tunnel entry triggered! Projects:", visitedProjects.size); // Debug
      
      // Verificar si ha visitado al menos 1 proyecto
      if (visitedProjects.size < 1) {
        // Sonido de restricción y mensaje
        audioSystem.play('blockHit'); // Sonido de "no permitido"
        showNotification("🔒 Explore at least 1 project to unlock transport!", 2500);
        console.log("❌ Tunnel locked");
        return;
      }
      
      console.log("✅ Opening tunnel modal...");
      // Reproducir sonido de entrada al túnel
      audioSystem.play('pipeEnter');
      openPipeModal();
      console.log("🎯 openPipeModal() called");
    }
  } else {
    // Reset flag cuando no está presionando la tecla
    this.tunnelTriggered = false;
  }
  
  // Mostrar hint visual cuando está cerca del túnel
  if (onTopOfPipe && !keys.down) {
    if (visitedProjects.size >= 1) {
      showTransportHint();
    } else {
      showRestrictedHint();
    }
  } else {
    hideTransportHint();
    hideRestrictedHint();
  }
}

let transportHintVisible = false;
let restrictedHintVisible = false;

function showTransportHint() {
  if (transportHintVisible) return;
  
  const hint = document.createElement('div');
  hint.id = 'transport-hint';
  hint.style.cssText = `
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #34d399;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 10;
    animation: fadeIn 0.3s ease;
  `;
  hint.textContent = '↓ Press DOWN to use Transport Portal';
  
  pipeEl.appendChild(hint);
  transportHintVisible = true;
}

function showRestrictedHint() {
  if (restrictedHintVisible) return;
  
  const hint = document.createElement('div');
  hint.id = 'restricted-hint';
  hint.style.cssText = `
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(220, 38, 38, 0.9);
    color: #fecaca;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 10;
    animation: fadeIn 0.3s ease;
    border: 1px solid #dc2626;
  `;
  hint.textContent = '🔒 Visit 1 project first!';
  
  pipeEl.appendChild(hint);
  restrictedHintVisible = true;
}

function hideTransportHint() {
  if (!transportHintVisible) return;
  
  const hint = document.getElementById('transport-hint');
  if (hint) {
    hint.remove();
    transportHintVisible = false;
  }
}

function hideRestrictedHint() {
  if (!restrictedHintVisible) return;
  
  const hint = document.getElementById('restricted-hint');
  if (hint) {
    hint.remove();
    restrictedHintVisible = false;
  }
}

function updateTunnelState() {
  const tunnel = document.getElementById('pipe-skill');
  if (!tunnel) return;
  
  if (visitedProjects.size >= 1) {
    // Túnel disponible para transporte
    tunnel.classList.remove('locked');
    tunnel.querySelector('.portal-indicator').textContent = '🚇';
    tunnel.title = "Transport Tunnel - Click to travel between levels";
  } else {
    // Túnel bloqueado
    tunnel.classList.add('locked');
    tunnel.querySelector('.portal-indicator').textContent = '🔒';
    tunnel.title = "Transport Locked - Visit 1 project to unlock";
  }
}

// === Modales ===
function openProject(index) {
  const currentProjects = LEVELS[currentLevel].projects;
  const project = currentProjects[index];
  if (!project) return;

  // Marcar proyecto como visitado
  const projectKey = `${currentLevel}-${index}`;
  const isFirstVisit = !visitedProjects.has(projectKey);
  if (isFirstVisit) {
    visitedProjects.add(projectKey);
    totalProjectsViewed++;
    updateHUDProgress();
    
    // CRUCIAL: Actualizar estado del túnel después de visitar proyecto
    updateTunnelState();
    
    // Mostrar notificación de túnel desbloqueado si es el primer proyecto
    if (visitedProjects.size === 1) {
      setTimeout(() => {
        showNotification("🚇 Transport Tunnel unlocked! Click the green tunnel to travel between levels", 4000);
      }, 2000);
    }
    
    // Track analytics de proyecto visitado
    analyticsManager.trackProjectVisit(currentLevel, index, project);
    
    // Verificar logros después de visitar proyecto
    achievementSystem.checkAchievements();
    
    // Verificar si se completó el nivel
    setTimeout(() => checkLevelCompletion(), 500);
  }
  
  // Track analytics de modal abierto
  analyticsManager.trackModalOpen('project');

  // Validar y mostrar datos
  projectTitleEl.textContent = project.title || "Proyecto sin título";
  projectDescriptionEl.textContent = project.description || "Descripción no disponible";
  
  // Validar URL antes de asignar
  try {
    new URL(project.url);
    projectLinkEl.href = project.url;
    projectLinkEl.style.display = "inline-block";
  } catch {
    projectLinkEl.href = "#";
    projectLinkEl.style.display = "none";
    console.warn(`URL inválida para proyecto: ${project.title}`);
  }
  
  // Actualizar información adicional con validaciones
  const techEl = document.getElementById("project-tech");
  const roleEl = document.getElementById("project-role");
  const demoEl = document.getElementById("project-demo");
  
  if (techEl) {
    const techText = Array.isArray(project.technologies) 
      ? project.technologies.join(", ") 
      : "Tecnologías no especificadas";
    techEl.textContent = techText;
  }
  
  if (roleEl) {
    roleEl.textContent = project.role || "Rol no especificado";
  }
  
  if (demoEl) {
    const demoText = project.demo || "Demo no disponible";
    demoEl.textContent = demoText;
    
    // Estilo según disponibilidad
    if (demoText.includes("Not linked") || demoText.includes("no disponible")) {
      demoEl.style.color = "#94a3b8";
      demoEl.style.fontStyle = "italic";
    } else {
      demoEl.style.color = "#22c55e";
      demoEl.style.fontStyle = "normal";
    }
  }
  
  // Configurar botón de demo
  const demoBtnEl = document.getElementById("project-demo-btn");
  if (demoBtnEl) {
    if (project.demoUrl && project.demoUrl !== "#" && !project.demoUrl.includes("no disponible")) {
      demoBtnEl.style.display = "inline-block";
      demoBtnEl.onclick = () => window.open(project.demoUrl, '_blank');
    } else {
      demoBtnEl.style.display = "none";
    }
  }
  
  // FORZAR creación de botones siempre para solucionar problema
  const modalContent = projectModal.querySelector('.modal-content');
  
  // Remover botones existentes si los hay
  const existingActions = modalContent.querySelector('.project-actions');
  if (existingActions) {
    existingActions.remove();
  }
  
  // Crear botones de acción SIEMPRE
  const actionsEl = document.createElement("div");
  actionsEl.className = "project-actions";
  actionsEl.style.cssText = `
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
  `;
  
  // Crear botón de repositorio
  const repoBtn = document.createElement("a");
  repoBtn.href = project.url || "#";
  repoBtn.target = "_blank";
  repoBtn.className = "project-action-btn primary";
  repoBtn.innerHTML = "📂 Ver Repositorio";
  repoBtn.style.cssText = `
    padding: 10px 15px;
    border-radius: 8px;
    text-decoration: none;
    background: #22c55e;
    color: #022c22;
    font-weight: 600;
    transition: all 0.3s ease;
  `;
  
  // Crear botón de demo
  const demoBtn = document.createElement("button");
  demoBtn.className = "project-action-btn secondary";
  demoBtn.innerHTML = "🚀 Ver Demo";
  demoBtn.style.cssText = `
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    background: #3b82f6;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  if (project.demoUrl && project.demoUrl !== "#") {
    demoBtn.onclick = () => window.open(project.demoUrl, '_blank');
  } else {
    demoBtn.disabled = true;
    demoBtn.style.opacity = "0.5";
  }
  
  // Crear botón cerrar
  const closeBtn = document.createElement("button");
  closeBtn.className = "project-action-btn close";
  closeBtn.innerHTML = "🔙 Cerrar";
  closeBtn.style.cssText = `
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    background: #6b7280;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  closeBtn.onclick = () => projectModal.classList.add('hidden');
  
  // Agregar botones al contenedor
  actionsEl.appendChild(repoBtn);
  actionsEl.appendChild(demoBtn);
  actionsEl.appendChild(closeBtn);
  
  // Agregar al final del modal content
  modalContent.appendChild(actionsEl);

  projectModal.classList.remove("hidden");
  
  // La notificación se muestra ahora solo al hacer clic en el bloque, no al abrir
}

// Sistema de notificaciones
function showNotification(message, duration = 2000) {
  const existing = document.getElementById("notification");
  if (existing) existing.remove();
  
  const notification = document.createElement("div");
  notification.id = "notification";
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    background: #1f2937;
    color: #fff;
    padding: 12px 16px;
    border-radius: 6px;
    border-left: 4px solid #3b82f6;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-size: 14px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOut 0.3s ease-in forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, duration);
}

// Sistema de notificaciones del lado derecho (solo para analytics)
function showRightNotification(message, duration = 2000) {
  const existing = document.getElementById("right-notification");
  if (existing) existing.remove();
  
  const notification = document.createElement("div");
  notification.id = "right-notification";
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #1f2937;
    color: #fff;
    padding: 12px 16px;
    border-radius: 6px;
    border-left: 4px solid #f59e0b;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-size: 14px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOut 0.3s ease-in forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, duration);
}

// === Sistema de tooltips ===
function createTooltip(element, text, position = 'top') {
  const tooltip = document.createElement('div');
  tooltip.className = 'game-tooltip';
  tooltip.textContent = text;
  tooltip.style.cssText = `
    position: absolute;
    background: rgba(17, 24, 39, 0.95);
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 999;
    pointer-events: none;
    border: 1px solid #374151;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.2s ease;
  `;
  
  document.body.appendChild(tooltip);
  
  const updatePosition = () => {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    switch(position) {
      case 'top':
        tooltip.style.left = rect.left + (rect.width - tooltipRect.width) / 2 + 'px';
        tooltip.style.top = rect.top - tooltipRect.height - 8 + 'px';
        break;
      case 'bottom':
        tooltip.style.left = rect.left + (rect.width - tooltipRect.width) / 2 + 'px';
        tooltip.style.top = rect.bottom + 8 + 'px';
        break;
      case 'right':
        tooltip.style.left = rect.right + 8 + 'px';
        tooltip.style.top = rect.top + (rect.height - tooltipRect.height) / 2 + 'px';
        break;
    }
  };
  
  updatePosition();
  tooltip.style.opacity = '1';
  
  return {
    update: updatePosition,
    remove: () => tooltip.remove()
  };
}

function addHoverTooltips() {
  // Tooltip para bloques de proyectos
  const blocks = document.querySelectorAll('.project-block');
  blocks.forEach((block, index) => {
    const projectIndex = parseInt(block.dataset.project, 10);
    const currentProjects = LEVELS[currentLevel].projects;
    const project = currentProjects[projectIndex];
    
    if (!project) return;
    
    let tooltip = null;
    
    block.addEventListener('mouseenter', () => {
      const isVisited = visitedProjects.has(`${currentLevel}-${projectIndex}`);
      const tooltipText = isVisited 
        ? `✅ ${project.title} - Explorado` 
        : `🔍 ${project.title} - Golpea desde abajo`;
      
      tooltip = createTooltip(block, tooltipText, 'top');
    });
    
    block.addEventListener('mouseleave', () => {
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    });
  });
  
  // Tooltip para el túnel
  const pipe = document.getElementById('pipe-skill');
  if (pipe) {
    let pipeTooltip = null;
    
    pipe.addEventListener('mouseenter', () => {
      if (visitedProjects.size >= 1) {
        pipeTooltip = createTooltip(pipe, `🚇 Transport Tunnel - Click to travel between levels`, 'top');
      } else {
        pipeTooltip = createTooltip(pipe, `🔒 Transport Locked - Visit 1 project to unlock`, 'top');
      }
    });
    
    pipe.addEventListener('mouseleave', () => {
      if (pipeTooltip) {
        pipeTooltip.remove();
        pipeTooltip = null;
      }
    });
  }
}

// === Feedback de niveles ===
function showLevelChangeNotification(levelName) {
  showNotification(`🌍 Entrando a ${levelName}`, 2500);
}

function addProgressIndicator() {
  const hud = document.getElementById('hud');
  if (!hud) return;
  
  // Verificar si ya existe
  if (document.getElementById('progress-indicator')) return;
  
  const progressContainer = document.createElement('div');
  progressContainer.id = 'progress-indicator';
  progressContainer.style.cssText = `
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(17, 24, 39, 0.9);
    padding: 8px 16px;
    border-radius: 15px;
    border: 2px solid #374151;
    font-size: 12px;
    color: #94a3b8;
    text-align: center;
  `;
  
  updateProgressIndicator();
  hud.appendChild(progressContainer);
}

function updateProgressIndicator() {
  const indicator = document.getElementById('progress-indicator');
  if (!indicator) return;
  
  const totalLevels = Object.keys(LEVELS).length;
  const completedCount = completedLevels.size;
  const totalProjects = Object.values(allProjects).flat().length;
  
  indicator.innerHTML = `
    <div>Progreso General: ${completedCount}/${totalLevels} mundos</div>
    <div>Proyectos Vistos: ${totalProjectsViewed}/${totalProjects}</div>
  `;
}

function openPipeModal() {
  console.log("🚇 openPipeModal() function started"); // Debug
  
  const level = LEVELS[currentLevel];
  const skillsContent = getSkillsForLevel(currentLevel);
  
  // Actualizar skills del nivel actual
  const skillsContainer = document.getElementById('skills-content');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsContent;
  }
  
  // Marcar el nivel actual en los botones de transporte
  const transportBtns = document.querySelectorAll('.transport-btn');
  transportBtns.forEach(btn => {
    const levelId = btn.getAttribute('data-level');
    btn.classList.toggle('current-level', levelId === currentLevel);
    
    if (levelId === currentLevel) {
      btn.innerHTML = `
        <div class="transport-icon">✅</div>
        <div>
          <div class="transport-name">${LEVELS[levelId].name} (Current)</div>
          <div class="transport-desc">You are here</div>
        </div>
      `;
    }
  });
  
  // Track analytics de modal abierto
  analyticsManager.trackModalOpen('tunnel');
  
  console.log("🎯 About to show pipeModal:", pipeModal); // Debug
  pipeModal.classList.remove("hidden");
  
  // FORZAR visibilidad con estilos inline para debugging
  pipeModal.style.display = 'flex';
  pipeModal.style.position = 'fixed';
  pipeModal.style.inset = '0';
  pipeModal.style.background = 'rgba(15, 23, 42, 0.9)';
  pipeModal.style.justifyContent = 'center';
  pipeModal.style.alignItems = 'center';
  pipeModal.style.zIndex = '10000';
  
  console.log("✅ pipeModal should now be visible with forced styles"); // Debug
}

// Función helper para cerrar el pipe modal completamente
function closePipeModal() {
  pipeModal.style.display = 'none';
  pipeModal.classList.add('hidden');
  // Limpiar estilos inline para futuras aperturas
  pipeModal.style.position = '';
  pipeModal.style.inset = '';
  pipeModal.style.background = '';
  pipeModal.style.justifyContent = '';
  pipeModal.style.alignItems = '';
  pipeModal.style.zIndex = '';
}

function getSkillsForLevel(levelId) {
  const skillsData = {
    csharp: `
      • C# / .NET 8<br>
      • Arquitectura por capas y Clean Architecture<br>
      • Microservicios (AuthService, VehicleService)<br>
      • Entity Framework Core, gRPC, patrones Repository & Unit of Work<br>
      • Autenticación, JWT, Docker y despliegue básico
    `,
    typescript: `
      • TypeScript / JavaScript ES6+<br>
      • Angular, React, Node.js<br>
      • RxJS, Material UI, REST APIs<br>
      • Responsive Design, Modern CSS<br>
      • Express, PostgreSQL, Prisma ORM
    `,
    java: `
      • Java 17+ / Spring Framework<br>
      • Spring Boot, Maven, JUnit<br>
      • Design Patterns, Enterprise Architecture<br>
      • XML Processing, Web Services, SRI Integration<br>
      • Apache Kafka, MySQL, Docker deployment
    `
  };
  
  return skillsData[levelId] || "Skills information not available.";
}

// Event listeners para transporte por túnel
function initTransportButtons() {
  const transportBtns = document.querySelectorAll('.transport-btn');
  transportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLevel = btn.getAttribute('data-level');
      if (targetLevel && targetLevel !== currentLevel) {
        // Efecto de transporte
        showTransportEffect();
        
        // Cambiar nivel después del efecto
        setTimeout(() => {
          loadLevel(targetLevel);
          // Usar función helper para cerrar modal
          closePipeModal();
          showNotification(`🚇 Transported to ${LEVELS[targetLevel].name}!`, 2000);
        }, 500);
      } else if (targetLevel === currentLevel) {
        showNotification(`📍 You are already in ${LEVELS[currentLevel].name}`, 1500);
        // También cerrar el modal si selecciona el nivel actual
        setTimeout(() => {
          closePipeModal();
        }, 1000);
      }
    });
  });
}

function showTransportEffect() {
  const world = document.getElementById('world');
  const player = document.getElementById('player');
  
  // Efecto de fade y escala
  world.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  world.style.opacity = '0.3';
  world.style.transform = 'scale(0.95)';
  
  player.style.transition = 'opacity 0.3s ease';
  player.style.opacity = '0.5';
  
  // Restaurar después del transporte
  setTimeout(() => {
    world.style.opacity = '1';
    world.style.transform = 'scale(1)';
    player.style.opacity = '1';
    
    // Limpiar transiciones
    setTimeout(() => {
      world.style.transition = '';
      player.style.transition = '';
    }, 100);
  }, 600);
}

// Cerrar modales
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Cerrar project modal
    projectModal.classList.add("hidden");
    
    // Cerrar pipe modal usando función helper
    closePipeModal();
  });
});

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) projectModal.classList.add("hidden");
});

pipeModal.addEventListener("click", (e) => {
  if (e.target === pipeModal) {
    // Cerrar completamente al hacer click fuera usando función helper
    closePipeModal();
  }
});

// Función para configurar event listeners del túnel
function setupTunnelEventListeners() {
  const tunnel = document.getElementById('pipe-skill');
  if (!tunnel) return;
  
  // Remover listeners existentes para evitar duplicados
  tunnel.removeEventListener('click', handleTunnelClick);
  
  // Agregar event listener de click
  tunnel.addEventListener("click", handleTunnelClick);
  
  console.log("Tunnel event listeners configured"); // Debug
}

function handleTunnelClick(e) {
  e.preventDefault();
  e.stopPropagation();
  
  console.log("Tunnel clicked! Visited projects:", visitedProjects.size); // Debug
  
  // Verificar si ha visitado al menos 1 proyecto
  if (visitedProjects.size < 1) {
    audioSystem.play('blockHit');
    showNotification("🔒 Explore at least 1 project to unlock transport!", 2500);
    console.log("Tunnel locked - no projects visited yet");
    return;
  }
  
  console.log("Opening transport modal...");
  // Reproducir sonido de entrada al túnel
  audioSystem.play('pipeEnter');
  openPipeModal();
}

// Función para configurar event listeners de project blocks
function setupProjectBlockEventListeners() {
  const projectBlocks = document.querySelectorAll('.project-block');
  projectBlocks.forEach(block => {
    // Remover listeners existentes para evitar duplicados
    block.removeEventListener("click", handleProjectBlockClick);
    
    // Agregar event listener
    block.addEventListener("click", handleProjectBlockClick);
    
    // Agregar estilo de cursor para indicar que es clickeable
    block.style.cursor = 'pointer';
    
    // Agregar efecto hover
    block.addEventListener('mouseenter', () => {
      block.style.transform = 'scale(1.1)';
      block.style.transition = 'transform 0.2s ease';
    });
    
    block.addEventListener('mouseleave', () => {
      block.style.transform = 'scale(1)';
    });
  });
}

function handleProjectBlockClick(e) {
  e.preventDefault();
  e.stopPropagation();
  
  console.log("🎯 Project block clicked!"); // Debug
  
  const projectIndex = parseInt(e.currentTarget.dataset.project);
  console.log("Project index:", projectIndex); // Debug
  
  if (!isNaN(projectIndex)) {
    showProjectExploredNotification(projectIndex);
  }
}

// Nueva función para mostrar notificación con botón Ver
function showProjectExploredNotification(projectIndex) {
  const currentProjects = LEVELS[currentLevel].projects;
  const project = currentProjects[projectIndex];
  if (!project) return;

  // Remover notificación existente si hay
  const existing = document.getElementById("project-notification");
  if (existing) existing.remove();
  
  const notification = document.createElement("div");
  notification.id = "project-notification";
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px;">
      <span>📁 ${project.title} - Proyecto explorado</span>
      <button id="view-project-btn" style="
        background: #3b82f6;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        font-weight: bold;
      ">Ver</button>
    </div>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    background: #1f2937;
    color: #fff;
    padding: 12px 16px;
    border-radius: 6px;
    border-left: 4px solid #10b981;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-size: 14px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  // Agregar evento al botón Ver
  document.getElementById("view-project-btn").addEventListener("click", () => {
    notification.remove();
    openProject(projectIndex);
  });
  
  // Auto-remover después de 8 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOut 0.3s ease-in forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, 8000);
}

// Agregar evento click al túnel para facilitar el uso
if (pipeEl) {
  setupTunnelEventListeners();
}

// Agregar eventos click a los bloques de proyectos
setupProjectBlockEventListeners();

// === Inicialización de controles de audio ===
function initAudioControls() {
  const audioToggle = document.getElementById('audio-toggle');
  const audioStatus = document.getElementById('audio-status');
  const volumeSlider = document.getElementById('volume-slider');
  
  if (!audioToggle || !volumeSlider) return;
  
  // Toggle audio on/off
  eventManager.addEventListener(audioToggle, 'click', () => {
    const isEnabled = audioSystem.toggle();
    audioToggle.innerHTML = `${isEnabled ? '🔊' : '🔇'} <span id="audio-status">${isEnabled ? 'ON' : 'OFF'}</span>`;
    audioToggle.classList.toggle('muted', !isEnabled);
  });
  
  // Control de volumen
  eventManager.addEventListener(volumeSlider, 'input', (e) => {
    const volume = parseInt(e.target.value) / 100;
    audioSystem.setVolume(volume);
  });
  
  // Actualizar estado inicial
  volumeSlider.value = Math.round(audioSystem.volume * 100);
}

// === Sistema de pantalla de carga ===
function showLoadingScreen() {
  showScreen("loading");
  
  const loadingFill = document.getElementById('loading-fill');
  const loadingText = document.getElementById('loading-text');
  
  const loadingSteps = [
    { text: "Initializing portfolio...", duration: 800 },
    { text: "Loading C# Kingdom...", duration: 600 },
    { text: "Loading TypeScript Desert...", duration: 600 },
    { text: "Loading Java Volcano...", duration: 600 },
    { text: "Preparing game engine...", duration: 500 },
    { text: "Loading audio system...", duration: 400 },
    { text: "Finalizing assets...", duration: 400 },
    { text: "Ready to play!", duration: 300 }
  ];
  
  let currentStep = 0;
  let currentProgress = 0;
  
  const updateLoading = () => {
    if (currentStep >= loadingSteps.length) {
      // Carga completada
      setTimeout(() => {
        initializeGameSystems();
      }, 500);
      return;
    }
    
    const step = loadingSteps[currentStep];
    loadingText.textContent = step.text;
    
    const targetProgress = ((currentStep + 1) / loadingSteps.length) * 100;
    const progressInterval = setInterval(() => {
      currentProgress += 2;
      loadingFill.style.width = Math.min(currentProgress, targetProgress) + '%';
      
      if (currentProgress >= targetProgress) {
        clearInterval(progressInterval);
        currentStep++;
        setTimeout(updateLoading, step.duration);
      }
    }, 20);
  };
  
  // Comenzar la secuencia de carga
  setTimeout(updateLoading, 500);
}

function initializeGameSystems() {
  // Inicializar todos los sistemas del juego
  initializeMenuEvents();
  initAudioControls();
  initVirtualControls();
  initTransportButtons();
  loadLevel("csharp");
  addProgressIndicator();
  
  // Inicializar estado del túnel
  updateTunnelState();
  
  // Agregar resize listener optimizado
  eventManager.addEventListener(window, 'resize', debouncedResize);
  
  // Mostrar menú principal
  showScreen("start");
  update(); // Iniciar bucle de renderizado
  
  // Efecto de transición suave
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.transition = "opacity 0.5s ease-out";
  loadingScreen.style.opacity = "0";
  
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    loadingScreen.style.opacity = "1";
    loadingScreen.style.transition = "";
  }, 500);
}

//  }
// }

// === Sistema de testing y debug ===
class GameTester {
  constructor() {
    this.isDebugMode = false;
    this.testResults = [];
    this.performanceMetrics = {
      frameRate: 0,
      memoryUsage: 0,
      loadTime: 0
    };
  }
  
  enableDebug() {
    this.isDebugMode = true;
    this.addDebugOverlay();
    console.log('🎮 Debug mode enabled');
  }
  
  addDebugOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'debug-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.8);
      color: #00ff00;
      padding: 10px;
      font-family: monospace;
      font-size: 12px;
      z-index: 9999;
      border-radius: 4px;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    this.updateDebugInfo();
  }
  
  updateDebugInfo() {
    if (!this.isDebugMode) return;
    
    const overlay = document.getElementById('debug-overlay');
    if (!overlay) return;
    
    overlay.innerHTML = `
      <div>FPS: ${Math.round(this.performanceMetrics.frameRate)}</div>
      <div>Player: ${Math.round(player.x)}, ${Math.round(player.y)}</div>
      <div>Velocity: ${Math.round(player.vx * 10)/10}, ${Math.round(player.vy * 10)/10}</div>
      <div>Level: ${currentLevel}</div>
      <div>State: ${gameState}</div>
      <div>Projects Visited: ${visitedProjects.size}</div>
      <div>Levels Complete: ${completedLevels.size}</div>
      <div>Audio: ${audioSystem.enabled ? 'ON' : 'OFF'}</div>
    `;
    
    setTimeout(() => this.updateDebugInfo(), 100);
  }
  
  runTests() {
    console.log('🧪 Running game tests...');
    this.testResults = [];
    
    // Test 1: Verificar elementos DOM críticos
    this.testDOMElements();
    
    // Test 2: Verificar sistemas de juego
    this.testGameSystems();
    
    // Test 3: Verificar responsive design
    this.testResponsiveDesign();
    
    // Test 4: Verificar performance
    this.testPerformance();
    
    // Mostrar resultados
    this.showTestResults();
  }
  
  testDOMElements() {
    const requiredElements = [
      'loading-screen', 'start-screen', 'game-screen', 'level-select-screen',
      'world', 'player', 'hud'
    ];
    
    requiredElements.forEach(id => {
      const element = document.getElementById(id);
      this.testResults.push({
        test: `DOM Element: ${id}`,
        passed: !!element,
        message: element ? 'Found' : 'Missing'
      });
    });
  }
  
  testGameSystems() {
    this.testResults.push({
      test: 'Player System',
      passed: player && typeof player.update === 'function',
      message: player ? 'Player class working' : 'Player missing'
    });
    
    this.testResults.push({
      test: 'Audio System', 
      passed: audioSystem && typeof audioSystem.play === 'function',
      message: audioSystem ? 'Audio system working' : 'Audio missing'
    });
    
    this.testResults.push({
      test: 'Level Data',
      passed: Object.keys(LEVELS).length === 3,
      message: `${Object.keys(LEVELS).length} levels loaded`
    });
    
    this.testResults.push({
      test: 'Project Data',
      passed: Object.values(allProjects).every(level => level.length > 0),
      message: 'All levels have projects'
    });
  }
  
  testResponsiveDesign() {
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    const isTablet = viewportWidth > 768 && viewportWidth <= 1023;
    
    this.testResults.push({
      test: 'Viewport Detection',
      passed: true,
      message: `${viewportWidth}px ${isMobile ? '(Mobile)' : isTablet ? '(Tablet)' : '(Desktop)'}`
    });
    
    const virtualControls = document.querySelector('.virtual-controls');
    this.testResults.push({
      test: 'Virtual Controls',
      passed: !!virtualControls,
      message: virtualControls ? 'Available' : 'Missing'
    });
  }
  
  testPerformance() {
    const start = performance.now();
    
    // Simular 100 colisiones
    for (let i = 0; i < 100; i++) {
      isColliding(
        {x: 0, y: 0, width: 32, height: 48},
        {x: 10, y: 10, width: 64, height: 32}
      );
    }
    
    const collisionTime = performance.now() - start;
    
    this.testResults.push({
      test: 'Collision Performance',
      passed: collisionTime < 5,
      message: `${collisionTime.toFixed(2)}ms for 100 tests`
    });
  }
  
  showTestResults() {
    console.log('📊 Test Results:');
    this.testResults.forEach(result => {
      console.log(`${result.passed ? '✅' : '❌'} ${result.test}: ${result.message}`);
    });
    
    const passed = this.testResults.filter(r => r.passed).length;
    const total = this.testResults.length;
    console.log(`\n🎯 Score: ${passed}/${total} tests passed (${Math.round(passed/total*100)}%)`);
    
    if (passed === total) {
      console.log('🎉 All tests passed! Game is ready.');
    } else {
      console.log('⚠️ Some tests failed. Check implementation.');
    }
  }
}

// Instancia global del tester
const gameTester = new GameTester();

// === Sistema de logros ===
class AchievementSystem {
  constructor() {
    this.achievements = new Map();
    this.unlockedAchievements = new Set();
    this.startTime = Date.now();
    this.initAchievements();
  }
  
  initAchievements() {
    // Logros básicos
    this.achievements.set('first_project', {
      id: 'first_project',
      title: '🎯 First Contact',
      description: 'Explora tu primer proyecto',
      icon: '🎯',
      condition: () => visitedProjects.size >= 1
    });
    
    this.achievements.set('level_master', {
      id: 'level_master',
      title: '👑 Level Master',
      description: 'Completa tu primer nivel',
      icon: '👑',
      condition: () => completedLevels.size >= 1
    });
    
    this.achievements.set('portfolio_explorer', {
      id: 'portfolio_explorer',
      title: '🌟 Portfolio Explorer', 
      description: 'Explora 5 proyectos diferentes',
      icon: '🌟',
      condition: () => visitedProjects.size >= 5
    });
    
    this.achievements.set('tech_collector', {
      id: 'tech_collector',
      title: '⚡ Tech Collector',
      description: 'Visita todos los niveles tecnológicos',
      icon: '⚡',
      condition: () => {
        const visitedLevels = new Set();
        visitedProjects.forEach(p => {
          visitedLevels.add(p.split('-')[0]);
        });
        return visitedLevels.size >= 3;
      }
    });
    
    this.achievements.set('completionist', {
      id: 'completionist',
      title: '💎 Completionist',
      description: 'Completa todos los niveles',
      icon: '💎',
      condition: () => completedLevels.size >= 3
    });
    
    this.achievements.set('speed_runner', {
      id: 'speed_runner',
      title: '🚀 Speed Runner',
      description: 'Completa todo en menos de 3 minutos',
      icon: '🚀',
      condition: () => {
        const elapsed = (Date.now() - this.startTime) / 1000;
        return completedLevels.size >= 3 && elapsed < 180;
      }
    });
    
    this.achievements.set('explorer', {
      id: 'explorer',
      title: '🔍 True Explorer',
      description: 'Explora todos los proyectos del portfolio',
      icon: '🔍',
      condition: () => {
        const totalProjects = Object.values(allProjects)
          .reduce((sum, level) => sum + level.length, 0);
        return visitedProjects.size >= totalProjects;
      }
    });
    
    this.achievements.set('jumping_jack', {
      id: 'jumping_jack',
      title: '🦘 Jumping Jack',
      description: 'Realiza 50 saltos en total',
      icon: '🦘',
      condition: () => this.getJumpCount() >= 50
    });
  }
  
  checkAchievements() {
    this.achievements.forEach((achievement) => {
      if (!this.unlockedAchievements.has(achievement.id)) {
        if (achievement.condition()) {
          this.unlockAchievement(achievement);
        }
      }
    });
  }
  
  unlockAchievement(achievement) {
    this.unlockedAchievements.add(achievement.id);
    this.showAchievementNotification(achievement);
    
    // Track analytics de logro
    analyticsManager.trackAchievement(achievement.id);
    
    // Reproducir sonido de logro
    audioSystem.play('levelComplete');
    
    console.log(`🏆 Achievement unlocked: ${achievement.title}`);
  }
  
  showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      background: linear-gradient(45deg, #f59e0b, #fbbf24);
      color: #1f2937;
      padding: 16px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
      z-index: 1001;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      border: 2px solid #fbbf24;
      max-width: 300px;
    `;
    
    notification.innerHTML = `
      <div style="font-size: 16px; margin-bottom: 4px;">
        ${achievement.icon} Achievement Unlocked!
      </div>
      <div style="font-weight: normal; color: #374151;">
        ${achievement.title}
      </div>
      <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">
        ${achievement.description}
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 4 segundos
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }
  
  getJumpCount() {
    // Estimación basada en el tiempo de juego y completado
    return visitedProjects.size * 5 + completedLevels.size * 10;
  }
  
  getProgress() {
    const total = this.achievements.size;
    const unlocked = this.unlockedAchievements.size;
    return { unlocked, total, percentage: Math.round((unlocked / total) * 100) };
  }
  
  showAchievementScreen() {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;
    
    const progress = this.getProgress();
    
    modal.innerHTML = `
      <div style="background: #1f2937; padding: 30px; border-radius: 12px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
        <h2 style="color: #f59e0b; margin-bottom: 20px; text-align: center;">
          🏆 ACHIEVEMENTS (${progress.unlocked}/${progress.total})
        </h2>
        <div style="margin-bottom: 20px; background: #374151; border-radius: 8px; height: 8px; overflow: hidden;">
          <div style="background: #f59e0b; height: 100%; width: ${progress.percentage}%; transition: width 0.3s ease;"></div>
        </div>
        ${Array.from(this.achievements.values()).map(achievement => `
          <div style="display: flex; align-items: center; margin-bottom: 15px; padding: 12px; border-radius: 8px; background: ${this.unlockedAchievements.has(achievement.id) ? '#065f46' : '#374151'};">
            <span style="font-size: 24px; margin-right: 12px;">${achievement.icon}</span>
            <div>
              <div style="color: ${this.unlockedAchievements.has(achievement.id) ? '#34d399' : '#9ca3af'}; font-weight: bold;">
                ${achievement.title}
              </div>
              <div style="color: #d1d5db; font-size: 12px;">
                ${achievement.description}
              </div>
            </div>
            ${this.unlockedAchievements.has(achievement.id) ? '<span style="color: #34d399; margin-left: auto;">✅</span>' : '<span style="color: #6b7280; margin-left: auto;">🔒</span>'}
          </div>
        `).join('')}
        <button onclick="this.parentElement.parentElement.remove()" style="width: 100%; padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-top: 20px;">
          CLOSE
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar con click fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }
}

// Instancia global del sistema de logros  
const achievementSystem = new AchievementSystem();

// === Sistema de Analytics y Exportación ===
class AnalyticsManager {
  constructor() {
    this.sessionData = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      endTime: null,
      totalTimeSpent: 0,
      actions: [],
      visitedProjects: new Map(),
      completedLevels: new Set(),
      achievements: new Set(),
      playerStats: {
        jumps: 0,
        levelSwitches: 0,
        modalOpens: 0,
        totalDistance: 0
      },
      deviceInfo: {
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        isMobile: /Mobile/i.test(navigator.userAgent),
        timestamp: new Date().toISOString()
      }
    };
    this.lastPosition = { x: 0, y: 0 };
    this.startTracking();
  }
  
  generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  startTracking() {
    // Track page unload para calcular tiempo total
    window.addEventListener('beforeunload', () => {
      this.endSession();
    });
  }
  
  trackAction(action, data = {}) {
    this.sessionData.actions.push({
      action,
      timestamp: Date.now(),
      data: { ...data }
    });
    
    // Límite de acciones para evitar memoria excesiva
    if (this.sessionData.actions.length > 1000) {
      this.sessionData.actions = this.sessionData.actions.slice(-800);
    }
  }
  
  trackProjectVisit(level, projectIndex, projectData) {
    const key = `${level}-${projectIndex}`;
    if (!this.sessionData.visitedProjects.has(key)) {
      this.sessionData.visitedProjects.set(key, {
        level,
        projectIndex,
        title: projectData.title,
        technologies: projectData.technologies,
        firstVisitTime: Date.now(),
        visitCount: 1
      });
    } else {
      const project = this.sessionData.visitedProjects.get(key);
      project.visitCount++;
    }
    
    this.trackAction('project_visit', { level, projectIndex, title: projectData.title });
  }
  
  trackLevelCompletion(level) {
    if (!this.sessionData.completedLevels.has(level)) {
      this.sessionData.completedLevels.add(level);
      this.trackAction('level_complete', { level, timeFromStart: Date.now() - this.sessionData.startTime });
    }
  }
  
  trackAchievement(achievementId) {
    if (!this.sessionData.achievements.has(achievementId)) {
      this.sessionData.achievements.add(achievementId);
      this.trackAction('achievement_unlock', { achievementId });
    }
  }
  
  trackPlayerMovement(x, y) {
    const distance = Math.sqrt(
      Math.pow(x - this.lastPosition.x, 2) + 
      Math.pow(y - this.lastPosition.y, 2)
    );
    
    if (distance > 1) { // Solo track movimientos significativos
      this.sessionData.playerStats.totalDistance += distance;
      this.lastPosition = { x, y };
    }
  }
  
  trackJump() {
    this.sessionData.playerStats.jumps++;
    this.trackAction('player_jump');
  }
  
  trackLevelSwitch(fromLevel, toLevel) {
    this.sessionData.playerStats.levelSwitches++;
    this.trackAction('level_switch', { from: fromLevel, to: toLevel });
  }
  
  trackModalOpen(modalType) {
    this.sessionData.playerStats.modalOpens++;
    this.trackAction('modal_open', { type: modalType });
  }
  
  endSession() {
    this.sessionData.endTime = Date.now();
    this.sessionData.totalTimeSpent = this.sessionData.endTime - this.sessionData.startTime;
  }
  
  generateReport() {
    this.endSession();
    
    // Convertir Maps y Sets a arrays para JSON serialization
    const report = {
      ...this.sessionData,
      visitedProjects: Array.from(this.sessionData.visitedProjects.entries()).map(([key, value]) => ({
        key,
        ...value
      })),
      completedLevels: Array.from(this.sessionData.completedLevels),
      achievements: Array.from(this.sessionData.achievements),
      summary: {
        totalProjects: this.sessionData.visitedProjects.size,
        totalLevelsCompleted: this.sessionData.completedLevels.size,
        totalAchievements: this.sessionData.achievements.size,
        avgTimePerProject: this.sessionData.visitedProjects.size > 0 
          ? Math.round(this.sessionData.totalTimeSpent / this.sessionData.visitedProjects.size / 1000)
          : 0,
        engagementScore: this.calculateEngagementScore()
      }
    };
    
    return report;
  }
  
  calculateEngagementScore() {
    const timeWeight = Math.min(this.sessionData.totalTimeSpent / 60000, 10) / 10; // Max 10 minutos
    const projectWeight = this.sessionData.visitedProjects.size / 10; // Max 10 proyectos
    const levelWeight = this.sessionData.completedLevels.size / 3; // Max 3 niveles
    const achievementWeight = this.sessionData.achievements.size / 8; // Max 8 logros
    
    return Math.round((timeWeight + projectWeight + levelWeight + achievementWeight) * 25); // Score 0-100
  }
  
  exportData() {
    const report = this.generateReport();
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `thetander_analytics_${report.sessionId}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Mostrar resumen en consola
    console.log('📊 Analytics Report Generated:', report.summary);
    showRightNotification(`📊 Analytics exported! Engagement Score: ${report.summary.engagementScore}`, 3000);
  }
  
  showAnalyticsDashboard() {
    const report = this.generateReport();
    
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;
    
    modal.innerHTML = `
      <div style="background: #1f2937; padding: 30px; border-radius: 12px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; color: #f9fafb;">
        <h2 style="color: #3b82f6; margin-bottom: 20px; text-align: center;">
          📊 PORTFOLIO ANALYTICS
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
          <div style="background: #374151; padding: 15px; border-radius: 8px; text-align: center;">
            <div style="color: #60a5fa; font-size: 24px; font-weight: bold;">${report.summary.totalProjects}</div>
            <div style="color: #d1d5db; font-size: 12px;">Proyectos Explorados</div>
          </div>
          <div style="background: #374151; padding: 15px; border-radius: 8px; text-align: center;">
            <div style="color: #34d399; font-size: 24px; font-weight: bold;">${report.summary.totalLevelsCompleted}</div>
            <div style="color: #d1d5db; font-size: 12px;">Niveles Completados</div>
          </div>
          <div style="background: #374151; padding: 15px; border-radius: 8px; text-align: center;">
            <div style="color: #f59e0b; font-size: 24px; font-weight: bold;">${report.summary.totalAchievements}</div>
            <div style="color: #d1d5db; font-size: 12px;">Logros Obtenidos</div>
          </div>
          <div style="background: #374151; padding: 15px; border-radius: 8px; text-align: center;">
            <div style="color: #ec4899; font-size: 24px; font-weight: bold;">${Math.round(report.sessionData.totalTimeSpent / 1000)}s</div>
            <div style="color: #d1d5db; font-size: 12px;">Tiempo Total</div>
          </div>
        </div>
        
        <div style="background: #065f46; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <div style="color: #34d399; font-size: 36px; font-weight: bold; margin-bottom: 5px;">${report.summary.engagementScore}</div>
          <div style="color: #d1d5db; font-size: 14px;">Engagement Score</div>
          <div style="color: #9ca3af; font-size: 12px; margin-top: 5px;">
            ${report.summary.engagementScore >= 80 ? '🏆 Excellent!' : 
              report.summary.engagementScore >= 60 ? '⭐ Great!' : 
              report.summary.engagementScore >= 40 ? '👍 Good!' : '📈 Keep exploring!'}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #60a5fa; margin-bottom: 10px;">Player Stats</h3>
          <div style="background: #374151; padding: 15px; border-radius: 8px;">
            <div style="margin-bottom: 8px;">🦘 Jumps: ${report.sessionData.playerStats.jumps}</div>
            <div style="margin-bottom: 8px;">🔄 Level Switches: ${report.sessionData.playerStats.levelSwitches}</div>
            <div style="margin-bottom: 8px;">📋 Modals Opened: ${report.sessionData.playerStats.modalOpens}</div>
            <div>📏 Distance Traveled: ${Math.round(report.sessionData.playerStats.totalDistance)}px</div>
          </div>
        </div>
        
        <div style="display: flex; gap: 10px;">
          <button onclick="analyticsManager.exportData()" style="flex: 1; padding: 12px; background: #059669; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
            📥 EXPORT DATA
          </button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="flex: 1; padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
            CLOSE
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar con click fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }
}

// Instancia global del analytics manager
const analyticsManager = new AnalyticsManager();

// Agregar comandos de debug al objeto window para acceso desde consola
window.debugGame = () => gameTester.enableDebug();
window.testGame = () => gameTester.runTests();
window.showAchievements = () => achievementSystem.showAchievementScreen();
window.showAnalytics = () => analyticsManager.showAnalyticsDashboard();
window.exportData = () => analyticsManager.exportData();

// === Inicialización ===
function initGame() {
  // Verificar si es móvil
  checkMobileDevice();
  
  // Mostrar pantalla de carga antes de inicializar
  showLoadingScreen();
}

// === Optimización responsiva ===
function checkMobileDevice() {
  // Solo detectar dispositivos móviles reales, no por tamaño de ventana
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  console.log("Mobile detection:", isMobile, "User agent:", navigator.userAgent); // Debug
  
  if (isMobile) {
    const mobileMsg = document.querySelector('.mobile-message');
    if (mobileMsg) {
      mobileMsg.style.display = 'flex';
      mobileMsg.style.flexDirection = 'column';
      mobileMsg.style.justifyContent = 'center';
      mobileMsg.style.alignItems = 'center';
      
      // Ocultar elementos del juego
      document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
      });
    }
  }
}

function handleResize() {
  const gameContainer = document.querySelector('.game-container');
  const world = document.getElementById('world');
  
  if (!gameContainer || !world) return;
  
  const containerWidth = gameContainer.clientWidth;
  const containerHeight = gameContainer.clientHeight;
  
  // Ajustar escala si es necesario
  if (window.innerWidth < 900) {
    const scale = Math.min(window.innerWidth / 900, 1);
    gameContainer.style.transform = `scale(${scale})`;
    gameContainer.style.transformOrigin = 'center center';
  } else {
    gameContainer.style.transform = 'none';
  }
  
  // Reposicionar tooltips si existen
  const tooltips = document.querySelectorAll('.game-tooltip');
  tooltips.forEach(tooltip => tooltip.remove());
  
  // Reagregar tooltips después de un delay
  if (gameState === 'playing') {
    setTimeout(() => addHoverTooltips(), 100);
  }
}

// Event listeners para responsividad
window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', () => {
  setTimeout(handleResize, 500);
});

// === Controles virtuales ===
function initVirtualControls() {
  const virtualButtons = document.querySelectorAll('.virtual-btn');
  
  virtualButtons.forEach(button => {
    const key = button.getAttribute('data-key');
    
    // Touch events para móviles
    button.addEventListener('touchstart', (e) => {
      e.preventDefault();
      simulateKeyDown(key);
      button.classList.add('pressed');
    });
    
    button.addEventListener('touchend', (e) => {
      e.preventDefault();
      simulateKeyUp(key);
      button.classList.remove('pressed');
    });
    
    // Mouse events para desktop
    button.addEventListener('mousedown', (e) => {
      e.preventDefault();
      simulateKeyDown(key);
      button.classList.add('pressed');
    });
    
    button.addEventListener('mouseup', (e) => {
      e.preventDefault();
      simulateKeyUp(key);
      button.classList.remove('pressed');
    });
    
    button.addEventListener('mouseleave', (e) => {
      simulateKeyUp(key);
      button.classList.remove('pressed');
    });
  });
}

function simulateKeyDown(key) {
  const event = new KeyboardEvent('keydown', { key: key });
  window.dispatchEvent(event);
}

function simulateKeyUp(key) {
  const event = new KeyboardEvent('keyup', { key: key });
  window.dispatchEvent(event);
}

// === Ayuda contextual dinámica ===
function updateContextHelp() {
  const helpItems = document.querySelectorAll('.help-item');
  
  // Ocultar todas las ayudas
  helpItems.forEach(item => item.style.opacity = '0.5');
  
  // Resaltar ayuda relevante según el estado
  if (player.onGround) {
    // Resaltar ayuda de salto
    const jumpHelp = Array.from(helpItems).find(item => 
      item.textContent.includes('saltar'));
    if (jumpHelp) jumpHelp.style.opacity = '1';
  }
  
  if (player.vx !== 0) {
    // Resaltar ayuda de movimiento
    const moveHelp = Array.from(helpItems).find(item => 
      item.textContent.includes('moverte'));
    if (moveHelp) moveHelp.style.opacity = '1';
  }
  
  // Verificar si está cerca de bloques
  const playerRect = {
    x: player.x,
    y: player.y,
    width: player.width,
    height: player.height
  };
  
  let nearBlock = false;
  blocks.forEach((blockEl) => {
    const rect = blockEl.getBoundingClientRect();
    const worldRect = world.getBoundingClientRect();
    
    const block = {
      x: rect.left - worldRect.left,
      y: rect.top - worldRect.top,
      width: rect.width,
      height: rect.height
    };
    
    const distance = Math.sqrt(
      Math.pow(playerRect.x + playerRect.width/2 - block.x - block.width/2, 2) +
      Math.pow(playerRect.y + playerRect.height/2 - block.y - block.height/2, 2)
    );
    
    if (distance < 80) {
      nearBlock = true;
    }
  });
  
  if (nearBlock) {
    const blockHelp = Array.from(helpItems).find(item => 
      item.textContent.includes('bloques'));
    if (blockHelp) blockHelp.style.opacity = '1';
  }
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
