export function createErrorMessage() {
    const errorMsg = document.getElementById("error-message");
    errorMsg.textContent = "No Data Found";
    errorMsg.style.display = "block";
    return errorMsg;
}