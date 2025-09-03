import Search from '../layout/Search'

import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.home_Container}>
                <h1>Seja bem-vindo ao <span>CineData</span></h1>
            </section>

            <Search />
            
        </div>
    )
}

export default Home