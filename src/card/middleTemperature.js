import { cabimasInfo } from "../fake"

export const middleTemperatureContainer = document.createElement("div")
  middleTemperatureContainer.className = "flex flex-col text-lg"

// MIN element
const cardTemperatureMin = document.createElement("p")
  cardTemperatureMin.textContent = `MIN: ${cabimasInfo.main.temp_min}`
  cardTemperatureMin.className = "inline-block"

// MAX element
const cardTemperatureMax = document.createElement("p")
  cardTemperatureMax.textContent = `MAX: ${cabimasInfo.main.temp_max}`
  cardTemperatureMax.className = "inline-block"

// Add inside the container
middleTemperatureContainer.append(
  cardTemperatureMin,
  cardTemperatureMax
)
