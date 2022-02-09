const PaymentDayHook = (year, month) => {

    let lastDayOfMonth = new Date(year, month+1, 0)
    let dayOfWeek = lastDayOfMonth.getDay();
    
    switch (dayOfWeek) {
        case 0:
            return new Date(lastDayOfMonth.setDate(lastDayOfMonth.getDate()-2));
        case 6:
            return new Date(lastDayOfMonth.setDate(lastDayOfMonth.getDate()-1));
        default:   
            return lastDayOfMonth
    }
};

export default PaymentDayHook;