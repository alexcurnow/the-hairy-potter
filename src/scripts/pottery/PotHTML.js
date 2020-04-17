import { usePottery } from './potteryDataProvider.js'

const eventHub = document.querySelector('#container')

export const Pot = (potteryObj) => {
  return `
  <section class="pot">
    <h4>Pot Style: <div id="shape--${potteryObj.id}" style="display:inline;">${potteryObj.shape}</div></h4>
    <ul>
      <li>Price: <div id="price--${potteryObj.id}" style="display:inline;">$${potteryObj.price}</div></li>
      <li id="weight--${potteryObj.id}">Weight: ${potteryObj.weight} lbs</li>
      <li id="height--${potteryObj.id}">Height: ${potteryObj.height} in</li>
    </ul>
    <button id="sell--${potteryObj.id}">Sell Pot</button>
  </section>
  `
}

eventHub.addEventListener('click', (event) => {
  if (event.target.id.startsWith('sell--')) {
    const pottery = usePottery()
    const filteredPottery = pottery.filter((pot) => pot.cracked === false)
    let shape = ''
    let price = ''
    if (event.target.id === 'sell--' + filteredPottery[0].id) {
      shape = filteredPottery[0].shape
      price = filteredPottery[0].price
    } else if (event.target.id === 'sell--' + filteredPottery[1].id) {
      shape = filteredPottery[1].shape
      price = filteredPottery[1].price
    } else if (event.target.id === 'sell--' + filteredPottery[2].id) {
      shape = filteredPottery[2].shape
      price = filteredPottery[2].price
    }

    const sellButtonClickEvent = new CustomEvent('sellButtonClicked', {
      detail: {
        shape: shape,
        price: price,
      },
    })
    eventHub.dispatchEvent(sellButtonClickEvent)
  }
})
