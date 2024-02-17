import React from "react"
import { IoMoonOutline } from "react-icons/io5";
import './header.css'
export default function Header(){
     return (
        <div className="container-header">
            <h1>Where in the world?</h1>
            <div className="mode">
                <IoMoonOutline size={20} className="icon"/>
                <a href="#">Dark Mode</a>
            </div>

        </div>
     )
}