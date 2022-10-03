import { createCard } from ".."
import { removeCard } from "../card/removeCard"
import imagen from "./page-not-found.png"

let query = ""
const buttonSubmit = document.querySelector("button")

const inputSearch = document.querySelector("input")
inputSearch.addEventListener("input", (e) => {
  query = e.target.value

  if (e.target.value.length > 0) {
    buttonSubmit.className = "text-white font-bold text-3xl bg-red-500 w-96 p-8 rounded-lg cursor-pointer"
    buttonSubmit.disabled = false
  } else {
    buttonSubmit.className = "text-white font-bold text-3xl bg-red-300 w-96 p-8 rounded-lg cursor-not-allowed"
    buttonSubmit.disabled = true
  }
})


// how to do onChange event with addEventListener

export const getAllData = (event) => {
  event.preventDefault()


  const URL_BASE = "https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY = "1df5e53d2f3a2424902e14b5409d5d9a"

  window.fetch(`${URL_BASE}q=${query}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((responseJson) => {

      removeCard()

      if (responseJson.cod !== "404") {
        window.localStorage.setItem("data", JSON.stringify(responseJson))
        createCard()
      } else {
        const mainContainer = document.querySelector("main")
        const image404 = document.createElement("img")
        image404.src = imagen
        image404.width = "300"
        image404.alt = "City or country not found"

        const messageError = document.createElement("small")
        messageError.className = "text-red-600 font-bold text-base"
        messageError.textContent = responseJson.message

        mainContainer.append(
          image404,
          messageError
          )
      }

    })
    .catch((error) => {
      console.error(error);
    });

}

// catch form
const formSubmit = document.querySelector("form")
formSubmit.addEventListener("submit", getAllData)
