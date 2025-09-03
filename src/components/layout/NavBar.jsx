import styles from './NavBar.module.css'
import logo from '../../imgs/CineData-logo.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>         
                <img src={logo} alt="/" onClick={() => {
                    window.location.reload();
                }}/>  
        </nav>
    )
}

export default NavBar