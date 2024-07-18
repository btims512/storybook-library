"use strict";(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[973],{"./src/stories/GridLayout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grid:()=>Grid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GridLayout_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=(__webpack_require__("./src/components/Layout.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const GridLayout=_ref=>{let{columns,gap,children}=_ref;const gridStyle={display:"grid",gridTemplateColumns:"repeat(".concat(columns,", 1fr)"),gap:"".concat(gap,"px")};return(0,jsx_runtime.jsx)("div",{className:"flexbox-container margin-layout grid-layout",style:gridStyle,children})},components_GridLayout=GridLayout;GridLayout.__docgenInfo={description:"",methods:[],displayName:"GridLayout",props:{columns:{description:"",type:{name:"number"},required:!0},gap:{description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};var TextInput=__webpack_require__("./src/components/TextInput.js"),Text=__webpack_require__("./src/components/Text.js"),Button=__webpack_require__("./src/components/Button.js");const GridLayout_stories={title:"Layouts/Grid Layout",component:components_GridLayout,argTypes:{columns:{control:{type:"number",min:1,max:12}},gap:{control:{type:"number",min:0,max:50}},children:{control:!1}}},Grid=(args=>{const[input1,setInput1]=(0,react.useState)(""),[input2,setInput2]=(0,react.useState)(""),[input3,setInput3]=(0,react.useState)(""),[input4,setInput4]=(0,react.useState)("");return(0,jsx_runtime.jsx)(components_GridLayout,{...args,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"inner-div one",children:[(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"}}),(0,jsx_runtime.jsx)("div",{className:"Title",children:(0,jsx_runtime.jsx)(Text.A,{className:"large-title",children:"Here's a title"})}),(0,jsx_runtime.jsx)("div",{className:"body",children:(0,jsx_runtime.jsx)(Text.A,{className:"headline",style:{marginBottom:"24px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tortor sed nulla tempor mattis sed sit amet sem. Quisque euismod ligula purus, id auctor mauris finibus eget. Integer ut imperdiet quam. Maecenas id scelerisque neque. Sed auctor felis leo, eget venenatis dolor rutrum vitae. Sed luctus ligula non eros aliquet fermentum. Ut non nunc sed lorem consequat aliquet at id nunc. Ut ut quam ut eros tincidunt porttitor. Mauris arcu neque, tristique nec sagittis vitae, placerat ut nibh. Fusce et pharetra velit, quis maximus quam. Donec venenatis justo lorem, eu finibus nisl rutrum vitae."})})]}),(0,jsx_runtime.jsxs)("div",{className:"inner-div two",children:[(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"}}),(0,jsx_runtime.jsxs)("div",{className:"input-container",children:[(0,jsx_runtime.jsx)(TextInput.A,{value:input1,onChange:e=>setInput1(e.target.value),placeholder:""}),(0,jsx_runtime.jsx)(TextInput.A,{value:input2,onChange:e=>setInput2(e.target.value),placeholder:""}),(0,jsx_runtime.jsx)(TextInput.A,{value:input3,onChange:e=>setInput3(e.target.value),placeholder:""}),(0,jsx_runtime.jsx)(TextInput.A,{value:input4,onChange:e=>setInput4(e.target.value),placeholder:""}),(0,jsx_runtime.jsx)("div",{className:"btn-input-row",style:{marginTop:"10px"},children:(0,jsx_runtime.jsx)(Button.Ay,{label:"Button",variant:"btn--filled"})})]})]}),(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"}})]})})}).bind({});Grid.args={columns:3,gap:10};const __namedExportsOrder=["Grid"];Grid.parameters={...Grid.parameters,docs:{...Grid.parameters?.docs,source:{originalSource:'args => {\n  const [input1, setInput1] = useState("");\n  const [input2, setInput2] = useState("");\n  const [input3, setInput3] = useState("");\n  const [input4, setInput4] = useState("");\n  const renderLayoutContent = () => <>\n      <div className="inner-div one">\n        <div style={{\n        textAlign: "center"\n      }}>{/* 1 */}</div>\n        <div className="Title">\n          <Text className="large-title">Here\'s a title</Text>\n        </div>\n        <div className="body">\n          <Text className="headline" style={{\n          marginBottom: "24px"\n        }}>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas\n            non tortor sed nulla tempor mattis sed sit amet sem. Quisque euismod\n            ligula purus, id auctor mauris finibus eget. Integer ut imperdiet\n            quam. Maecenas id scelerisque neque. Sed auctor felis leo, eget\n            venenatis dolor rutrum vitae. Sed luctus ligula non eros aliquet\n            fermentum. Ut non nunc sed lorem consequat aliquet at id nunc. Ut ut\n            quam ut eros tincidunt porttitor. Mauris arcu neque, tristique nec\n            sagittis vitae, placerat ut nibh. Fusce et pharetra velit, quis\n            maximus quam. Donec venenatis justo lorem, eu finibus nisl rutrum\n            vitae.\n          </Text>\n        </div>\n      </div>\n      <div className="inner-div two">\n        <div style={{\n        textAlign: "center"\n      }}>{/* 2 */}</div>\n        <div className="input-container">\n          <TextInput value={input1} onChange={e => setInput1(e.target.value)} placeholder="" />\n          <TextInput value={input2} onChange={e => setInput2(e.target.value)} placeholder="" />\n          <TextInput value={input3} onChange={e => setInput3(e.target.value)} placeholder="" />\n          <TextInput value={input4} onChange={e => setInput4(e.target.value)} placeholder="" />\n          <div className="btn-input-row" style={{\n          marginTop: "10px"\n        }}>\n            <Button label="Button" variant="btn--filled" />\n          </div>\n        </div>\n      </div>\n      <div style={{\n      textAlign: "center"\n    }}>{/* 3 */}</div>\n    </>;\n  return <GridLayout {...args}>{renderLayoutContent()}</GridLayout>;\n}',...Grid.parameters?.docs?.source}}}},"./src/components/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a6:()=>GhostButton,z4:()=>OutlinedButton,Ay:()=>components_Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=_ref=>{let{label,onClick,variant,className,styleName="radius-round",style}=_ref;const classNames="btn ".concat(variant," ").concat(className," ").concat(styleName);return(0,jsx_runtime.jsx)("button",{className:"".concat(classNames," label-1"),onClick,style,children:label})};Button_Button.defaultProps={variant:"btn--filled",className:"btn-padding",styleName:"radius-default",style:{}};const components_Button=Button_Button,OutlinedButton=_ref2=>{let{label,onClick,variant,className,styleName="radius-default",style={}}=_ref2;const classNames="btn ".concat(variant," ").concat(className," ").concat(styleName),{outlineColor,...restStyle}=style,buttonStyle={border:outlineColor?"1px solid ".concat(outlineColor):void 0,...restStyle};return(0,jsx_runtime.jsx)("button",{className:"".concat(classNames," label-1"),onClick,style:buttonStyle,children:label})};OutlinedButton.defaultProps={variant:"btn--primary",className:"btn-padding",styleName:"radius-default",style:{}};const GhostButton=_ref3=>{let{label,onClick,className,styleName,style}=_ref3;return(0,jsx_runtime.jsx)(Button_Button,{label,onClick,variant:"btn--ghost",className,styleName,style})};GhostButton.defaultProps={className:"btn-padding",styleName:"radius-default",style:{}},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{styleName:{defaultValue:{value:'"radius-default"',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"btn--filled"',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'"btn-padding"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}},OutlinedButton.__docgenInfo={description:"",methods:[],displayName:"OutlinedButton",props:{styleName:{defaultValue:{value:'"radius-default"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},variant:{defaultValue:{value:'"btn--primary"',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'"btn-padding"',computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}},GhostButton.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{className:{defaultValue:{value:'"btn-padding"',computed:!1},description:"",type:{name:"string"},required:!1},styleName:{defaultValue:{value:'"radius-default"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}}},"./src/components/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Text});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=_ref=>{let{children,className,as:Component="p"}=_ref;return(0,jsx_runtime.jsx)(Component,{className:"text-default ".concat(className),children})};Text_Text.defaultProps={className:"",as:"p"};const components_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"elementType"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/components/TextInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>TextAreaInput});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/TextInput.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{value,onChange,placeholder,className,styleName="body-1 radius-default"}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value,onChange,placeholder,className:"text-input ".concat(styleName," ").concat(className)})};TextInput.defaultProps={placeholder:""};const TextAreaInput=_ref2=>{let{value,onChange,placeholder,className,styleName="body-1 radius-default"}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{value,onChange,placeholder,className:"text-area-input ".concat(styleName," ").concat(className),rows:"4"})};TextAreaInput.defaultProps={placeholder:""};const __WEBPACK_DEFAULT_EXPORT__=TextInput;TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{styleName:{defaultValue:{value:'"body-1 radius-default"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!0},className:{description:"",type:{name:"string"},required:!1}}},TextAreaInput.__docgenInfo={description:"",methods:[],displayName:"TextAreaInput",props:{styleName:{defaultValue:{value:'"body-1 radius-default"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!0},className:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Layout.css":()=>{},"./src/components/TextInput.css":()=>{}}]);