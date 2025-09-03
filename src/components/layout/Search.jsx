import { useState } from 'react'
import styles from './Search.module.css'


function Search() {
    const [filme, setFilme] = useState('')
    const [dados, setDados] = useState(null)

    const buscarFilme = async () => {

        const apiKey = "6e45b973"
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${filme}`

        const resposta = await fetch(url)
        const json = await resposta.json()
        setDados(json)
    }

    return (
        <div>
            <div className={styles.search_container}>
                <div>
                    <input type="text" placeholder='Digite o filme que deseja' value={filme} onChange={(e) => setFilme(e.target.value)} />
                </div>
                <div>
                    <button onClick={buscarFilme} className={styles.btn}>Buscar</button>
                </div>

            </div>
            {dados && dados.Response !== "False" && (
                <div style={{ marginTop: "20px", marginBottom: "-10em" }}>
                    <h2 style={{ margin: '0.5em'}}>
                        {dados.Title} ({dados.Year})
                    </h2>
                    <p style={{margin: '1em'}}>
                        <b>Nota IMDb:</b> {dados.imdbRating}
                    </p>
                    <img style={{margin: '1em'}} src={dados.Poster} alt={dados.Title} />
                    <span style={{ margin: '1em', position: 'absolute', width: '20em', fontSize: '2em' }}>
                        {dados.Plot}
                    </span>
                </div>
            )}
            {dados && dados.Response === "False" && (
                <p style={{display: "flex", color: 'red', alignItems: "center", justifyContent: "center",padding: "2em"}}>Filme não encontrado.</p>
            )}

        </div>
    )
}

export default Search 