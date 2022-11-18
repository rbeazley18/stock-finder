import './style.css';

import { createTimeSeriesButtons } from './buttons';
import { getTimeSeriesDaily, getCompanyOverview, getCompanyNews, getSearchAutoComplete } from './api';
import { clearSearchText, showAllStockData } from './domChanges';
import { removeSearchDropdown } from './searchDropdown';
import { getSearchValue } from './getValues';


function searchInitiated() {
    const searchSubmit = document.getElementById("submit-ticker");
    searchSubmit.addEventListener("click", firstSearch);
}

function showSearchOptions() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", getSearchAutoComplete);
}


export function firstSearch() {
    const search = getSearchValue();
    removeSearchDropdown();
    clearSearchText();
    createTimeSeriesButtons(search);
    showAllStockData();
    getTimeSeriesDaily(search);
    getCompanyOverview(search);
    getCompanyNews(search)
}


// FOR PRODUCTION
showSearchOptions();
searchInitiated();


// FOR DEVELOPMENT ONLY
// firstSearch();











