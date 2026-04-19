async function getVerses() {
    const response = await fetch("data/verses.json");
    const verses = await response.json();

    let today = getToday();

    let dailyAddress = verses[today - 1]['address']
    let dailyVerse = verses[today - 1]['verse']

    updateDailyVerse(dailyAddress, dailyVerse);
}
getVerses();

function getToday() {
    const date = new Date();
    today = date.getDate();
    return today;
}
function updateDailyVerse(dailyAddress, dailyVerse) {
    const dailyAddressText = document.getElementById("address");
    const dailyVerseText = document.getElementById("verse");
    dailyAddressText.textContent = dailyAddress;
    dailyVerseText.textContent = dailyVerse;
}