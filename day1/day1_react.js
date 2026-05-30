
// Part 2 --> object bana ke
// const React ={
//     createElement:function(tag,styles,children){
//         const element=document.createElement(tag);
//         element.innerText=children;
//         return element;
//     }
// }

// const header1=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello Coder Army")
// const header2=React.createElement('h2',{fontSize:"25px",backgroundColor:"black",color:"white"},"Kaise ho aap sab")


// Part1
// const header1=document.createElement('h1')
// header1.innerText="Hello Coder Army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2= document.createElement('h2')
// header2.innerText="Kaise ho aap sab";
// header2.style.backgroundColor="black";
// header2.style.fontSize="25px";
// header2.style.color="white";

// const root = document.getElementById('root')
// root.append(header1,header2)

//aise header bnate aur append krte rhenge to baar baar repeat krne padega itna saara code then go to part2  

// Part3

//Rendering

//React aur reactDom dono objects hi toh hai 

const React ={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);

        if(typeof children ==='object'){ // at the end array bhi to ek object hi hai aur fir array mein toh fir for of loop use ho sakta hai list 1list 2aur list 3 ke liye
            for(let val of children){
                element.append(val);
            }
        } 
        else

        element.innerText=children;

        for(let key in styles){
            element.style[key]=styles[key];
        }
        return element;
    }
}

const reactDom={ // for DOm MANIPULATION
    render:function(element,root){
        root.append(element);
    }
}


const header1=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello Coder Army")
const header2=React.createElement('h2',{fontSize:"25px",backgroundColor:"black",color:"white"},"Kaise ho aap sab")

// ul list create krni pde toh vo kaise kre 
// html,CSS,js add krenge isme

const list1=React.createElement('li',{},"Html")
const list2=React.createElement('li',{},"Css")
const list3=React.createElement('li',{},"Js")

const ul=React.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},[list1,list2,list3]) // is pr iterate krne ke liye if(typeof children==='object') likha hai

reactDom.render(header1,document.getElementById('root'))
reactDom.render(header2,document.getElementById('root'))
reactDom.render(ul,document.getElementById('root'));


