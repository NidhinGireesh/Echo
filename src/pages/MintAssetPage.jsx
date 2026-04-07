import React, { useState, useRef, useCallback } from 'react';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const TAGS = ['React', 'Vue', 'Python', 'Node.js', 'Figma', 'TailwindCSS', 'Firebase', 'TypeScript', 'Flutter', 'ML'];

const TagButton = React.memo(({ tag, isSelected, onClick }) => (
    <button
        onClick={() => onClick(tag)}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${isSelected ? 'bg-primary/20 text-primary border border-primary/40' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10'}`}
    >
        {tag}
    </button>
));

const CategoryButton = React.memo(({ cat, isSelected, onClick }) => (
    <button
        onClick={() => onClick(cat)}
        className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isSelected ? 'glass-violet glass-violet-active' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10'}`}
    >
        {cat}
    </button>
));

const LiveCard = React.memo(({ title, price, tags, category, isDragging }) => (
    <div className={`glass-panel rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 ${isDragging ? 'ring-2 ring-primary/60 scale-[1.02]' : ''}`}>
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] to-transparent opacity-60" />
            <span className="material-symbols-outlined text-6xl opacity-20 text-primary">inventory_2</span>
            {category && (
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#070d1f]/60 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest border border-white/10">{category}</span>
                </div>
            )}
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-black text-lg text-white font-headline tracking-tighter leading-tight max-w-[70%]">
                    {title || <span className="text-white/20">Your Asset Title</span>}
                </h3>
                <span className="font-black text-primary text-lg">₹{price}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
                {tags.length > 0 ? tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest bg-white/5 border border-white/10 rounded-md px-2 py-1 text-primary">{tag}</span>
                )) : (
                    <span className="text-[10px] text-white/20">Tags will appear here</span>
                )}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">You</span>
                </div>
                <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">shopping_cart</span>
                </button>
            </div>
        </div>
    </div>
));

