import React from 'react'
import { IoLogoLinkedin } from "react-icons/io"
import { HiOutlineMail } from "react-icons/hi"
import {AiFillGithub} from "react-icons/ai"
import { contact } from "../data"
import "./Footer.css"

function Footer () {
  return (
    <div className='py-3 mt-5 footer  container-fluid'>
      
      <a className="items" href={contact.email} title={contact.mail} target="_blank" rel="noreferrer"><HiOutlineMail size={25} /></a>
      <a className="items" href={contact.linkedIn} title="Lets Connect !!" target="_blank" rel="noreferrer"><IoLogoLinkedin size={25} /></a>
      <a className="items" href={contact.git} title="Lets Connect !!" target="_blank" rel="noreferrer"><AiFillGithub size={25} /></a>
    </div>
  )
}

export default Footer