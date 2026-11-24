import { useState } from "react"
import { przepisyStartowe } from "./przepisy.js"

export default function App(){
    const[przepisy, setPrzepisy] = useState(przepisyStartowe)
    const [sortowanie, setSortowanie] = useState(true)
    const [nazwa, setNazwa] = useState("");
    const [czas, setCzas] = useState(0)
    const [prawidlowyCzas, setPrawidlowyCzas] = useState(true);

    const posortowane = [...przepisy].sort((a, b) => (
        sortowanie ? a.czas - b.czas : b.czas - a.czas
    ))

    function submit(event){
        event.preventDefault()
        if(Number(czas) < 0){
            setPrawidlowyCzas(false)
            return
        }
        const id = Math.max([...przepisy].czas) +1;
        const przepis = {
            id: id,
            nazwa: nazwa, 
            kategoria: "inne", 
            czas: Number(czas)
        };
        setPrzepisy([
            ...przepisy,
            przepis
        ])
        setPrawidlowyCzas(true)
        setNazwa("")
        setCzas(0)
    }

    return(
        <div className="container mt-4">
            <h1>KSIĄŻKA KUCHARSKA</h1>
            <div className="row g-3 mb-4">
                {posortowane.map((e, index) => (
                <div className="col-12 col-md-4" key={index}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h3 className="card-title h5">{e.nazwa}</h3>
                            <span className="badge text-bg-secondary">{e.kategoria}</span>
                            <p>Czas przygotowania: {e.czas}</p>
                        </div>
                    </div>
                </div>
                ))}     
                </div>
                <button type="button" className="btn btn-outline-primary mb-3" onClick={() => setSortowanie(!sortowanie)}>{sortowanie?"Malejąco" :"Rosnąco"}</button>
                <form className="form-control" onSubmit={submit}>
                    <h2>Dodaj przepis:</h2>
                    <div className="form-group mb-3">
                          <label htmlFor="nazwa" className="form-label">Nazwa:</label>
                          <input id="nazwa" type="text" className="form-control" value={nazwa} onChange={(event) => setNazwa(event.target.value)}></input>
                    </div>
                    <div className="form-group mb-3">
                          <label htmlFor="czas" className="form-label">Nazwa:</label>
                          <input id="czas" type="number" value={czas} className={`form-control ${!prawidlowyCzas && " is-invalid" }`} onChange={(event) => setCzas(event.target.value)}></input>
                    </div>
                    {!prawidlowyCzas && <div class="invalid-feedback d-block">Wprowadź poprawny czas!</div>}
                    <button type="submit" className="btn btn-primary">Zatwierdź</button>
                </form>
        </div>
    )
}