// script.js
const scouseInput = document.getElementById('scouse-input');
const translateBtn = document.getElementById('translate-btn');
const phrasesList = document.getElementById('phrases-list');
const resultDiv = document.getElementById('result');

// List of Scouse phrases and their translations
const scousePhrases = [
    { scouse: "Ey up!", english: "Hello!" },
    { scouse: "Alrigh'?", english: "Alright?" },
    { scouse: "Ginnel", english: "Alleyway" },
    { scouse: "Mam", english: "Mom" },
    { scouse: "Dad", english: "Dad" },
    // New phrases added
    { scouse: "Go 'ed", english: "Go ahead" },
    { scouse: "Sound", english: "Great" },
    { scouse: "Boss", english: "Excellent" },
    { scouse: "Wool", english: "Non-Scouser" },
    { scouse: "Devoed", english: "Devastated" },
    { scouse: "Jarg", english: "Fake" },
    { scouse: "Scran", english: "Food" },
    { scouse: "Bevvie", english: "Beer" },
    { scouse: "Bizzies", english: "Police" },
    { scouse: "Ozzy", english: "Hospital" },
    { scouse: "Lolly ice", english: "Ice lolly" },
    { scouse: "Swerve", english: "Avoid" },
    { scouse: "Chocka", english: "Very busy" },
    { scouse: "Antwacky", english: "Old-fashioned" },
    { scouse: "Baltic", english: "Very cold" },
];

// Function to populate the phrases list
const populatePhrasesList = () => {
    scousePhrases.forEach((phrase) => {
        const li = document.createElement('li');
        li.className = 'phrase';
        li.textContent = phrase.scouse;
        phrasesList.appendChild(li);
    });
}

// Populate the phrases list when the page loads
populatePhrasesList();

// Event listener for the translate button
translateBtn.addEventListener('click', () => {
    const scousePhrase = scouseInput.value.trim();
    
    if (scousePhrase) {
        const foundPhrase = scousePhrases.find(phrase => phrase.scouse.toLowerCase() === scousePhrase.toLowerCase());
        
        if (foundPhrase) {
            resultDiv.textContent = `English Translation: ${foundPhrase.english}`;
        } else {
            resultDiv.textContent = "Sorry, couldn't find that phrase.";
        }
    } else {
        resultDiv.textContent = "Please enter a Scouse phrase.";
    }
});
