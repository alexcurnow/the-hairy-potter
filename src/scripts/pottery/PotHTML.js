import { potteryToSell } from './SellingConditionCheck.js'

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
    let shape = ''
    let price = ''
    if (event.target.id === 'sell--' + potteryToSell[0].id) {
      shape = potteryToSell[0].shape
      price = potteryToSell[0].price
    } else if (event.target.id === 'sell--' + potteryToSell[1].id) {
      shape = potteryToSell[1].shape
      price = potteryToSell[1].price
    } else if (event.target.id === 'sell--' + potteryToSell[2].id) {
      shape = potteryToSell[2].shape
      price = potteryToSell[2].price
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

// const allSellButtons = document.querySelectorAll("button[id^='sell--']")
// console.log(allSellButtons)
// allSellButtons.forEach((btn) => {
//   btn
