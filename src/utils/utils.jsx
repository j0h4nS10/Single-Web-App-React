//
import { db } from '../firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'



export const onchangeHandler = (e, setFunction) => {
    console.log(e.target.value)
    setFunction(e.target.value)
}


export const setInfotoupdate = async (name, email, datetime, table, setName, setEmail, setDatetime, setTable ) => {
    await setName(name)
    await setEmail(email)
    await setTable(table)
    await setDatetime(datetime)
}


export const userCollection = collection(db, 'reservation')


export const createReservation = async (name, email, datetime , table, data, setData) => {
    await addDoc(userCollection, { name: name, email: email, datetime: datetime , table: table })
    getReservation(data, setData)
}

export const getReservation = async (data, setData) => {
    //const collectionname = collection(db, 'users')
    const snapshot = await getDocs(userCollection);
    console.log("snapshot", snapshot)
    setData(snapshot.docs.map((doc) => (
        {
            ...doc.data(),
            id: doc.id
        }
        )))
    console.log("data", data)
    //console.log(snapshot.docs.map((doc) => doc.data()))
}


export const updateReservation = async (userCollection, id, name, email, datetime, table) => {
    const userDoc = doc(userCollection, id)
    console.log(userDoc)
     await updateDoc(userDoc, { name: name, email: email, datetime: datetime, table: table })


}

export const deleteReservation = async (userCollection, id, data, setData ) => {
    const userDoc = doc(userCollection, id)
    await deleteDoc(userDoc)
    getReservation(data, setData)
}



// create user

    /*
    const createReservation = async (name, email, table) => {
        await addDoc(userCollection, { nombre: name, correo: email, mesa: table })
        getReservation()
    }
    

    // get users

    const getUserDocs = async () => {
        const data = await getDocs(userCollection)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getReservation = async () => {
        //const collectionname = collection(db, 'users')
        const snapshot = await getDocs(userCollection);
        console.log("snapshot", snapshot)
        setData(snapshot.docs.map((doc) => doc.data()));
        console.log("data", data)
        //console.log(snapshot.docs.map((doc) => doc.data()))
    }



    /*const incrementarMesa = async (id, newTable) => {
        const userDoc = doc(userCollection, id)
        const newMesa = { mesa: parseInt(newTable) + 1 }
        console.log(newMesa)
        await updateDoc(userDoc, newMesa)
        getUserDocs()
    }

    const borrarDoc = async (id) => {
        const userDoc = doc(userCollection, id)
        await deleteDoc(userDoc)
        getUserDocs()
    }*/

