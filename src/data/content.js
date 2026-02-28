export const SITE_CONTENT = {
    hero: {
        preTitle: "DJS ✦ ASTRA",
        headline: "BUILT TO DESTROY.",
        subHeadline: "Combat Robotics. Engineered for War.",
        stats: [
            { metric: '07', label: 'ACTIVE BOTS' },
            { metric: '3', label: 'COMPETITION WINS' },
            { metric: '2019', label: 'SINCE' },
            { metric: 'MUMBAI', label: 'DJS —' }
        ],
        aboutTitle: "ARCHITECTS\nOF VICTORY.",
        aboutText: "We design, build, and deploy 13.6KG to 100KG combat robots for national and international arenas. Blending precision mechanical engineering with brutal kinetic energy, we push the limits of combat robotics.",
        featuredBot: {
            name: "ASTRA X",
            class: "HEAVYWEIGHT",
            weapon: "VERTICAL SPINNER",
            status: "COMBAT READY",
            image: "/images/home-featured-bot.jpg" // Place your image in public/images/
        }
    },
    bots: {
        heroTitle: "OUR ARSENAL",
        heroSubtitle: "Every bot engineered to dominate the arena.",
        list: [
            { name: 'ASTRA X', weight: 'HEAVYWEIGHT — 100KG', weapon: 'VERTICAL SPINNER', record: 'W: 8 / L: 2', status: 'COMBAT READY', active: true, image: "/images/bot-astra-x.jpg" },
            { name: 'OBLIVION', weight: 'MIDDLEWEIGHT — 50KG', weapon: 'DRUM SPINNER', record: 'W: 12 / L: 1', status: 'COMBAT READY', active: true, image: "/images/bot-oblivion.jpg" },
            { name: 'APEX', weight: 'FEATHERWEIGHT — 13.6KG', weapon: 'HATCHET', record: 'W: 5 / L: 4', status: 'IN BUILD', active: false, image: "/images/bot-apex.jpg" },
            { name: 'NEMESIS', weight: 'MIDDLEWEIGHT — 50KG', weapon: 'FLIPPER', record: 'W: 20 / L: 5', status: 'RETIRED', active: false, image: "/images/bot-nemesis.jpg" },
        ]
    },
    team: {
        heroTitle: "THE ENGINEERS",
        leadership: [
            { name: 'Yash Parab', role: 'CAPTAIN / MECHANICAL', year: 'BE MECH - 2024', image: "/images/team-karan.jpg" },
            { name: 'Khushagra Bhorse', role: 'MANAGER / ELECTRONICS', year: 'BE EXTC - 2024', image: "/images/team-riya.jpg" },
        ],
        members: [
            { name: 'Aarav Patel', role: 'LEAD MECHANICAL ENGINEER', year: 'TE MECH', image: "/images/team-aarav.jpg" },
            { name: 'Nisha Gupta', role: 'WEAPON SYSTEMS', year: 'TE MECH', image: "/images/team-nisha.jpg" },
            { name: 'Vikram Singh', role: 'DRIVE CONFIGURATION', year: 'TE EXTC', image: "/images/team-vikram.jpg" },
            { name: 'Sneha Reddy', role: 'SOFTWARE / AI', year: 'TE COMP', image: "/images/team-sneha.jpg" },
            { name: 'Rohan Desai', role: 'ARMOR SPECIALIST', year: 'SE MECH', image: "/images/team-rohan.jpg" },
            { name: 'Pooja Iyer', role: 'BATTERY MANAGEMENT', year: 'SE EXTC', image: "/images/team-pooja.jpg" },
            { name: 'Arjun Das', role: 'FABRICATION', year: 'SE MECH', image: "/images/team-arjun.jpg" },
            { name: 'Adish Shah', role: 'LOGISTICS & STRATEGY', year: 'TE PROD', image: "/images/team-kabir.jpg" },
        ]
    },
    competitions: {
        heroTitle: "BATTLE RECORD",
        timeline: [
            { year: '2023', event: 'RoboWars National', location: 'Mumbai, India', result: 'WON', isWin: true },
            { year: '2022', event: 'Techfest Battle', location: 'IIT Bombay', result: 'RUNNER-UP', isWin: false },
            { year: '2021', event: 'Combat League', location: 'Pune, India', result: 'WON', isWin: true },
            { year: '2019', event: 'First Blood', location: 'Delhi, India', result: 'PARTICIPATED', isWin: false },
        ],
        trophies: [
            { name: 'National Champion', year: '2023', icon: '🏆' },
            { name: 'Best Engineering', year: '2022', icon: '⚙️' },
            { name: 'Most Destructive', year: '2021', icon: '🔥' },
        ]
    },
    contact: {
        heroTitle: "JOIN ASTRA",
        pitchTitle: "FORGE THE\nFUTURE OF\nCOMBAT",
        bullets: ['Work on 100KG combat robots', 'Hands-on practical engineering', 'Compete on international stages'],
        openings: [
            "CAD DESIGNER",
            "MECHATRONICS LEAD",
            "POWER ELECTRONICS"
        ],
        social: [
            { label: 'INSTAGRAM', url: '#instagram' },
            { label: 'LINKEDIN', url: '#linkedin' },
            { label: 'GITHUB', url: '#github' }
        ]
    }
};
