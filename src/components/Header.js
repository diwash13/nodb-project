import React from 'react'


function Header(){
    const navStyle = {
        color: "white",
    fontSize: "32px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    }
    const ulStyle = {
        paddingLeft: "50px",
        paddingRight: "70px",
        listStyleType: "none",
        display: "inline-block",
        whiteSpace: "nowrap",
        wordSpacing: "30px",
        fontFamily: "Papyrus",
        background: "#070D35"
    }
    const imgStyle = {
        display: "flex",
        justifyContent: "flex-start",
        allignitem: "flex-start"
    }
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNOTbPU63V08Mry6LiaEZaAn1xWf4Tl38Yz9Oou8jrHJMk3Ul" className="list" style={imgStyle}></img>
            <nav className="nav" style={navStyle}>
            <p className="pa" style={ulStyle}>Home Team News Fixtures&Results Tickets&Membership History Fans Careers</p>
            </nav>

        </div>
    )
}
export default Header