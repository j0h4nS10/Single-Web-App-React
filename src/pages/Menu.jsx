import Navigationbar from '../components/NavigationBar/Navigationbar'
import Footer from '../components/Footer/Footer'
import Menuali from '../components/Menuali/Menuali'
import { useParams } from 'react-router-dom'


const Menu = () => {


    return (<><header>
        <Navigationbar />
    </header>
        <main>
            <Menuali></Menuali>
        </main>
        <footer>
            <Footer></Footer>
        </footer></>)
}

export default Menu