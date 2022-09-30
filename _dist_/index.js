import { cardTitleContainer } from './card/titleContainer.js';
import { cardTemperatureContainer } from './card/temperatureInfo.js';
import { overcast
} from './card/overcast.js';

// THIS IS THE ROOT of card
const card = document.querySelector("article")

// Add all element of card container
card.append(
  cardTitleContainer,
  cardTemperatureContainer,
  overcast
)
