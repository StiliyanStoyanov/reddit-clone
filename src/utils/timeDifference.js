// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
export function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = current - previous;
    function getTimeString(elapsed, msPer, timeType) {
        const time = Math.round(elapsed / msPer);
        const dateType = time === 1 ? timeType.substring(0, timeType.length - 1) : timeType
        return `${time} ${dateType} ago`
    }

    if (elapsed < msPerMinute) {
        return 'less than a minute ago'
    } else if (elapsed < msPerHour) {
        return getTimeString(elapsed, msPerMinute, 'minutes');
    } else if (elapsed < msPerDay) {
        return getTimeString(elapsed, msPerHour, 'hours');
    } else if (elapsed < msPerMonth) {
        return getTimeString(elapsed, msPerDay, 'days');
    } else if (elapsed < msPerYear) {
        return getTimeString(elapsed, msPerMonth, 'months');
    } else {
        return getTimeString(elapsed, msPerYear, 'years');
    }
}