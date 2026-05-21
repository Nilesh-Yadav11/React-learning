const element = React. createElement("h1", {id:"first", className:"Rahul",style:{backgroundColor:"blue",fontColor:"white",fontSize:"30px"}},"Hello Coder Army")
const element2=React.createElement("h2",{id:"second", className:"Rahul2",style:{backgroundColor:"black",fontColor:"white",fontSize:"25px"}},"Kaise ho sb")

ReactDOM. render(element, document.getElementById('root'));
// element : 50 card pade hue hai
// const div1=React.createElement("div",{},[element,element2])
// const Reactroot = ReactDOM. createRoot(document.getElementById('root'));
// React root container: is
Reactroot. render(element);
Reactroot. render(element2);// ab humne socha ki aise ek aur lement2 bnate hai hello coder army ke neeche kaise ho sb print krna ek liye 
//aur html me phle se pda hua hai ki balle balle

// Hoga ye ki Reactroot. render(element2)
// kaise ho sb print krdega aur baaki sb purana vala h1 aur balle balle sb hata dega 
// toh fir ab hum add kaise krnege ?--> div bana denge jisme ki h1 Hello coder army aur h2 kaise ho sb dono hi maujud hoga

ReactDOM.render(div1)

//How to write this in js
//<div>
    //<div>
        //<h1></h1>
        //<h2></h2>
    //</div>
//</div>


//JSX --> jisse ki hum react ke andar bhi html ke trh syntax likh skte hai vaise jaise html mein likhte the


// File size: kam rkhna
// Optimize code
// Comment: hata do, space hata do
// kuch code aisa likha hga, jo mein use nahi kar rha
// react and react-dom(kuch portion use kar rha hu)
//toh krta ye hai ki html css aur js saari files ko ek bundle mein bana kr rkh dete hai

// Isliye hum bundler ka use krte hai  --> Webpack , vite , parcel
// install parcel 

//Terminal mein npm install parcel --> isse node_modules bhi aa jayenge 
// fir npm init 
// baaki sb provide kro aur ek package.json file bn jayegi

// npm-->note package manager

//npm hai ky ??

// usme hai ki npm ek tareeke ki registery hi hai jisme 
// parcel typescript react reactdom yaa baki kisi chhez ka 
// code rkha hua hai  ,, hrr baar 0 se likhne ki koi need nhi hai 

//Jaise ki ek user hai usse koi calendar banana hai toh vo saara 

//fir npm install react to direct use react instead
//of writing that script tag in html file 

//fir npm install react-dom

//version: 19.0.0
// Major minor change 

//Inhi patches ko ye acceptt krega
// ^:- Minor and patches(caret)
// ~:- Patches(tilde)

