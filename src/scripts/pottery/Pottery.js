let id = 0

export const Pottery = (shape, weight, height) => {
  id += 1
  const newPottery = {
    id: id,
    shape: shape,
    weight: weight,
    height: height,
  }
  return newPottery
}
