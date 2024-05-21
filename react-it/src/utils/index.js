

export const randomColor = (arrOfColors,currentColor) => {
   const filteredArr = arrOfColors.filter((color) => color !== currentColor)
  const randomIndex = Math.floor(Math.random() * filteredArr.length)
  return filteredArr[randomIndex]
}