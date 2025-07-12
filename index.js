
function formatDate(input) {
    let date;
    if (input instanceof Date) {
        date = input;
    } else {
        date = new Date(input);
        if (isNaN(date.getTime())) {
            return "Invalid date"
        }
    }
    const day = String(date.getDate()).padStart(2, '0')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const index = date.getMonth()
    const month = monthNames[index]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
}

module.exports = { formatDate }


