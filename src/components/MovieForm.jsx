import { useState } from "react"

function MovieForm(props){
    const [mName,setmName] = useState('')
    const [mGenre,setmGenre] = useState('')
    const [mYear,setmYear] = useState('')
    const [watched,setWatched] = useState('')
    const [successMessage,setSuccessMessage] = useState('')

    const toggleName = (event)=>{
        setmName(event.target.value)
    }
    const toggleGenre = (event)=>{
        setmGenre(event.target.value)
    }
    const toggleYear = (event)=>{
        setmYear(event.target.value)
    }
    const toggleWatched = (event)=>{
        setWatched(event.target.value)
    }

    const toggleFunction = (event)=> {
        event.preventDefault()
        if (
            mName.trim() === "" ||
            mGenre === "" ||
            mYear === "" ||
            watched === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        setmGenre('')
        setWatched('')
        setmName('')
        setmYear('')
        
        const newMovie={
            id:Date.now(),
            title:mName,
            genre:mGenre,
            year:mYear,
            watched:watched === "true"
        }
        props.addMovie(newMovie)
        setSuccessMessage('Movie added successfully')
    }
    return(
        <div>
            <form action="#" className="form-select p-4" onSubmit={toggleFunction}>
                <h3 className="mb-4">Add new movie</h3>

                <label htmlFor="name">Movie Name: </label>
                <input type="text"
                value={mName}
                name="name"
                className="form-control mb-3" 
                onChange={toggleName}/>

                <label htmlFor="genre">Genre: </label>
                <input type="text"
                value={mGenre}
                className="form-control mb-3"
                onChange={toggleGenre} />

                <label htmlFor="year">Year: </label>
                <input type="number"
                value={mYear}
                className="form-control mb-3"
                onChange={toggleYear} />

                <label htmlFor="watched">Watched:</label>
                <select value={watched} onChange={toggleWatched}>
                    <option value="">Select status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <br /> <br />
                <button type="submit" className="btn btn-primary">Add Movie</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )
}
export default MovieForm