const MintAssetPage = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(299);
    const [selectedTags, setSelectedTags] = useState([]);
    const [category, setCategory] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const dropRef = useRef(null);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        // Force Lenis to recalculate height after components mount
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }, []);

    const toggleTag = useCallback((tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : prev.length < 5 ? [...prev, tag] : prev
        );
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) setUploadedFile(file);
    }, []);

    const handleMint = async () => {
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1800));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070d1f]">
                <div className="glass-panel p-16 rounded-[3rem] text-center max-w-md mx-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 pointer-events-none" />
                    <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-8 relative">
                        <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
                    </div>
                    <h2 className="text-4xl font-black font-headline text-white tracking-tighter mb-3">Asset Minted!</h2>
                    <p className="text-on-surface-variant opacity-70 mb-8">Your asset is live on the marketplace and ready for acquisition.</p>
                    <button onClick={() => setSubmitted(false)} className="glass-violet px-8 py-3 text-xs">Mint Another</button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative selection:bg-primary/20 pb-24">
            <OptimizedCursorGlow />
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: '-3s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <header className="mb-12">
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Creator Studio</span>
                    <h1 className="text-5xl font-black font-headline text-white tracking-tighter">Mint Your Asset</h1>
                    <p className="text-on-surface-variant opacity-60 mt-3 max-w-xl">Upload your digital artifact and make it available to the campus ecosystem.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Input Panel */}
                    <div className="space-y-6">
                        {/* Drop Zone */}
                        <div
                            ref={dropRef}
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={handleDrop}
                            className={`relative rounded-[2rem] border-2 border-dashed transition-all duration-300 p-12 text-center cursor-pointer ${isDragging ? 'border-primary/80 bg-primary/10' : 'border-white/20 hover:border-white/40 bg-white/5'}`}
                        >
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={e => setUploadedFile(e.target.files[0])} />
                            {uploadedFile ? (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <span className="material-symbols-outlined text-primary text-3xl">folder_zip</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-white">{uploadedFile.name}</p>
                                        <p className="text-on-surface-variant text-sm opacity-60">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                    <button onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }} className="text-[10px] text-tertiary font-black uppercase tracking-widest hover:underline">Remove</button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-4 pointer-events-none">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${isDragging ? 'bg-primary/20 border-primary/40' : 'bg-white/5 border-white/10'}`}>
                                        <span className={`material-symbols-outlined text-3xl transition-colors ${isDragging ? 'text-primary' : 'text-white/40'}`}>cloud_upload</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-white mb-1">{isDragging ? 'Drop it!' : 'Drag & Drop your asset'}</p>
                                        <p className="text-on-surface-variant text-sm opacity-60">ZIP, PDF, Figma, Dataset — up to 100MB</p>
                                    </div>
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/60">Browse Files</span>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <div className="glass-panel rounded-[1.5rem] p-6 space-y-5">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">Asset Title</label>
                                <input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="e.g. Kerala Tourism UI Kit"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors font-medium"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">Category</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['UI Kit', 'Full Project', 'ML Dataset', 'API Wrapper', 'Template', 'Other'].map(cat => (
                                        <CategoryButton
                                            key={cat}
                                            cat={cat}
                                            isSelected={category === cat}
                                            onClick={(c) => setCategory(c === category ? '' : c)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 block">Tech Stack <span className="opacity-50">(max 5)</span></label>
                                <div className="flex flex-wrap gap-2">
                                    {TAGS.map(tag => (
                                        <TagButton
                                            key={tag}
                                            tag={tag}
                                            isSelected={selectedTags.includes(tag)}
                                            onClick={toggleTag}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Price Section: Direct Input + Slider */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-70 block">
                                    Listing Price
                                </label>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-black text-lg pointer-events-none transition-transform group-focus-within:scale-110">₹</span>
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={e => {
                                                const val = parseInt(e.target.value);
                                                setPrice(isNaN(val) ? 0 : Math.min(9999, Math.max(0, val)));
                                            }}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-4 text-white font-black text-2xl focus:outline-none focus:border-primary/50 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="0"
                                        />
                                        {price === 0 && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-primary font-black uppercase tracking-widest">Free</span>}
                                    </div>
                                    
                                    <div className="flex flex-col justify-center gap-2">
                                        <input
                                            type="range" min="0" max="9999" step="50"
                                            value={price}
                                            onChange={e => setPrice(Number(e.target.value))}
                                            className="w-full accent-primary cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[8px] text-on-surface-variant opacity-40 font-black uppercase tracking-tighter">
                                            <span>Min (Free)</span>
                                            <span>Max (₹9,999)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {[99, 299, 499, 999, 1999].map(p => (
                                        <button 
                                            key={p} 
                                            onClick={() => setPrice(p)}
                                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${price === p ? 'bg-primary text-[#070d1f]' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-primary/20 hover:text-primary'}`}
                                        >
                                            ₹{p}
                                        </button>
                                    ))}
                                    <button onClick={() => setPrice(0)} className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${price === 0 ? 'bg-secondary text-[#070d1f]' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-secondary/20 hover:text-secondary'}`}>FREE</button>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleMint}
                            disabled={isSubmitting || !title}
                            className="w-full py-4 glass-violet text-sm flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />Minting...</>
                            ) : (
                                <><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>Mint to Marketplace</>
                            )}
                        </button>
                    </div>

                    {/* Right: Live Preview */}
                    <div className="lg:sticky lg:top-8">
                        <div className="mb-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-60">Live Preview</span>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(167,139,250,1)]" />
                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">Updating in real-time</span>
                            </div>
                        </div>
                        <LiveCard title={title} price={price} tags={selectedTags} category={category} isDragging={isDragging} />
                        <div className="mt-4 glass-panel rounded-2xl p-4 text-center">
                            <p className="text-[10px] text-on-surface-variant opacity-60 font-black uppercase tracking-widest">This is exactly how buyers will see your artifact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MintAssetPage;
