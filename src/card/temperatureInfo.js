import { createLeftTemperature } from "./leftTemperature"
import { createMiddleTemperatureContainer } from "./middleTemperature"
import { createRightTemperatureContainer } from "./rightTemperature"


export const createTemperatureInfo = () => {
  const cardTemperatureContainer = document.createElement("div")
  cardTemperatureContainer.className = "m-5 flex justify-around w-px-400 pb-10 border-b border-white border-solid"
  
  const leftTemperatureContainer = createLeftTemperature()
  const middleTemperatureContainer = createMiddleTemperatureContainer()
  const rightTemperatureContainer = createRightTemperatureContainer()

  cardTemperatureContainer.append(
    leftTemperatureContainer,
    middleTemperatureContainer,
    rightTemperatureContainer
  )

  return cardTemperatureContainer
}
