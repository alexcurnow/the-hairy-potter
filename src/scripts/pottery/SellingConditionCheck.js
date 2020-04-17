export const potteryToSell = []

export const SellingCondition = (potteryObj) => {
  potteryObj.weight > 3 ? (potteryObj.price = 40) : (potteryObj.price = 20)
  if (potteryObj.cracked === true) {
    return false
  } else {
    potteryToSell.push(potteryObj)
  }
  return potteryObj
}
