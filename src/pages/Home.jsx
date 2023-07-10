import Navigationbar from '../components/NavigationBar/Navigationbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Reservation from '../components/Reservation/Reservation'
import Footer from '../components/Footer/Footer'
import Mainmenu from '../components/MainMenu/Mainmenu'




const Home = () => {

    return (<>
        <header>
            <Navigationbar />
        </header>
        <main>
                <Jumbotron h1="Basic Jumbotron"></Jumbotron>
                <Mainmenu></Mainmenu>
                <Reservation></Reservation>
        </main>
        <footer>
            <Footer></Footer>
        </footer></>)
}

export default Home;