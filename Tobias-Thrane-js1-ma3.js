//question 1
(a, b) => a - b;

console.log((10, 5))

//question 2

const url = "https://api.rawg.io/api/games?genres=sports";

async function getGame() {
    const res = await fetch(url);
    const results = await res.json();
    
    getName(results.results);
}

getGame();

function getName(results) {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
    }
}

// question 3

let a = 'These cats are outrageous.'
let b = a.replace("cats", "giraffes");

console.log(b);

//question 4

function get(){
    let url1 = 'https://my.site.com?userId=7';
    let id = url1.substring(url1.lastIndexOf('=') + 1);

    if (id = '') {
      url1 = 'third.html'
    } else if (id < 10) {
      url1 = 'first.html'
    } else {
      url1 = 'second.html'
    }
    
    console.log(url1);
}

get();

// question 5

function remove(details) {

    const container = document.querySelector(".container");
    const select = document.querySelector(".btn");
    container.removeChild(select)
}

remove();

// question 6

const animals = document.querySelector(".animals");
console.log(animals);

const animals = document.querySelector(".animals");
console.log(animals);

function go() {

    const wosh = document.querySelector(".animals");
    const andThen = document.querySelector(".elephants");
    wosh.removeChild(andThen);

    const makeLi = document.createElement("li");
    makeLi.className = "parrots";
    const makeText = document.createTextNode("Parrots");
    makeLi.appendChild(makeText);
    animals.appendChild(makeLi);
    console.log(makeLi);

    const makeLi2 = document.createElement("li");
    makeLi2.className = "elephants";
    const makeText2 = document.createTextNode("Elephants");
    makeLi2.appendChild(makeText2);
    animals.appendChild(makeLi2);
    console.log(makeLi2);
}

go();
// <h1></h1>

//question 7 

const theUrl = "https://api.rawg.io/api/games/3801"

async function getRating() {
    try {
        const response = await fetch(theUrl);
        const json = await response.json();

        const flyBy = document.querySelector(".rating")
        let html = "";
        html += `${json.rating}`
        console.log(json.rating);
        console.log(html);
        flyBy.innerHTML = html;
    }
    catch(error) {
        console.log(error);
    }
    finally {
        console.log("Done");
    }

    
}

getRating();