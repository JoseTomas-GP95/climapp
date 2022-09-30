import { cabimasInfo } from "../fake"

export const overcast = document.createElement("p")
  overcast.textContent = cabimasInfo.weather[0].description
  overcast.className = "text-gray-300 text-xl pt-6"
