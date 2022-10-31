/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompanyOverview\": () => (/* binding */ getCompanyOverview),\n/* harmony export */   \"getTimeSeriesDaily\": () => (/* binding */ getTimeSeriesDaily),\n/* harmony export */   \"getTimeSeriesIntraday\": () => (/* binding */ getTimeSeriesIntraday),\n/* harmony export */   \"getTimeSeriesMonthly\": () => (/* binding */ getTimeSeriesMonthly),\n/* harmony export */   \"getTimeSeriesWeekly\": () => (/* binding */ getTimeSeriesWeekly)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n\n\n\n// API call to get intraday stock data\nasync function getTimeSeriesIntraday() {\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearErrorMessage)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideStockValues)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.revertTimeButtons)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.styleButtons)(\"intraday-btn\", \"red\");\n  const searchValue = (0,_main__WEBPACK_IMPORTED_MODULE_0__.getSearchValue)();\n  console.log(searchValue);\n  try {\n    const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchValue}&interval=5min&apikey=${\"JCXH7RL2H20I2NAG\"}`;\n    const response = await fetch(endpoint, {\n      mode: 'cors'\n    });\n    const stockData = await response.json();\n    console.log(stockData);\n    const lastRefreshedDate = stockData[\"Meta Data\"][\"3. Last Refreshed\"];\n    console.log(lastRefreshedDate);\n    const lastRefreshed = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"last-refreshed\",\n      class: \"lastRefreshed\"\n    }, (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDateToString)(lastRefreshedDate));\n    const high = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"intraday-high\",\n      class: \"high\"\n    }, stockData[\"Time Series (5min)\"][lastRefreshedDate][\"2. high\"]);\n    const low = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"intraday-low\",\n      class: \"low\"\n    }, stockData[\"Time Series (5min)\"][lastRefreshedDate][\"3. low\"]);\n    const open = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"intraday-open\",\n      class: \"open\"\n    }, stockData[\"Time Series (5min)\"][lastRefreshedDate][\"1. open\"]);\n    const close = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"intraday-close\",\n      class: \"close\"\n    }, stockData[\"Time Series (5min)\"][lastRefreshedDate][\"4. close\"]);\n    const stockValues = (0,_main__WEBPACK_IMPORTED_MODULE_0__.startStockValues)();\n    stockValues.append(lastRefreshed, high, low, open, close);\n  } catch (error) {\n    console.log(error);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.createErrorMessage)();\n  }\n}\n\n// API call to get daily stock data\nasync function getTimeSeriesDaily() {\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearErrorMessage)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideStockValues)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.revertTimeButtons)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.styleButtons)(\"daily-btn\", \"red\");\n  const searchValue = (0,_main__WEBPACK_IMPORTED_MODULE_0__.getSearchValue)();\n  console.log(searchValue);\n  try {\n    const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchValue}&apikey=${\"JCXH7RL2H20I2NAG\"}`;\n    const response = await fetch(endpoint, {\n      mode: 'cors'\n    });\n    const stockData = await response.json();\n    console.log(stockData);\n    const lastRefreshedDate = stockData[\"Meta Data\"][\"3. Last Refreshed\"].slice(0, 10);\n    const lastRefreshed = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"last-refreshed\",\n      class: \"lastRefreshed\"\n    }, (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDateToString)(lastRefreshedDate));\n    const high = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"daily-high\",\n      class: \"high\"\n    }, stockData[\"Time Series (Daily)\"][lastRefreshedDate][\"2. high\"]);\n    const low = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"daily-low\",\n      class: \"low\"\n    }, stockData[\"Time Series (Daily)\"][lastRefreshedDate][\"3. low\"]);\n    const open = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"daily-open\",\n      class: \"open\"\n    }, stockData[\"Time Series (Daily)\"][lastRefreshedDate][\"1. open\"]);\n    const close = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"daily-close\",\n      class: \"close\"\n    }, stockData[\"Time Series (Daily)\"][lastRefreshedDate][\"4. close\"]);\n    const stockValues = (0,_main__WEBPACK_IMPORTED_MODULE_0__.startStockValues)();\n    stockValues.append(lastRefreshed, high, low, open, close);\n  } catch (error) {\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideStockValues)();\n    console.log(error);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.createErrorMessage)();\n  }\n}\n\n// API call to get weekly stock data\nasync function getTimeSeriesWeekly() {\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearErrorMessage)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideStockValues)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.revertTimeButtons)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.styleButtons)(\"weekly-btn\", \"red\");\n  const searchValue = (0,_main__WEBPACK_IMPORTED_MODULE_0__.getSearchValue)();\n  console.log(searchValue);\n  try {\n    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${searchValue}&apikey=${\"JCXH7RL2H20I2NAG\"}`, {\n      mode: 'cors'\n    });\n    const stockData = await response.json();\n    console.log(stockData);\n    const lastRefreshedDate = stockData[\"Meta Data\"][\"3. Last Refreshed\"].slice(0, 10);\n    const lastRefreshed = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"last-refreshed\",\n      class: \"lastRefreshed\"\n    }, (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDateToString)(lastRefreshedDate));\n    const high = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"weekly-high\",\n      class: \"high\"\n    }, stockData[\"Weekly Time Series\"][lastRefreshedDate][\"2. high\"]);\n    const low = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"weekly-low\",\n      class: \"low\"\n    }, stockData[\"Weekly Time Series\"][lastRefreshedDate][\"3. low\"]);\n    const open = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"weekly-open\",\n      class: \"open\"\n    }, stockData[\"Weekly Time Series\"][lastRefreshedDate][\"1. open\"]);\n    const close = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"weekly-close\",\n      class: \"close\"\n    }, stockData[\"Weekly Time Series\"][lastRefreshedDate][\"4. close\"]);\n    const stockValues = (0,_main__WEBPACK_IMPORTED_MODULE_0__.startStockValues)();\n    stockValues.append(lastRefreshed, high, low, open, close);\n  } catch (error) {\n    console.log(error);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.createErrorMessage)();\n  }\n}\nasync function getTimeSeriesMonthly() {\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearErrorMessage)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideStockValues)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.revertTimeButtons)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.styleButtons)(\"monthly-btn\", \"red\");\n  const searchValue = (0,_main__WEBPACK_IMPORTED_MODULE_0__.getSearchValue)();\n  console.log(searchValue);\n  try {\n    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${searchValue}&apikey=${\"JCXH7RL2H20I2NAG\"}`, {\n      mode: 'cors'\n    });\n    const stockData = await response.json();\n    console.log(stockData);\n    const lastRefreshedDate = stockData[\"Meta Data\"][\"3. Last Refreshed\"].slice(0, 10);\n    const lastRefreshed = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"last-refreshed\",\n      class: \"lastRefreshed\"\n    }, (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDateToString)(lastRefreshedDate));\n    const high = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"monthly-high\",\n      class: \"high\"\n    }, stockData[\"Monthly Time Series\"][lastRefreshedDate][\"2. high\"]);\n    const low = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"monthly-low\",\n      class: \"low\"\n    }, stockData[\"Monthly Time Series\"][lastRefreshedDate][\"3. low\"]);\n    const open = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"monthly-open\",\n      class: \"open\"\n    }, stockData[\"Monthly Time Series\"][lastRefreshedDate][\"1. open\"]);\n    const close = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"monthly-close\",\n      class: \"close\"\n    }, stockData[\"Monthly Time Series\"][lastRefreshedDate][\"4. close\"]);\n    const stockValues = (0,_main__WEBPACK_IMPORTED_MODULE_0__.startStockValues)();\n    stockValues.append(lastRefreshed, high, low, open, close);\n  } catch (error) {\n    console.log(error);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.createErrorMessage)();\n  }\n}\nasync function getCompanyOverview() {\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearErrorMessage)();\n  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideCompanyInfo)();\n  const searchValue = (0,_main__WEBPACK_IMPORTED_MODULE_0__.getSearchValue)();\n  try {\n    const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchValue}&apikey=${\"JCXH7RL2H20I2NAG\"}`, {\n      mode: 'cors'\n    });\n    const stockData = await response.json();\n    console.log(stockData);\n    const symbol = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"symbol\",\n      class: \"symbol\"\n    }, stockData[\"Symbol\"]);\n    const assetType = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"asset-type\",\n      class: \"assetType\"\n    }, stockData[\"AssetType\"]);\n    const name = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"name\",\n      class: \"name\"\n    }, stockData[\"Name\"]);\n    const description = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"description\",\n      class: \"description\"\n    }, stockData[\"Description\"]);\n    const exchange = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"exchange\",\n      class: \"exchange\"\n    }, stockData[\"Exchange\"]);\n    const country = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"country\",\n      class: \"country\"\n    }, stockData[\"Country\"]);\n    const sector = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"sector\",\n      class: \"sector\"\n    }, stockData[\"Sector\"]);\n    const industry = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"industry\",\n      class: \"industry\"\n    }, stockData[\"Industry\"]);\n    const peRatio = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"peRatio\",\n      class: \"peRatio\"\n    }, stockData[\"PERatio\"]);\n    const dividendYield = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"dividend-yield\",\n      class: \"dividendYield\"\n    }, `${stockData[\"DividendYield\"] * 100}%`);\n    const fiftyTwoWeekHigh = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"fifty-two-week-high\",\n      class: \"fiftyTwoWeekHigh\"\n    }, stockData[\"52WeekHigh\"]);\n    const fiftyTwoWeekLow = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"fifty-two-week-low\",\n      class: \"fiftyTwoWeekLow\"\n    }, stockData[\"52WeekLow\"]);\n    const earningsPerShare = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('li', {\n      id: \"earnings-per-share\",\n      class: \"earningsPerShare\"\n    }, stockData[\"EPS\"]);\n\n    // const allData = getKeyAndValue(stockData);\n    // console.log(allData);\n    const companyInfo = (0,_main__WEBPACK_IMPORTED_MODULE_0__.startCompanyInfo)();\n    companyInfo.append(symbol, assetType, name, description, exchange, country, sector, industry, peRatio, earningsPerShare, dividendYield, fiftyTwoWeekHigh, fiftyTwoWeekLow);\n  } catch (error) {\n    console.log(error);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.createErrorMessage)();\n  }\n}\n\n// function getKeyAndValue(data) {\n//     const sliced = Object.keys(data).slice(0, 2).reduce((result, key) => {\n//         result[key] = data[key];\n\n//         return result;\n//     }, {});\n//     return sliced;\n// }\n\n// function getKeyAndValue(data) {\n//         Object.entries(data).forEach(([key, value]) => {\n//     `${key}: ${value}`;\n// });\n// }\n\n// function addAllData(data) {\n//     data.forEach(item => {\n//         stockComponentFactory('li', { id: \"all-data\", class: \"companyInfo\" }, item);\n//     });\n// }\n\n// function getKeyAndValue(data) {\n//     let infoArray = [];\n//     for (const [key, value] of Object.entries(data)) {\n//         let pairs = `${key}: ${value}`;\n//         return infoArray.push(pairs);\n\n//     }\n//     return infoArray;\n// };\n\n//# sourceURL=webpack://stock-finder/./src/api.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTimeSeriesButtons\": () => (/* binding */ createTimeSeriesButtons)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\nfunction createTimeSeriesButtons() {\n  const timeframeButtons = document.getElementById(\"timeframe-buttons\");\n  timeframeButtons.innerHTML = \"\";\n  const intradayBtn = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('button', {\n    id: \"intraday-btn\",\n    class: \"timeframeButtons\"\n  }, \"Intraday\");\n  intradayBtn.addEventListener(\"click\", _api__WEBPACK_IMPORTED_MODULE_1__.getTimeSeriesIntraday);\n  const dailyBtn = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('button', {\n    id: \"daily-btn\",\n    class: \"timeframeButtons\"\n  }, \"Daily\");\n  dailyBtn.addEventListener(\"click\", _api__WEBPACK_IMPORTED_MODULE_1__.getTimeSeriesDaily);\n  const weeklyBtn = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('button', {\n    id: \"weekly-btn\",\n    class: \"timeframeButtons\"\n  }, \"Weekly\");\n  weeklyBtn.addEventListener(\"click\", _api__WEBPACK_IMPORTED_MODULE_1__.getTimeSeriesWeekly);\n  const monthlyBtn = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stockComponentFactory)('button', {\n    id: \"monthly-btn\",\n    class: \"timeframeButtons\"\n  }, \"Monthly\");\n  monthlyBtn.addEventListener(\"click\", _api__WEBPACK_IMPORTED_MODULE_1__.getTimeSeriesMonthly);\n  timeframeButtons.append(intradayBtn, dailyBtn, weeklyBtn, monthlyBtn);\n}\n\n//# sourceURL=webpack://stock-finder/./src/buttons.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDateToString\": () => (/* binding */ convertDateToString)\n/* harmony export */ });\n// provides user date\nfunction getUserDate() {\n  let today = new Date().toISOString().slice(0, 10);\n  return today;\n}\n// console.log(getUserDate())\n\n// provides user date and time EST\nfunction getESTDateAndTime() {\n  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds\n  var newyorkISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, 19).replace(\"T\", \" \");\n  return newyorkISOTime;\n}\n// console.log(getESTDateAndTime())\n\nfunction convertDateToString(date) {\n  const year = date.substring(0, 4);\n  const month = date.substring(5, 7);\n  const day = date.substring(8, 10);\n  const time = date.substring(11, 16);\n  const convertedDateAndTime = `${month}/${day}/${year} ${time}`;\n  return convertedDateAndTime;\n}\n\n//# sourceURL=webpack://stock-finder/./src/date.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nfunction searchInitiated() {\n  const search = document.getElementById(\"submit-ticker\");\n  search.addEventListener(\"click\", firstSearch);\n}\nfunction firstSearch() {\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.createTimeSeriesButtons)();\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__.getTimeSeriesDaily)();\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__.getCompanyOverview)();\n}\nsearchInitiated();\n\n//# sourceURL=webpack://stock-finder/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearErrorMessage\": () => (/* binding */ clearErrorMessage),\n/* harmony export */   \"createErrorMessage\": () => (/* binding */ createErrorMessage),\n/* harmony export */   \"getSearchValue\": () => (/* binding */ getSearchValue),\n/* harmony export */   \"hideCompanyInfo\": () => (/* binding */ hideCompanyInfo),\n/* harmony export */   \"hideStockValues\": () => (/* binding */ hideStockValues),\n/* harmony export */   \"revertTimeButtons\": () => (/* binding */ revertTimeButtons),\n/* harmony export */   \"startCompanyInfo\": () => (/* binding */ startCompanyInfo),\n/* harmony export */   \"startStockValues\": () => (/* binding */ startStockValues),\n/* harmony export */   \"stockComponentFactory\": () => (/* binding */ stockComponentFactory),\n/* harmony export */   \"styleButtons\": () => (/* binding */ styleButtons)\n/* harmony export */ });\nfunction getSearchValue() {\n  const value = document.getElementById(\"search-bar\").value;\n  return value;\n}\n\n// resets timeframe buttons styling\nfunction revertTimeButtons() {\n  const buttons = document.querySelectorAll(\".timeframeButtons\");\n  buttons.forEach(button => {\n    button.style.color = \"black\";\n  });\n  return buttons;\n}\n\n// factory function to style timeframe buttons\nconst styleButtons = (buttonID, btnColor) => {\n  const timeBtn = document.getElementById(buttonID);\n  timeBtn.style.color = btnColor;\n};\n\n// factory function to create data point variables for stocks (high, low, etc.)\nconst stockComponentFactory = (type, attributes, content) => {\n  const component = document.createElement(type);\n  for (Object.key in attributes) {\n    component.setAttribute(Object.key, attributes[Object.key]);\n  }\n  component.textContent = content;\n  return component;\n};\nfunction startStockValues() {\n  const stockValues = document.getElementById(\"stock-values\");\n  stockValues.classList.add(\"show\");\n  return stockValues;\n}\nfunction hideStockValues() {\n  const stockValues = document.getElementById(\"stock-values\");\n  stockValues.classList.remove(\"show\");\n  stockValues.innerHTML = \"\";\n  return stockValues;\n}\nfunction startCompanyInfo() {\n  const companyInfo = document.getElementById(\"company-info\");\n  companyInfo.classList.add(\"show\");\n  return companyInfo;\n}\nfunction hideCompanyInfo() {\n  const companyInfo = document.getElementById(\"company-info\");\n  companyInfo.classList.remove(\"show\");\n  companyInfo.innerHTML = \"\";\n  return companyInfo;\n}\nfunction createErrorMessage(error) {\n  const errorMsg = document.getElementById(\"error-message\");\n  errorMsg.textContent = \"No Data Found\";\n  return errorMsg;\n}\nfunction clearErrorMessage() {\n  const errorMsg = document.getElementById(\"error-message\");\n  errorMsg.innerHTML = \"\";\n  return errorMsg;\n}\n\n//# sourceURL=webpack://stock-finder/./src/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NunitoSans-Black.ttf */ \"./src/fonts/NunitoSans-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: 'NunitoSans-Black';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf');\\r\\n    font-weight: 600;\\r\\n    font-style: normal;\\r\\n  }\\r\\n\\r\\n\\r\\n:root {\\r\\n    --main-bg-color: rgb(100, 99, 99);\\r\\n\\r\\n}\\r\\n\\r\\nbody {\\r\\n    margin: 0;\\r\\n    \\r\\n}\\r\\n\\r\\n.container {\\r\\n    border: 5px solid black;\\r\\n    font-family: \\\"NunitoSans-Black\\\";\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-align: center;\\r\\n    font-size: 80px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    background-color: blueviolet;\\r\\n    color: white;\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    font-size: 18px;\\r\\n    align-items: start;\\r\\n    text-align: center\\r\\n}\\r\\n\\r\\n.searchButton {\\r\\n    position: relative;\\r\\n    margin-left: -4px;\\r\\n    border-top-left-radius: 0%;\\r\\n    border-bottom-left-radius: 0%;\\r\\n    width: 80px;\\r\\n    height: 46px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\nbutton:hover {\\r\\n    background-color: white;\\r\\n    color: blueviolet;\\r\\n    border-style: solid;\\r\\n    border-width: 2px;\\r\\n    border-color: blueviolet;\\r\\n    \\r\\n}\\r\\n\\r\\n.searchBarForm {\\r\\n    text-align: center;\\r\\n    margin-top: 20px;\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n    \\r\\n}\\r\\n\\r\\n.searchBar {\\r\\n    position: relative;\\r\\n    height: 40px;\\r\\n    font-size: 18px;\\r\\n    max-width: 600px;\\r\\n    width: 50%;\\r\\n    margin: 0;\\r\\n    border-style: solid;\\r\\n    border-width: 2px;\\r\\n    border-right: none;\\r\\n    border-radius: 5px 0 0 5px;\\r\\n} \\r\\n\\r\\n.searchBar:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.stockValues {\\r\\n    display: none;\\r\\n    background-color: rgb(33, 43, 17);\\r\\n    width: fit-content;\\r\\n    border-radius: 10px;\\r\\n    text-align: left;\\r\\n    color: rgb(255, 255, 255);\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.stockValues.show {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.companyInfo {\\r\\n    display: none;\\r\\n    background-color: rgb(0, 0, 255);\\r\\n    font-size: 20px;\\r\\n    border-radius: 10px;\\r\\n    color: white;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.companyInfo.show {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.timeframeButtons {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.lastRefreshed::before {\\r\\n    content: \\\"Last Refreshed: \\\";\\r\\n}\\r\\n\\r\\n.high::before {\\r\\n    content: \\\"High: \\\";\\r\\n}\\r\\n\\r\\n.low::before {\\r\\n    content: \\\"Low: \\\";\\r\\n}\\r\\n\\r\\n.open::before {\\r\\n    content: \\\"Open: \\\";\\r\\n}\\r\\n\\r\\n.close::before {\\r\\n    content: \\\"Close: \\\";\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.exchange::before {\\r\\n    content: \\\"Exchange: \\\";\\r\\n}\\r\\n\\r\\n.country::before {\\r\\n    content: \\\"Country: \\\";\\r\\n}\\r\\n\\r\\n.sector::before {\\r\\n    content: \\\"Sector: \\\";\\r\\n}\\r\\n\\r\\n.industry::before {\\r\\n    content: \\\"Industry: \\\";\\r\\n}\\r\\n\\r\\n.peRatio::before {\\r\\n    content: \\\"PE Ratio: \\\";\\r\\n}\\r\\n\\r\\n.dividendYield::before {\\r\\n    content: \\\"Dividend Yield: \\\";\\r\\n}\\r\\n\\r\\n.fiftyTwoWeekHigh::before {\\r\\n    content: \\\"52 Week High: \\\";\\r\\n}\\r\\n\\r\\n.fiftyTwoWeekLow::before {\\r\\n    content: \\\"52 Week Low: \\\";\\r\\n}\\r\\n\\r\\n.earningsPerShare::before {\\r\\n    content: \\\"EPS: \\\";\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://stock-finder/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://stock-finder/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://stock-finder/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://stock-finder/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://stock-finder/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://stock-finder/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/NunitoSans-Black.ttf":
/*!****************************************!*\
  !*** ./src/fonts/NunitoSans-Black.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bb7ef891454c53a6c38.ttf\";\n\n//# sourceURL=webpack://stock-finder/./src/fonts/NunitoSans-Black.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;