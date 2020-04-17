import { Pottery } from './pottery/Pottery.js'
import { Kiln } from './pottery/Kiln.js'
import { SellingCondition } from './pottery/SellingConditionCheck.js'

let PieceOfPottery1 = Pottery('pear', 3, 6)
let PieceOfPottery2 = Pottery('oval', 2, 4)
let PieceOfPottery3 = Pottery('vase', 4, 8)
let PieceOfPottery4 = Pottery('pitcher', 5, 9)
let PieceOfPottery5 = Pottery('square', 1, 3)
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
