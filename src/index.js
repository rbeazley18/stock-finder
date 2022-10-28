import './style.css';

function searchInitiated() {
    const search = document.getElementById("submit-ticker");
    search.addEventListener("click", firstSearch)
}

function createTimeSeriesButtons() {
    const timeframeButtons = document.getElementById("timeframe-buttons")
    timeframeButtons.innerHTML = "";

    const intradayBtn = stockComponentFactory('button', { id: "intraday-btn", class: "timeframeButtons" }, "Intraday");
    intradayBtn.addEventListener("click", getTimeSeriesIntraday);

    const dailyBtn = stockComponentFactory('button', { id: "daily-btn", class: "timeframeButtons" }, "Daily");
    dailyBtn.addEventListener("click", getTimeSeriesDaily);

    const weeklyBtn = stockComponentFactory('button', { id: "weekly-btn", class: "timeframeButtons" }, "Weekly");
    weeklyBtn.addEventListener("click", getTimeSeriesWeekly);

    timeframeButtons.append(intradayBtn, dailyBtn, weeklyBtn);
}

// window.firstSearch = firstSearch;

function firstSearch() {
    createTimeSeriesButtons();
    getTimeSeriesDaily();
}



// provides user date for API call
function getUserDate() {
    let today = new Date().toISOString().slice(0, 10);
    return today;
}
// console.log(getUserDate())

function getESTDateAndTime() {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var newyorkISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace("T", " ");
    return newyorkISOTime;
}
// console.log(getESTDateAndTime())


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
const stockComponentFactory = (type, attributes, content) => {
    const component = document.createElement(type);
    for (Object.key in attributes) {
        component.setAttribute(Object.key, attributes[Object.key])
    }
    component.textContent = content;
    return component;
}

// API call to get intraday stock data
async function getTimeSeriesIntraday() {
    revertTimeButtons();
    styleButtons("intraday-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    const stockValues = document.getElementById("stock-values");
    stockValues.innerHTML = "";

    try {
        const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchValue}&interval=5min&apikey=${process.env.API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Time Series (5min)"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Time Series (5min)"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Time Series (5min)"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Time Series (5min)"][lastRefreshedDate]["3. low"];

        const high = stockComponentFactory('div', { id: "intraday-high", class: "high" }, highValue);
        const low = stockComponentFactory('div', { id: "intraday-low", class: "low" }, lowValue);
        const open = stockComponentFactory('div', { id: "intraday-open", class: "open" }, openValue);
        const close = stockComponentFactory('div', { id: "intraday-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}

// API call to get daily stock data
async function getTimeSeriesDaily() {
    revertTimeButtons();
    styleButtons("daily-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    const stockValues = document.getElementById("stock-values");
    stockValues.innerHTML = "";

    try {
        const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchValue}&apikey=${process.env.API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Time Series (Daily)"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Time Series (Daily)"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Time Series (Daily)"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Time Series (Daily)"][lastRefreshedDate]["3. low"];

        const high = stockComponentFactory('div', { id: "daily-high", class: "high" }, highValue);
        const low = stockComponentFactory('div', { id: "daily-low", class: "low" }, lowValue);
        const open = stockComponentFactory('div', { id: "daily-open", class: "open" }, openValue);
        const close = stockComponentFactory('div', { id: "daily-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}

// API call to get weekly stock data
async function getTimeSeriesWeekly() {
    revertTimeButtons();
    styleButtons("weekly-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");
    const stockValues = document.getElementById("stock-values");
    stockValues.innerHTML = "";

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)
        errorMsg.textContent = "";
        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"]
        const openValue = stockData["Weekly Time Series"][lastRefreshedDate]["1. open"];
        const closeValue = stockData["Weekly Time Series"][lastRefreshedDate]["4. close"];
        const highValue = stockData["Weekly Time Series"][lastRefreshedDate]["2. high"];
        const lowValue = stockData["Weekly Time Series"][lastRefreshedDate]["3. low"];

        const high = stockComponentFactory('div', { id: "weekly-high", class: "high" }, highValue);
        const low = stockComponentFactory('div', { id: "weekly-low", class: "low" }, lowValue);
        const open = stockComponentFactory('div', { id: "weekly-open", class: "open" }, openValue);
        const close = stockComponentFactory('div', { id: "weekly-close", class: "close" }, closeValue);
        stockValues.append(high, low, open, close);
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No data found.";
    }

}


searchInitiated();

