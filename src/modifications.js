var numeral = require('numeral');

export function percentChange(open, close) {
    const difference = close - open;
    if (difference < 0) {
        const percent = (difference / open) * 100;
        const fixedPercent = percent.toFixed(2);
        // percentNegative();
        return `${fixedPercent}%`;
    } else {
        const percent = (difference / open) * 100;
        const fixedPercent = percent.toFixed(2);
        // percentPositive();
        return `${fixedPercent}%`;
    };
}

export function convertToPercent(data) {
    const percent = data * 100
    const fixedPercent = percent.toFixed(2);
    return `${fixedPercent}%`;
}

export function fixAuthorsListed(authors) {
    const fixedAuthors = authors.join(", ");
    return fixedAuthors;
}

export function shortenLargeNums(num) {
    const shortNum = numeral(num).format('0.00a');
    return shortNum;
}