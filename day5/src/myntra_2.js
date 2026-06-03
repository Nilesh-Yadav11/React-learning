import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./component/utils/dummy";
import Compare from "./component/Compare";
import { useState } from "react";

// useState is a React Hook
//  It lets a component remember values
//  When that value changes, React re-renders the UI
// In simple words:    
// useState = “data that can change and update the screen

import {greet,meet} from "./component/utils/dummy";


// Header

// issprops ki values milengi Cards ke <Card/ >mein se

//myntra

// const arr=[{cloth:"Tshirt",Offer:"20-40% off",image:"https://veirdo.in/cdn/shop/files/Black-Eye-Oversized-Women-s-Printed-T-Shirt-Veirdo-3460.png?v=1754546067"},
//          {cloth:"Pant",Offer:"30-40% off",image:"https://bananaclub.co.in/cdn/shop/files/DrawstringWhiteLinenPant_3.jpg?crop=center&height=1440&v=1743233815&width=1000"},
//          {cloth:"Skirt",Offer:"40% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKXic9FOlp4sNg2xXAwh_vYOtvDh4AYHRUA&s"},
//          {cloth:"Kurtas",Offer:"20-40% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xp37JCHZUJdF2u7hwgRwaYLukkZnqPrBUg&s"},
//          {cloth:"Shoes",Offer:"40-60% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MM-w4UestouIMHCrrUIq6C024GSA4eSHgw&s"},
//          {cloth:"Shirts",Offer:"60-70% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm02-5EAsfuV1joH4hbFWXBoh3LwqvseHUw&s"},  
//          {cloth:"Lehenga",Offer:"60-70% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGghNPQ26DVnEsWQxlUt9RdUpwk-Yd-Y1UA&s"},
//          {cloth:"Kids",Offer:"70% off",image:"https://i.pinimg.com/736x/ce/e7/68/cee768f874d6814751062fc3d55253ac.jpg"},
//          {cloth:"Summers",Offer:"30-70% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PUGtW1KxS9eaHR4xTPu2yk04g056TX_6gQ&s"},
//          {cloth:"Winters",Offer:"60% off",image:"https://i.pinimg.com/474x/7b/1c/f8/7b1cf89a85b76f92d01f1669f58af9bb.jpg"},
//          {cloth:"Jackets",Offer:"50% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmD6FkcEL16Toeem_dqTHNO9Cv5kfaCJuIw&s"},
//          {cloth:"Perfumes",Offer:"60-70% off",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSbmkJ8TolT4p2jp0ibFzays62m8b0gfXxA&s"}, 
// ]

// iss dummy data ko aise naa rkhne ki jgh ek util folder me daal do components mein hii


function App(){

    
    const [list,setList]=useState(arr); // array destructuring

    // iska matlab ye hai ki 
    // const temp=useState(arr);  //useState(arr) will useState(arr)
    // React creates a state variable
    // Initial value = your arr (dummy data)

    // const list=temp[0];
    // list
    // Holds the current value of the state
    // Initially → same as arr


    // const setList=temp[1];
    // setList
    // A function provided by React
    // Used to update list

        function priceCompare(){
        const sorted=[...list].sort((a,b)=>a.price-b.price); // ...list is used to create the copy of the array
        setList(sorted);
    };
        // simply list would have created a reference so it is very important to declare [...list] in order to use it as an array 
        // o/w react would have said that it ki koi change toh hua nahi hai fxn se toh Dom maipulate nahi karega voh 

        function priceabove499(){
            const B = arr.filter((value)=>value.price>499);
            setList(B);
        }
    return(
    <>
        {/* //Header */}
        <Header/>
        
        <Compare onClick={priceCompare}/>
        {/* price pr jb click kroge tab hi changes apply honge page ke upar vrna nhi honge , aur jo bhi changes applied honge vo priceCompare vaale hi honge*/}

        <button onClick={priceabove499}> Price above 499 </button>
        {/* //Body
            // display flex se image ke hissab se tmhara content bhi wrapped up ho jayega , used for arranging elements within a container */}

        <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            {/* ye hum props se krte the lkin ab nahi krenge  */}
            {/* arr.map ka syntax hota hai (value,index,arr) */}
            {/* key={index} react ke error ko hataane ke liye hai bss main reason btaya jayega agli class mein */}
            {
                list.map((value,index)=> <Card key={index} cloth={value.cloth} Offer={value.Offer} img={value.image} price={value.price}/>)

                // list because the copy of array is stored in it only 
            }
        </div>

        <Footer/>
        </>
    )
}

//src folder mein components mein hrr ek cheez rkhi gyi hai header body footer sb fir usko export import karna apne hisaab se 

const Root= ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App/>);


