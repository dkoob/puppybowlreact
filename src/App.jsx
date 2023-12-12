import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
// Components
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AllTeams from './components/AllTeams'
import SingleTeam from './components/SingleTeam'

function App() {

  // use state variables
  const [allTeams, setAllTeams] = useState([])
  const [allPlayers, setAllPlayers] = useState([])

  // axios get functions
  useEffect(() => {
    const fetchTeams = async() => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/teams')
      setAllTeams(data.data.teams)
    }
    fetchTeams()
  }, [])

  useEffect(() => {
    const fetchPlayers = async() => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      setAllPlayers(data.data.players)
    }
    fetchPlayers()
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<HomePage />}></Route>
        <Route path = '/teams' element = {<AllTeams  allTeams = {allTeams} allPlayers = {allPlayers}/>}></Route>
        <Route path='/teams/:teamId' element = {<SingleTeam allPlayers = {allPlayers}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
