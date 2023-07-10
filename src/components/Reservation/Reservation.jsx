import { useState, useEffect } from "react"

// import function 
import { createReservation, getReservation } from '../../utils/utils'
import { useNavigate } from "react-router-dom";
import Modalreservation from "./Modalreservation";
import Modalaction from "./Modalaction";


// bootstrap
import { Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Secondcarousel from "./Secondcarousel";


const Reservation = () => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [datetime, setDatetime] = useState([]);
    const [table, setTable] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // modal List Reservation

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //modal action

    const [showAction, setShowAction] = useState(false);
    const handleCloseAction = () => setShowAction(false);
    const handleShowAction = () => setShowAction(true);

    useEffect(() => { getReservation(data, setData) }, [])

    return (<>{Modalreservation(handleShow, handleClose, show, data, setData)}
        {Modalaction(handleShowAction, handleCloseAction, showAction, { title: "Reserva", body: "Su reserva fue agendada con exito" })}
        <div class="container my-5">
            <div class="container d-flex row">
                <div class="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472663222!2d-74.27261667631505!3d4.648620627624712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQm9nb3Rh!5e0!3m2!1sen!2sco!4v1688876662779!5m2!1sen!2sco" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col">
                    <div>
                        <h3>Make a reservation</h3>
                        <form>
                            <label>Name</label>
                            <br />
                            <input type="text" placeholder="Please write a name" onChange={(e) => { setName(e.target.value) }} ></input>
                            <br />
                            <label>Email</label>
                            <br />
                            <input type="text" placeholder="Please write an email" onChange={(e) => { setEmail(e.target.value) }} ></input>
                            <br />
                            <label>Number of persons</label>
                            <br />
                            <input type="number" placeholder="Digite the number of person" onChange={(e) => { setTable(e.target.value) }} ></input>
                            <br />
                            <label>Date and time</label>
                            <br />
                            <input type="datetime-local" id="meeting-time"
                                name="meeting-time"
                                min="2021-07-08T00:00" max="2023-12-31T00:00" onChange={(e) => { setDatetime(e.target.value) }}></input>
                            <br />
                        </form>
                        <div className="mt-2">
                            <Button variant="primary" class="mt-3 mb-3" onClick={(event) => {
                            //event.preventDefaul()
                            createReservation(name, email, datetime, table, data, setData);
                            console.log("onclick", name, email, datetime, table);
                            setShowAction(true)
                        }}>Registrar reserva</Button>
                        <Button variant="secondary" onClick={handleShow}>Show Reservation</Button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Reservation