"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 6571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/utilities/Navlink.js



const Navlink = ({ textSize , href , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "py-1 hover:shadow-lg hover:shadow-gray-900/50",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: `${textSize ? textSize : ''} font-Dongle px-4 py-2`,
                children: children
            })
        })
    }));
};
/* harmony default export */ const utilities_Navlink = (Navlink);

// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
// EXTERNAL MODULE: ./components/utilities/Line.js
var Line = __webpack_require__(428);
;// CONCATENATED MODULE: ./components/main/MobileNavbar.js





const Mobilenavbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Button, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu.Items, {
                className: "absolute right-0 top-0 mt-9 mr-10 bg-white text-black w-1/3 rounded px-4 py-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(utilities_Navlink, {
                            href: "/",
                            textSize: "text-2xl inline-block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 inline-block mr-3 text-purple-800",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                    })
                                }),
                                "Home"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(utilities_Navlink, {
                            href: "/",
                            textSize: "text-2xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 inline-block mr-3 text-cyan-500",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                                    })
                                }),
                                "Movies"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                            href: "/",
                            textSize: "text-2xl",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                            href: "/",
                            textSize: "text-2xl",
                            children: "Sign Up"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                            href: "/",
                            textSize: "text-2xl",
                            children: "Sign In"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const MobileNavbar = (Mobilenavbar);

// EXTERNAL MODULE: ./components/utilities/Searchbar.js
var Searchbar = __webpack_require__(4519);
;// CONCATENATED MODULE: ./components/main/Navbar.js






const Navbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sticky top-0 z-50 bg-gray-900 h-12 fixed text-white w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden sm:flex items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                                    href: "/",
                                    textSize: "text-3xl font-semibold",
                                    children: "My App"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                                    href: "/",
                                    textSize: "text-2xl",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                                    href: "/movies",
                                    textSize: "text-2xl",
                                    children: "Movies"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden sm:flex items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                                    href: "/auth/login",
                                    textSize: "text-2xl",
                                    children: "Sign In"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                                    href: "/auth/register",
                                    textSize: "text-2xl",
                                    children: "Sign Up"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sm:hidden flex items-center justify-between px-4 py-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(utilities_Navlink, {
                        href: "#",
                        textSize: "text-3xl",
                        children: "My App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileNavbar, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Line/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const main_Navbar = (Navbar);


/***/ }),

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Line = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-b border-white/10"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ 4519:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




const Searchbar = ()=>{
    const { 0: url , 1: setUrl  } = useState();
    const { 0: data1 , 1: setData  } = useState();
    const { 0: loading , 1: setLoading  } = useState();
    const change = (e)=>{
        setUrl(e.target.value);
    };
    const getMovies = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios.get(`https://www.omdbapi.com/?s=${url}&page=1&apikey=f074ffb5`);
            setData(data.Search);
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(()=>{
        getMovies();
    }, []);
    return(/*#__PURE__*/ _jsx("div", {
        className: "lg:inline font-Dongle lg:text-2xl container mt-5",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "flex items-center justify-center",
            children: [
                /*#__PURE__*/ _jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-9 w-8 py-2 bg-white rounded-l-md text-black border-r-none",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ _jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                }),
                /*#__PURE__*/ _jsx("input", {
                    className: " text-black h-9 border-l-none rounded-r-md bg-white w-full py-3 pl-2 pr-3 shadow z-10",
                    type: "text",
                    value: url,
                    autoFocus: true,
                    onChange: (evt)=>{
                        console.log(evt.target.value);
                    },
                    placeholder: "Search movie..."
                })
            ]
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Searchbar)));


/***/ })

};
;