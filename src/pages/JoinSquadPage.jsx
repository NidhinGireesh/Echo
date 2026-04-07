import React, { useState, useCallback, useRef } from 'react';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const SQUAD_CARDS = [
    {
        id: 1,
        name: 'Aryan Nair',
        college: 'NIT Calicut',
        avatar: 'https://i.pravatar.cc/150?u=aryan',
        pitch: 'Building an AI-powered local event scraper for colleges across Kerala. Pulls from Facebook, Instagram, and college sites.',
        haves: ['Python', 'FastAPI', 'NLP', 'Web Scraping'],
        needs: ['React', 'UI/UX Design', 'Mobile Dev'],
        level: 'Archon',
        points: '8.4k',
    },
    {
        id: 2,
        name: 'Lakshmi Priya',
        college: 'CET Trivandrum',
        avatar: 'https://i.pravatar.cc/150?u=lakshmi',
        pitch: 'Decentralized attendance system using NFC and blockchain for campus verification. Looking for a backend co-founder.',
        haves: ['Solidity', 'React', 'UI Design', 'Figma'],
        needs: ['Node.js', 'Rust', 'IoT / NFC'],
        level: 'Sentinel',
        points: '12.1k',
    },
    {
        id: 3,
        name: 'Rohit Menon',
        college: 'MEC Kochi',
        avatar: 'https://i.pravatar.cc/150?u=rohit',
        pitch: 'Campus marketplace for buying and selling used textbooks, lab equipment, and electronics between students across colleges.',
        haves: ['Node.js', 'MongoDB', 'Express'],
        needs: ['React Native', 'UI/UX', 'Flutter'],
        level: 'Pioneer',
        points: '5.9k',
    },
    {
        id: 4,
        name: 'Devika S',
        college: 'CUSAT',
        avatar: 'https://i.pravatar.cc/150?u=devika',
        pitch: 'Real-time collaborative whiteboard tool optimized for hackathons — low latency, mobile-first, offline capable.',
        haves: ['WebSocket', 'Canvas API', 'TypeScript'],
        needs: ['DevOps', 'AWS', 'Go'],
        level: 'Archon',
        points: '9.2k',
    },
];

