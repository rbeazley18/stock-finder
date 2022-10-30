import { revertTimeButtons, stockComponentFactory, styleButtons, getSearchValue, startStockValues, hideStockValues, startCompanyInfo, hideCompanyInfo, createErrorMessage, clearErrorMessage } from "./main"
import { convertDateToString } from "./date";

// API call to get intraday stock data
export async function getTimeSeriesIntraday() {
    clearErrorMessage();
    hideStockValues();
    revertTimeButtons();
    styleButtons("intraday-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    
    try {
        const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchValue}&interval=5min&apikey=${process.env.API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"];
        console.log(lastRefreshedDate)
        const lastRefreshed = stockComponentFactory('li', { id: "last-refreshed", class: "lastRefreshed" }, convertDateToString(lastRefreshedDate));
        const high = stockComponentFactory('li', { id: "intraday-high", class: "high" }, stockData["Time Series (5min)"][lastRefreshedDate]["2. high"]);
        const low = stockComponentFactory('li', { id: "intraday-low", class: "low" }, stockData["Time Series (5min)"][lastRefreshedDate]["3. low"]);
        const open = stockComponentFactory('li', { id: "intraday-open", class: "open" }, stockData["Time Series (5min)"][lastRefreshedDate]["1. open"]);
        const close = stockComponentFactory('li', { id: "intraday-close", class: "close" }, stockData["Time Series (5min)"][lastRefreshedDate]["4. close"]);
        const stockValues = startStockValues();
        stockValues.append(lastRefreshed, high, low, open, close);
    } catch (error) {
        console.log(error);
        createErrorMessage();
    }

}

// API call to get daily stock data
export async function getTimeSeriesDaily() {
    clearErrorMessage();
    hideStockValues();
    revertTimeButtons();
    styleButtons("daily-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
 
    try {
        const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchValue}&apikey=${process.env.API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"].slice(0, 10);
        const lastRefreshed = stockComponentFactory('li', { id: "last-refreshed", class: "lastRefreshed" }, convertDateToString(lastRefreshedDate));

        const high = stockComponentFactory('li', { id: "daily-high", class: "high" }, stockData["Time Series (Daily)"][lastRefreshedDate]["2. high"]);
        const low = stockComponentFactory('li', { id: "daily-low", class: "low" }, stockData["Time Series (Daily)"][lastRefreshedDate]["3. low"]);
        const open = stockComponentFactory('li', { id: "daily-open", class: "open" }, stockData["Time Series (Daily)"][lastRefreshedDate]["1. open"]);
        const close = stockComponentFactory('li', { id: "daily-close", class: "close" }, stockData["Time Series (Daily)"][lastRefreshedDate]["4. close"]);
        const stockValues = startStockValues();
        stockValues.append(lastRefreshed, high, low, open, close);
    } catch (error) {
        hideStockValues();
        console.log(error);
        createErrorMessage();
    }

}

// API call to get weekly stock data
export async function getTimeSeriesWeekly() {
    clearErrorMessage();
    hideStockValues();
    revertTimeButtons();
    styleButtons("weekly-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"].slice(0, 10);
        const lastRefreshed = stockComponentFactory('li', { id: "last-refreshed", class: "lastRefreshed" }, convertDateToString(lastRefreshedDate));

        const high = stockComponentFactory('li', { id: "weekly-high", class: "high" }, stockData["Weekly Time Series"][lastRefreshedDate]["2. high"]);

        const low = stockComponentFactory('li', { id: "weekly-low", class: "low" }, stockData["Weekly Time Series"][lastRefreshedDate]["3. low"]);

        const open = stockComponentFactory('li', { id: "weekly-open", class: "open" }, stockData["Weekly Time Series"][lastRefreshedDate]["1. open"]);

        const close = stockComponentFactory('li', { id: "weekly-close", class: "close" }, stockData["Weekly Time Series"][lastRefreshedDate]["4. close"]);
        const stockValues = startStockValues();
        stockValues.append(lastRefreshed, high, low, open, close);
    } catch (error) {
        console.log(error);
        createErrorMessage();
    }

}


export async function getTimeSeriesMonthly() {
    clearErrorMessage();
    hideStockValues();
    revertTimeButtons();
    styleButtons("monthly-btn", "red");
    const searchValue = getSearchValue();
    console.log(searchValue);
    
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"].slice(0, 10);
        const lastRefreshed = stockComponentFactory('li', { id: "last-refreshed", class: "lastRefreshed" }, convertDateToString(lastRefreshedDate));

        const high = stockComponentFactory('li', { id: "monthly-high", class: "high" }, stockData["Monthly Time Series"][lastRefreshedDate]["2. high"]);

        const low = stockComponentFactory('li', { id: "monthly-low", class: "low" }, stockData["Monthly Time Series"][lastRefreshedDate]["3. low"]);

        const open = stockComponentFactory('li', { id: "monthly-open", class: "open" }, stockData["Monthly Time Series"][lastRefreshedDate]["1. open"]);

        const close = stockComponentFactory('li', { id: "monthly-close", class: "close" }, stockData["Monthly Time Series"][lastRefreshedDate]["4. close"]);
        const stockValues = startStockValues();
        stockValues.append(lastRefreshed, high, low, open, close);
    } catch (error) {
        console.log(error);
        createErrorMessage();
    }

}

