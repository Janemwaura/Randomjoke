const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist&type=single";


let getjoke = () => {
    fetch(url).then(data => data.json())
    .then(item => console.log(item));
}
getjoke ();
getjoke ();
