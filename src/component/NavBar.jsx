import logo from '../assets/react.svg';
import '../App.css'

export default function NavBar(){
    return (
        <nav>
            <img src={logo} alt='logo' className='imgLogo' />
            <h3>ReactFacts</h3>
            <h4>React Course - Project1</h4>
        </nav>
    )
}