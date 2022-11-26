import { stockComponentFactory } from "./domCreation";
import { getTimeSeriesIntraday, getTimeSeriesDaily, getTimeSeriesWeekly, getTimeSeriesMonthly } from "./api";

export function createTimeSeriesButtons(search) {

    const timeframeButtons = document.getElementById("timeframe-buttons")
    timeframeButtons.innerHTML = "";

    const intradayBtn = stockComponentFactory('button', { id: "intraday-btn", class: "timeframeButton" }, "Intraday");
    intradayBtn.addEventListener("click", () => { getTimeSeriesIntraday(search); });

    const dailyBtn = stockComponentFactory('button', { id: "daily-btn", class: "timeframeButton" }, "Daily");
    dailyBtn.addEventListener("click", () => { getTimeSeriesDaily(search) });

    const weeklyBtn = stockComponentFactory('button', { id: "weekly-btn", class: "timeframeButton" }, "Weekly");
    weeklyBtn.addEventListener("click", () => { getTimeSeriesWeekly(search) });

    const monthlyBtn = stockComponentFactory('button', { id: "monthly-btn", class: "timeframeButton" }, "Monthly");
    monthlyBtn.addEventListener("click", () => { getTimeSeriesMonthly(search) });

    const eachButton = document.querySelectorAll(".timeframeButton");
    eachButton.forEach((button) => {
        button.style.display = "flex";
    });

    timeframeButtons.append(intradayBtn, dailyBtn, weeklyBtn, monthlyBtn);
}

// resets timeframe buttons styling
export function revertTimeButtons() {
    const buttons = document.querySelectorAll(".timeframeButton");
    buttons.forEach((button) => {
        button.classList.remove("clickedButton");
    });
    return buttons;
}

// factory function to style timeframe buttons
export function showButtonClicked(buttonID) {
    const timeBtn = document.getElementById(buttonID);
    timeBtn.classList.add("clickedButton");
};

export function createAddToWatchlistButton() {
    const watchlistButton = stockComponentFactory('button', { id: "watchlist-btn", class: "watchlistButton" }, "Add to Watchlist");
    return watchlistButton;
}