import { createTitleContainer } from './card/titleContainer';
import { createTemperatureInfo } from './card/temperatureInfo';
import { createOvercast } from './card/overcast';

// THIS IS THE ROOT of main
const mainContainer = document.querySelector("main")

export const createCard = () => {
  // THIS IS THE ROOT of card
  const card = document.createElement("article")
  card.className = "bg-blue-900 rounded-lg p-4 w-4/5 h-80 shadow-xl"

  const overcast = createOvercast()
  const cardTitleContainer = createTitleContainer()
  const cardTemperatureContainer = createTemperatureInfo()

  // Add all element of card container
  card.append(
    cardTitleContainer,
    cardTemperatureContainer,
    overcast
  )

  mainContainer.append(card)
}

