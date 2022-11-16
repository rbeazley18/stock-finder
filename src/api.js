import { showStockValues, hideStockValues, showCompanyInfo, hideCompanyInfo, showCompanyNews, hideCompanyNews, clearErrorMessage, hideStockInfoAndValues, showStockInfoAndValues, hideAllStockData } from "./domChanges";
import { percentChange, convertToPercent, fixAuthorsListed } from "./modifications"
import { stockComponentFactory } from "./domCreation";
import { convertDateToString, convertArticleDate } from "./date";
import { revertTimeButtons, showButtonClicked } from "./buttons";
import { mapAndAppendBestMatches, removeSearchDropdown } from "./searchDropdown";
import { getSearchValue } from "./getValues";
import { createErrorMessage } from "./errorMsg";


// API call to get intraday stock data
export async function getTimeSeriesIntraday(search) {
    clearErrorMessage();
    hideStockValues();
    revertTimeButtons();
    showButtonClicked("intraday-btn");
    const searchValue = search;
    // console.log(searchValue);

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

        const title = stockComponentFactory('h3', { id: "data-title", class: "dataTitle" }, "Intraday");

        const openInt = stockData["Time Series (5min)"][lastRefreshedDate]["1. open"];
        const closeInt = stockData["Time Series (5min)"][lastRefreshedDate]["4. close"];
        const percent = stockComponentFactory('li', { id: "percent-change", class: "percent" }, percentChange(openInt, closeInt));

        showStockInfoAndValues();
        const stockValues = showStockValues();
        stockValues.append(title, high, low, open, close, percent, lastRefreshed);
    } catch (error) {
        console.log(error);
        hideStockInfoAndValues();
        createErrorMessage();
    }

}

