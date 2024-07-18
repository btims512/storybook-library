"use strict";(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[225],{"./src/stories/FontStyleTable.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FontStyleTable_stories});__webpack_require__("./node_modules/react/index.js");var Text=__webpack_require__("./src/components/Text.js"),jsx_runtime=(__webpack_require__("./src/components/Table.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const stylesInfo=[{name:"Large-Title",className:"large-title",font:"Titillium Web",weight:"Semibold",size:"32px",lineHeight:"40px"},{name:"Title-1",className:"title-1",font:"Titillium Web",weight:"Semibold",size:"28px",lineHeight:"40px"},{name:"Title-2",className:"title-2",font:"Titillium Web",weight:"Semibold",size:"22px",lineHeight:"28px"},{name:"Title-3",className:"title-3",font:"Titillium Web",weight:"Light",size:"22px",lineHeight:"28px"},{name:"Headline",className:"headline",font:"Titillium Web",weight:"Regular",size:"16px",lineHeight:"20px"},{name:"Body-1",className:"body-1",font:"Titillium Web",weight:"Regular",size:"14px",lineHeight:"16px"},{name:"Label-1",className:"label-1",font:"Titillium Web",weight:"Regular",size:"14px",lineHeight:"16px"},{name:"Body-2",className:"body-2",font:"Titillium Web",weight:"Regular",size:"10px",lineHeight:"14px"},{name:"Label-2",className:"label-2",font:"Titillium Web",weight:"Semibold",size:"10px",lineHeight:"14px"}],FontStylesTable=()=>(0,jsx_runtime.jsxs)("table",{className:"styles-table",children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Text Style Name"}),(0,jsx_runtime.jsx)("th",{children:"Font"}),(0,jsx_runtime.jsx)("th",{children:"Weight"}),(0,jsx_runtime.jsx)("th",{children:"Size"}),(0,jsx_runtime.jsx)("th",{children:"Line Height"})]})}),(0,jsx_runtime.jsx)("tbody",{children:stylesInfo.map(((style,index)=>(0,jsx_runtime.jsxs)("tr",{className:style.className,children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(Text.A,{className:style.className,children:style.name})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(Text.A,{className:style.className,children:style.font})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(Text.A,{className:style.className,children:style.weight})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(Text.A,{className:style.className,children:style.size})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(Text.A,{className:style.className,children:style.lineHeight})})]},index)))})]}),components_FontStylesTable=FontStylesTable;FontStylesTable.__docgenInfo={description:"",methods:[],displayName:"FontStylesTable"};const FontStyleTable_stories={title:"Design Tokens/Text",component:components_FontStylesTable},Default=()=>(0,jsx_runtime.jsx)(components_FontStylesTable,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <FontStylesTable />",...Default.parameters?.docs?.source}}}},"./src/components/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Text});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=_ref=>{let{children,className,as:Component="p"}=_ref;return(0,jsx_runtime.jsx)(Component,{className:"text-default ".concat(className),children})};Text_Text.defaultProps={className:"",as:"p"};const components_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"elementType"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/components/Table.css":()=>{}}]);