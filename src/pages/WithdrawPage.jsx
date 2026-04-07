import React, { useState, useMemo } from 'react';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

// Simple sparkline using SVG
const Sparkline = React.memo(({ data, color = '#a78bfa' }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const W = 300, H = 60;
    const points = data.map((v, i) => {
        const x = (i / (data.length - 1)) * W;
        const y = H - ((v - min) / range) * H;
        return `${x},${y}`;
    }).join(' ');
    const areaPoints = `0,${H} ${points} ${W},${H}`;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-full">
            <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={areaPoints} fill="url(#sparkGrad)" />
            <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
});

const REVENUE_DATA = [320, 480, 290, 610, 540, 780, 920, 680, 740, 1020, 890, 1150, 1300, 1120, 980, 1400, 1250, 1600, 1480, 1720, 1550, 1900, 2100, 1850, 2300, 2150, 2450, 2600, 2400, 2700];

const TRANSACTIONS = [
    { label: 'K-Rail Tracker MVP', amount: '+₹4,999', time: '2h ago', color: 'text-green-400', type: 'credit' },
    { label: 'Kerala Tourism UI Kit', amount: '+₹3,499', time: '1d ago', color: 'text-green-400', type: 'credit' },
    { label: 'Withdrawal to UPI', amount: '-₹5,000', time: '3d ago', color: 'text-red-400', type: 'debit' },
    { label: 'KTU Scraper License', amount: '+₹999', time: '5d ago', color: 'text-green-400', type: 'credit' },
];

