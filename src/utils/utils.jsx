//
import { db } from '../firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore'



export const onchangeHandler = (e, setFunction) => {
    console.log(e.target.value)
    setFunction(e.target.value)
}


export const setInfotoupdate = async (name, email, datetime, table, setName, setEmail, setDatetime, setTable) => {
    await setName(name)
    await setEmail(email)
    await setTable(table)
    await setDatetime(datetime)
}


export const userCollection = collection(db, 'reservation')


export const createReservation = async (name, email, datetime, table, data, setData) => {
    await addDoc(userCollection, { name: name, email: email, datetime: datetime, table: table })
}

export const getReservations = async (data, setData) => {
    onSnapshot(userCollection, (snapshot) => {
        setData(snapshot.docs.map((doc) => (
            {
                ...doc.data(),
                id: doc.id
            }
        )))
    })
    //const collectionname = collection(db, 'users')
    //console.log("snapshot", snapshot)

    //console.log("data", data)
    //console.log(snapshot.docs.map((doc) => doc.data()))
}


export const updateReservation = async (userCollection, id, name, email, datetime, table) => {
    const userDoc = doc(userCollection, id)
    console.log(userDoc)
    await updateDoc(userDoc, { name: name, email: email, datetime: datetime, table: table })


}

export const deleteReservation = async (userCollection, id, data, setData) => {
    const userDoc = doc(userCollection, id)
    await deleteDoc(userDoc)
}


