export enum LAYOUT {
	headerHeight = 64,
	footerHeight = 64,
}
export const COLOR = {
	Gray100Alpha04: 'rgba(237,242,247,0.5)'
}

//================================
 type Asset = {
	credit: string,
	href: string
}
export const ASSETS: {[key: string]: Asset}  = {
	peopleOnBeach: {
		credit: 'Mykyta Martynenko',
		href: 'https://images.unsplash.com/photo-1690918573319-5836eb9445b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2613&q=80'
	},
	glassCrackPattern: {
		credit: 'Maddy Weiss',
		href: 'https://images.unsplash.com/photo-1690717433140-98ce4fcada36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
	},
	palmLeafPattern: {
		credit: 'Simone Pellegrini',
		href: 'https://images.unsplash.com/photo-1689937378981-95132afd939d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
	},
	blueLeafPattern: {
		credit: 'Eugene Golovesov',
		href: 'https://images.unsplash.com/photo-1690826423334-63337f2bf9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
	},
	poolWaterPattern: {
		credit: 'Josie Weiss',
		href: 'https://images.unsplash.com/photo-1685706981645-a182ad3fd3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
	},
	waterDropsOne: {
		credit: 'Limi change',
		href: 'https://images.unsplash.com/photo-1689770199208-27ad0337e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
	},
	lightHillsRolling: {
		credit: 'Jason Leung',
		href: 'https://images.unsplash.com/photo-1677448940100-9abd726fcc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
	},
}