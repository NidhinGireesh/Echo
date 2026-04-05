export const events = [
    {
        id: 1,
        title: "Tathva '26",
        college: "NIT Calicut",
        date: "October 24, 2026",
        image: "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2048&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1566616213894-2d4e1ad9531a?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
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
