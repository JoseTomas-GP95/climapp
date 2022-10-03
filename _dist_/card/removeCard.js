export const removeCard = () => {

  const cardContainer = document.querySelector("article");
  const notFoundImage = document.querySelector("img");
  const notFoundText = document.querySelector("small");

  if (cardContainer !== null) {
    cardContainer.remove();
  }

  if (notFoundImage !== null) {
    notFoundImage.remove();
    notFoundText.remove();
  }

}