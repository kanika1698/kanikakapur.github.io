import { skills } from "../data"
import { IoHardwareChipOutline } from "react-icons/io5"
import { HiBadgeCheck } from "react-icons/hi"
import "./Skills.css"
function Skills() {
    return (
        <>
            <div id="skills" className="col pt-4">
                <IoHardwareChipOutline size={60} color="#808080" />
                <div className="row pt-2 text-white d-flex justify-content-center">
                    <h4> Skills And Technologies </h4>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                {skills.map((skill) => (

                    <div class="col-sm-2 shadow cardbgcolor text-white  card my-3 mx-2">

                        <div class="card-body">
                            <h5 class="card-title"><HiBadgeCheck className="mx-2 mb-1" color="green" />{skill}</h5>
                        </div>
                    </div>

                ))}
            </div>



        </>

    )
}
export default Skills