export const createMiddleTemperatureContainer = () => {
  const getData = JSON.parse(window.localStorage.getItem("data"))

  const middleTemperatureContainer = document.createElement("div")
  middleTemperatureContainer.className = "flex flex-col text-lg"

  // MIN element
  const cardTemperatureMin = document.createElement("p")
    cardTemperatureMin.textContent = `MIN: ${getData.main.temp_min}`
    cardTemperatureMin.className = "inline-block"
  
  // MAX element
  const cardTemperatureMax = document.createElement("p")
    cardTemperatureMax.textContent = `MAX: ${getData.main.temp_max}`
    cardTemperatureMax.className = "inline-block"
  
  // Add inside the container
  middleTemperatureContainer.append(
    cardTemperatureMin,
    cardTemperatureMax
  )

  return middleTemperatureContainer
}
