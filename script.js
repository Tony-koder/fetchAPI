const pocketMonster = document.querySelector('.pocket_monster');
//I've tried to do this in multiple ways. This is the actual code I was using, but for some reason all I got was 'Undefined' on the actual page, and nothing in the console log. So what's below will have to do for now. I am at my wits end
// function getPokemon() {
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//      .then((response) => response.json())
//      .then((data) => {pocketMonster.innerHTML='';
//      const newActivity = document.createElement('p');
//      newActivity.innerText = data.activity;
//      pocketMonster.appendChild(newActivity);
//     })
//      .catch((error) => console.log(error))
// }

function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex].text;

            const newQuote = document.createElement("p");
            newQuote.innerText = randomQuote;

            pocketMonster.innerHTML = "";
            pocketMonster.appendChild(newQuote);
        } else {
            console.error("No quotes found in the API response");
        }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
getQuote()