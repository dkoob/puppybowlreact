import { Link } from "react-router-dom"

const AllTeams = ({allTeams, allPlayers}) => {

    return (
        <div>
            <h1>View this years teams below!</h1>
            <hr />
            {allTeams.map((team) => {
                return (
                    <Link to={`/teams/${team.id}`} key={team.id}>
                        <li>{`${team.name} <--> Team id || ${team.id}`}</li>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllTeams