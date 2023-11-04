const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single";
const thumbUp = document.querySelectorAll('.post-ratings')[0];
const thumbDown = document.querySelectorAll('.post-ratings')[1];

const thumbUpCount = thumbUp.querySelector('.post-rating-count');
const thumbDownCount = thumbDown.querySelector('.post-rating-count');

//event listener
thumbUp.addEventListener('click', () => {
    // Get the current count and increment it
    let count = parseInt(thumbUpCount.textContent);
    count++;
    
    // Update the count for thumb up
    thumbUpCount.textContent = count;
});

// event listener 
thumbDown.addEventListener('click', () => {
    // Get the current count and increment it
    let count = parseInt(thumbDownCount.textContent);
    count++;
    
    // Update the count for thumb down
    thumbDownCount.textContent = count;
});
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


