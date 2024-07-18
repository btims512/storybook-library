(self.webpackChunkreact_storybook_library_v3=self.webpackChunkreact_storybook_library_v3||[]).push([[429],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Intro.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("storybook/internal/client-logger"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-my-storybook-component-library-",children:"Welcome to My Storybook Component Library 🌟"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This Storybook Component Library is your starting point for building beautiful and efficient user interfaces. This library showcases a variety of components, each designed with customizability and ease of use in mind, making it perfect for creating a portfolio for yourself!"}),"\n",(0,jsx_runtime.jsxs)("div",{id:"intro-container",style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"40px"},children:[(0,jsx_runtime.jsxs)("a",{href:"?path=/story/guidelines-allbuttons--all-buttons",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore all button styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Buttons"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore all button styles and functionalities."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-navbar--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the navigation bar component",children:[(0,jsx_runtime.jsx)("strong",{children:"NavBar"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the navigation bar component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-footer--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the footer component",children:[(0,jsx_runtime.jsx)("strong",{children:"Footer"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the footer component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-hero--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the hero component",children:[(0,jsx_runtime.jsx)("strong",{children:"Hero"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the hero component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/layouts-projectcardlayout--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the project card layout component",children:[(0,jsx_runtime.jsx)("strong",{children:"Project Card Layout"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the project card layout component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-about--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the about section component",children:[(0,jsx_runtime.jsx)("strong",{children:"About"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the about section component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/layouts-techpagelayout--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the technology page layout component",children:[(0,jsx_runtime.jsx)("strong",{children:"Tech Page Layout"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the technology page layout component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-backgroundanimation--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the background animation component",children:[(0,jsx_runtime.jsx)("strong",{children:"Background Animation"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the background animation component."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/design-tokens-color--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore the color design tokens used in the library",children:[(0,jsx_runtime.jsx)("strong",{children:"Color Palette"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore the color design tokens used in the library."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/design-tokens-text--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Review different font styles and their applications",children:[(0,jsx_runtime.jsx)("strong",{children:"Font Styles"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Review different font styles and their applications."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-dropdown--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore different dropdown styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Dropdown"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore different dropdown styles and functionalities."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-tooltip--top",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore different tooltip styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Tooltip"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore different tooltip styles and functionalities."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-progressbar--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore different progress bar styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Progress Bar"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore different progress bar styles and functionalities."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-searchbar--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore different search bar styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Search Bar"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore different search bar styles and functionalities."})]}),(0,jsx_runtime.jsxs)("a",{href:"?path=/story/components-modal--default",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px",background:"#E0E0E0",borderRadius:"8px",textDecoration:"none",color:"black"},"aria-label":"Explore different modal styles and functionalities",children:[(0,jsx_runtime.jsx)("strong",{children:"Modal"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"Explore different modal styles and functionalities."})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"why-use-this-library",children:"Why Use This Library?"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Efficiency and Speed"}),": Accelerate the development and deployment of features with reusable, well-documented components."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Consistent Design"}),": Maintain visual consistency across all projects with a shared design language that enhances collaboration between designers and developers."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Technology Compatibility"}),": Built with CSS at its core, our components are easily adaptable to various frameworks, including React and CSS-in-JS, ensuring flexibility in your tech stack."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"accessibility-commitment",children:"Accessibility Commitment"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This Storybook Component Library is designed with accessibility as a foundational principle. Here's how we ensure our components are accessible to everyone:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Keyboard Navigation"}),": All components can be fully navigated using a keyboard, supporting accessibility standards for interactive elements."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"ARIA Attributes"}),": I integrated ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility and provide essential information to assistive technologies, helping users with disabilities."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Color Contrast"}),": I adhered to WCAG (Web Content Accessibility Guidelines) standards for color contrast to ensure that all text is readable for users with color vision deficiencies."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"These features aim to make this library usable by as wide an audience as possible, embodying my commitment to inclusivity in software design."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"get-started",children:"Get Started"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"for-development",children:"For Development"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To set up the development environment and start using these components in your projects, you need to clone the repository and install the dependencies:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"git clone https://github.com/btims512/storybook-library.git\ncd storybook-library\nnpm install\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"After cloning the repository and installing the dependencies, you can start the Storybook server:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm run storybook\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This will start the Storybook server and open it in your default web browser."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"for-production",children:"For Production"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To use the components from this library in your own project, you can install it as an npm package."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install react-storybook-library-v3\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"After installing, you can import and use the components in your project:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"import { Button } from 'react-storybook-library-v3';\n\n// Use Button in their component\n<Button label=\"Click me\" onClick={() => console.log('Button clicked')} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"contribution",children:"Contribution"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Interested in contributing? Check the repository on GitHub and submit your pull requests or issues."}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"thank-you-for-visiting-my-storybook-explore-and-enjoy-the-power-of-reusable-components",children:"Thank you for visiting my Storybook. Explore and enjoy the power of reusable components!"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);