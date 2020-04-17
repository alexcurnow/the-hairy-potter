import { Pot } from './PotHTML.js'
import { usePottery } from './potteryDataProvider.js'

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('#inventory')

export const PotteryList = () => {
  const pottery = usePottery()
  const filteredPottery = pottery.filter((pot) => pot.cracked === false)
  contentTarget.innerHTML = filteredPottery.map((pot) => Pot(pot)).join('')
}

eventHub.addEventListener('sellButtonClicked', (event) => {
  window.alert(
    'You sold a ' +
      event.detail.shape +
      ' shaped pot for $' +
      event.detail.price
  )
})
