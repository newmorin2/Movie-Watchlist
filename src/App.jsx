import { useState } from 'react'
import './App.css'
import movies from './data/movies'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {
  const [search,setSearch] = useState('')
  const [dropdown,setDropdown] = useState('All')
  const [myMovies,setmyMovies] = useState(movies)

  const filteredMovies = myMovies.filter((mov) => {
    const searchMovies = mov.title.toLowerCase().includes(search.toLowerCase())
    const dropMovies = dropdown === 'All' || mov.genre === dropdown
    return searchMovies && dropMovies
  })

  const toggleForm = (event) => {
    setDropdown(event.target.value)
  }

  const addMovie = (newMovie) => {
    setmyMovies([...myMovies,newMovie])
  }

  return(
    <div className="bg-dark text-white">
      <div className='container py-4'>
        <h3 className='text-center'>Movie Watchlist</h3>

      <div style={{display:'inline-flex',gap:'20px',justifyContent:'center',alignItems:'center'}}>
        <input type="text"
        value={search}
        onChange={(event)=> setSearch(event.target.value)}
        className='form-control mb-3 mt-5'
        placeholder='Search movie...' />

        <form action="#">
          <select value={dropdown} onChange={toggleForm}>
            <option value="All">All</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
          </select>
        </form>
      </div>

        <MovieList movies = {filteredMovies} />

      <div className='mt-5'>
        <MovieForm addMovie = {addMovie} />
      </div>
      </div>
    </div>

  )
}

export default App
