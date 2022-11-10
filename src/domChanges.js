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

export function clearErrorMessage() {
    const errorMsg = document.getElementById("error-message");
    errorMsg.innerHTML = "";
    return errorMsg;
}

export function clearSearchText() {
    const searchText = document.getElementById("search-bar");
    searchText.value = "";
    return searchText;
}