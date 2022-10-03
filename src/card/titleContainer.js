export const createTitleContainer = () => {
  const getData = JSON.parse(window.localStorage.getItem("data"))
  
  const cardTitleContainer = document.createElement("div")

  cardTitleContainer.className = "flex items-center justify-around w-80"
  
  const cardTitle = document.createElement("h2")
  cardTitle.className = "text-6xl font-bold"
  cardTitle.textContent = getData?.name
  
  const cardCountry = document.createElement("p")
  cardCountry.textContent = getData?.sys.country
  
  // Add all element in container
  cardTitleContainer.append(
  cardTitle, 
  cardCountry
  )

  return cardTitleContainer
}
