const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

    // Get random fact from API
const getRandomFact = async () => {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('fact').innerHTML = data.text;
}

    // Call function to get random fact
getRandomFact();

    // Set interval to change fact every 24 hours
setInterval(getRandomFact, 86400000);