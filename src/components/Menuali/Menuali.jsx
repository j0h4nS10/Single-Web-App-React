import { Button, Card } from "react-bootstrap"

import { aliarray } from "../Reservation/Thirdcarousel"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const Menuali = () => {

    const paramstyped  = useParams();

    const [params, setParams] = useState(null);

    useEffect(() => { setParams(paramstyped.params)},[])



    //const { params } = useParams();
    //const params = "lunch"
    console.log(params, paramstyped)

    if (params) {
        const aliarrayfragment = aliarray.find(element => element.params == params)
        console.log("dentro de find array");
        return (<><div className="container my-5">
            <div className="row align-items-md-stretch">
                <div className="col-md-6 mt-2 mb-2">
                    <div className="h-100 p-5 text-bg-light rounded-3">
                        <div style={{ width: '40rem' }}>
                            <img src={aliarrayfragment.img} style={{ width: '35rem' }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <div className="h-100 p-5 text-bg-light rounded-3">
                        <div>
                            <h1>{aliarrayfragment.h1}</h1>
                            <p>{aliarrayfragment.p1}</p>
                            <p>{aliarrayfragment.p2}</p>
                        </div>
                        <div className="align-items-end">
                            <Button><Link to="/menu/:id"></Link>texto</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>)
    } else {
        return (<><div>
            <div className="container my-5">
                <div className="row align-items-md-stretch">
                    {aliarray.map((element) => {
                        return (<>
                            <div className="col-md-6 mt-2 mb-2">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <div style={{ width: '40rem' }}>
                                        <img src={element.img} style={{ width: '35rem' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2 mb-2">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <div>
                                        <h1>{element.h1}</h1>
                                        <p>{element.p1}</p>
                                        <p>{element.p2}</p>
                                    </div>
                                    <div className="align-items-end">
                                        <Button><Link to="/menu/:id"></Link>texto</Button>
                                    </div>
                                </div>

                            </div></>)
                    })}
                </div>
            </div>
        </div>
        </>)
    }
}


export default Menuali