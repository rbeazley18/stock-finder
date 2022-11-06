export function getSearchValue() {
    const value = document.getElementById("search-bar").value;
    return value;
}

// factory function to create data point variables for stocks (high, low, etc.)
export const stockComponentFactory = (type, attributes, content) => {
    const component = document.createElement(type);
    for (Object.key in attributes) {
        component.setAttribute(Object.key, attributes[Object.key])
    }
    component.textContent = content;
    return component;
}

export function showStockValues() {
    const stockValues = document.getElementById("stock-values")
    stockValues.classList.add("show");
    return stockValues;
}

export function hideStockValues() {
    const stockValues = document.getElementById("stock-values")
    stockValues.classList.remove("show");
    stockValues.innerHTML = "";
    return stockValues;
}

export function showCompanyInfo() {
    const companyInfo = document.getElementById("company-info")
    companyInfo.classList.add("show");
    return companyInfo;
}

export function hideCompanyInfo() {
    const companyInfo = document.getElementById("company-info")
    companyInfo.classList.remove("show");
    companyInfo.innerHTML = "";
    return companyInfo;
}

export function showCompanyNews() {
    const companyNews = document.getElementById("company-news")
    companyNews.classList.add("show");
    return companyNews;
}

export function hideCompanyNews() {
    const companyNews = document.getElementById("company-news")
    companyNews.classList.remove("show");
    companyNews.innerHTML = "";
    return companyNews;
}

export function createErrorMessage() {
    const errorMsg = document.getElementById("error-message");
    errorMsg.textContent = "No Data Found";
    return errorMsg;
}

export function clearErrorMessage() {
    const errorMsg = document.getElementById("error-message");
    errorMsg.innerHTML = "";
    return errorMsg;
}

export function percentChange(open, close) {
    const difference = close - open;
    if (difference < 0) {
        const percent = (difference / open) * 100;
        const fixedPercent = percent.toFixed(2);
        // percentNegative();
        return `${fixedPercent}%`;
    } else {
        const percent = (difference / open) * 100;
        const fixedPercent = percent.toFixed(2);
        // percentPositive();
        return `${fixedPercent}%`;
    };
}

export function convertToPercent(data) {
    const percent = data * 100
    const fixedPercent = percent.toFixed(2);
    return `${fixedPercent}%`;
}

export function fixAuthorsListed(authors) {
    const fixedAuthors = authors.join(", ");
    return fixedAuthors;
}

export function removeSearchChildren() {
    const searchDropdown = document.getElementById("search-dropdown");
    while (searchDropdown.firstChild) {
        searchDropdown.firstChild.remove();
    }
}

export function clearSearchText() {
    const searchText = document.getElementById("search-bar");
    searchText.innerHTML = "";
    return searchText;
}

// function percentNegative() {
//     const percentLi = document.getElementById("percent-change");
//     percentLi.classList.remove("positive")
//     percentLi.classList.add("negative");

//     return percentLi;
// }

// function percentPositive() {
//     const percentLi = document.getElementById("percent-change");
//     percentLi.classList.remove("negative")
//     percentLi.classList.add("positive");

//     return percentLi;
// }