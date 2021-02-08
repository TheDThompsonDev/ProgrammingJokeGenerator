const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  )
  const data = await res.json();
  //console logging the output to see what the API is returning
  //we are returning 3 console.logs because the API sometimes
  //returns data.joke with the joke and sometimes it returns
  //data.setup and data.delivery
  console.log(data)
  console.log(data.joke)
  console.log(data.delivery)

  //We are making an IF statement to see which way the API has decided to return the joke.
  //This way we are prepared no matter how the joke is brought to us.
  
  let joke = ""
  if (data.joke == undefined) {
    joke = `${data.setup} <br /> ${data.delivery}`
  } else {
    joke = data.joke
  }
  jokeText.innerHTML = joke

}