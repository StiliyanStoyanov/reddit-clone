// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
export function dateFormatter(date) {
    if (!(date instanceof Date && !isNaN(date))) {
        console.error("invalid date provided: ", date)
        return {}
    }
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
    const day = ('0' + date.getUTCDate()).slice(-2);
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return {day, month, year}
}