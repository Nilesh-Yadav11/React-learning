import React from "react";
import ReactDOM from "react-dom/client";

// Header

// issprops ki values milengi Cards ke <Card/ >mein se
function Card(props){
    return(
        <div style={{border:"2px solid black" , padding:"2px"}}>
            <img src="https://veirdo.in/cdn/shop/files/Black-Eye-Oversized-Women-s-Printed-T-Shirt-Veirdo-3460.png?v=1754546067" height="200px" width="220px"></img>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>40-80% Off</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

const arr=[{cloth:"Tshirt",Offer:"20-40% off"},
         {cloth:"Pant",Offer:"30-40% off"},
         {cloth:"Skirt",Offer:"40% off"},
         {cloth:"Kurtas",Offer:"20-40% off"},
         {cloth:"Shoes",Offer:"40-60% off"},
         {cloth:"Shirts",Offer:"60-70% off"},   
]
function App(){
    return(
        //Header
        //Body
            // display flex se image ke hissab se tmhara content bhi wrapped up ho jayega , used for arranging elements within a container
        <div style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>

            {/* <Card cloth="Tshirt" offer="20-80% off"/>
            <Card cloth="Jeans" offer="30-80% off"/>
            <Card cloth="Pant" offer="50-60% off"/>
            <Card cloth="Suits" offer="20-80% off"/>
            <Card cloth="Kurtas" offer="20-80% off"/>
            // <Card cloth="Salwar" offer="20-80% off"/> */}
            {/* ye hum props se krte the lkin ab nahi krenge  */}

            {/* arr.map ka syntax hota hai (value,index,arr) */}

            {/* key={index} react ke error ko hataane ke liye hai bss main reason btaya jayega agli class mein */}

            
            {
                arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)
            }
            
        </div>
        //Footer
    )
}



const Root= ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App/>);