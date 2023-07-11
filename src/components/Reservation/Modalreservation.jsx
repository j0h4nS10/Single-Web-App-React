
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getReservation, onchangeHandler, setInfotoupdate } from '../../utils/utils';
import { deleteReservation } from '../../utils/utils';
import { updateReservation } from '../../utils/utils';

import { userCollection } from '../../utils/utils';
import { useEffect, useState } from 'react';

const Modalreservation = (handleShow, handleClose, show, data, setData) => {

    const [avaedit, setAvaedit] = useState('false');
    const [idedit, setIdedit] = useState('');
    const [nameedit, setNameedit] = useState('');
    const [emailedit, setEmailedit] = useState('');
    const [dateedit, setDateedit] = useState('');
    const [tableedit, setTableedit] = useState('');

    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>List of Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data.map((el) => {
                if (avaedit == "true" && idedit == el.id) {
                    return (<><div key={el.id} class="border p-2 mt-2 mb-2">
                        <div>
                            <ul>
                                <li>Id reserva: {el.id}</li>
                                <li>Nombre: <input id="name" name="name" type="text" value={nameedit} onChange={(e) => { onchangeHandler(e, setNameedit) }}></input></li>
                                <li>Email: <input value={emailedit} onChange={(e) => { onchangeHandler(e, setEmailedit) }}></input></li>
                                <li>Table: <input value={tableedit} onChange={(e) => { onchangeHandler(e, setTableedit) }}></input></li>
                                <li>Date: <input value={dateedit} onChange={(e) => { onchangeHandler(e, setDateedit) }}></input></li>
                            </ul>
                        </div>
                        <div>
                            <Button variant="warning" onClick={() => { setAvaedit('false') }}>Cancel</Button>
                            <Button variant='success' onClick={() => { updateReservation(userCollection, idedit, nameedit, emailedit, dateedit, tableedit); setAvaedit('false'); getReservation(data, setData) }}>Save Changes</Button>
                        </div>
                    </div>
                    </>)
                } else {
                    return (<><div key={el.id} class="border p-2 mt-2 mb-2">
                        <div>
                            <ul>
                                <li>Id Reserva: {el.id}</li>
                                <li>Nombre: {el.name}</li>
                                <li>Email: {el.email}</li>
                                <li>Table: {el.table}</li>
                                <li>Fecha: {el.datetime} </li>
                            </ul>
                        </div>
                        <Button variant="warning" onClick={() => { setAvaedit('true'); setIdedit(el.id); setInfotoupdate(el.name, el.email, el.datetime, el.table, setNameedit, setEmailedit, setDateedit, setTableedit) }}>Update</Button>
                        <Button variant="danger" onClick={() => { deleteReservation(userCollection, el.id, data, setData) }}>Delete</Button>
                    </div></>)
                }
            }
            )}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}


export default Modalreservation;