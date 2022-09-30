import { cardTitleContainer } from './card/titleContainer';
import { cardTemperatureContainer } from './card/temperatureInfo';
import { overcast
} from './card/overcast';

// THIS IS THE ROOT of card
const card = document.querySelector("article")

// Add all element of card container
card.append(
  cardTitleContainer,
  cardTemperatureContainer,
  overcast
)
