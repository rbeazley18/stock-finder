import { stockComponentFactory } from "./main";
import { getTimeSeriesIntraday, getTimeSeriesDaily, getTimeSeriesWeekly, getTimeSeriesMonthly } from "./api";

export function createTimeSeriesButtons() {
    const timeframeButtons = document.getElementById("timeframe-buttons")
    timeframeButtons.innerHTML = "";

    const intradayBtn = stockComponentFactory('button', { id: "intraday-btn", class: "timeframeButtons" }, "Intraday");
    intradayBtn.addEventListener("click", getTimeSeriesIntraday);

    const dailyBtn = stockComponentFactory('button', { id: "daily-btn", class: "timeframeButtons" }, "Daily");
    dailyBtn.addEventListener("click", getTimeSeriesDaily);

    const weeklyBtn = stockComponentFactory('button', { id: "weekly-btn", class: "timeframeButtons" }, "Weekly");
    weeklyBtn.addEventListener("click", getTimeSeriesWeekly);

    const monthlyBtn = stockComponentFactory('button', { id: "monthly-btn", class: "timeframeButtons" }, "Monthly");
    monthlyBtn.addEventListener("click", getTimeSeriesMonthly);

    timeframeButtons.append(intradayBtn, dailyBtn, weeklyBtn, monthlyBtn);
}
