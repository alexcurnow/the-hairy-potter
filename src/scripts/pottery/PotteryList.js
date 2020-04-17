import { potteryToSell } from './SellingConditionCheck.js'
import { Pot } from './PotHTML.js'

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('#inventory')

export const PotteryList = () => {
  return (contentTarget.innerHTML = potteryToSell
    .map((pot) => Pot(pot))
    .join(''))
}

eventHub.addEventListener('sellButtonClicked', (event) => {
  window.alert(
    'You sold a ' +
      event.detail.shape +
      ' shaped pot for $' +
      event.detail.price
  )
})
