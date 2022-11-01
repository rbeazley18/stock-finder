import { createTimeSeriesButtons } from './buttons';
import { getTimeSeriesDaily, getCompanyOverview } from './api';
import './style.css';

function searchInitiated() {
    const search = document.getElementById("submit-ticker");
    search.addEventListener("click", firstSearch);
}

function firstSearch() {
    createTimeSeriesButtons();
    getTimeSeriesDaily();
    getCompanyOverview();
}


// FOR PRODUCTION
searchInitiated();


// FOR DEVELOPMENT ONLY
// firstSearch();











