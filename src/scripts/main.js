import { PotteryList } from './pottery/PotteryList.js'
import { getPottery } from './pottery/potteryDataProvider.js'

getPottery().then(PotteryList)
