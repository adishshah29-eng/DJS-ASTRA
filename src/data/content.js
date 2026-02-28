export const SITE_CONTENT = {
    hero: {
        preTitle: "DJS ✦ ASTRA",
        headline: "BUILT TO DESTROY.",
        subHeadline: "Combat Robotics. Engineered for War.",
        stats: [
            { metric: '03', label: 'ACTIVE BOTS' },
            { metric: '0', label: 'COMPETITION WINS' },
            { metric: '2022', label: 'SINCE' },
            { metric: 'MUMBAI', label: 'DJ SANGHVI COLLEGE OF ENGINEERING' }
        ],
        aboutTitle: "FOUNDER.",
        aboutText: "DJS-ASTRA founded in year 2022 by SHUBHAM MEHTA.",
        featuredBot: {
            name: "ARJUNA",
            class: "15 KG ROBO WARS",
            weapon: "VERTICAL SPINNER",
            status: "COMBAT READY",
            image: "/images/ARJUNA_HERO.png"
        }
    },
    bots: {
        heroTitle: "OUR ARSENAL",
        heroSubtitle: "Every bot engineered to dominate the arena.",
        list: [
            {
                id: 'ARJUNA', name: 'ARJUNA', weight: '15 KG ROBO WARS', weapon: 'VERTICAL SPINNER', record: 'W: 0 / L: 2', status: 'COMBAT READY', active: true, image: "/images/ARJUNA_HERO.png",
                details: {
                    model: "MK-IV",
                    description: "The flagship heavyweight competitor. Engineered for maximum kinetic energy transfer and structural resilience in the arena.",
                    specs: [
                        { label: 'Class', value: '15 KG ROBO WARS' },
                        { label: 'Weight', value: '15kg' },
                        { label: 'Weapon System', value: 'Vertical Spinner' },
                        { label: 'Drive Train', value: 'Dual Brushless' },
                        { label: 'Armor Composition', value: 'ALUMINIUM 6061' },
                        { label: 'Top Speed', value: '22 mph' }
                    ],
                    history: [
                        { year: 'January 2026', event: 'Kurukshetra (Pune)', result: 'Participated', medal: '', description: 'Arjuna made its debut at Kurukshetra (Pune) in February 2026, marking the teams first foray into competitive combat robotics.', isWin: false },
                        { year: 'February 2026', event: 'BITS GOA', result: 'Elimination Round', medal: '', description: 'Sustained critical drive damage in match 1 against "PRIXX". Repaired and ready for next season.', isWin: false }
                    ],
                    components: [
                        { title: 'Propulsion', description: 'Custom wound brushless outrunners providing 12HP peak output.', image: '/images/astra-propulsion.jpg' },
                        { title: 'Weapon Disk', description: 'AR500 steel single-tooth disk spinning at 250mph tip speed.', image: '/images/astra-weapon.jpg' },
                        { title: 'Control Unit', description: 'Dual redundant receivers with telemetry feedback loop.', image: '/images/astra-control.jpg' }
                    ]
                }
            },
            {
                id: 'RAUDRA', name: 'RAUDRA', weight: '15 KG ROBO WARS', weapon: 'DRUM SPINNER', record: 'W: 1 / L: 0', status: 'RETIRED', active: false, image: "/images/bot-nemesis.jpg",
                details: { model: "", description: "", specs: [], history: [], components: [] }
            },
            {
                id: 'KARNA', name: 'KARNA', weight: '8 KG ROBO WARS', weapon: 'DRUM SPINNER', record: 'W: 0 / L: 0', status: 'IN BUILD', active: false, image: "/images/bot-oblivion.jpg",
                details: { model: "", description: "", specs: [], history: [], components: [] }
            },
            {
                id: 'ABHIMANYU', name: 'ABHIMANYU', weight: 'BEATLE WEIGHT', weapon: 'VERTICAL SPINNER', record: 'W: 0 / L: 0', status: 'IN BUILD', active: false, image: "/images/bot-apex.jpg",
                details: { model: "", description: "", specs: [], history: [], components: [] }
            },
            {
                id: 'ANGAD', name: 'ANGAD', weight: 'SUMO & SORCER', weapon: 'WEDGE', record: 'W: 5 / L: 2', status: 'COMBAT READY', active: true, image: "/images/bot-nemesis.jpg",
                details: { model: "", description: "", specs: [], history: [], components: [] }
            },
        ]
    },
    team: {
        heroTitle: "TEAM ASTRA",
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
        bullets: ['Work on combat robots', 'Hands-on practical engineering', 'Compete on national stages'],
        openings: [
            "CAD DESIGNER",
            "ELECTRONICS",
            "CREATIVES",
            "MARKETING",
            "MANAGEMENT"
        ],
        social: [
            { label: 'INSTAGRAM', url: 'https://www.instagram.com/djs.astra/' },
            { label: 'LINKEDIN', url: 'https://www.linkedin.com/company/djs-astra/' },
        ]
    }
};
