// require('dotenv').config()
// console.log(process.env)

// console.log(process.env.API_KEY)

const API_KEY = "JCXH7RL2H20I2NAG"

const stockValues = document.getElementById("stock-values");

const searchBtn = document.getElementById("submit-ticker");
searchBtn.addEventListener("click", getTimeSeriesDaily);

const intradayBtn = document.getElementById("intraday-btn");
intradayBtn.addEventListener("click", getTimeSeriesIntraday);

const dailyBtn = document.getElementById("daily-btn");
dailyBtn.addEventListener("click", getTimeSeriesDaily);

const weeklyBtn = document.getElementById("weekly-btn");
weeklyBtn.addEventListener("click", getTimeSeriesWeekly);



// provides user date for API call
function getUserDate() {
    let today = new Date().toISOString().slice(0, 10);
    return today;
}
console.log(getUserDate())

function getESTDateAndTime() {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var newyorkISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace("T", " ");
    return newyorkISOTime;
}
console.log(getESTDateAndTime())


function getSearchValue() {
    const value = document.getElementById("search-bar").value;
    return value;
}

// resets timeframe buttons styling
function revertTimeButtons() {
    const buttons = document.querySelectorAll(".timeframeButtons");
    buttons.forEach((button) => {
        button.style.color = "black";
    });
    return buttons;
}

// factory function to style timeframe buttons
const styleButtons = (buttonID, btnColor) => {
    const timeBtn = document.getElementById(buttonID);
    timeBtn.style.color = btnColor;
}

// factory function to create data point variables for stocks (high, low, etc.)
const stockDataFactory = (type, attributes, content) => {
    const num = document.createElement(type);
    for (key in attributes) {
        num.setAttribute(key, attributes[key])
    }
    num.textContent = content;
    return num;
}

// API call to get intraday stock data
async function getTimeSeriesIntraday() {
    const timeSeries = intradayBtn.value;
    revertTimeButtons();
    styleButtons("intraday-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    stockValues.innerHTML = "";

    try {
        const endpoint = `https://www.alphavantage.co/query?function=${timeSeries}&symbol=${searchValue}&interval=5min&apikey=${API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Time Series (5min)"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Time Series (5min)"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Time Series (5min)"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Time Series (5min)"][lastRefreshedDate]["3. low"];

        const high = stockDataFactory('div', { id: "intraday-high", class: "high" }, highValue);
        const low = stockDataFactory('div', { id: "intraday-low", class: "low" }, lowValue);
        const open = stockDataFactory('div', { id: "intraday-open", class: "open" }, openValue);
        const close = stockDataFactory('div', { id: "intraday-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}

// API call to get daily stock data
async function getTimeSeriesDaily() {
    const timeSeries = dailyBtn.value;
    revertTimeButtons();
    styleButtons("daily-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    stockValues.innerHTML = "";

    try {
        const endpoint = `https://www.alphavantage.co/query?function=${timeSeries}&symbol=${searchValue}&apikey=${API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Time Series (Daily)"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Time Series (Daily)"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Time Series (Daily)"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Time Series (Daily)"][lastRefreshedDate]["3. low"];

        const high = stockDataFactory('div', { id: "daily-high", class: "high" }, highValue);
        const low = stockDataFactory('div', { id: "daily-low", class: "low" }, lowValue);
        const open = stockDataFactory('div', { id: "daily-open", class: "open" }, openValue);
        const close = stockDataFactory('div', { id: "daily-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}

// API call to get weekly stock data
async function getTimeSeriesWeekly() {
    const timeSeries = weeklyBtn.value;
    revertTimeButtons();
    styleButtons("weekly-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    stockValues.innerHTML = "";

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=${timeSeries}&symbol=${searchValue}&apikey=${API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Weekly Time Series"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Weekly Time Series"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Weekly Time Series"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Weekly Time Series"][lastRefreshedDate]["3. low"];

        const high = stockDataFactory('div', { id: "weekly-high", class: "high" }, highValue);
        const low = stockDataFactory('div', { id: "weekly-low", class: "low" }, lowValue);
        const open = stockDataFactory('div', { id: "weekly-open", class: "open" }, openValue);
        const close = stockDataFactory('div', { id: "weekly-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}




