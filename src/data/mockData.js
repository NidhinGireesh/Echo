export const events = [
    {
        id: 1,
        title: "Kerala Tech Edge 2026",
        college: "CET Trivandrum",
        date: "March 15, 2026",
        image: "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop",
        category: "Hackathon",
        tier: "Gold",
        price: "Free",
        location: "Trivandrum"
    },
    {
        id: 2,
        title: "Innovate Kerala Summit",
        college: "MEC Kochi",
        date: "April 2, 2026",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        category: "Conference",
        tier: "Silver",
        price: "₹199",
        location: "Kochi"
    },
    {
        id: 3,
        title: "AI & ML Workshop",
        college: "NIT Calicut",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        category: "Workshop",
        tier: "Free",
        price: "Free",
        location: "Calicut"
    }
];

export const projects = [
    {
        id: 1,
        title: "AI Powered Agro-Predictor",
        price: "₹4,999",
        rating: 4.8,
        reviews: 24,
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2048&auto=format&fit=crop",
        tags: ["React", "Python", "ML"],
        seller: "Arjun Das",
        college: "CET",
        category: "Machine Learning",
        featured: true,
        type: "Full Project"
    },
    {
        id: 2,
        title: "Modern SaaS UI Kit",
        price: "₹1,499",
        rating: 4.7,
        reviews: 18,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Figma", "React", "Tailwind"],
        seller: "Deepa Nair",
        college: "MEC",
        category: "UI Kit",
        featured: true,
        type: "Asset"
    },
    {
        id: 3,
        title: "Indian Road Traffic Dataset",
        price: "₹2,499",
        rating: 4.9,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1566616213894-2d4e1ad9531a?q=80&w=2070&auto=format&fit=crop",
        tags: ["CSV", "Images", "JSON"],
        seller: "Rahul K",
        college: "CUSAT",
        category: "ML Dataset",
        featured: true,
        type: "Asset"
    },
    {
        id: 4,
        title: "Paytm Gateway API Wrapper",
        price: "₹999",
        rating: 4.6,
        reviews: 15,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        tags: ["Node.js", "SDK", "API"],
        seller: "Aditya S",
        college: "TKM",
        category: "API Wrapper",
        featured: false,
        type: "Asset"
    }
];

export const users = [
    {
        id: "u1",
        name: "Arjun Das",
        role: "Student",
        techStack: ["React", "Python", "ML"],
        college: "CET Trivandrum",
        points: 4500,
        badges: ["Top Seller", "Bug Hunter"],
        proofOfWork: [
            { id: 1, title: "Agro-Predictor ML Model", type: "ML Model", verified: true },
            { id: 2, title: "Freelance E-commerce UI", type: "Design", verified: true }
        ]
    },
    {
        id: "u2",
        name: "Deepa Nair",
        role: "Campus Ambassador",
        techStack: ["UI/UX", "Product Design"],
        college: "Model Engineering College",
        points: 8200,
        badges: ["Silver Ambassador", "Design Guru"],
        proofOfWork: [
            { id: 3, title: "SaaS UI Kit", type: "Asset", verified: true },
            { id: 4, title: "Organized Innovate Kerala", type: "Event", verified: true }
        ]
    }
];

export const leaderboard = [
    { rank: 1, name: "College of Engineering, Trivandrum", points: 12450, district: "Trivandrum", students: "5000+" },
    { rank: 2, name: "Model Engineering College, Kochi", points: 11200, district: "Ernakulam", students: "3500+" },
    { rank: 3, name: "National Institute of Technology, Calicut", points: 10850, district: "Kozhikode", students: "4500+" },
    { rank: 4, name: "TKM College of Engineering, Kollam", points: 9400, district: "Kollam", students: "4000+" },
    { rank: 5, name: "Government Engineering College, Thrissur", points: 8900, district: "Thrissur", students: "3800+" }
];