const SquadCard = React.memo(({ card, style, isTop, gesture }) => (
    <div
        className="absolute inset-x-0 top-0 glass-panel rounded-[2.5rem] overflow-hidden border border-white/10 select-none"
        style={{
            ...style,
            transform: `${style?.transform || ''} ${isTop && gesture !== 0 ? `rotate(${gesture * 0.08}deg)` : ''}`,
            transition: isTop ? 'transform 0.1s ease-out' : 'all 0.4s ease',
        }}
    >
        {/* Pass / Join indicator overlays */}
        {isTop && gesture < -30 && (
            <div className="absolute inset-0 bg-red-500/20 z-20 flex items-center justify-center rounded-[2.5rem] pointer-events-none">
                <span className="text-6xl font-black text-red-400 border-4 border-red-400 px-6 py-2 rounded-2xl rotate-[-15deg]">PASS</span>
            </div>
        )}
        {isTop && gesture > 30 && (
            <div className="absolute inset-0 bg-violet-500/20 z-20 flex items-center justify-center rounded-[2.5rem] pointer-events-none">
                <span className="text-6xl font-black text-violet-400 border-4 border-violet-400 px-6 py-2 rounded-2xl rotate-[15deg]">JOIN!</span>
            </div>
        )}

        <div className="p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <img src={card.avatar} alt={card.name} className="w-16 h-16 rounded-2xl border border-white/10 object-cover" />
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-black font-headline text-white">{card.name}</h2>
                        <span className="bg-primary/20 text-primary text-[8px] px-2 py-0.5 rounded-full font-black uppercase border border-primary/30">{card.level}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm opacity-60 font-medium">{card.college}</p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-xl font-black text-primary">{card.points}</p>
                    <p className="text-[9px] text-on-surface-variant uppercase tracking-widest opacity-50 font-black">Rep</p>
                </div>
            </div>

            {/* Pitch */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-secondary opacity-80 mb-3 block">The Pitch</span>
                <p className="text-white font-medium leading-relaxed">{card.pitch}</p>
            </div>

            {/* Stack Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-green-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">Stack Haves</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {card.haves.map(s => (
                            <span key={s} className="px-2 py-1 bg-green-500/10 rounded-lg border border-green-500/20 text-[9px] font-black text-green-300 uppercase">{s}</span>
                        ))}
                    </div>
                </div>
                <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-violet-400 text-base">search</span>
                        <span className="text-[9px] font-black text-violet-400 uppercase tracking-widest">Stack Needs</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {card.needs.map(s => (
                            <span key={s} className="px-2 py-1 bg-violet-500/10 rounded-lg border border-violet-500/20 text-[9px] font-black text-violet-300 uppercase">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const JoinSquadPage = () => {
    const [cards, setCards] = useState(SQUAD_CARDS);
    const [gesture, setGesture] = useState(0);
    const [exiting, setExiting] = useState(null); // 'left' | 'right'
    const [matchedName, setMatchedName] = useState(null);
    const dragStart = useRef(null);

    const dismiss = useCallback((direction) => {
        if (cards.length === 0) return;
        const isMatch = direction === 'right';
        if (isMatch) setMatchedName(cards[0].name);
        setExiting(direction);
        setTimeout(() => {
            setCards(prev => prev.slice(1));
            setExiting(null);
            setGesture(0);
            if (isMatch) setTimeout(() => setMatchedName(null), 2000);
        }, 400);
    }, [cards]);

    const onMouseDown = (e) => { dragStart.current = e.clientX; };
    const onMouseMove = (e) => {
        if (dragStart.current === null) return;
        setGesture(e.clientX - dragStart.current);
    };
    const onMouseUp = () => {
        if (Math.abs(gesture) > 80) dismiss(gesture > 0 ? 'right' : 'left');
        else setGesture(0);
        dragStart.current = null;
    };

    const cardCount = cards.length;

    return (
        <div className="min-h-screen bg-[#070d1f] relative selection:bg-primary/20">
            <OptimizedCursorGlow />
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
                <header className="text-center mb-12">
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Matchmaking Arena</span>
                    <h1 className="text-5xl font-black font-headline text-white tracking-tighter">Find Your Squad</h1>
                    <p className="text-on-surface-variant opacity-60 mt-3">Swipe right to join, left to pass. Find your perfect co-founder.</p>
                </header>

                {/* Match Toast */}
                {matchedName && (
                    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-violet-600/90 backdrop-blur-xl border border-violet-400/50 px-8 py-4 rounded-2xl flex items-center gap-3 shadow-xl shadow-violet-500/30 animate-bounce">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                        <span className="font-black text-white text-sm">Joining {matchedName}'s squad!</span>
                    </div>
                )}

                {/* Cards */}
                {cardCount > 0 ? (
                    <>
                        <div className="relative h-[460px] mb-10" style={{ touchAction: 'none' }}>
                            {cards.slice(0, 3).map((card, i) => {
                                const isTop = i === 0;
                                const offset = i * 10;
                                const scale = 1 - i * 0.04;
                                const exitTransform = exiting === 'left'
                                    ? 'translateX(-120%) rotate(-25deg)'
                                    : exiting === 'right'
                                    ? 'translateX(120%) rotate(25deg)'
                                    : isTop ? `translateX(${gesture}px)` : '';

                                return (
                                    <SquadCard
                                        key={card.id}
                                        card={card}
                                        isTop={isTop}
                                        gesture={isTop ? gesture : 0}
                                        style={{
                                            zIndex: 10 - i,
                                            transform: isTop && exiting
                                                ? exitTransform
                                                : `translateY(${offset}px) scale(${scale})`,
                                            opacity: exiting && isTop ? 0 : 1,
                                            cursor: isTop ? 'grab' : 'default',
                                        }}
                                    />
                                );
                            })}
                            {/* Invisible drag overlay on top card */}
                            {cardCount > 0 && (
                                <div
                                    className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
                                    onMouseDown={onMouseDown}
                                    onMouseMove={onMouseMove}
                                    onMouseUp={onMouseUp}
                                    onMouseLeave={onMouseUp}
                                />
                            )}
                        </div>

                        {/* Remaining indicator */}
                        <p className="text-center text-[10px] text-on-surface-variant opacity-40 font-black uppercase tracking-widest mb-6">{cardCount} Explorers Remaining</p>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-10">
                            <button
                                onClick={() => dismiss('left')}
                                className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-red-500/10"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                            <button
                                onClick={() => dismiss('right')}
                                className="w-20 h-20 rounded-full bg-violet-500/20 border-2 border-violet-500/50 flex items-center justify-center text-violet-300 hover:bg-violet-500/30 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-violet-500/20"
                            >
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                            </button>
                            <button
                                onClick={() => dismiss('left')}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:bg-white/10 hover:scale-110 transition-all"
                                title="Bookmark"
                            >
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="glass-panel rounded-[2.5rem] p-16 text-center">
                        <span className="material-symbols-outlined text-5xl text-on-surface-variant opacity-30 mb-6 block">group_off</span>
                        <h3 className="text-2xl font-black text-white mb-3">You've Seen Everyone</h3>
                        <p className="text-on-surface-variant opacity-60 mb-8">Check back tomorrow for new pioneers looking for their squad.</p>
                        <button onClick={() => setCards(SQUAD_CARDS)} className="glass-violet px-8 py-3 text-xs">Reset Arena</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JoinSquadPage;