export async function getCompanyOverview() {
    clearErrorMessage();
    hideCompanyInfo();
    const searchValue = getSearchValue();
    
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)


        const symbol = stockComponentFactory('li', { id: "symbol", class: "symbol" }, stockData["Symbol"]);

        const assetType = stockComponentFactory('li', { id: "asset-type", class: "assetType" }, stockData["AssetType"]);

        const name = stockComponentFactory('li', { id: "name", class: "name" }, stockData["Name"]);

        const description = stockComponentFactory('li', { id: "description", class: "description" }, stockData["Description"]);

        const exchange = stockComponentFactory('li', { id: "exchange", class: "exchange" }, stockData["Exchange"]);

        const country = stockComponentFactory('li', { id: "country", class: "country" }, stockData["Country"]);

        const sector = stockComponentFactory('li', { id: "sector", class: "sector" }, stockData["Sector"]);

        const industry = stockComponentFactory('li', { id: "industry", class: "industry" }, stockData["Industry"]);

        const peRatio = stockComponentFactory('li', { id: "peRatio", class: "peRatio" }, stockData["PERatio"]);

        const dividendYield = stockComponentFactory('li', { id: "dividend-yield", class: "dividendYield" }, `${stockData["DividendYield"] * 100}%`);

        const fiftyTwoWeekHigh = stockComponentFactory('li', { id: "fifty-two-week-high", class: "fiftyTwoWeekHigh" }, stockData["52WeekHigh"]);

        const fiftyTwoWeekLow = stockComponentFactory('li', { id: "fifty-two-week-low", class: "fiftyTwoWeekLow" }, stockData["52WeekLow"]);

        const earningsPerShare = stockComponentFactory('li', { id: "earnings-per-share", class: "earningsPerShare" }, stockData["EPS"]);

        // const allData = getKeyAndValue(stockData);
        // console.log(allData);
        const companyInfo = startCompanyInfo();
        companyInfo.append(symbol, assetType, name, description, exchange, country, sector, industry, peRatio, earningsPerShare, dividendYield, fiftyTwoWeekHigh, fiftyTwoWeekLow);
    } catch (error) {
        console.log(error);
        createErrorMessage();
    }

}

// function getKeyAndValue(data) {
//     const sliced = Object.keys(data).slice(0, 2).reduce((result, key) => {
//         result[key] = data[key];

//         return result;
//     }, {});
//     return sliced;
// }

// function getKeyAndValue(data) {
//         Object.entries(data).forEach(([key, value]) => {
//     `${key}: ${value}`;
// });
// }

// function addAllData(data) {
//     data.forEach(item => {
//         stockComponentFactory('li', { id: "all-data", class: "companyInfo" }, item);
//     });
// }

// function getKeyAndValue(data) {
//     let infoArray = [];
//     for (const [key, value] of Object.entries(data)) {
//         let pairs = `${key}: ${value}`;
//         return infoArray.push(pairs);
        
//     }
//     return infoArray;
// };