// API call to get daily stock data
export async function getTimeSeriesDaily(search) {
    clearErrorMessage();
    hideStockValues();
    
    revertTimeButtons();
    showButtonClicked("daily-btn");
    const searchValue = search;
    // console.log(searchValue);

    try {
        const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchValue}&apikey=${process.env.API_KEY}`
        const response = await fetch(endpoint, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const lastRefreshedDate = stockData["Meta Data"]["3. Last Refreshed"].slice(0, 10);
        const lastRefreshed = stockComponentFactory('li', { id: "last-refreshed", class: "lastRefreshed" }, convertDateToString(lastRefreshedDate));

        const high = stockComponentFactory('li', { id: "daily-high", class: "high" }, stockData["Time Series (Daily)"][lastRefreshedDate]["2. high"]);
        const low = stockComponentFactory('li', { id: "daily-low", class: "low" }, stockData["Time Series (Daily)"][lastRefreshedDate]["3. low"]);
        const open = stockComponentFactory('li', { id: "daily-open", class: "open" }, stockData["Time Series (Daily)"][lastRefreshedDate]["1. open"]);
        const close = stockComponentFactory('li', { id: "daily-close", class: "close" }, stockData["Time Series (Daily)"][lastRefreshedDate]["4. close"]);

        const title = stockComponentFactory('h3', { id: "data-title", class: "dataTitle" }, "Daily");

        const openInt = stockData["Time Series (Daily)"][lastRefreshedDate]["1. open"];
        const closeInt = stockData["Time Series (Daily)"][lastRefreshedDate]["4. close"];
        const percent = stockComponentFactory('li', { id: "percent-change", class: "percent" }, percentChange(openInt, closeInt));


showStockInfoAndValues();
        const stockValues = showStockValues();
        stockValues.append(title, high, low, open, close, percent, lastRefreshed);
    } catch (error) {
        console.log(error);
        hideStockInfoAndValues();
        createErrorMessage();
    }

}

// API call to get weekly stock data
export async function getTimeSeriesWeekly(search) {
    clearErrorMessage();
    hideStockValues();
    
    revertTimeButtons();
    showButtonClicked("weekly-btn");
    const searchValue = search;
    // console.log(searchValue);

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

        const openInt = stockData["Weekly Time Series"][lastRefreshedDate]["1. open"];
        const closeInt = stockData["Weekly Time Series"][lastRefreshedDate]["4. close"];
        const percent = stockComponentFactory('li', { id: "percent-change", class: "percent" }, percentChange(openInt, closeInt));

        const title = stockComponentFactory('h3', { id: "data-title", class: "dataTitle" }, "Weekly");

        showStockInfoAndValues();

        const stockValues = showStockValues();
        stockValues.append(title, high, low, open, close, percent, lastRefreshed);
    } catch (error) {
        console.log(error);
        hideStockInfoAndValues();
        createErrorMessage();
    }

}


export async function getTimeSeriesMonthly(search) {
    clearErrorMessage();
    hideStockValues();
    
    revertTimeButtons();
    showButtonClicked("monthly-btn");
    const searchValue = search;
    // console.log(searchValue);

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

        const title = stockComponentFactory('h3', { id: "data-title", class: "dataTitle" }, "Monthly");

        const openInt = stockData["Monthly Time Series"][lastRefreshedDate]["1. open"];
        const closeInt = stockData["Monthly Time Series"][lastRefreshedDate]["4. close"];
        const percent = stockComponentFactory('li', { id: "percent-change", class: "percent" }, percentChange(openInt, closeInt));

        showStockInfoAndValues();

        const stockValues = showStockValues();
        stockValues.append(title, high, low, open, close, percent, lastRefreshed);
    } catch (error) {
        console.log(error);
        hideStockInfoAndValues();
        createErrorMessage();
    }

}

export async function getCompanyOverview(search) {
    clearErrorMessage();
    hideCompanyInfo();
    showStockInfoAndValues();
    const searchValue = search;

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const stockData = await response.json();
        console.log(stockData)

        const symbol = stockComponentFactory('li', { id: "symbol", class: "symbol" }, stockData["Symbol"]);

        const assetType = stockComponentFactory('li', { id: "asset-type", class: "assetType" }, stockData["AssetType"]);

        const name = stockComponentFactory('li', { id: "name", class: "companyName" }, stockData["Name"]);

        const description = stockComponentFactory('li', { id: "description", class: "description" }, stockData["Description"]);

        const exchange = stockComponentFactory('li', { id: "exchange", class: "exchange" }, stockData["Exchange"]);

        const country = stockComponentFactory('li', { id: "country", class: "country" }, stockData["Country"]);

        const sector = stockComponentFactory('li', { id: "sector", class: "sector" }, stockData["Sector"]);

        const industry = stockComponentFactory('li', { id: "industry", class: "industry" }, stockData["Industry"]);

        const peRatio = stockComponentFactory('li', { id: "peRatio", class: "peRatio" }, stockData["PERatio"]);

        const dividendYield = stockComponentFactory('li', { id: "dividend-yield", class: "dividendYield" }, convertToPercent(stockData["DividendYield"]));

        const fiftyTwoWeekHigh = stockComponentFactory('li', { id: "fifty-two-week-high", class: "fiftyTwoWeekHigh" }, stockData["52WeekHigh"]);

        const fiftyTwoWeekLow = stockComponentFactory('li', { id: "fifty-two-week-low", class: "fiftyTwoWeekLow" }, stockData["52WeekLow"]);

        const earningsPerShare = stockComponentFactory('li', { id: "earnings-per-share", class: "earningsPerShare" }, stockData["EPS"]);

        const metricsDiv = stockComponentFactory('div', { id: "stock-metrics", class: "stockMetrics" });

        const title = stockComponentFactory('h3', { id: "metrics-title", class: "metricsTitle" }, "Metrics");

        showStockInfoAndValues();

        metricsDiv.append(title, peRatio, earningsPerShare, dividendYield, fiftyTwoWeekHigh, fiftyTwoWeekLow);

        const companyInfo = showCompanyInfo();
        companyInfo.append(symbol, name, assetType, exchange, country, sector, industry, description, metricsDiv);
    } catch (error) {
        console.log(error);
        hideStockInfoAndValues();
        createErrorMessage();
    }

}


export async function getCompanyNews(search) {
    clearErrorMessage();
    hideCompanyNews();
    const searchValue = search;

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchValue}&topics=earnings&apikey=${process.env.API_KEY}`, { mode: 'cors' });
        const newsData = await response.json();
        // console.log(newsData)
        // console.log(newsData["feed"]);

        function getTenArticles() {
            let values = []
            for (let i = 0; i < 10; i++) {
                let eachArticle = newsData["feed"][i];

                values.push(eachArticle);
            }
            // console.log(values);
            return values;
        }

        const firstTenArticles = getTenArticles()
        // console.log(tenValues);

        const companyNews = showCompanyNews();

        function articleMap(data) {
            data.map(value => {
                let title = value.title;
                // console.log(`Title: ${title}`);
                let authors = value.authors;
                // console.log(authors)
                let source = value.source;
                let summary = value.summary;
                let timePublished = value.time_published;
                let url = value.url;

                const eachArticle = stockComponentFactory('div', { id: "each-article", class: "eachArticle" })
                const articleTitle = stockComponentFactory('p', { id: "article-title", class: "articleTitle" }, title);
                const articleAuthors = stockComponentFactory('p', { id: "article-authors", class: "articleAuthors" }, fixAuthorsListed(authors));
                const articleSource = stockComponentFactory('p', { id: "article-source", class: "articleSource" }, source);
                const articleSummary = stockComponentFactory('p', { id: "article-summary", class: "articleSummary" }, summary);
                const articleTimePublished = stockComponentFactory('p', { id: "article-timePublished", class: "articleTimePublished" }, convertArticleDate(timePublished));
                const articleURL = stockComponentFactory('a', { id: "article-url", class: "articleURL", href: url }, url);

                eachArticle.append(articleTitle, articleTimePublished, articleAuthors, articleSource, articleSummary, articleURL);
                companyNews.append(eachArticle);
            })
        }

        articleMap(firstTenArticles);
    } catch (error) {
        hideCompanyNews();
        console.log(error);
        createErrorMessage();
    }

}

export async function getSearchAutoComplete() {
    clearErrorMessage();
    hideCompanyNews();
    removeSearchDropdown();
    let searchValue = getSearchValue();

    try {
        if (!localStorage.getItem(searchValue)) {
            const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=${process.env.API_KEY}`, { mode: 'cors' });
            console.log(searchValue);
            const searchData = await response.json();
            // console.log(searchData);

            const searchDropdown = document.getElementById("search-dropdown");
            if (!searchValue) {
                searchDropdown.style.display = "none";
            }

            const bestMatches = searchData["bestMatches"];
            // console.log(bestMatches);

            let bestMatchesSerialized = JSON.stringify(bestMatches);

            localStorage.setItem(searchValue, bestMatchesSerialized);

            // console.log(matchesObjectDeserialized);

            mapAndAppendBestMatches(bestMatches);
        } else {
            let matchesObjectDeserialized = JSON.parse(localStorage.getItem(searchValue));
            console.log(matchesObjectDeserialized);
            mapAndAppendBestMatches(matchesObjectDeserialized);
        }



    } catch (error) {
        console.log(error);
        hideAllStockData();
        hideStockInfoAndValues();
    }

}

