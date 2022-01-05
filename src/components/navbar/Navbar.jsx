import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset==0 ? false : true);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                        alt="netflix-logo"
                    />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KIDS</span>
                    <Notifications className='icon'/>
                    <img src="https://i.pinimg.com/236x/4c/10/ee/4c10eef374493775986f47c012427d10.jpg" alt="profile-picture"/>
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className='options'>
                            <p>Settings</p>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
