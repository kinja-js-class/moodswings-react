// We are using firedux as prop and let it magic do the tricks
export function updateposition (position) {
	return {
		type: 'UPDATE_position',
		position: position
	}
}

export function youAreLost() {
	return {
		type: 'UNKNOWN_position'
	}
}	
