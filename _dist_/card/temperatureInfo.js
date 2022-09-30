import { leftTemperatureContainer } from "./leftTemperature.js"
import { middleTemperatureContainer } from "./middleTemperature.js"
import { rightTemperatureContainer } from "./rightTemperature.js"

export const cardTemperatureContainer = document.createElement("div")
  cardTemperatureContainer.className = "m-5 flex justify-around w-px-400 pb-10 border-b border-white border-solid"

cardTemperatureContainer.append(
  leftTemperatureContainer,
  middleTemperatureContainer,
  rightTemperatureContainer
)
