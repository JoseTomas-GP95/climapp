// https://api.openweathermap.org/data/2.5/weather?q=cabimas&appid=1df5e53d2f3a2424902e14b5409d5d9a

export const getAllData = (event, query = "Cabimas") => {
  event.preventDefault()
  console.log('evt: ', event)
  const URL_BASE = "https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY = "1df5e53d2f3a2424902e14b5409d5d9a"

  fetch(`${URL_BASE}q=${query}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((responseJson) => {
      
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });

}

// catch button
const formSubmit = document.querySelector("form")
formSubmit.addEventListener("submit", getAllData)
