export const angad = {
    id: 'ANGAD', name: 'ANGAD', weight: 'SUMO & SORCER', weapon: 'WEDGE', record: 'W: 5 / L: 2', wins: 5, losses: 2, status: 'COMBAT READY', active: true, image: "/images/ANGAD_Hero.png", modelUrl: "/models/Angad3DModel.glb",
    tagline: "Unstoppable force meets immovable wedge.",
    weaponType: "DEFLECTIVE PLOW",
    armor: "Aluminium 6061",
    drive: "High Traction 2WD",
    details: {
        model: "SM-III",
        description: "A highly resilient sumo bot featuring an aggressive wedge design to control the arena.",
        specs: [
            { label: 'Class', value: 'SUMO & SORCER' },
            { label: 'Weapon System', value: 'Wedge' },
            { label: 'Drive Train', value: 'High Traction 2WD' },
            { label: 'Armor Composition', value: 'Aluminium 6061' }
        ],
        history: [
            { year: '2025', event: 'Father Agnel - RoboRift', result: '8th', medal: '', description: '8th / 32 bots.', isWin: false },
            { year: '2025', event: 'Pune Symbosis - Kurukshetra', result: '5th', medal: '', description: '5th - 2W 1L.', isWin: false },
            { year: '2025', event: 'Goa - Quark', result: '2nd', medal: '', description: '1W 1L.', isWin: false }
        ],
        components: [
            { title: 'Frontal Wedge', description: 'Precision-machined steel wedge for getting under opponents.', image: '/images/AngadWedge.png' },
            { title: 'Traction Drive', description: 'Custom cast silicone wheels for maximum arena grip.', image: '/images/AngadDrive.png' }
        ]
    }
};
