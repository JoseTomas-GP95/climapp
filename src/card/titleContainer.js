import { cabimasInfo } from "../fake"

export const cardTitleContainer = document.createElement("div")
  cardTitleContainer.className = "flex items-center justify-around w-80"

const cardTitle = document.createElement("h3")
  cardTitle.className = "text-6xl font-bold"
  cardTitle.textContent = cabimasInfo.name

const cardCountry = document.createElement("p")
  cardCountry.textContent = cabimasInfo.sys.country

// Add all element in container
cardTitleContainer.append(
  cardTitle, 
  cardCountry
)
