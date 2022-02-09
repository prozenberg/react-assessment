import PaymentDayHook from "../PaymentDayHook"
import BonusDayHook from "../BonusDayHook"
import Months from "../../Constants/Months"

const BuildDatesJSON = (year) => {
    const array = []
    for (let i = 0; i < 12; i++) {
        array.push({ month: Months[i], paymentDay: PaymentDayHook(year, i).getDate(), bonusDay: BonusDayHook(year, i).getDate() })
    }
    let paymentsJSON = JSON.stringify(array)
    return paymentsJSON
}

export default BuildDatesJSON