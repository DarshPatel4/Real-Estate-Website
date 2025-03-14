import { useState } from "react";
import "./navbar.scss"

function Navbar(){

    const [open,setOpen] = useState(false)
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="icon1.png" alt="Logo"/>
                    {/* <span>PoojaRealEstate</span> */}
                </a>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Contact">Contact</a>
                {/* <a href="/agents">Agents</a> */}
                <a href="/reviews">Reviews</a>
                <a href="/rates-trends">Rates & Trends</a>
                <a href="/emi-calculator">EMI Calculator</a>
                {/* <a href="/loan-eligibility">Loan Eligibility</a>
                <a href="/area-converter">Area Converter</a> */}
            </div>
            <div className="right">
            <a href="/login">Sign In</a>
            <a href="/register" className="register">Sign Up</a>
            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=>setOpen((prev) => !prev)}></img>
            </div>
            <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Contact">Contact</a>
                <a href="/agents">Agents</a>
                <a href="/login">Sign In</a>
                <a href="/register">Sign Up</a>
            </div>
        </div>
        </nav>
    )

}
export default Navbar;
