"use strict";(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[799],{"./src/stories/ResponsiveLayout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResponsiveLayout_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ResponsiveLayout_ResponsiveLayout=_ref=>{let{header,children}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"layout-container",children:[(0,jsx_runtime.jsx)("div",{className:"header",children:header}),(0,jsx_runtime.jsx)("div",{className:"content",children})]})},components_ResponsiveLayout=ResponsiveLayout_ResponsiveLayout;ResponsiveLayout_ResponsiveLayout.__docgenInfo={description:"",methods:[],displayName:"ResponsiveLayout",props:{header:{description:"",type:{name:"node"},required:!0},children:{description:"",type:{name:"node"},required:!0}}};var Text=__webpack_require__("./src/components/Text.js");const ResponsiveLayout_stories={title:"Layouts/PageTemplate",component:components_ResponsiveLayout,argTypes:{header:{control:!1},children:{control:!1}}},Default=(args=>(0,jsx_runtime.jsx)(components_ResponsiveLayout,{...args})).bind({});Default.args={header:(0,jsx_runtime.jsx)("div",{style:{padding:"16px",background:"lightgray"},children:"Header"}),children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Text.A,{className:"large-title",as:"h1",children:"Here's a title"}),(0,jsx_runtime.jsx)(Text.A,{className:"headline",style:{marginBottom:"24px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tortor sed nulla tempor mattis sed sit amet sem. Quisque euismod ligula purus, id auctor mauris finibus eget. Integer ut imperdiet quam. Maecenas id scelerisque neque. Sed auctor felis leo, eget venenatis dolor rutrum vitae. Sed luctus ligula non eros aliquet fermentum. Ut non nunc sed lorem consequat aliquet at id nunc. Ut ut quam ut eros tincidunt porttitor. Mauris arcu neque, tristique nec sagittis vitae, placerat ut nibh. Fusce et pharetra velit, quis maximus quam. Donec venenatis justo lorem, eu finibus nisl rutrum vitae."}),(0,jsx_runtime.jsx)(Text.A,{className:"headline",style:{marginBottom:"24px"},children:"Another section of text to demonstrate spacing."})]})};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ResponsiveLayout {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Text});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=_ref=>{let{children,className,as:Component="p"}=_ref;return(0,jsx_runtime.jsx)(Component,{className:"text-default ".concat(className),children})};Text_Text.defaultProps={className:"",as:"p"};const components_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"elementType"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}}}]);