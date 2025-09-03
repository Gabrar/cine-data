import { Link } from 'react-router-dom'


import styles from './Footer.module.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (

        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                
                <li>
                    <FaGithub onClick={() => window.open("https://github.com/Gabrar/cine-data", "_blank")} />
                </li>
                <li>
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/gabriel-dias-siqueira/", "_blank")}/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span> CineData </span> &copy; 2025
            </p>

        </footer>

    )
}

export default Footer