const WithdrawPage = () => {
    const [method, setMethod] = useState('upi');
    const [upiId, setUpiId] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const balance = 24500;
    const maxAmount = balance;

    const isValid = method === 'upi'
        ? upiId.includes('@') && Number(amount) > 0 && Number(amount) <= maxAmount
        : accountNo.length >= 9 && ifsc.length === 11 && Number(amount) > 0 && Number(amount) <= maxAmount;

    const handleWithdraw = async () => {
        if (!isValid) return;
        setLoading(true);
        await new Promise(r => setTimeout(r, 2000));
        setLoading(false);
        setSuccess(true);
    };

    const handleReset = () => {
        setSuccess(false);
        setAmount('');
        setUpiId('');
        setAccountNo('');
        setIfsc('');
    };

    return (
        <div className="min-h-screen bg-[#070d1f] relative selection:bg-primary/20">
            <OptimizedCursorGlow />
            <div className="absolute top-[-10%] right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                <header className="mb-10">
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Financial Terminal</span>
                    <h1 className="text-5xl font-black font-headline text-white tracking-tighter">Withdraw</h1>
                    <p className="text-on-surface-variant opacity-60 mt-3">Cash out your earned balance from asset sales and event tickets.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column: Bento Tiles */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hero Balance Tile */}
                        <div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-60 mb-4">Available Balance</p>
                            <div className="flex items-end gap-4 mb-2">
                                <h2 className="text-7xl font-black font-headline text-white tracking-tighter" style={{ textShadow: '0 0 40px rgba(167,139,250,0.5)' }}>
                                    ₹{balance.toLocaleString('en-IN')}
                                </h2>
                                <div className="mb-3 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                                    <span className="material-symbols-outlined text-green-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                                    <span className="text-green-400 text-[10px] font-black">+18.4% this cycle</span>
                                </div>
                            </div>
                            <div className="flex gap-8 mt-2">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 mb-1">Pending</p>
                                    <p className="font-black text-on-surface-variant">₹3,200</p>
                                </div>
                                <div className="w-px bg-white/5" />
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 mb-1">Withdrawn</p>
                                    <p className="font-black text-on-surface-variant">₹5,000</p>
                                </div>
                                <div className="w-px bg-white/5" />
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 mb-1">Total Earned</p>
                                    <p className="font-black text-secondary">₹32,700</p>
                                </div>
                            </div>
                        </div>

                        {/* Sparkline Chart */}
                        <div className="glass-panel rounded-[2rem] p-8">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="font-black font-headline text-lg text-white">Revenue Stream</h3>
                                    <p className="text-[10px] text-on-surface-variant opacity-50 font-black uppercase tracking-widest mt-0.5">Last 30 Days</p>
                                </div>
                                <div className="flex gap-2">
                                    {['7D', '30D', '90D'].map((r, i) => (
                                        <button key={r} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${i === 1 ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-on-surface-variant hover:bg-white/10'}`}>{r}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="h-24 w-full"><Sparkline data={REVENUE_DATA} /></div>
                            <div className="flex justify-between mt-2 px-1">
                                <span className="text-[9px] text-on-surface-variant opacity-30 font-black">Mar 8</span>
                                <span className="text-[9px] text-on-surface-variant opacity-30 font-black">Apr 7</span>
                            </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="glass-panel rounded-[2rem] overflow-hidden">
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <h3 className="font-black font-headline text-lg text-white">Recent Transactions</h3>
                            </div>
                            <div className="divide-y divide-white/5">
                                {TRANSACTIONS.map((tx, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 hover:bg-white/2 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${tx.type === 'credit' ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                                                <span className={`material-symbols-outlined text-lg ${tx.type === 'credit' ? 'text-green-400' : 'text-red-400'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    {tx.type === 'credit' ? 'arrow_downward' : 'arrow_upward'}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white">{tx.label}</p>
                                                <p className="text-[10px] text-on-surface-variant opacity-50">{tx.time}</p>
                                            </div>
                                        </div>
                                        <span className={`font-black text-sm ${tx.color}`}>{tx.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Action Tile */}
                    <div className="lg:sticky lg:top-8">
                        {success ? (
                            <div className="glass-panel rounded-[2rem] p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="absolute w-1.5 h-1.5 rounded-full animate-bounce" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: ['#a78bfa','#c180ff','#ff6daf'][i % 3], animationDelay: `${Math.random()}s`, animationDuration: `${0.6 + Math.random()}s`, opacity: 0.8 }} />
                                    ))}
                                </div>
                                <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-6 relative z-10">
                                    <span className="material-symbols-outlined text-4xl text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping" />
                                </div>
                                <h3 className="text-2xl font-black font-headline text-white tracking-tighter mb-2 relative z-10">Withdrawal Initiated!</h3>
                                <p className="text-on-surface-variant opacity-70 text-sm leading-relaxed mb-6 relative z-10">₹{Number(amount).toLocaleString('en-IN')} will arrive in 1–2 business days.</p>
                                <button onClick={handleReset} className="glass-violet px-6 py-2.5 text-xs relative z-10">New Withdrawal</button>
                            </div>
                        ) : (
                            <div className="glass-panel rounded-[2rem] p-8 space-y-6">
                                <h3 className="font-black font-headline text-xl text-white">Withdraw Funds</h3>

                                {/* Method Toggle */}
                                <div className="flex p-1 bg-white/5 rounded-xl border border-white/5 gap-1">
                                    {[['upi', 'UPI ID'], ['bank', 'Bank Account']].map(([id, label]) => (
                                        <button key={id} onClick={() => setMethod(id)} className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${method === id ? 'bg-primary/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-white'}`}>{label}</button>
                                    ))}
                                </div>

                                {/* UPI */}
                                {method === 'upi' && (
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">UPI ID</label>
                                        <input value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-medium" />
                                    </div>
                                )}

                                {/* Bank */}
                                {method === 'bank' && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">Account Number</label>
                                            <input value={accountNo} onChange={e => setAccountNo(e.target.value)} placeholder="Enter account number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-medium" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">IFSC Code</label>
                                            <input value={ifsc} onChange={e => setIfsc(e.target.value.toUpperCase())} maxLength={11} placeholder="SBIN0001234" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-medium uppercase" />
                                        </div>
                                    </div>
                                )}

                                {/* Amount */}
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">Amount (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-black text-lg pointer-events-none">₹</span>
                                        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" min="1" max={maxAmount} placeholder="0" className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-black text-xl" />
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        {[1000, 5000, 10000, balance].map(q => (
                                            <button key={q} onClick={() => setAmount(String(Math.min(q, balance)))} className="flex-1 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[9px] font-black uppercase text-on-surface-variant hover:bg-white/10 transition-all">
                                                {q === balance ? 'Max' : `₹${(q/1000).toFixed(0)}K`}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={handleWithdraw} disabled={!isValid || loading} className="w-full py-4 bg-white text-[#070d1f] rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                                    {loading ? <><div className="w-5 h-5 border-2 border-[#070d1f]/20 border-t-[#070d1f] rounded-full animate-spin" />Processing...</> : <><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>Confirm Withdrawal</>}
                                </button>

                                <p className="text-center text-[9px] text-on-surface-variant opacity-40 font-black">Secured by CampusSphere Trust Protocol · 0% Fee</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawPage;
