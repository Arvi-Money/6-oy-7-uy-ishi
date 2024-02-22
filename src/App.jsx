import './App.css'
import logo from './assets/Logo.svg'
import Fox from './assets/fox.svg'
import {Header, Container, Navbar} from '../style'


function App() {

  return (
    <>
     <Header>
      <Container>
        <div>
          <img src={logo} alt="" />
        </div>
        <Navbar>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Locations</a>
          <a href="#">FAQ's</a>
          <a href="#">Contact us</a>
        </Navbar>
      </Container>
     </Header>
     {/* <Banner>
      <Info>
        <h1>Love and kindness are never wasted.</h1>
        <p>We help around 1,00,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.</p>
        <button>Join Us</button>
      </Info>
      <Image>
        <img src={Fox} alt="" />
      </Image>
     </Banner> */}
    </>
  )
}

export default App
