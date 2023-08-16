import "./PastWork.css"
import { IoCodeWorking } from "react-icons/io5"
import { pastWork } from "../data"

function PastWork() {
    return (
        <div id="pastwork">
            <div className="col pt-4">
                <IoCodeWorking size={60} color="#808080" />
                <div className="row  text-white d-flex justify-content-center">
                    <h4> My Past Work - Experience </h4>
                </div>
            </div>
            {
                pastWork.map((exp) => (
                    <div className="row d-flex justify-content-center">
                        <div className="card col-sm-6 mt-4 mx-5 textalign text-white cardbgcolor mb-3" style={{ maxwidth: 18 + 'rem' }} >
                            <div className="card-header d-flex  justify-content-between">{exp.title}, ({exp.tenure})</div>
                            <div className="card-body">
                                <h5 className="card-title">Role : {exp.Role}</h5>
                                <ul>
                                    {exp.Responsibilities.map(data =>
                                    (
                                        <li className="card-text">{data}</li>
                                    )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default PastWork