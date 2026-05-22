import { Project, Experience, Education, SkillGroup, SkillProficiency } from './types';

export const projectsData: Project[] = [
  {
    id: 'dread-sands',
    title: 'DREAD SANDS',
    category: 'ue5',
    engine: 'UNREAL ENGINE 5 · C++',
    type: 'First-Person Wave-Based Survival Shooter',
    role: 'Enemy AI · Main Menu · UI/UX · Skybox Integration',
    desc: 'Set in a cursed desert ruin, Dread Sands faces players against escalating waves of undead cultists. Survive using physics-based gunplay, manage ammunition, and spend points earned through combat on active resupplies. Built with a robust automated AI pipeline and custom gameplay scripts.',
    features: [
      'Behavior Tree Enemy AI — Fully asynchronous pathfinding with BT tasks (FindPlayerLocation, ChasePlayer, Attack) and custom BT Service (IsPlayerInRange) matching a 100-unit melee threshold.',
      'Dynamic Wave System (AEnemyManager) — Progressively scales spawn counts, caps maximum concurrent map spawns, and increases base speed (70 to 400 cm/s) to heighten player tension.',
      'Raycast Hitscan Weaponry — Implemented full magazine reloading, shell ejection, Niagara engine fire sparks, and realistic empty-clip trigger click audio feedback.',
      'Kill-Earn Point Economy — Generates 10 points per kill. Integrates interactive ammo containers that prompt and deduct 500 points to replenish ammunition reserves.',
      'Custom HUD Interface — Modern, responsive widgets tracking real-time player safety (Health), active wave counters, survival points, and inventory clip indicators.',
      'Lumen Dynamic Lighting — Real-time global illumination within the "Al-Tariq" custom desert courtyard featuring custom material shaders and automatic NavMesh bounds.',
      'Dissertation Approved — Certified by Dr. Shashank Dule in April 2026, receiving a certified 9% index on iThenticate verification.'
    ],
    badge: 'ACADEMIC · APR 2026',
    pills: ['UE5', 'C++', 'Behavior Trees', 'Lumen GI', 'Niagara VFX', 'NavMesh'],
    featured: true
  },
  {
    id: 'hyper-drive',
    title: 'HYPER-DRIVE',
    category: 'unity',
    engine: 'UNITY 6 · C#',
    type: '3D Racing Game — Complete Solo Engine',
    role: 'Solo Developer (A-Z system architecture)',
    desc: 'An architectural marvel representing a feature-complete 3D racing game engineered completely from scratch. Involves real-time drift graphics, automated waypoint AI cars, split-screen cameras, and persistent PlayerPrefs campaign progression across 5 separate worlds.',
    features: [
      'WheelCollider Mechanics — Built responsive vehicle control models featuring adjusted center-of-mass matrices, a 2000 Nm torque controller, and 17-degree maximum turning lock bounds.',
      'Active Driftmark Systems — Custom driftmark logic with a circular 1000-section mesh buffer tracking tire coordinates, coupled with dynamic vertex coloration opacity and velocity-scaled tire smoke.',
      'Waypoint-Indexed AI Bots — Pathfinding opponents executing responsive acceleration and adaptive steering curves, complete with localized raycast-based stuck-detection and checkpoint respawning.',
      '5 Active Game Modes — Modular challenge types including Classic Lap Race, Escape (time threshold elimination), Survival, Infection (contact tagging speed boost), and Special Dual conditions.',
      'Zero-bleed Split-Screen — Developed simultaneous support for co-op players using independent camera trackers, side-by-side splits, separate input listeners, and isolated Canvas UI layers.',
      'LeanTween-Animated Screens — Designed a highly animated UI engine tracking star metrics, model displays, car garages, and local PlayerPrefs campaign save slots.'
    ],
    badge: 'SOLO · APR 2026',
    pills: ['Unity 6', 'C#', 'WheelCollider', 'Split-Screen', 'LeanTween', 'AI Paths'],
    featured: true
  },
  {
    id: 'agent-un-fps',
    title: 'AGENT-UN FPS',
    category: 'unity',
    engine: 'UNITY 3D · C#',
    type: 'Classic First-Person Shooter',
    role: 'Gameplay Programmer (Solo)',
    desc: 'A playable end-to-end first-person shooter level designed with detailed physics-based ammunition tracking, automated spawner logic, and modular pickups.',
    features: [
      'Engineered smooth player kinematic movement, jump, and headbob profiles.',
      'Developed enemy behavior bots which path towards players with continuous proximity checks.',
      'Structured collectible ammunition crates, health crates, and weapon swaps with custom HUD alerts.'
    ],
    badge: 'SOLO PROJECT',
    pills: ['Unity 3D', 'C#', 'Raycast', 'FPS Physics', 'Spawners'],
    featured: false
  },
  {
    id: 'ar-portfolio-app',
    title: 'AR Portfolio Application',
    category: 'ar',
    engine: 'UNITY 6 · AR FOUNDATION',
    type: 'Mobile Augmented Reality Visualizer',
    role: 'Solo Developer',
    desc: 'An immersive augmented portfolio experience utilizing mobile AR capabilities to project 3D models of academic work overlaying the physical world.',
    features: [
      'Utilizes AR Foundation and ARCore protocols to sense floor surfaces and map vertical target walls.',
      'Face Tracking Modules — Superimposes animated custom meshes and visual texture designs on facial inputs via real-time camera nodes.',
      'Image Markers Integration — Tracks physical print portfolio logos and spawns matching 3D interactive models and gameplay demos.'
    ],
    badge: 'AR VR · 2026',
    pills: ['AR Foundation', 'Unity 6', 'Face Tracking', 'Image Markers'],
    featured: false
  },
  {
    id: 'ue5-environments',
    title: 'UE5 ENVIRONMENT PORTFOLIO',
    category: 'ue5',
    engine: 'UNREAL ENGINE 5 · PCG',
    type: '3D Technical Art Showcase',
    role: 'Technical Artist & Level Designer',
    desc: 'A demonstration folder of AAA-quality game environments creating photorealistic lighting setups and procedural foliage grids.',
    features: [
      'Procedural Content Generation — Programmed PCG graph nodes to distribute meshes dynamically matching ground slopes and height coordinates.',
      'Lumen Dynamic Lighting — Built complex daylight routines showcasing realistic sunrise effects, dynamic shadows, and detailed atmospheric post-process stacks.'
    ],
    badge: 'ENVIRONMENT ART',
    pills: ['UE5', 'PCG Graphs', 'Lumen', 'Nanite Mesh', 'Level Design'],
    featured: false
  },
  {
    id: 'games-suite-2d',
    title: '2D GAMES SUITE',
    category: 'unity',
    engine: 'UNITY 2D · C#',
    type: '4 Classical Arcade Titles',
    role: 'Gameplay Developer',
    desc: 'Four standalone retro 2D games created to hone classical game loop mechanics, state persistence, and simple rigid body interactions.',
    features: [
      'Match the Shape — Grid matching system testing speed and layout algorithms.',
      'Stack Tower — Physics block dropping game tracking screen-center accuracy.',
      'Maze Runner — Grid-based path navigation.',
      'Apple Shooter — Aiming mechanic projectile equations.'
    ],
    badge: '4 GAMES · SOLO',
    pills: ['Unity 2D', 'C#', '2D Physics', 'Game States', 'Arcade'],
    featured: false
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'engines',
    icon: 'Gamepad',
    name: 'Game Engines',
    desc: 'Primary creation environments powering gameplay loops, level triggers, resource loads, and build pipelines.',
    tags: ['Unity 6', 'Unreal Engine 5', 'AR Foundation', 'Blueprints', 'Lumen', 'PCG Foliage', 'NavMesh']
  },
  {
    id: 'programming',
    icon: 'Code',
    name: 'Programming',
    desc: 'Development of gameplay algorithms, structured classes, garbage collection optimization, and scalable singletons.',
    tags: ['C#', 'C++', 'Object-Oriented Coding (OOP)', 'Design Patterns', 'Coroutine Managers', 'Event delegates']
  },
  {
    id: 'ai-gameplay',
    icon: 'Brain',
    name: 'AI & Gameplay Systems',
    desc: 'Programming threat perceptions, pathfinding, behavioral loops and game rules managing user engagement.',
    tags: ['Behavior Trees', 'UE5 Blackboard', 'BT Tasks & Services', 'Waypoint AI', 'Stuck-Detection Engines', 'Wave Managers']
  },
  {
    id: 'physics',
    icon: 'Sliders',
    name: 'Physics & Graphics',
    desc: 'Adjusting structural simulations to optimize user feedback — vehicle wheel physics, visual trails and VFX.',
    tags: ['WheelCollider Tuning', 'Rigidbody Dynamics', 'Drift marks rendering', 'Mesh buffer management', 'Niagara VFX']
  },
  {
    id: 'ar-vr',
    icon: 'Glasses',
    name: 'AR / VR Dev',
    desc: 'Constructing immersive experiences taking advantages of interactive spatial anchors and facial mapping.',
    tags: ['AR Foundation', 'Face Meshing', 'Marker Identification', 'VR Ray Interactors', 'Multi-camera streams']
  },
  {
    id: 'tech-art',
    icon: 'Palette',
    name: 'Technical Art',
    desc: 'Shaping level elements, environmental setups and particles tracking visual fidelity without compromising frame rates.',
    tags: ['Level Assembly', 'Niagara Particle Systems', 'Procedural Content Graphs', 'Lumen Settings', 'Skybox Coordinates']
  },
  {
    id: 'ui-ux',
    icon: 'Layers',
    name: 'HUD & UI Systems',
    desc: 'Coding intuitive screens, animated options panels, active meters, and multi-canvas split layouts.',
    tags: ['UMG HUD Widgets', 'TextMeshPro UI', 'LeanTween Animations', 'Canvas Groups', 'PlayerPrefs Saves']
  },
  {
    id: 'workflow',
    icon: 'GitBranch',
    name: 'Tools & Workflow',
    desc: 'Industry methods supporting teamwork, safe code commits, and rapid feature tracking.',
    tags: ['Git Version Control', 'GitHub Projects', 'Scene Transition Managers', 'Modular C# Scripting']
  }
];

