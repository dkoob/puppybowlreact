import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SingleTeam({allPlayers}) {
    let { teamId } = useParams();

    const checkPlayer = allPlayers.map((player) => {
        if (player.teamId === teamId*1) {
            return (
                <Link id={player.id} to={`/teams/${teamId}/${player.id}`}>
                    <li>{player.name}</li>
                </Link>
            )
        }
    })
    console.log(checkPlayer)

    return (
        <div>
            <h1>View team {teamId}'s roster below!</h1>
            <hr />
            {checkPlayer}
        </div>
    );
}

export default SingleTeam