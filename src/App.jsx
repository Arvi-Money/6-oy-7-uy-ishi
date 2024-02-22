import './App.css'
import logo from './assets/Logo.svg'
import Fox from './assets/fox.svg'
import {Header, Container, Navbar, Contact, Banner, Info, Join} from '../style'


function App() {

  return (
    <>
     <Container>
     <Header>
        <div>
          <img src={logo} alt="" />
        </div>
        <Navbar>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Locations</a>
          <a href="#">FAQ's</a>
          <Contact> Contact Us</Contact>
        </Navbar>
     </Header>
     <Banner>
      <Info>
        <h1>Love and kindness are never wasted.</h1>
        <p>We help around 1,00,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.</p>
        <Join>Join Us</Join>
      </Info>
        <img src={Fox} alt="" className='fox' />
     </Banner>
     </Container>
    </>
  )
}

export default App