export const skillProficiencies: SkillProficiency[] = [
  { name: 'Unity Engine (C#)', percentage: 90 },
  { name: 'Unreal Engine 5 (C++)', percentage: 78 },
  { name: 'C# OOP Development', percentage: 88 },
  { name: 'C++ Systems Programming', percentage: 72 },
  { name: 'AR/VR Spatial Systems', percentage: 75 },
  { name: 'Level & Environmental Art', percentage: 80 }
];

export const experienceData: Experience[] = [
  {
    id: 'mudgal-overseas',
    role: 'Intern — Game Programmer',
    company: 'Mudgal Overseas',
    location: 'Kota, Rajasthan (Remote)',
    dateRange: '17 Dec 2025 – 17 Mar 2026',
    points: [
      'Developed, prototyped, and iterated on core gameplay mechanics and character controllers for active mobile and 3D PC projects using Unity.',
      'Analyzed and optimized existing C# scripts, significantly improving CPU efficiency by reducing unnecessary frame updates and allocations in main loops.',
      'Collaborated closely with Shanu Mudgal (Founder-Director) regarding game balancing, scoping feature sets, and ensuring scheduled milestone deployment.',
      'Demonstrated professional commitment early by processing standard studio NDA paperwork and Intellectual Property Assignment agreements on start date.',
      'Achieved a formal certificate from Shanu Mudgal acknowledging the contributions and verified programming proficiency upon completion.'
    ],
    certificateIssuer: 'Shanu Mudgal, Founder-Director, Mudgal Overseas (Signed Certificate Issued)',
    durationConfirmed: '17 December 2025 to 17 March 2026 (3 Months Continuous Internship)'
  }
];

