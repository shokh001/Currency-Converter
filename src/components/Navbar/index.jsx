import React from "react";
import uzb from '../../assets/images/flag_uzb.png'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">Shokh</div>
                <div className="nav-right">
                    <p>BASE CURRENCY</p>
                    <div className="btn">
                        UZS
                        <img src={uzb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;