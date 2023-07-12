import Navigationbar from '../components/NavigationBar/Navigationbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Reservation from '../components/Reservation/Reservation'
import Footer from '../components/Footer/Footer'
import Mainmenu from '../components/MainMenu/Mainmenu'
import aliarray from './Arrays'
import { Listlink } from './Arrays'


const Home = () => {

    return (<>
        <header>
            <Navigationbar props={Listlink}/>
        </header>
        <main>
            <Jumbotron props={aliarray}></Jumbotron>
            <Mainmenu props={aliarray}></Mainmenu>
            <Reservation></Reservation>
        </main>
        <footer>
            <Footer></Footer>
        </footer></>)
}

export default Home;