export const educationData: Education[] = [
  {
    id: 'bca-game',
    years: '2023 – 2026 (Final Year)',
    degree: 'Bachelor of Computer Application (Game Development)',
    school: 'Ajeenkya DY Patil University, Pune · School of Engineering',
    cgpa: '8.68 CGPA (First Class with Distinction)',
    notes: [
      '104 of 104 credits earned successfully with 0 active backlogs (Semester 6 completed May 2026, final results pending).',
      'Semester 5 Academic Excellence: 3D Game Dev Using Unreal (A+), Technical Art (A+), 3D Game Dev & Presentation (A).',
      'Advanced specialized modules completed: Virtual Reality (Grade B), Multiplayer Programming (Grade B), Integrating Online Services (Grade B+).'
    ]
  },
  {
    id: 'hsc-science',
    years: '2022 Graduate',
    degree: 'Higher Secondary School (12th Grade — Science Stream)',
    school: 'Dr. Bapuji Salunke College, Miraj',
    notes: ['Core disciplines: Physics, Chemistry, Mathematics, and Computer Science.']
  },
  {
    id: 'ssc-alphonsa',
    years: '2020 Graduate',
    degree: 'Secondary School Certificate (10th Grade)',
    school: 'Alphonsa School, Miraj',
    notes: ['Completed board curriculum with excellent marks.' ]
  }
];

export const contactInfo = {
  name: 'Ganesh Chavan',
  email: 'chavanganesh9405543605@gmail.com',
  phone: '+91 96371 83960',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/ganesh-chavan-343319381',
  youtube: 'https://youtube.com/playlist?list=PLYz1TRX9X9BeMTIIOmnRurERCx2Sa8VMF&si=l5dLarM15WbK-RDD',
  github: 'https://github.com/Dynamite4090',
  status: 'Open to Work',
  lookingFor: 'Junior Game Developer / Game Programmer Internship & Full-time'
};
