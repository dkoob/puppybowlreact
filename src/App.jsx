import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios, { all } from 'axios'
// Components
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AllTeams from './components/AllTeams'
import SingleTeam from './components/SingleTeam'
import SinglePlayer from './components/SinglePlayer'
import UploadPlayer from './components/UploadPlayer'

function App() {

  // use state variables
  const [allTeams, setAllTeams] = useState([])
  const [allPlayers, setAllPlayers] = useState([])
  const navigate = useNavigate()

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

  // create / delete

  const createPlayer = async (createdPlayer) => {
    const {data} = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310/players', createdPlayer)
    setAllPlayers([...allPlayers], data)
  }

  const deletePlayer = async (leavingPlayer) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${leavingPuppy.id}`)
    setAllPlayers(allPlayers.filter((stayingPlayers) => {return stayingPlayers.id !== leavingPlayer.id}))
    navigate('/teams/:teamId')
  }


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<HomePage />}></Route>
        <Route path = '/teams' element = {<AllTeams  allTeams = {allTeams} allPlayers = {allPlayers} createPlayer = {createPlayer}/>}></Route>
        <Route path='/teams/:teamId' element = {<SingleTeam allPlayers = {allPlayers}/>}></Route>
        <Route path='/teams/:teamId/:playerId' element = {<SinglePlayer deletePlayer = {deletePlayer} allPlayers = {allPlayers}/>}></Route>
        <Route path='/teams' element = {<UploadPlayer createPlayer = {createPlayer}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
