//Tags,styles,children --> arguements ke andar
// isme seedha aise banega

const element =React.createElement('h1',{},"Hello Coder Army")

//ReactDOM.render(element,document.getElementById('root'))
// Warning: ReactDOM.render is no
// longer supported in React 18. Use createRoot instead. Until you
// switch to the new API, your app will behave as if it's running
// React 17. Learn more:
// httes://reactis.org/link/switch-to-createroot
// react-dom.development.js:73

//React 18 mein ye aaya ki ek option ko poora load hone se pehle hi hum kisi aur
//  doosre button ko dabaayenge vo fir vo load ho jayega , react17 mein poora load 
// hta tha fir uske baad kuch aata tha vo response hi nhi krta tha jb koi aur button 
// dabaate the

//React dom --> (element,root) -- ek tareeke object hi tha 
// createRoot --> key thi phle

const Reactroot =ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(element);

