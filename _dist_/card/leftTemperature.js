export const createLeftTemperature = () => {
  const getData = JSON.parse(window.localStorage.getItem("data"))

  const leftTemperatureContainer = document.createElement("div")

  const cardTemperature = document.createElement("h2")
    cardTemperature.className = "inline-block text-6xl"
    cardTemperature.textContent = Math.round(getData.main.temp) 
  
  const cardSup = document.createElement("sup")
    cardSup.textContent = "°C "
    cardSup.className = "text-4xl"
  
  // Add inside the container
  leftTemperatureContainer.append(
    cardTemperature,
    cardSup
  )

  return leftTemperatureContainer
}




