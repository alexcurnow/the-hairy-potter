import { Pottery } from './pottery/Pottery.js'
import { Kiln } from './pottery/Kiln.js'
import { SellingCondition } from './pottery/SellingConditionCheck.js'
import { PotteryList } from './pottery/PotteryList.js'

let PieceOfPottery2 = Pottery('Oval', 2, 4)
let PieceOfPottery1 = Pottery('Pear', 3, 6)
let PieceOfPottery3 = Pottery('Vase', 4, 8)
let PieceOfPottery4 = Pottery('Pitcher', 5, 9)
let PieceOfPottery5 = Pottery('Square', 1, 3)
PieceOfPottery1 = Kiln(PieceOfPottery1, 2100)
PieceOfPottery2 = Kiln(PieceOfPottery2, 2300)
PieceOfPottery3 = Kiln(PieceOfPottery3, 2000)
PieceOfPottery4 = Kiln(PieceOfPottery4, 2150)
PieceOfPottery5 = Kiln(PieceOfPottery5, 2350)

SellingCondition(PieceOfPottery1)
SellingCondition(PieceOfPottery2)
SellingCondition(PieceOfPottery3)
SellingCondition(PieceOfPottery4)
SellingCondition(PieceOfPottery5)

PotteryList()
