const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single";
const thumbsup = document.getElementById("thumbsup");
const thumbsdown = document.getElementById("thumbsdown");

let getjoke = () => {
    fetch(url).then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
    }
    btn.addEventListener("click",getjoke);
getjoke ();
getjoke ();
getjoke();
