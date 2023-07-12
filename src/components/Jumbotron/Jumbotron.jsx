import Maincarousel from "./Maincarousel"


const Jumbotron = ( {props}) => {
    console.log(`props dentro de jumbotron ${props}`)
    console.log(props)

    return (<>
        <div className="container mt-2">
            <div className="p-2 text-center bg-body-tertiary rounded-3">
                <Maincarousel props={props}></Maincarousel>
            </div>
        </div></>
    )

}

export default Jumbotron