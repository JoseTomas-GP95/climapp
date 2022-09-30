import { leftTemperatureContainer } from "./leftTemperature"
import { middleTemperatureContainer } from "./middleTemperature"
import { rightTemperatureContainer } from "./rightTemperature"

export const cardTemperatureContainer = document.createElement("div")
  cardTemperatureContainer.className = "m-5 flex justify-around w-px-400 pb-10 border-b border-white border-solid"

cardTemperatureContainer.append(
  leftTemperatureContainer,
  middleTemperatureContainer,
  rightTemperatureContainer
)
