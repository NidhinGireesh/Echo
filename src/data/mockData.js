export const events = [
    {
        id: 1,
        title: "Tathva '26",
        college: "NIT Calicut",
        date: "October 24, 2026",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
        category: "Tech Fest",
        tier: "Gold",
        price: "Free",
        location: "Kozhikode"
    },
    {
        id: 2,
        title: "Drishti 2026",
        college: "CET Trivandrum",
        date: "November 12, 2026",
        image: "/assets/drishti.png",
        category: "Symposium",
        tier: "Silver",
        price: "₹299",
        location: "Trivandrum"
    },
    {
        id: 3,
        title: "Excel Hackathon",
        college: "MEC Kochi",
        date: "September 15, 2026",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        category: "Hackathon",
        tier: "Free",
        price: "Free",
        location: "Kochi"
    },
    {
        id: 4,
        title: "Hestia '26",
        college: "TKM CE Kollam",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
        category: "Cultural",
        tier: "Silver",
        price: "₹150",
        location: "Kollam"
    }
];

export const projects = [
    {
        id: 1,
        title: "K-Rail Realtime Tracker",
        price: "₹2,999",
        rating: 4.8,
        reviews: 32,
        image: "/assets/krail.png",
        tags: ["React", "Firebase", "Maps"],
        seller: "Abhishek v",
        college: "CET",
        category: "Full Project",
        featured: true,
        type: "Full Project"
    },
    {
        id: 2,
        title: "Kerala Tourism UI Kit",
        price: "₹1,499",
        rating: 4.9,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
        tags: ["Figma", "Tailwind", "UI"],
        seller: "Kavya Nair",
        college: "MEC",
        category: "UI Kit",
        featured: true,
        type: "Asset"
    },
    {
        id: 3,
        title: "Malayalam NLP Dataset",
        price: "₹3,499",
        rating: 4.9,
        reviews: 62,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        tags: ["CSV", "NLP", "Python"],
        seller: "Rahul Krishnan",
        college: "CUSAT",
        category: "ML Dataset",
        featured: true,
        type: "Asset"
    },
    {
        id: 4,
        title: "KTU Result Scraper API",
        price: "₹999",
        rating: 4.5,
        reviews: 85,
        image: "/assets/ktu.png",
        tags: ["Node.js", "Cheerio", "API"],
        seller: "Mohammed Shafi",
        college: "TKM",
        category: "API Wrapper",
        featured: false,
        type: "Asset"
    }
];

export const users = [
    {
        id: "u1",
        name: "Abhishek V",
        role: "Student",
        avatar: "https://i.pravatar.cc/150?u=u1",
        techStack: ["React", "Python", "ML"],
        college: "CET Trivandrum",
        points: 4500,
        rank: 1,
        credits: 12500,
        level: 42,
        badges: ["Top Seller", "Bug Hunter"],
        proofOfWork: [
            { id: 1, title: "K-Rail Tracker MVP", type: "Web App", verified: true },
            { id: 2, title: "Tathva Website 2025", type: "Open Source", verified: true }
        ]
    },
    {
        id: "u2",
        name: "Kavya Nair",
        role: "Campus Ambassador",
        avatar: "https://i.pravatar.cc/150?u=u2",
        techStack: ["UI/UX", "Product Design"],
        college: "Model Engineering College",
        points: 8200,
        badges: ["Silver Ambassador", "Design Guru"],
        proofOfWork: [
            { id: 3, title: "Kerala Tourism UI Kit", type: "Asset", verified: true },
            { id: 4, title: "Organized Excel 2025", type: "Event", verified: true }
        ]
    }
];

export const leaderboard = [
    { rank: 1, name: "College of Engineering, Trivandrum (CET)", points: 24500, district: "Trivandrum", students: "5000+" },
    { rank: 2, name: "Model Engineering College (MEC)", points: 21200, district: "Ernakulam", students: "3500+" },
    { rank: 3, name: "National Institute of Technology (NITC)", points: 19850, district: "Kozhikode", students: "4500+" },
    { rank: 4, name: "Cochin University (CUSAT)", points: 18400, district: "Ernakulam", students: "6000+" },
    { rank: 5, name: "TKM College of Engineering", points: 16900, district: "Kollam", students: "4000+" }
];

export const gamingData = {
    tournaments: [
        { id: 1, title: "Inter-College Valorant Cup", prize: "₹50,000", date: "Oct 28", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
        { id: 2, title: "BGMI Campus Championship", prize: "₹1,00,000", date: "Nov 05", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" }
    ],
    lfg: [
        { id: 1, user: "Kiran P", game: "Valorant", rank: "Platinum", message: "Need a Controller for Sree Chitra CET Squad." },
        { id: 2, user: "Rahul M", game: "BGMI", rank: "Ace", message: "Pushing rank, need consistent teammates from TKM." }
    ],
    leaderboard: [
        { rank: 1, college: "CET Trivandrum", points: 2840, logo: "CET" },
        { rank: 2, college: "TKMCE Kollam", points: 2650, logo: "TKM" },
        { rank: 3, college: "MEC Kochi", points: 2400, logo: "MEC" }
    ]
};

export const stemData = {
    hardwareExchange: [
        { id: 1, item: "ESP32 + Relay Board", price: "₹300", type: "Trade", desc: "Used for Smart LPG project, perfect condition." },
        { id: 2, item: "Raspberry Pi 4 (4GB)", price: "₹4,500", type: "Sale", desc: "Imported, barely used. Contact if interested." }
    ],
    researchPartners: [
        { id: 1, topic: "AI in Agriculture", college: "TKMCE", seekers: 2, deadline: "Nov 15" },
        { id: 2, topic: "Blockchain for Voting", college: "GEC Thrissur", seekers: 1, deadline: "Dec 01" }
    ],
    innovationShowcase: [
        { id: 1, title: "Self-Driving Delivery Bot", team: "Team Autonomous BVM", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" }
    ]
};

export const creativeData = {
    portfolios: [
        { id: 1, title: "Futuristic Kalajadha Poster", category: "Graphic Design", author: "Anjali S", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
        { id: 2, title: "CampusSphere UI Concept", category: "UI/UX", author: "Arjun K", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop" },
        { id: 3, title: "Nish Techfest Teaser", category: "Video Editing", author: "Siddharth V", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop" }
    ],
    bounties: [
        { id: 1, task: "Futuristic Timeline Poster", reward: "₹500", organizer: "College Union" },
        { id: 2, task: "Logo for IEEE SB", reward: "₹300", organizer: "IEEE Student Branch" }
    ]
};

export const lifestyleData = {
    communityDrives: [
        { id: 1, title: "NSS Unit 136 - Beach Clean-Up", date: "Sunday, 7 AM", location: "Shangumugham Beach", attendees: 45 },
        { id: 2, title: "Blood Donation Camp", date: "Oct 30, 10 AM", location: "Main Block Auditorium", attendees: 120 }
    ],
    megaEvents: [
        { id: 1, title: "Aaravam '26 - Arts Fest", date: "Nov 12-15", focus: "Cultural Procession", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" }
    ],
    discussionFeed: [
        { id: 1, topic: "Best PG Near TKMCE?", author: "Deepak J", replies: 12, time: "2h ago" },
        { id: 2, topic: "Textbook Exchange: S5 Mech", author: "Meera R", replies: 5, time: "4h ago" }
    ]
};

