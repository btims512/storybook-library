"use strict";(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[656],{"./src/stories/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,Left:()=>Left,Right:()=>Right,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});__webpack_require__("./node_modules/react/index.js");var fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip_Tooltip=_ref=>{let{position,content,children}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"tooltip-container",children:[(0,jsx_runtime.jsx)(fa.gZZ,{className:"tooltip-icon"}),(0,jsx_runtime.jsxs)("div",{className:"tooltip-box tooltip-".concat(position),children:[(0,jsx_runtime.jsx)("div",{className:"tooltip-title",children}),(0,jsx_runtime.jsx)("div",{className:"tooltip-content",children:content})]})]})};Tooltip_Tooltip.defaultProps={position:"top"};const components_Tooltip=Tooltip_Tooltip;Tooltip_Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{position:{defaultValue:{value:'"top"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"right"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1}]},required:!1},content:{description:"",type:{name:"node"},required:!0},children:{description:"",type:{name:"node"},required:!1}}};const Tooltip_stories={title:"Components/Tooltip",component:components_Tooltip,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{margin:"200px",display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Story,{})})],argTypes:{position:{control:{type:"select",options:["top","right","bottom","left"]}},content:{control:"text"}}},Template=args=>(0,jsx_runtime.jsx)(components_Tooltip,{...args}),Top=Template.bind({});Top.args={position:"top",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Tooltip Top"}),(0,jsx_runtime.jsx)("p",{children:"Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."})]})};const Right=Template.bind({});Right.args={position:"right",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Tooltip Right"}),(0,jsx_runtime.jsx)("p",{children:"Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."})]})};const Bottom=Template.bind({});Bottom.args={position:"bottom",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Tooltip Bottom"}),(0,jsx_runtime.jsx)("p",{children:"Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."})]})};const Left=Template.bind({});Left.args={position:"left",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Tooltip Left"}),(0,jsx_runtime.jsx)("p",{children:"Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."})]})};const __namedExportsOrder=["Top","Right","Bottom","Left"];Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...Top.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...Right.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...Left.parameters?.docs?.source}}}}}]);