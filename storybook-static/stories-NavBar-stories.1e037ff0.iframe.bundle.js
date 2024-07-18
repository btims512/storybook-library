"use strict";(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[597],{"./src/stories/NavBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NavBar.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/NavBar",component:_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{links:{control:"array"}}},Default=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.A,{...args})).bind({});Default.args={links:[{href:"#",label:"Tab 1"},{href:"#",label:"Tab 2"},{href:"#",label:"Tab 3"},{href:"#",label:"Tab 4"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <NavBar {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/NavBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_NavBar});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemeSwitcher_ThemeSwitcher=()=>{const[theme,setTheme]=(0,react.useState)("light");(0,react.useEffect)((()=>{document.body.className=theme}),[theme]);return(0,jsx_runtime.jsxs)("label",{className:"switch",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",onChange:()=>{setTheme((prevTheme=>"light"===prevTheme?"dark":"light"))},checked:"dark"===theme}),(0,jsx_runtime.jsx)("span",{className:"slider"})]})},components_ThemeSwitcher=ThemeSwitcher_ThemeSwitcher;ThemeSwitcher_ThemeSwitcher.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcher"};const NavBar_NavBar=_ref=>{let{links}=_ref;const[menuOpen,setMenuOpen]=(0,react.useState)(!1),toggleMenu=()=>{setMenuOpen(!menuOpen)};return(0,jsx_runtime.jsx)("div",{className:"nav-bar",children:(0,jsx_runtime.jsxs)("div",{className:"nav-content",children:[(0,jsx_runtime.jsxs)("div",{className:"left-content",children:[(0,jsx_runtime.jsx)("nav",{className:"nav-links",children:links.map(((link,index)=>(0,jsx_runtime.jsx)("a",{href:link.href,className:"nav-link label-1",children:link.label},index)))}),(0,jsx_runtime.jsx)("nav",{className:"side-menu ".concat(menuOpen?"open":""),children:links.map(((link,index)=>(0,jsx_runtime.jsx)("a",{href:link.href,className:"side-nav-link headline",children:link.label},index)))})]}),(0,jsx_runtime.jsxs)("div",{className:"right-content",children:[(0,jsx_runtime.jsx)(components_ThemeSwitcher,{}),(0,jsx_runtime.jsx)("div",{className:"hamburger ".concat(menuOpen?"open":""),onClick:toggleMenu,children:(0,jsx_runtime.jsx)("div",{})})]}),menuOpen&&(0,jsx_runtime.jsx)("div",{className:"overlay",onClick:toggleMenu})]})})},components_NavBar=NavBar_NavBar;NavBar_NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{links:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{href:{name:"string",required:!0},label:{name:"string",required:!0}}}},required:!0}}}}}]);