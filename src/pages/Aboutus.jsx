import Navigationbar from "../components/NavigationBar/Navigationbar"


import Footer from "../components/Footer/Footer";
import { Listlink } from "./Arrays";


const Aboutus = () => {

    return (
        <><header>

            <Navigationbar props={Listlink} />
        </header>
            <main>
                {<h1>about US</h1>}
                
            </main>
            <footer>
                <Footer></Footer>
            </footer></>)
}

export default Aboutus