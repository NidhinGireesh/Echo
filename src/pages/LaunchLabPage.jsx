import React, { useState, useCallback } from 'react';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const STEPS = ['Vision', 'Blueprint', 'Deploy'];
const TECH_OPTIONS = ['React', 'Node.js', 'Python', 'Flutter', 'ML/AI', 'Firebase', 'TypeScript', 'Go', 'Rust', 'CSS'];
const ROLE_OPTIONS = ['Designer', 'Frontend Dev', 'Backend Dev', 'PM', 'DevOps', 'Data Scientist', 'Marketing'];

const LaunchLabPage = () => {
    const [step, setStep] = useState(0);
    const [vision, setVision] = useState('');
    const [type, setType] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [launching, setLaunching] = useState(false);
    const [launched, setLaunched] = useState(false);

    const toggleItem = useCallback((item) => {
        setSelectedItems(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    }, []);

    const handleLaunch = async () => {
        setLaunching(true);
        await new Promise(r => setTimeout(r, 2000));
        setLaunching(false);
        setLaunched(true);
    };

    const canProceed = [vision.trim().length > 20, !!type && selectedItems.length > 0, true][step];

    if (launched) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070d1f] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute w-2 h-2 rounded-full animate-bounce" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: ['#a78bfa','#c180ff','#ff6daf'][i % 3], animationDelay: `${Math.random()}s`, animationDuration: `${0.8 + Math.random() * 0.8}s`, opacity: 0.7 }} />
                    ))}
                </div>
                <div className="glass-panel p-16 rounded-[3rem] text-center max-w-lg relative z-10">
                    <div className="w-28 h-28 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-8 relative">
                        <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
                    </div>
                    <h2 className="text-4xl font-black font-headline text-white tracking-tighter mb-3">Lab Ignited! 🔥</h2>
                    <p className="text-on-surface-variant opacity-70 max-w-sm mx-auto mb-8 leading-relaxed">Your {type} is live. The campus ecosystem can now discover and apply to join your initiative.</p>
                    <button onClick={() => { setLaunched(false); setStep(0); setVision(''); setType(''); setSelectedItems([]); }} className="glass-violet px-8 py-3 text-xs">Launch Another</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#070d1f] relative selection:bg-primary/20">
            <OptimizedCursorGlow />
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
                <header className="text-center mb-10">
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Creation Wizard</span>
                    <h1 className="text-5xl font-black font-headline text-white tracking-tighter">Launch Lab</h1>
                </header>

                {/* Progress */}
                <div className="mb-12 px-4">
                    <div className="flex items-center gap-0 mb-3">
                        {STEPS.map((s, i) => (
                            <React.Fragment key={s}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all duration-500 ${i < step ? 'bg-primary border-primary text-[#070d1f]' : i === step ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-on-surface-variant opacity-40'}`}>
                                        {i < step ? <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> : i + 1}
                                    </div>
                                    <span className={`text-[9px] font-black uppercase tracking-widest mt-2 transition-colors ${i === step ? 'text-primary' : 'text-on-surface-variant opacity-40'}`}>{s}</span>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className="flex-1 h-0.5 mx-2 relative overflow-hidden rounded-full bg-white/10" style={{ marginBottom: '20px' }}>
                                        <div className="absolute inset-y-0 left-0 bg-primary transition-all duration-700 rounded-full" style={{ width: step > i ? '100%' : '0%' }} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="glass-panel rounded-[2.5rem] p-10 min-h-[380px] flex flex-col">
                    {step === 0 && (
                        <div className="flex flex-col flex-1">
                            <h2 className="text-3xl font-black font-headline text-white tracking-tighter mb-2">What are we building?</h2>
                            <p className="text-on-surface-variant opacity-60 mb-8">Describe your vision clearly. Pioneers will judge your initiative on this.</p>
                            <textarea value={vision} onChange={e => setVision(e.target.value)} placeholder="We're building a decentralized attendance system using NFC + blockchain..." rows={7} className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-medium leading-relaxed resize-none" />
                            <p className={`text-[10px] font-black uppercase tracking-widest mt-3 transition-colors ${vision.length > 20 ? 'text-primary' : 'text-on-surface-variant opacity-40'}`}>{vision.length > 20 ? '✓ Good pitch!' : `${20 - vision.length} more chars needed`}</p>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="flex flex-col flex-1">
                            <h2 className="text-3xl font-black font-headline text-white tracking-tighter mb-2">The Blueprint</h2>
                            <p className="text-on-surface-variant opacity-60 mb-6">Define what you're creating and what expertise you need.</p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[{ id: 'Project', icon: 'code' }, { id: 'Event', icon: 'calendar_month' }].map(({ id, icon }) => (
                                    <button key={id} onClick={() => { setType(id); setSelectedItems([]); }} className={`p-6 rounded-2xl border-2 flex items-center gap-4 transition-all ${type === id ? 'bg-primary/10 border-primary/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                                        <span className={`material-symbols-outlined text-3xl ${type === id ? 'text-primary' : 'text-on-surface-variant opacity-50'}`}>{icon}</span>
                                        <div className="text-left">
                                            <p className={`font-black text-lg ${type === id ? 'text-white' : 'text-on-surface-variant opacity-60'}`}>{id}</p>
                                            <p className="text-[10px] text-on-surface-variant opacity-40 uppercase tracking-widest">{id === 'Project' ? 'Tech stacks needed' : 'Volunteer roles needed'}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {type && (
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-3 block">{type === 'Project' ? 'Required Tech Stacks' : 'Required Roles'}</label>
                                    <div className="flex flex-wrap gap-2">
                                        {(type === 'Project' ? TECH_OPTIONS : ROLE_OPTIONS).map(item => (
                                            <button key={item} onClick={() => toggleItem(item)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedItems.includes(item) ? 'bg-primary/20 text-primary border border-primary/40' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10'}`}>{item}</button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col flex-1">
                            <h2 className="text-3xl font-black font-headline text-white tracking-tighter mb-2">Ready to Ignite?</h2>
                            <p className="text-on-surface-variant opacity-60 mb-6">Review before going live.</p>
                            <div className="space-y-4 flex-1">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-primary opacity-80 mb-2 block">Your Vision</span>
                                    <p className="text-white font-medium leading-relaxed text-sm">{vision}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-secondary opacity-80 mb-2 block">Type</span>
                                        <p className="text-white font-black">{type}</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-tertiary opacity-80 mb-2 block">{type === 'Project' ? 'Tech Needed' : 'Roles Needed'}</span>
                                        <div className="flex flex-wrap gap-1">{selectedItems.map(s => <span key={s} className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-[9px] font-black border border-primary/20">{s}</span>)}</div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLaunch} disabled={launching} className="mt-8 w-full py-5 relative overflow-hidden rounded-2xl border-2 border-primary/60 bg-primary/10 text-white font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all group disabled:opacity-50">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                                {launching ? <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />Igniting...</> : <><span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>Ignite Lab</>}
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex justify-between mt-8">
                    <button onClick={() => setStep(s => s - 1)} disabled={step === 0} className="flex items-center gap-2 px-6 py-3 glass-panel rounded-xl text-sm font-black uppercase tracking-widest text-on-surface-variant hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed border border-white/5">
                        <span className="material-symbols-outlined">arrow_back</span>Back
                    </button>
                    {step < 2 && (
                        <button onClick={() => setStep(s => s + 1)} disabled={!canProceed} className="flex items-center gap-2 px-8 py-3 glass-violet text-sm disabled:opacity-30 disabled:cursor-not-allowed">
                            Next Step<span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LaunchLabPage;
