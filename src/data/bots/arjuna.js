export const arjuna = {
    id: 'ARJUNA', name: 'ARJUNA', weight: '15 KG ROBO WARS', weapon: 'VERTICAL SPINNER', record: 'W: 0 / L: 2', status: 'COMBAT READY', active: true, image: "/images/ARJUNA_HERO.png", modelUrl: "/models/ARJUNA3DModel.glb",
    rotation: [0, 0, Math.PI / 2], scale: 1.0,
    tagline: "The flagship heavyweight competitor. Engineered for domination.",
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
};
