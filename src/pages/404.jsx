
import { useNavigate } from "react-router-dom"




const Pagenotfound = () => {

  const Navigate = useNavigate();


  return (<><div className="container">
    <div className="d-felx justify-content-center align-item-center"> 
      <div className="col-6 p-2 bg-body-tertiary rounded-3">
        <div className="py-5">
          <h1 className="display-5 fw-bold">Oppsss</h1>
          <p className="">Error 404 you might not be here.</p>
          <button onClick={() => { Navigate('/home') }} className="btn btn-primary btn-lg" type="button">Go Back</button>
        </div>
      </div>


    </div>

  </div>
  </>)

}

export default Pagenotfound