import React from "react";
import "./Navbar.css"
import { IoLogoLinkedin } from "react-icons/io"
import { HiOutlineMail } from "react-icons/hi"
import {AiFillGithub} from "react-icons/ai"
import { contact } from "../data"

function navbar() {
    return (
        
            <div className="head">
                <a className="headName" href="#about">Kanika Kapur |</a>

                <nav className="navbar py-0">
                    <div class="container-fluid headitems">
                        <a className="items" href="#pastwork">Past Work</a>
                        <a className="items" href="#skills">Skills</a>
                        <a className="items" href={contact.email} title={contact.mail} target="_blank" rel="noreferrer"><HiOutlineMail size={20} /></a>
                        <a className="items" href={contact.linkedIn} title="Lets Connect !!" target="_blank" rel="noreferrer"><IoLogoLinkedin size={20} /></a>
                        <a className="items" href={contact.git} title="Lets Connect !!" target="_blank" rel="noreferrer"><AiFillGithub size={20} /></a>
                    </div>
                </nav>
            </div>
    )
}
export default navbar;