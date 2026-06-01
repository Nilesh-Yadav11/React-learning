//Part -1

// import React from "react";
// import ReactDOM from "react-dom/client"
// const element = React. createElement("h1", {id:"first", className:"Rahul",style:{backgroundColor:"blue",fontColor:"white",fontSize:"30px"}},"Hello Coder Army")
// const element2=React.createElement("h2",{id:"second", className:"Rahul2",style:{backgroundColor:"black",fontColor:"white",fontSize:"25px"}},"Kaise ho sb")

// //ReactDOM.render(element, document.getElementById('root'));
// // element : 50 card pade hue hai

// const div1=React.createElement("div",{},[element,element2])
// const Reactroot = ReactDOM. createRoot(document.getElementById('root'));
// // React root container: is
// // Reactroot. render(element);
// // Reactroot. render(element2);// ab humne socha ki aise ek aur lement2 bnate hai hello coder army ke neeche kaise ho sb print krna ek liye 
// //aur html me phle se pda hua hai ki balle balle

// // Hoga ye ki Reactroot. render(element2)
// // kaise ho sb print krdega aur baaki sb purana vala h1 aur balle balle sb hata dega 
// // toh fir ab hum add kaise krnege ?--> div bana denge jisme ki h1 Hello coder army aur h2 kaise ho sb dono hi maujud hoga

// ReactDOM.render(div1)
//node modules ke andar react aur reactnode dono present hai 

//Part 2 --> aise krna ab 

// import React from "react";
// import ReactDOM from "react-dom/client";
// const element = React.createElement(
//   "h1",
//   {
//     key:"heading1",
//     id: "first",
//     className: "Rahul",
//     style: {
//       backgroundColor: "blue",
//       color: "white",
//       fontSize: "30px"
//     }
//   },
//   "Hello Coder Army"
// );
// const element2 = React.createElement(
//   "h2",
//   {
//     key:"heading2",
//     id: "second",
//     className: "Rahul2",
//     style: {
//       backgroundColor: "black",
//       color: "white",
//       fontSize: "25px"
//     }
//   },
//   "Kaise ho sb"
// );
// const div1 = React.createElement("div", {}, [element, element2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div1);

// itna apna code lkihne ke baad jb server build krne ke liye npx parcel html file ka naam
// ek parcel cache naam ka folder bn jayega jo ki humare built time ko humesha kmm krega
// production ready code ke liye 
// npx parcel build day3.html
//module : app.js ko hata dena apne usme se package.json se 
//ab jo dist folder bnega usko copy kr lena aur paste kr dena production ke liye  --> ab baaki code daalne ki need nahi hai 
// mapping file ko delete maar dena usse --> taaki original file naa dikh sake doosre users ko ya company ko 

//dist folder mein html file ka naam index.html krr dena fir daal dena netlify pr upload kr dena  


// Part -3

//Itna bada code likhne se badhiya hai ki hum jsx mmein likh le code mtlb poora html ki trh --> jsx xml


// import React from "react";
// import ReactDOM from "react-dom/client";

// const names="Nilesh"

// const obj={
//     age:23,
//     salary:60,
// }
// const obj2 = {
// backgroundColor:"black",
// color:"pink",
// fontSize:"30px"
// }

// // jsx jo hai vo js ka expresssion hi hai ek tareeke ka aur usme js ka code likhne k liye usko hum curly braces k andar bnd krenge
// const new_element = (
//     // <div>
//     //     <h1>Hello CoderArmy</h1>
//     //     <h2>Mazaa aagya</h2>
//     // </div>
    
//     //lkin ab isme dono lines ko print krne ke liye hum ek div ka bhi use kr rhe hain jo ki hum nahi karana chahenge isliye humko jsx option deta hai empty tag banaane ko 
//     // jab merko number array obj kch bhejna ho toh curly braces lagadena vo treat krega ki andar vo Js ka kooi expression use kr rha hai 
//     <>
//         <h1 id="first" className="first_1">Hello CoderArmy {names}</h1>
//         <h2 style={obj2}>Mazaa aagya {obj.age}</h2>
//         <h3></h3> 
//     </>
        
//     //ab iss single element mein multiple cheezo ko print krva skte ho
//     //style mein mereko {obj2} dena pdega yaa fir do brackets mein imp {{backgroundColor:"black" color:"white"}} ; jsx mein jb bhi object daalna ho toh ek curly braces dena pdega hii

// )
// // babel already present with parcel

// // iska kaam hai ki iss code ko react ke code o convert krne mein
// // Jsx --> react.createElement(Js object ) --> this is done by babel
// //  jsx react ka part nhi hai 

// // const div1 = React.createElement("div", {}, [element, element2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(new_element);

//React components

// 1} class based components
// 2} function based components

// function greet(){
//     return <h1>Aur bhai kaisa hai</h1>
// };

// const meet = ()=>{
//     return <h2>Accha hai sb </h2>
// }

const newElemeent3= meet();
const newElemeent2=greet();

// const newElemeent4=<>{{newElemeent2}}{{newElemeent3}}</>
//or
//const newElemeent5=<>{{greet()}}{{meet()}}</>

const Reactroot=ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(newElemeent2)
// Reactroot.render(newElemeent3)

Reactroot.render(newElemeent4);

