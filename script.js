const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const res = await fetch(
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist"
  );

  const data = await res.json();
  console.log(data);
  console.log(data.joke);
  console.log(data.delivery);
  
  if (data.joke == undefined) {
    var joke = data.delivery;
  } else {
    var joke = data.joke;
  }
  jokeText.innerHTML = joke;
}
