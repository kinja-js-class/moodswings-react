export function updateMood (moodValue) {
	return {
		type: 'UPDATE_MOOD',
		moodValue
	}
}

export function saveCurrentMood (currentMoodValue) {
	return {
		type: 'SAVE_CURRENT_MOOD',
		currentMoodValue
	}
}

