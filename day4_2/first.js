// To initialise package.json

// npm init
// then installing React

// npm install react

// npm install react-dom

// then parcel

// npm install parcel

// If I want to download parcel just as dev depemdency and dont want in our production then 

// npm install -D parcel

//itna sb krne ke baad type = "module " dedena apni html file me script tag ke nadar

// ab chaalu krna 

import React from "react"
import ReactDOM from "react-dom/client"

//const element_1= <h1>Hello to all</h1>

// function greet(name){
//     return <h2>Ram Ram Sabko{name}</h2>
// }

// {} ke andar hum ky ky nhi likh skte
// Jsx :Js expression (jo output laake de ya result produce krkr dein)
// JSX: JS Expression (Output laake de: Result produce)
// JSX: Statement (unko aap nahi likh sakte)

// let obj = {
//     name: "Rohit",
//     age: 50,

// }

// function greet(name){
//     return <h2>Ram Ram Sabko{obj}</h2>
// }
// kuch nhi aayega isase , kch na kch result produce hona chahiye , string array number mein se kch bhi ho sakta hai 

// function greet(name){
//     return <h2>Ram Ram Sabko{obj.name}</h2>
// }
//ab aayega 

// if(x>5){
//     console.log("Hello jii") //ye bhi nhi aayega statement hai ye ek trh ki 
// }

//const arr =[20,40,"Rohit",10]
// Result produce hona chaiye: string , number, array
// 2040Rohit10

//uss bracket ke andar arr bhi likh skte the 

//Part-2
// function greet(name){
//     return <h2>Ram Ram Sabko{obj.name}</h2>
// }

// const element2 = greet(); 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(element_1);

// root.render(element2);



//Part-3 another method to call any function-->
// function name has to be starting from capital
// letter ---> Ye jsx ka part hai koi react ka 
// koi ek hard and fast rule nahi hai

// props kuch nai hai vo bs ek object ki treh hi behave krrhi hai 
function Greet(props){
    return <h2>Ram Ram Sabko {props.name} {props.age}</h2>
}
//props jo hai vo apni values ko lega element2 ke function definition se jo humne provide kiya tha
const element2 = <Greet name="Rohit negi" age="23"/>
// par isme arguements kaise doge??

const element3=<h1 id="first" classname="second"></h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(element_1);
root.render(element2);


