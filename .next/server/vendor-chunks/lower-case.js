"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/lower-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lower-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.lowerCase = exports.localeLowerCase = void 0;\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */\nvar SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"\\u0069\",\n            I: \"\\u0131\",\n            İ: \"\\u0069\",\n        },\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"\\u0069\",\n            I: \"\\u0131\",\n            İ: \"\\u0069\",\n        },\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"\\u0069\\u0307\",\n            J: \"\\u006A\\u0307\",\n            Į: \"\\u012F\\u0307\",\n            Ì: \"\\u0069\\u0307\\u0300\",\n            Í: \"\\u0069\\u0307\\u0301\",\n            Ĩ: \"\\u0069\\u0307\\u0303\",\n        },\n    },\n};\n/**\n * Localized lower case.\n */\nfunction localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang)\n        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));\n    return lowerCase(str);\n}\nexports.localeLowerCase = localeLowerCase;\n/**\n * Lower case as a function.\n */\nfunction lowerCase(str) {\n    return str.toLowerCase();\n}\nexports.lowerCase = lowerCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHFCQUFxQjtBQUN0RjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi10ZXN0Ly4vbm9kZV9tb2R1bGVzL2xvd2VyLWNhc2UvZGlzdC9pbmRleC5qcz9lMWJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb3dlckNhc2UgPSBleHBvcnRzLmxvY2FsZUxvd2VyQ2FzZSA9IHZvaWQgMDtcbi8qKlxuICogU291cmNlOiBmdHA6Ly9mdHAudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvdWNkL1NwZWNpYWxDYXNpbmcudHh0XG4gKi9cbnZhciBTVVBQT1JURURfTE9DQUxFID0ge1xuICAgIHRyOiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzB8XFx1MDA0OXxcXHUwMDQ5XFx1MDMwNy9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGF6OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzAvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICByZWdleHA6IC9cXHUwMDQ5fFxcdTAwNEF8XFx1MDEyRXxcXHUwMENDfFxcdTAwQ0R8XFx1MDEyOC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIEk6IFwiXFx1MDA2OVxcdTAzMDdcIixcbiAgICAgICAgICAgIEo6IFwiXFx1MDA2QVxcdTAzMDdcIixcbiAgICAgICAgICAgIMSuOiBcIlxcdTAxMkZcXHUwMzA3XCIsXG4gICAgICAgICAgICDDjDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDBcIixcbiAgICAgICAgICAgIMONOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMVwiLFxuICAgICAgICAgICAgxKg6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAzXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vKipcbiAqIExvY2FsaXplZCBsb3dlciBjYXNlLlxuICovXG5mdW5jdGlvbiBsb2NhbGVMb3dlckNhc2Uoc3RyLCBsb2NhbGUpIHtcbiAgICB2YXIgbGFuZyA9IFNVUFBPUlRFRF9MT0NBTEVbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmIChsYW5nKVxuICAgICAgICByZXR1cm4gbG93ZXJDYXNlKHN0ci5yZXBsYWNlKGxhbmcucmVnZXhwLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gbGFuZy5tYXBbbV07IH0pKTtcbiAgICByZXR1cm4gbG93ZXJDYXNlKHN0cik7XG59XG5leHBvcnRzLmxvY2FsZUxvd2VyQ2FzZSA9IGxvY2FsZUxvd2VyQ2FzZTtcbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBsb3dlckNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5sb3dlckNhc2UgPSBsb3dlckNhc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/lower-case/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/lower-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lower-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.lowerCase = exports.localeLowerCase = void 0;\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */ var SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"i̇\",\n            J: \"j̇\",\n            Į: \"į̇\",\n            Ì: \"i̇̀\",\n            Í: \"i̇́\",\n            Ĩ: \"i̇̃\"\n        }\n    }\n};\n/**\n * Localized lower case.\n */ function localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {\n        return lang.map[m];\n    }));\n    return lowerCase(str);\n}\nexports.localeLowerCase = localeLowerCase;\n/**\n * Lower case as a function.\n */ function lowerCase(str) {\n    return str.toLowerCase();\n}\nexports.lowerCase = lowerCase; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxpQkFBaUIsR0FBR0EsdUJBQXVCLEdBQUcsS0FBSztBQUNuRDs7Q0FFQyxHQUNELElBQUlJLG1CQUFtQjtJQUNuQkMsSUFBSTtRQUNBQyxRQUFRO1FBQ1JDLEtBQUs7WUFDREMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLElBQUk7UUFDUjtJQUNKO0lBQ0FDLElBQUk7UUFDQUwsUUFBUTtRQUNSQyxLQUFLO1lBQ0RDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxJQUFJO1FBQ1I7SUFDSjtJQUNBRSxJQUFJO1FBQ0FOLFFBQVE7UUFDUkMsS0FBSztZQUNERSxHQUFHO1lBQ0hJLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsR0FBRztRQUNQO0lBQ0o7QUFDSjtBQUNBOztDQUVDLEdBQ0QsU0FBU2QsZ0JBQWdCZSxHQUFHLEVBQUVDLE1BQU07SUFDaEMsSUFBSUMsT0FBT2hCLGdCQUFnQixDQUFDZSxPQUFPRSxXQUFXLEdBQUc7SUFDakQsSUFBSUQsTUFDQSxPQUFPbEIsVUFBVWdCLElBQUlJLE9BQU8sQ0FBQ0YsS0FBS2QsTUFBTSxFQUFFLFNBQVVpQixDQUFDO1FBQUksT0FBT0gsS0FBS2IsR0FBRyxDQUFDZ0IsRUFBRTtJQUFFO0lBQ2pGLE9BQU9yQixVQUFVZ0I7QUFDckI7QUFDQWxCLHVCQUF1QixHQUFHRztBQUMxQjs7Q0FFQyxHQUNELFNBQVNELFVBQVVnQixHQUFHO0lBQ2xCLE9BQU9BLElBQUlHLFdBQVc7QUFDMUI7QUFDQXJCLGlCQUFpQixHQUFHRSxXQUNwQixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtdGVzdC8uL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QvaW5kZXguanM/MmMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG93ZXJDYXNlID0gZXhwb3J0cy5sb2NhbGVMb3dlckNhc2UgPSB2b2lkIDA7XG4vKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZnVuY3Rpb24gbG9jYWxlTG93ZXJDYXNlKHN0ciwgbG9jYWxlKSB7XG4gICAgdmFyIGxhbmcgPSBTVVBQT1JURURfTE9DQUxFW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAobGFuZylcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XG4gICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIpO1xufVxuZXhwb3J0cy5sb2NhbGVMb3dlckNhc2UgPSBsb2NhbGVMb3dlckNhc2U7XG4vKipcbiAqIExvd2VyIGNhc2UgYXMgYSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMubG93ZXJDYXNlID0gbG93ZXJDYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibG93ZXJDYXNlIiwibG9jYWxlTG93ZXJDYXNlIiwiU1VQUE9SVEVEX0xPQ0FMRSIsInRyIiwicmVnZXhwIiwibWFwIiwixLAiLCJJIiwiScyHIiwiYXoiLCJsdCIsIkoiLCLEriIsIsOMIiwiw40iLCLEqCIsInN0ciIsImxvY2FsZSIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist/index.js\n");

/***/ })

};
;