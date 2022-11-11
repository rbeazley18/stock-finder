import { hideStockInfoAndValues } from "./domChanges";

export function createErrorMessage() {
    hideStockInfoAndValues();
    const errorMsg = document.getElementById("error-message");
    errorMsg.textContent = "No Data Found";
    return errorMsg;
}