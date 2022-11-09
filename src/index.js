import { createTimeSeriesButtons } from './buttons';
import { getTimeSeriesDaily, getCompanyOverview, getCompanyNews, getSearchAutoComplete } from './api';
import './style.css';
import { getSearchValue, removeSearchDropdown, clearSearchText } from './main';

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
    getTimeSeriesDaily(search);
    getCompanyOverview(search);
    getCompanyNews(search)
}


// FOR PRODUCTION
showSearchOptions();
searchInitiated();


// FOR DEVELOPMENT ONLY
// firstSearch();











