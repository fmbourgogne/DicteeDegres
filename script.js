const notesDisplay = document.getElementById('notesDisplay');
const keys = document.querySelectorAll('.key');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const noteFrequencies = {
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25
};

const noteHeights = {
    'C4': 0,
    'D4': 20,
    'E4': 40,
    'F4': 50,
    'G4': 70,
    'A4': 90,
    'B4': 110,
    'C5': 120
};

let notePositionX = 0;

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        playSound(noteFrequencies[note]);
        displayNoteBlock(note);
    });
});

function playSound(frequency) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 2);
    oscillator.stop(audioContext.currentTime + 2);
}

function displayNoteBlock(note) {
    const noteBlock = document.createElement('div');
    noteBlock.className = 'note-block';
    noteBlock.style.left = notePositionX + 'vw';
    noteBlock.style.bottom = noteHeights[note] + 'px';
    notesDisplay.appendChild(noteBlock);

    notePositionX += 10;

    if (notePositionX > notesDisplay.clientWidth) {
        notePositionX = 0;
        const oldNotes = document.querySelectorAll('.note-block');
        oldNotes.forEach(oldNote => notesDisplay.removeChild(oldNote));
    }
}
