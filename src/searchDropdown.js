import { stockComponentFactory } from "./domCreation";
import { clearSearchText } from "./domChanges";
import { createTimeSeriesButtons } from "./buttons";
import { getCompanyOverview, getTimeSeriesDaily, getCompanyNews } from "./api";

export function mapAndAppendBestMatches(data) {
    data.map(value => {
        let symbol = value["1. symbol"];
        // console.log(`Symbol: ${symbol}`);
        let name = value["2. name"];
        // console.log(name)


        const matchPair = stockComponentFactory('a', { id: "match-pair", class: "matchPair", name: symbol });

        const matchSymbol = stockComponentFactory('p', { id: "match-symbol", class: "matchSymbol" }, symbol)
        const matchName = stockComponentFactory('p', { id: "match-name", class: "matchName" }, name);

        matchPair.append(matchSymbol, matchName);
        const searchDropdown = document.getElementById("search-dropdown");
        searchDropdown.style.display = "block";
        searchDropdown.append(matchPair);


        (function matchPairClicked() {
            matchPair.addEventListener("click", () => {
                const matchValue = matchPair.name;
                // console.log(`matchValue: ${matchValue}`);
                removeSearchDropdown();
                clearSearchText();
                createTimeSeriesButtons(matchValue);
                getCompanyOverview(matchValue);
                getTimeSeriesDaily(matchValue);
                getCompanyNews(matchValue);
            });
        })();
    });
}

export function removeSearchDropdown() {
    const searchDropdown = document.getElementById("search-dropdown");
    while (searchDropdown.firstChild) {
        searchDropdown.firstChild.remove();
    }
    searchDropdown.style.display = "none";
}