import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Secondcarousel from '../Reservation/Secondcarousel';
import Thirdcarousel from '../Reservation/Thirdcarousel';


const Mainmenu = () => {
    return (<><section>
        <div className="container my-5">
            <div className="row g-5 align-items-md-stretch">
                <div className="col-md-6 mt-5 mb-5">
                    <div className="h-100 p-5 text-bg-dark rounded-3">
                        <Secondcarousel></Secondcarousel>
                    </div>
                </div>
                <div class="col-md-6 mt-5 mb-5">
                    <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <Thirdcarousel></Thirdcarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>)

}

export default Mainmenu