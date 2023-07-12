import Navigationbar from '../components/NavigationBar/Navigationbar'
import Footer from '../components/Footer/Footer'
import Menuali from '../components/Menuali/Menuali'
import aliarray from './Arrays'
import { Listlink } from './Arrays'


const Menu = () => {


    return (<><header>
        <Navigationbar props={Listlink} />
    </header>
        <main>
            <Menuali props={aliarray}></Menuali>
        </main>
        <footer>
            <Footer></Footer>
        </footer></>)
}

export default Menu