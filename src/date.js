// provides user date
function getUserDate() {
    let today = new Date().toISOString().slice(0, 10);
    return today;
}
// console.log(getUserDate())

// provides user date and time EST
function getESTDateAndTime() {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var newyorkISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace("T", " ");
    return newyorkISOTime;
}
// console.log(getESTDateAndTime())



export function convertDateToString(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const time = date.substring(11, 16);
    const convertedDateAndTime = `${month}/${day}/${year} ${time}`
    return convertedDateAndTime
}

export function convertArticleDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(6, 8);

    const newDate = `${month}/${day}/${year}`

    return newDate;
}