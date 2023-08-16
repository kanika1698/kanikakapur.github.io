import React, { useState } from "react";
import "./About.css"
import coder from "../assets/coding.svg"
import {about} from "../data.js"

function About() {

    const [show , setshow] = useState("false");
    return (
        <div id="about">
            <div className="row shadow mt-4">
                <div className="col-sm-6">
                    <div className=" row ml-0 mt-5 pt-4 pl intro">
                        <h3>Hi, I'm Kanika.
                            <br />I am a FrontEnd Developer
                        </h3>
                    </div>
                    <div className=" row mt-2  pl text-wrap intro ">
                        <p className="mb-0">
                            {about.about1}
                            <button href="#readmore" className="btn text-secondary py-0 px-1" onClick={show==="false" ?(e)=>setshow("true") : (e)=>setshow("false")} >seemore .....</button>
                            { show === "true" ? <p> {about.about2}</p>:""}
                        <p>{about.about3}</p>
                        </p>
                    </div>

                    <div className="row d-flex justify-content-center ">
                        <a className="col-sm-4   mx-4 my-3 btn btn-success" href="#pastwork">
                            See My Past Work
                        </a>
                        <a className="col-sm-4 my-3 btn btn-success" href="#skills">
                            Skills
                        </a>

                    </div>

                </div>
                <div className="col-sm-6 pt-4 px-0">
                    <img
                        className="image"
                        alt="hero"
                        src={coder}
                    />
                </div>

            </div>

        </div>
    )
}
export default About