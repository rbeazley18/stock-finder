export function getSearchValue() {
    const value = document.getElementById("search-bar").value;
    return value;
}

// resets timeframe buttons styling
export function revertTimeButtons() {
    const buttons = document.querySelectorAll(".timeframeButtons");
    buttons.forEach((button) => {
        button.style.color = "black";
    });
    return buttons;
}

// factory function to style timeframe buttons
export const styleButtons = (buttonID, btnColor) => {
    const timeBtn = document.getElementById(buttonID);
    timeBtn.style.color = btnColor;
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

export function startStockValues() {
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

export function startCompanyInfo() {
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

export function createErrorMessage(error) {
    const errorMsg = document.getElementById("error-message");
    errorMsg.textContent = "No Data Found";
    return errorMsg;
}

export function clearErrorMessage() {
    const errorMsg = document.getElementById("error-message");
    errorMsg.innerHTML = "";
    return errorMsg;
}