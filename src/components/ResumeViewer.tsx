import React, { useState } from 'react';
import { motion } from 'motion/react';
import { jsPDF } from 'jspdf';
import { 
  Printer, 
  Copy, 
  Download, 
  Check, 
  ExternalLink, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  FolderGit2,
  Gamepad,
  Code
} from 'lucide-react';
import { projectsData, skillGroups, experienceData, educationData, contactInfo } from '../data';

export default function ResumeViewer() {
  const [copied, setCopied] = useState(false);

  // High-fidelity plain text version formatted precisely for applicant tracking systems (ATS)
  const plainTextResume = `GANESH CHAVAN
Game Developer | Unity & Unreal Engine | AR/VR
Phone: ${contactInfo.phone}
Email: ${contactInfo.email}
Location: ${contactInfo.location}
LinkedIn: ${contactInfo.linkedin}

==================================================
PROFESSIONAL SUMMARY
==================================================
Final-year BCA (Game Development) student at Ajeenkya DY Patil University, Pune, maintaining a CGPA of 8.68 with zero backlogs. Proficient in Unity and Unreal Engine 5, with hands-on experience in gameplay programming, enemy AI systems, AR/VR development, and 3D environment design. Completed a 3-month industry internship as a Game Programmer at Mudgal Overseas. Delivered two full-scale academic game projects — a 3D racing title (Unity) and a first-person survival shooter (UE5/C++) — each with full documentation and university evaluation.

==================================================
TECHNICAL SKILLS
==================================================
- Game Engines: Unity (2D/3D, AR Foundation, Unity 6), Unreal Engine 5 (Blueprints, C++, Lumen, NavMesh, PCG)
- Programming: C#, C++
- Specialisations: Gameplay Programming, Enemy AI (Behavior Trees), AR/VR Development, Level Design, UI/UX Systems, Multiplayer & Split-Screen, Wave Systems, Physics Simulation
- Tools: Git, TextMeshPro, LeanTween, Niagara Particle System, WheelCollider, PlayerPrefs, UMG Widgets
- Languages: English, Hindi, Marathi

==================================================
PROFESSIONAL EXPERIENCE
==================================================
Intern — Game Programmer | Mudgal Overseas (Kota, Rajasthan | Remote)
Dec 2025 - Mar 2026
- Built and iterated on gameplay mechanics for active game projects as part of the founding team.
- Optimised C# scripts for performance, reducing bottlenecks in core game loops.
- Executed full professional onboarding: signed NDA and IP Assignment Agreement on day one.
- Certificate issued by Shanu Mudgal, Founder-Director. Duration confirmed: 17 Dec 2025 - 17 Mar 2026.

==================================================
PROJECTS
==================================================
Dread Sands (Unreal Engine 5, C++ | Team of 4 | 2025-2026)
Role: Enemy AI, Main Menu, UI/UX, Skybox Integration
- Designed and implemented the complete Enemy AI pipeline using UE5 Behavior Trees and Blackboard components: custom tasks for FindPlayerLocation, ChasePlayer, and Attack, plus an IsPlayerInRange service for melee detection.
- Built the main menu, UI HUD (health, ammo, wave, score), and integrated dynamic skybox and atmospheric assets.
- Created wave manager (AEnemyManager) scaling speed dynamically (70 to 400 cm/s) and point-earned economy.
- First-person wave survival shooter set in Al-Tariq ruins with complete audio pipeline integration.
- Dissertation scored a 9% index on iThenticate verification; certified by Dr. Shashank Dule.

Hyper-Drive (Unity 6, C# | Solo Build | 2025-2026)
Role: Solo Engine Architect & Physics
- Engineered a feature-complete 3D racing simulator from scratch: 5 tracks, 5 customizable cars, and 5 game modes.
- Implemented WheelCollider car physics with center-of-mass tuning and real-time tire drift mark trails (1000-section circular buffer).
- Programmed waypoint AI bots with adaptive throttle/steering ratios and raycast-based stuck-detection auto-resets.
- Built dual-controller splitscreen coop camera matrices and inputs with isolated UI canvas groups.
- Animated entire save/unlock system via LeanTween with PlayerPrefs metrics.
- Dissertation certified by Prof. Shashank Dule; submitted to Ajeenkya DY Patil University.

Agent-UN FPS (Unity 3D, C# | Solo)
- Complete FPS level featuring fluid kinematic weapon recoil/shooting, proximity checking spawners, and interactive HP/ammo collectible widgets.

AR Portfolio App (Unity 6, AR Foundation | Solo)
- Mobile markerless face mesh tracking overlays and print target spawners utilizing dual camera stream matrices.

Unreal Engine 5 - Technical Art (UE5, PCG | Solo)
- Photorealistic environment design (jungle, village sunrise) with Procedural Content Generation foliage graphs and dynamic Lumen illumination postpack layouts.

2D Games Suite (Unity 2D, C# | Solo)
- Pack of 4 retro game loops (Match the Shape, Stack Tower, Maze-grid navigation, Target physics equations).

==================================================
EDUCATION
==================================================
Bachelor of Computer Application (Game Development) | 2023 - 2026
Ajeenkya DY Patil University, Pune | School of Engineering
- CGPA: 8.68 (First Class with Distinction) | 104/104 Credits cleared with 0 Backlogs (Semester 6 completed May 2026)
- Highlights: 3D Game Dev using Unreal (A+), Technical Art (A+), 3D Game Dev & Presentation (A)
- Advanced electives: VR (Grade B), Multiplayer Dev (Grade B), App Integration (Grade B+)

Higher Secondary School (12th Grade - Science) | 2022 Graduate
Dr. Bapuji Salunke College, Miraj
- Subjects: Physics, Chemistry, Mathematics, and Computer Science

Secondary School Certificate (10th Grade) | 2020 Graduate
Alphonsa School, Miraj`;

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    let y = 15; // Vertical cursor in mm
    const margin = 15;
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - 2 * margin; // 180mm

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
    };

    const drawRule = () => {
      checkPageBreak(4);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.3);
      doc.line(margin, y, margin + contentWidth, y);
      y += 5;
    };

    const drawSectionHeader = (title: string) => {
      checkPageBreak(12);
      y += 2;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(17, 24, 39); // Very dark gray / charcoal
      doc.text(title.toUpperCase(), margin, y);
      y += 1.5;
      
      // Thin line directly under header
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.25);
      doc.line(margin, y, margin + contentWidth, y);
      y += 4;
    };

    const drawText = (
      text: string, 
      fontSize: number, 
      fontStyle: 'normal' | 'bold' | 'oblique' | 'bolditalic' = 'normal', 
      hexColor: string = '#1f2937', 
      extraSpaceAfter: number = 3
    ) => {
      doc.setFont('helvetica', fontStyle);
      doc.setFontSize(fontSize);
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      doc.setTextColor(r, g, b);

      const lines = doc.splitTextToSize(text, contentWidth);
      const lineHeight = fontSize * 0.3528 * 1.35; // clean leading
      const blockHeight = lines.length * lineHeight;

      checkPageBreak(blockHeight + extraSpaceAfter);
      
      lines.forEach((line: string, idx: number) => {
        doc.text(line, margin, y + (idx * lineHeight));
      });
      
      y += blockHeight + extraSpaceAfter;
    };

    const drawBullet = (
      bulletText: string,
      fontSize: number = 9,
      hexColor: string = '#1f2937',
      extraSpaceAfter: number = 2
    ) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(fontSize);
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      doc.setTextColor(r, g, b);

      const bulletIndent = 5; 
      const lineIndentWidth = contentWidth - bulletIndent;
      const lines = doc.splitTextToSize(bulletText, lineIndentWidth);
      const lineHeight = fontSize * 0.3528 * 1.35;
      const blockHeight = lines.length * lineHeight;

      checkPageBreak(blockHeight + extraSpaceAfter);

      // Draw a solid vector square bullet (bullet styling)
      doc.setFillColor(75, 85, 99); 
      doc.rect(margin + 1.2, y - 2.2, 1.2, 1.2, 'F');
      
      lines.forEach((line: string, idx: number) => {
        doc.text(line, margin + bulletIndent, y + (idx * lineHeight));
      });

      y += blockHeight + extraSpaceAfter;
    };

    const drawJobHeader = (role: string, company: string, dateRange: string) => {
      checkPageBreak(12);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(17, 24, 39);
      doc.text(role, margin, y);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(235, 94, 40); // Accent tone
      const dateWidth = doc.getTextWidth(dateRange);
      doc.text(dateRange, margin + contentWidth - dateWidth, y);
      
      y += 4;
      
      doc.setFont('helvetica', 'oblique');
      doc.setFontSize(9);
      doc.setTextColor(75, 85, 99);
      doc.text(company, margin, y);
      
      y += 4;
    };

    const drawProjectHeader = (title: string, details: string, dateRange: string) => {
      checkPageBreak(12);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(17, 24, 39);
      doc.text(title, margin, y);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(107, 114, 128);
      const dateWidth = doc.getTextWidth(dateRange);
      doc.text(dateRange, margin + contentWidth - dateWidth, y);
      
      y += 4;
      
      doc.setFont('helvetica', 'oblique');
      doc.setFontSize(8.5);
      doc.setTextColor(14, 116, 144); // deep cyan
      doc.text(details, margin, y);
      
      y += 4;
    };

    const drawGridRow = (col1: string, col2: string) => {
      const col1Width = 35;
      const col2Width = contentWidth - col1Width;
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(17, 24, 39);
      const col1Lines = doc.splitTextToSize(col1, col1Width);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(55, 65, 81);
      const col2Lines = doc.splitTextToSize(col2, col2Width);
      
      const lineHeight = 9 * 0.3528 * 1.35;
      const col1Height = col1Lines.length * lineHeight;
      const col2Height = col2Lines.length * lineHeight;
      const rowHeight = Math.max(col1Height, col2Height);
      
      checkPageBreak(rowHeight + 2.5);
      
      col1Lines.forEach((line: string, idx: number) => {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(17, 24, 39);
        doc.text(line, margin, y + (idx * lineHeight));
      });
      
      col2Lines.forEach((line: string, idx: number) => {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(55, 65, 81);
        doc.text(line, margin + col1Width, y + (idx * lineHeight));
      });
      
      y += rowHeight + 2.5;
    };

    // Header Block
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(17, 24, 39); 
    doc.text('GANESH CHAVAN', margin, y);
    y += 8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(14, 165, 233); // cyan theme
    doc.text('Game Developer  |  Unity & Unreal Engine  |  AR/VR', margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(75, 85, 99); 
    const contactLine1 = `+91 9637183960     |     chavanganesh9405543605@gmail.com     |     Pune, India`;
    doc.text(contactLine1, margin, y);
    y += 4;
    
    const contactLine2 = `LinkedIn: ganesh-chavans (https://linkedin.com/in/ganesh-chavans)`;
    doc.text(contactLine2, margin, y);
    y += 5;

    drawRule();

    // Summary Section
    drawSectionHeader('PROFESSIONAL SUMMARY');
    const summaryText = "Final-year BCA (Game Development) student at Ajeenkya DY Patil University, Pune, maintaining a CGPA of 8.68 with zero backlogs. Proficient in Unity and Unreal Engine 5, with hands-on experience in gameplay programming, enemy AI systems, AR/VR development, and 3D environment design. Completed a 3-month industry internship as a Game Programmer at Mudgal Overseas. Delivered two full-scale academic game projects — a 3D racing title (Unity) and a first-person survival shooter (UE5/C++) — each with full documentation and university evaluation.";
    drawText(summaryText, 9, 'normal', '#374151', 4);

    // Skills Section
    drawSectionHeader('TECHNICAL SKILLS');
    drawGridRow('Game Engines', 'Unity (2D/3D, AR Foundation, Unity 6), Unreal Engine 5 (Blueprints, C++, Lumen, NavMesh, PCG)');
    drawGridRow('Programming', 'C# · C++');
    drawGridRow('Specialisations', 'Gameplay Programming · Enemy AI (Behavior Trees) · AR/VR Development · Level Design · UI/UX Systems · Multiplayer & Split-Screen · Wave Systems · Physics Simulation');
    drawGridRow('Tools', 'Git · TextMeshPro · LeanTween · Niagara Particle System · WheelCollider · PlayerPrefs · UMG Widgets');
    drawGridRow('Languages', 'English, Hindi, Marathi');

    // Experience Section
    drawSectionHeader('PROFESSIONAL EXPERIENCE');
    drawJobHeader('Intern — Game Programmer', 'Mudgal Overseas (Kota, Rajasthan | Remote)', 'Dec 2025 – Mar 2026');
    drawBullet('Built and iterated on gameplay mechanics for active game projects as part of the founding team.');
    drawBullet('Optimised C# scripts for performance, reducing bottlenecks in core game loops.');
    drawBullet('Executed full professional onboarding: signed NDA and IP Assignment Agreement on day one.');
    drawBullet('Certificate issued by Shanu Mudgal, Founder-Director. Duration confirmed: 17 Dec 2025 - 17 Mar 2026.');

    // Projects Section
    drawSectionHeader('PROJECTS');
    
    // Project 1
    drawProjectHeader('Dread Sands', 'Unreal Engine 5 · C++ · Team of 4 · 2025-26', 'Enemy AI, Main Menu, UI/UX, Skybox Integration');
    drawBullet('Designed and implemented the complete Enemy AI pipeline using UE5 Behavior Trees and Blackboard components: custom BTT tasks for FindPlayerLocation, ChasePlayer, and Attack, plus an IsPlayerInRange service for melee detection.');
    drawBullet('Built the main menu, UI HUD (health, ammo, wave, score), and integrated dynamic skybox and atmospheric assets.');
    drawBullet('Created wave manager (AEnemyManager) scaling speed dynamically and point-earned economy.');
    drawBullet('First-person wave survival shooter set in Al-Tariq ruins with complete audio pipeline integration.');
    drawBullet('Dissertation scored a 9% index on iThenticate verification; certified by Dr. Shashank Dule.');

    // Project 2
    drawProjectHeader('Hyper-Drive', 'Unity 6 · C# · Solo Build · 2025-26', 'Solo Engine Architect & Physics');
    drawBullet('Engineered a feature-complete 3D racing simulator from scratch: 5 tracks, 5 customizable cars, and 5 game modes.');
    drawBullet('Implemented WheelCollider car physics with center-of-mass tuning and real-time tire drift mark trails (1000-section circular buffer).');
    drawBullet('Programmed waypoint AI bots with adaptive throttle/steering ratios and raycast-based stuck-detection auto-resets.');
    drawBullet('Built dual-controller splitscreen coop camera matrices and inputs with isolated UI canvas groups.');
    drawBullet('Animated entire save/unlock system via LeanTween with PlayerPrefs metrics.');
    drawBullet('Dissertation certified by Prof. Shashank Dule; submitted to Ajeenkya DY Patil University.');

    // Project 3
    drawProjectHeader('Agent-UN FPS', 'Unity 3D · C# · Solo Build', 'Kinematic shooting');
    drawBullet('Complete FPS level featuring fluid kinematic weapon recoil/shooting, proximity checking spawners, and interactive HP/ammo collectible widgets.');

    // Project 4
    drawProjectHeader('AR Portfolio App', 'Unity 6 · AR Foundation · Solo Build', 'Face tracking');
    drawBullet('Mobile markerless face mesh tracking overlays and print target spawners utilizing dual camera stream matrices.');

    // Project 5
    drawProjectHeader('Unreal Engine 5 - Environment Design', 'UE5 · PCG · Lumen · Solo Build', 'Technical Art');
    drawBullet('Photorealistic environment design (jungle, village sunrise) with Procedural Content Generation foliage graphs and dynamic Lumen illumination postpack layouts.');

    // Project 6
    drawProjectHeader('2D Games Suite', 'Unity 2D · C# · Solo Build', 'Four Standalone Titles');
    drawBullet('Developed four standalone 2D titles: Match the Shape, Stack Tower, Maze Runner, Apple - each with distinct mechanics, scoring systems, and polished UI.');

    // Education Section
    drawSectionHeader('EDUCATION');
    drawJobHeader('Bachelor of Computer Application (Game Development)', 'Ajeenkya DY Patil University, Pune · School of Engineering', '2023 – 2026 (Final year)');
    drawBullet('CGPA: 8.68 (First Class with Distinction)  |  104 / 104 Credits cleared with 0 Backlogs (Semester 6 completed May 2026)');
    drawBullet('Semester 5 Academic Highlights: 3D Game Dev Using Unreal (A+), Technical Art (A+), 3D Game Dev & Presentation (A), Integrating Online Services (B+), Virtual Reality (B), Multiplayer Programming (B)');

    drawJobHeader('Higher Secondary (12th — Science)', 'Dr. Bapuji Salunke College, Miraj', '2022 Graduate');
    drawBullet('Focus areas: Physics, Chemistry, Mathematics, and Computer Science');

    drawJobHeader('Secondary (10th)', 'Alphonsa School, Miraj', '2020 Graduate');
    drawBullet('Passed with high academic accolades and distinctions.');

    // Footer detail to tie it together beautifully
    checkPageBreak(12);
    y += 4;
    doc.setDrawColor(240, 240, 240);
    doc.setLineWidth(0.15);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4;
    doc.setFont('helvetica', 'oblique');
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Ganesh Chavan Portfolio Resume · Live Link: https://dynamite4090.github.io/ganesh-dev/', margin, y);

    // Save File
    doc.save('Ganesh_Chavan_Resume.pdf');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = JSON.stringify({
      name: "Ganesh Chavan",
      title: "Game Developer (Unity & Unreal)",
      contact: contactInfo,
      summary: "Final-year BCA (Game Development) student at ADYPU maintaining 8.68 CGPA with zero backlogs.",
      skills: skillGroups.map(g => ({ category: g.name, skills: g.tags })),
      experience: experienceData,
      projects: projectsData,
      education: educationData
    }, null, 2);
    
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'ganesh_chavan_resume.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative py-8 px-4 md:px-8 max-w-5xl mx-auto space-y-6">
      {/* Decorative background grid and glow for the custom visual theme */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#00d4ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Control Banner - Hidden during printing */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-between items-center bg-game-surface/85 border border-game-border p-4 rounded-xl backdrop-blur-sm print:hidden">
        <div className="flex items-center gap-3">
          <div className="bg-game-cyan/10 p-2.5 rounded-lg border border-game-cyan/20">
            <FileText className="text-game-cyan size-6 text-glow-cyan" />
          </div>
          <div className="space-y-0.5">
            <h2 className="font-head text-lg font-bold uppercase tracking-wider text-white">Interactive CV Hub</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-game-cyan hover:bg-game-cyan/85 text-black py-2.5 px-4 font-head font-bold text-xs tracking-wider uppercase rounded-lg cursor-pointer transition-all transform hover:-translate-y-0.5 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
            id="download-pdf-cv-btn"
          >
            <Download size={14} />
            <span>Download PDF Resume</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 border border-game-border bg-game-card hover:bg-game-surface text-white py-2.5 px-4 font-head font-bold text-xs tracking-wider uppercase rounded-lg cursor-pointer transition-all"
            id="print-cv-btn"
          >
            <Printer size={14} className="text-game-cyan" />
            <span>Print Layout</span>
          </button>
        </div>
      </div>

      {/* Core Dynamic Resume Paper Frame */}
      {/* 
        This is styled precisely using both web utility classes AND print rules (`print:`) 
        so that when clicking "Print" it switches to high-contrast paper mode, margins, and spreads. 
      */}
      <motion.article 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-game-surface border border-game-border rounded-2xl p-6 md:p-12 space-y-8 font-sans text-white 
          print:bg-white print:text-black print:border-none print:p-0 print:m-0 print:shadow-none print:rounded-none selection:bg-game-cyan/20"
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:justify-between items-start pb-6 border-b border-game-border/80 print:border-neutral-200">
          <div className="space-y-2">
            <h1 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none text-white print:text-black">
              GANESH <span className="text-game-cyan print:text-black text-glow-cyan print:text-shadow-none">CHAVAN</span>
            </h1>
            <p className="font-head text-lg md:text-xl font-bold tracking-widest text-game-cyan print:text-neutral-700 uppercase">
              Game Developer · Unity & Unreal Engine · AR/VR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mt-6 md:mt-0 font-mono text-xs text-game-muted print:text-neutral-700">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-white print:hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              <Phone size={12} className="text-game-cyan/70 print:text-neutral-600" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white print:hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              <Mail size={12} className="text-game-cyan/70 print:text-neutral-600" />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-game-cyan/70 print:text-neutral-600" />
              <span>{contactInfo.location}</span>
            </div>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-game-cyan print:text-neutral-700 hover:text-white print:hover:text-black transition-all underline decoration-game-cyan/30"
            >
              <Linkedin size={12} className="text-game-cyan/70 print:text-neutral-600" />
              <span className="flex items-center gap-0.5">LinkedIn Profile <ExternalLink size={9} className="print:hidden" /></span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b border-game-border/50 print:border-neutral-200">
            <Award size={15} className="text-game-cyan print:text-neutral-700" />
            <h2 className="font-head text-base font-bold tracking-wider uppercase text-white print:text-black">Professional Summary</h2>
          </div>
          <p className="text-sm text-game-muted print:text-neutral-800 leading-relaxed">
            Final-year BCA (Game Development) student at <strong className="text-white print:text-black font-semibold">Ajeenkya DY Patil University, Pune</strong>, maintaining a CGPA of <strong className="text-white print:text-black font-semibold">8.68</strong> with zero backlogs. 
            Proficient in <strong className="text-white print:text-black font-semibold">Unity</strong> and <strong className="text-white print:text-black font-semibold">Unreal Engine 5</strong>, with hands-on experience in gameplay programming, enemy AI systems, AR/VR development, 
            and 3D environment design. Completed a 3-month industry internship as a Game Programmer at Mudgal Overseas. Delivered two full-scale academic game projects — a 3D racing title (Unity) and a first-person survival shooter (UE5/C++) — each with full documentation 
            and university evaluation.
          </p>
        </section>

        {/* Technical Skills Setup */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b border-game-border/50 print:border-neutral-200">
            <Code size={15} className="text-game-cyan print:text-neutral-700" />
            <h2 className="font-head text-base font-bold tracking-wider uppercase text-white print:text-black">Technical Skills</h2>
          </div>
          
          <div className="flex flex-col gap-3.5">
            {skillGroups.map((group) => (
              <div key={group.id} className="grid grid-cols-1 md:grid-cols-4 md:gap-4 items-start pb-2.5 border-b border-game-border/30 last:border-none last:pb-0 print:border-neutral-100">
                <div className="font-head text-xs font-bold uppercase text-white print:text-neutral-900 md:col-span-1 pt-0.5">
                  {group.name}
                </div>
                <div className="md:col-span-3">
                  {/* Web view showing tag elements */}
                  <div className="flex flex-wrap gap-1.5 print:hidden">
                    {group.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="font-mono text-[10px] bg-game-card border border-game-border/80 text-game-cyan px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Print Optimized bullet style tags */}
                  <p className="hidden print:block text-xs text-neutral-800">
                    {group.tags.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b border-game-border/50 print:border-neutral-200">
            <Briefcase size={15} className="text-game-cyan print:text-neutral-700" />
            <h2 className="font-head text-base font-bold tracking-wider uppercase text-white print:text-black">Professional Experience</h2>
          </div>

          {experienceData.map((job) => (
            <div key={job.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                <div>
                  <h3 className="font-head text-base font-bold text-white print:text-black uppercase leading-tight">
                    {job.role}
                  </h3>
                  <div className="font-mono text-xs text-game-cyan print:text-neutral-700 font-semibold tracking-wide">
                    {job.company} · {job.location}
                  </div>
                </div>
                <span className="font-mono text-xs text-game-orange print:text-neutral-600 bg-game-orange/15 border border-game-orange/25 print:border-none print:bg-transparent px-2.5 py-0.5 rounded shrink-0">
                  {job.dateRange}
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-xs text-game-muted print:text-neutral-800 leading-normal">
                {job.points.map((pt, index) => (
                  <li key={index} className="pl-0.5">
                    {pt}
                  </li>
                ))}
              </ul>

              {job.certificateIssuer && (
                <div className="mt-2 text-[11px] font-mono text-game-cyan/85 print:text-neutral-700 border border-game-border bg-game-card/50 print:bg-transparent print:border-none p-2 rounded">
                  <strong>Verification:</strong> {job.certificateIssuer} | {job.durationConfirmed}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Projects Layout with page-breaks handled for printing */}
        <section className="space-y-4 print:pt-4">
          <div className="flex items-center gap-2 pb-1 border-b border-game-border/50 print:border-neutral-200">
            <FolderGit2 size={15} className="text-game-cyan print:text-neutral-700" />
            <h2 className="font-head text-base font-bold tracking-wider uppercase text-white print:text-black">Academic & Solo Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {projectsData.map((project) => (
              <div key={project.id} className="space-y-2.5 border-b border-game-border/20 last:border-none pb-4 last:pb-0 print:border-neutral-100 print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                  <div>
                    <h3 className="font-head text-sm md:text-base font-bold uppercase text-white print:text-black flex items-center gap-2">
                      <span>{project.title}</span>
                      <span className="font-mono text-[9px] text-game-cyan print:text-neutral-600 font-normal uppercase normal-case px-2 py-0.5 bg-game-card/85 border border-game-border/85 print:border-none print:p-0">
                        {project.engine}
                      </span>
                    </h3>
                    <p className="text-xs text-game-cyan print:text-neutral-600 font-mono tracking-wide">
                      Role: {project.role}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-game-muted uppercase print:text-neutral-600">
                    {project.badge}
                  </span>
                </div>

                <p className="text-xs text-game-muted print:text-neutral-800 leading-normal italic">
                  {project.desc}
                </p>

                <ul className="list-disc pl-5 space-y-1 text-[11px] text-game-muted print:text-neutral-800">
                  {project.features.map((feat, i) => (
                    <li key={i} className="pl-0.5 leading-normal">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Details */}
        <section className="space-y-4 print:pt-2 print:break-inside-avoid">
          <div className="flex items-center gap-2 pb-1 border-b border-game-border/50 print:border-neutral-200">
            <GraduationCap size={15} className="text-game-cyan print:text-neutral-700" />
            <h2 className="font-head text-base font-bold tracking-wider uppercase text-white print:text-black">Education Background</h2>
          </div>

          <div className="space-y-4">
            {educationData.map((edu) => (
              <div key={edu.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-head text-sm md:text-base font-bold text-white print:text-black uppercase">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-xs text-game-cyan print:text-neutral-700">
                      {edu.school}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-game-orange print:text-neutral-600 shrink-0 mt-1 sm:mt-0">
                    {edu.years}
                  </span>
                </div>

                {edu.cgpa && (
                  <div className="font-mono text-xs text-white print:text-black font-semibold">
                    Academically Scored: <span className="text-game-cyan print:text-black text-glow-cyan print:text-shadow-none">{edu.cgpa}</span>
                  </div>
                )}

                {edu.notes && (
                  <ul className="list-disc pl-5 space-y-1 text-xs text-game-muted print:text-neutral-800">
                    {edu.notes.map((note, index) => (
                      <li key={index} className="pl-0.5">
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Branded Footer Details - Prints on actual sheet */}
        <div className="hidden print:block text-center pt-8 border-t border-neutral-200 mt-12 font-mono text-[9px] text-neutral-500">
          Ref: Ganeshbhai Chavan dev - Live Portfolio: https://dynamite4090.github.io/ganesh-dev/
        </div>
      </motion.article>
    </div>
  );
}
