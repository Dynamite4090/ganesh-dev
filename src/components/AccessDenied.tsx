import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Terminal as TerminalIcon, 
  X, 
  ChevronRight, 
  Flame, 
  Skull, 
  Cpu, 
  RefreshCw, 
  Radio, 
  UserX,
  Volume2,
  VolumeX,
  Unlock,
  CornerDownLeft
} from 'lucide-react';

interface AccessDeniedProps {
  onBypass: () => void;
}

export default function AccessDenied({ onBypass }: AccessDeniedProps) {
  const [isLocked, setIsLocked] = useState(false);
  const [lockReason, setLockReason] = useState('UNAUTHORIZED ACCESS DETECTED');
  const [muted, setMuted] = useState(false);
  
  // Terminal commands and output logs
  const [inputValue, setInputValue] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYSTEM DIAGNOSTIC: VIRTUAL FIREWALL ENGAGED [v4.88.2]',
    'INTEGRITY VERIFICATION FAILURE IN PORTFOLIO CORE ENVIRONMENT',
    'TYPE "help" TO EXPLORE INTERACTIVE DIAGNOSTIC PORTALS OVERRIDE.',
    ''
  ]);
  
  // Right-click micro-warning state
  const [rcWarning, setRcWarning] = useState<{ x: number; y: number; visible: boolean; count: number }>({
    x: 0,
    y: 0,
    visible: false,
    count: 0
  });

  const [scanResult, setScanResult] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Synth sounds
  const playLaserBeep = () => {
    if (muted) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio auto-play policies or constraints
    }
  };

  const playWarningBuzz = () => {
    if (muted) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(90, ctx.currentTime);
      osc.frequency.setValueAtTime(100, ctx.currentTime + 0.08);
      osc.frequency.setValueAtTime(90, ctx.currentTime + 0.16);
      
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio constraints
    }
  };

  const playUnlockTune = () => {
    if (muted) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = ctx.currentTime;
      
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        
        gain.gain.setValueAtTime(0.08, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.25);
      });
    } catch {
      // Audio constraints
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Trap inspect element and hotkeys
  useEffect(() => {
    const triggerLock = (reason: string) => {
      setIsLocked(true);
      setLockReason(reason);
      playWarningBuzz();
      // Remove overflow from body to prevent page interaction
      document.body.style.overflow = 'hidden';
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevents F12
      if (e.key === 'F12') {
        e.preventDefault();
        triggerLock('F12 CONSOLE INTERCEPT');
      }
      
      // Ctrl+Shift+I / Cmd+Opt+I (Chrome/Firefox/Safari)
      if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || 
          (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i'))) {
        e.preventDefault();
        triggerLock('INSPECT ELEMENT SECURITY INTERCEPT');
      }

      // Ctrl+Shift+J / Cmd+Opt+J (Console logs)
      if ((e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
          (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j'))) {
        e.preventDefault();
        triggerLock('DEVELOPER CONSOLE ATTEMPT INTERCEPT');
      }

      // Ctrl+Shift+C / Cmd+Opt+C (Selector mode)
      if ((e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
          (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c'))) {
        e.preventDefault();
        triggerLock('ELEMENT SELECTOR HOVER ATTEMPT');
      }

      // Ctrl+U / Cmd+Opt+U (Page Source)
      if ((e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
          (e.metaKey && e.altKey && (e.key === 'U' || e.key === 'u'))) {
        e.preventDefault();
        triggerLock('DIGITAL INTEGRITY SOURCE PROTECTION');
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      playLaserBeep();
      setRcWarning(prev => {
        const nextCount = prev.count + 1;
        // If they click 3 times, lock them up completely!
        if (nextCount >= 3) {
          triggerLock('MAXIMUM LOGICAL OVERRIDES DETECTED (3X RIGHT-CLICK ATTEMPTS)');
          return { x: e.clientX, y: e.clientY, visible: false, count: 0 };
        }
        return {
          x: e.clientX,
          y: e.clientY,
          visible: true,
          count: nextCount
        };
      });
    };

    // Auto close menu context message after delay
    const timer = setTimeout(() => {
      setRcWarning(prev => prev.visible ? { ...prev, visible: false } : prev);
    }, 4500);

    // Docked Devtools detection
    const handleResize = () => {
      const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
      const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
      
      const isDocked = (widthDiff > 160 && window.innerWidth < 1100) || (heightDiff > 160 && window.innerHeight < 800);
      if (isDocked) {
        triggerLock('DOCK-DIMENSIONAL COGNITION DEFENSE (SCREEN RESIZED VIA CONSOLE)');
      }
    };

    // Debugger interval cycle
    const debugTimer = setInterval(() => {
      const startTime = performance.now();
      debugger; // This halts execution if devtools is open
      const endTime = performance.now();
      if (endTime - startTime > 100) {
        triggerLock('VIRTUAL MACHINE CORRELATION TIMEOUT (LOCAL REVERSE INSPECTION)');
      }
    }, 1500);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', handleResize);
      clearInterval(debugTimer);
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [muted]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const cmd = inputValue.trim().toLowerCase();
    const parts = cmd.split(' ');
    const primaryCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let responses: string[] = [`guest@ganesh-dev:~$ ${inputValue}`];

    switch (primaryCmd) {
      case 'help':
        responses.push(
          'AVAILABLE PROTOCOLS:',
          '  scan       - Triggers static system audits for memory gaps',
          '  decrypt <> - Decrypt locks with a keyword key (e.g. "decrypt game")',
          '  override   - Attempt logical bypass sequence',
          '  sudo       - Elevate guest user clearances',
          '  clear      - Flushes current diagnostic workspace logs',
          '  exit       - Dissolve security perimeter structure'
        );
        break;

      case 'scan':
        setScanResult(true);
        responses.push(
          'STARTING DUAL-CONTAINER METRIC ANALYSIS...',
          '  [A] DIRECTORY CHECK: .git config block ............. [ENCRYPTED]',
          '  [B] BLUEPRINTS CHECK: UE5 Behavior Trees ........... [VERIFIED]',
          '  [C] KERNEL PORT: WheelCollider Mesh buffer .......... [CRUCIAL LEAK]',
          '>> INTEGRITY ANOMALY FOUND AT MEMORY SECTOR 0x55AEF9: ',
          '>> FAVORITE COMPILING LANGUAGE PREFERS C++ INDUCTION.',
          '>> CLUE: Enter command "decrypt <c-plus-plus-spelling-or-unity-engine>"'
        );
        break;

      case 'decrypt':
        if (!arg) {
          responses.push('FAIL: Decrypt protocol requires target argument! Usage: decrypt <engine_or_code>');
        } else if (arg === 'c++' || arg === 'cpp' || arg === 'unity' || arg === 'unreal' || arg === 'games') {
          playUnlockTune();
          responses.push(
            '==================================================',
            'SUCCESS! CODE MATCH VALIDATED.',
            'COGNITIVE INTERCEPT CLEARED.',
            'UNREACHABLE BUFFER RESTORED. SHIELD TERMINATED.',
            '==================================================',
            'REBOOTING IN PORTFOLIO CHASSIS IN 2 SECONDS...'
          );
          setTimeout(() => {
            setIsLocked(false);
            onBypass();
            document.body.style.overflow = 'unset';
          }, 2200);
        } else {
          playWarningBuzz();
          responses.push(`FAIL: KEYWORD "${arg.toUpperCase()}" INVALID. Clue is hidden within "scan" logic.`);
        }
        break;

      case 'override':
        responses.push(
          'ATTEMPTING LOGICAL BYPASS TO CORE METRICS...',
          'SYS_SECURITY: BLOCK_INDEX_ZERO ACTIVE.',
          'ACCESS COMPROMISED. MANUALLY RUN "decrypt" WITH FAULT KEYWORDS.'
        );
        break;

      case 'sudo':
        responses.push(
          'ERROR: guest is not in the sudoers file.',
          'This intrusion attempt has been logged with the NDA deployment team',
          'at Mudgal Overseas operation servers. Protocol activated.'
        );
        break;

      case 'clear':
        setTerminalLogs([]);
        setInputValue('');
        return;

      case 'exit':
        playUnlockTune();
        responses.push('EXITING EMERGENCY CONSOLE. SAFE CHASSIS LOAD DIRECTIVITY ACTUATING...');
        setTimeout(() => {
          setIsLocked(false);
          document.body.style.overflow = 'unset';
        }, 1000);
        break;

      default:
        responses.push(`COMMAND OUT OF BOUNDS: "${primaryCmd}". Enter "help" to list terminals.`);
    }

    setTerminalLogs(prev => [...prev, ...responses, '']);
    setInputValue('');
    playLaserBeep();
  };

  return (
    <>
      {/* Glitch Keyframes Style tag to make custom animation completely standalone */}
      <style>{`
        @keyframes cyber-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.005); }
        }
        @keyframes text-glitch {
          0% { text-shadow: 2px -1px 0 rgba(255,107,53,0.5), -2px 1px 0 rgba(0,212,255,0.5); }
          20% { text-shadow: -2px 2px 0 rgba(255,107,53,0.5), 1px -1px 0 rgba(0,212,255,0.5); }
          40% { text-shadow: 1px -2px 0 rgba(255,107,53,0.7), -1px 2px 0 rgba(0,212,255,0.5); }
          60% { text-shadow: -1px 1px 0 rgba(255,107,53,0.5), 2px -1px 0 rgba(0,212,255,0.7); }
          80% { text-shadow: 2px -2px 0 rgba(255,107,53,0.3), -2px 1px 0 rgba(0,212,255,0.7); }
          100% { text-shadow: 1px -1px 0 rgba(255,107,53,0.5), -1px 2px 0 rgba(0,212,255,0.5); }
        }
        @keyframes scanline-drop {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .cyber-alert-pulse {
          animation: cyber-pulse 2s infinite ease-in-out;
        }
        .text-glitched {
          animation: text-glitch 1.5s infinite linear;
        }
        .cyber-bar {
          background: linear-gradient(90deg, #ff6b35 0%, transparent 100%);
        }
      `}</style>

      {/* 1. Normal Floating Alert trigger on simple right clicks (Micro Feedback) */}
      <AnimatePresence>
        {rcWarning.visible && !isLocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            style={{ 
              position: 'fixed', 
              left: Math.min(rcWarning.x, window.innerWidth - 320), 
              top: Math.min(rcWarning.y, window.innerHeight - 150) 
            }}
            className="z-50 w-72 bg-game-surface border-2 border-game-orange rounded-lg shadow-[0_0_25px_rgba(255,107,53,0.35)] p-4 select-none font-sans"
          >
            <div className="flex items-start gap-3">
              <div className="bg-game-orange/15 p-2 rounded-md border border-game-orange/40 text-game-orange shrink-0">
                <ShieldAlert className="size-5 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="font-head text-xs font-bold tracking-widest text-game-orange uppercase">INSPECT PREVENTED</h4>
                <p className="font-mono text-[10px] text-game-muted leading-tight">
                  System right-click triggers are actively restricted to guarantee portfolio structural performance.
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      setRcWarning(prev => ({ ...prev, visible: false }));
                      setIsLocked(true);
                      setLockReason('MANUAL COGNITIVE OVERRIDE REQUEST');
                    }}
                    className="font-mono text-[9px] bg-game-orange text-black px-2 py-1 rounded font-bold hover:bg-game-orange/80 transition-colors uppercase cursor-pointer"
                  >
                    Open Rescue Console
                  </button>
                  <button
                    onClick={() => setRcWarning(prev => ({ ...prev, visible: false }))}
                    className="font-mono text-[9px] border border-game-border bg-game-card text-white px-2 py-0.5 rounded hover:bg-game-surface transition-colors cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
            {/* Blinking counter indicators */}
            <div className="mt-2.5 flex items-center justify-between border-t border-game-border/50 pt-1.5 text-[8px] font-mono text-game-muted">
              <span>SECURITY COGNITION LEVEL: MINIMAL</span>
              <span className="text-game-orange font-bold">ATTEMPTS: {rcWarning.count}/3</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full Hacker-Style "Access Denied" Warning Overlay */}
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black text-white font-mono flex items-center justify-center p-4 select-none overflow-hidden"
          >
            {/* Cyber Grid pattern inside the intercept space */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Falling Matrix Scanline Indicator */}
            <div className="absolute left-0 right-0 h-0.5 bg-game-orange/30 shadow-[0_0_8px_#ff6b35] opacity-25 pointer-events-none" style={{ animation: 'scanline-drop 4s infinite linear' }} />

            <div className="w-full max-w-4xl bg-black border-2 border-game-orange rounded-xl shadow-[0_0_50px_rgba(255,107,53,0.3)] bg-gradient-to-b from-black via-[#060403] to-black relative flex flex-col md:flex-row h-[90vh] md:h-[650px] overflow-hidden">
              
              {/* Left Column: Visual Danger Signals */}
              <div className="p-6 md:p-8 flex flex-col justify-between items-center md:items-start border-b md:border-b-0 md:border-r border-game-orange/20 md:w-80 shrink-0 bg-[#0d0705] relative">
                
                {/* Micro tech indicators */}
                <div className="flex justify-between items-center w-full font-mono text-[9px] text-game-orange/60">
                  <span>SYSTEM_LOCK: SHIELD_ACTIVE</span>
                  <span className="animate-ping font-extrabold text-red-500">● LIVE</span>
                </div>

                <div className="text-center md:text-left space-y-4 my-auto">
                  <div className="relative inline-block mx-auto">
                    {/* Pulsing warning symbol */}
                    <div className="absolute inset-0 rounded-full bg-game-orange/10 animate-ping" />
                    <div className="border border-game-orange bg-game-orange/15 rounded-full p-4 relative z-10">
                      <Skull className="size-12 text-game-orange animate-bounce" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="font-head text-2xl font-black text-game-orange tracking-widest text-glitched uppercase">ACCESS DENIED</h2>
                    <p className="text-[10px] text-game-muted uppercase leading-relaxed tracking-wider">
                      COGNITIVE REVERSE-ENGINEERING DETECTED IN ENVIRONMENT THREAT MATRIX
                    </p>
                  </div>

                  <div className="p-3 border border-game-orange/20 bg-black rounded-lg text-left text-[9px] leading-relaxed text-red-400 space-y-1 cyber-alert-pulse">
                    <p className="font-bold">TRIGGER REASON:</p>
                    <p className="text-white bg-red-950 px-1 py-0.5 rounded border border-red-800 break-all">{lockReason}</p>
                    <p className="mt-1">PORT COMPROMISED: SEC_3000</p>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full pt-4 border-t border-game-orange/10">
                  {/* Sound Toggle */}
                  <button
                    onClick={() => {
                      setMuted(!muted);
                      playLaserBeep();
                    }}
                    className="flex items-center gap-1.5 text-game-muted hover:text-white transition-colors text-[9px]"
                  >
                    {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    <span>{muted ? 'SOUND MUTED' : 'CON SOUNDS ON'}</span>
                  </button>

                  <span className="font-mono text-[9px] text-game-orange/80">THREAT: LVL_99</span>
                </div>
              </div>

              {/* Right Column: Interactive Warning Shell Command Interface */}
              <div className="flex-1 flex flex-col justify-between bg-black relative">
                {/* Terminal Header */}
                <div className="bg-[#0f0a06] border-b border-game-orange/15 px-4 py-2.5 flex justify-between items-center text-[10px] font-mono text-game-orange">
                  <div className="flex items-center gap-2">
                    <TerminalIcon size={12} />
                    <span className="font-bold">SECURITY EXCLUSION EMERGENCY RESCUE INTERACTION</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-900 border border-red-700 rounded-full block" />
                    <span className="w-2.5 h-2.5 bg-yellow-900 border border-yellow-700 rounded-full block" />
                    <span className="w-2.5 h-2.5 bg-green-900 border border-green-700 rounded-full block" />
                  </div>
                </div>

                {/* Simulated Log Output Window */}
                <div className="flex-grow p-4 md:p-6 overflow-y-auto font-mono text-xs text-green-400 leading-relaxed selection:bg-game-orange/30">
                  <div className="space-y-1">
                    {terminalLogs.map((log, index) => (
                      <div key={index} className="whitespace-pre-wrap">
                        {log.startsWith('guest@') ? (
                          <span className="text-blue-400 font-semibold">{log}</span>
                        ) : log.startsWith('SUCCESS') || log.startsWith('REBOOTING') ? (
                          <span className="text-emerald-300 font-bold">{log}</span>
                        ) : log.startsWith('FAIL') || log.startsWith('ERROR') ? (
                          <span className="text-game-orange font-bold font-serif">{log}</span>
                        ) : (
                          <span>{log}</span>
                        )}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>
                </div>

                {/* Input Prompt Control Block */}
                <div className="p-3 bg-[#0d0705] border-t border-game-orange/20">
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2">
                    <ChevronRight className="text-game-orange animate-pulse size-4 shrink-0" />
                    <span className="text-blue-400 font-bold text-xs shrink-0 select-none">guest@ganesh_dev:~$</span>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder='Type "help" or guess decryption...'
                      className="flex-grow bg-transparent text-white font-mono text-xs focus:outline-none border-none caret-game-orange placeholder-game-orange/30 uppercase select-text"
                      autoFocus
                    />
                    <button 
                      type="submit"
                      className="bg-game-orange/10 hover:bg-game-orange/25 text-game-orange border border-game-orange/30 p-1.5 px-3 rounded text-[10px] hover:text-white transition-all cursor-pointer font-bold flex items-center gap-1 shrink-0 uppercase"
                    >
                      <span>Execute</span>
                      <CornerDownLeft size={10} />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
