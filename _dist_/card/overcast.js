export const createOvercast = () => {
  const getData = JSON.parse(window.localStorage.getItem("data"))

  const overcast = document.createElement("p")

  overcast.textContent = getData.weather[0].description
  overcast.className = "text-gray-300 text-xl pt-6"

  return overcast
}
