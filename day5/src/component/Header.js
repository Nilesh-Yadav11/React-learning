function Header(){
    return(
        <div className="Heading">

            <img className="img_myntra" src="https://images.indianexpress.com/2021/01/myntra.png?w=1600" height="100px" width="150px"/>

            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input type="text" className="searchbar" placeholder=" &#x1F50D; Search for products brands and more"></input>

            <div className="profile">
                <button className="but1">Profile</button>
                <button className="but1">Wishlist</button>
                <button className="but1">Bag</button>

            </div>
        </div>
    )
}

export default Header;
// or other method is 
// export default function header on first line only 