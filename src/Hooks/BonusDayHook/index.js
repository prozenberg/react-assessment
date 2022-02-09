const BonusDayHook = (year, month) => {

    let startingDate = new Date(year, month, 15)
    let dayOfWeek = startingDate.getDay();
    switch (dayOfWeek) {
        case 0:
            return new Date(startingDate.setDate(startingDate.getDate()+3));
        case 6:
            return new Date(startingDate.setDate(startingDate.getDate()+4));
        default:   
            console.log(startingDate)
            return startingDate
    }
};

export default BonusDayHook;