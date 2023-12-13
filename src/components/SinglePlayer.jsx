import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SinglePlayer({allPlayers}) {
    let { teamId } = useParams()
    let { playerId } = useParams()
    console.log(teamId)

    const singlePlayer = allPlayers.find((player) => {
        if (playerId*1 === player.id) {
            return player
        }
    })

    if(!singlePlayer){
        return null
    }
    
    return (
        <div>
            <h1>Single Player Information</h1>
            <hr />  
            <h2>{singlePlayer.name}</h2>
            <h4>{singlePlayer.breed}</h4>
            <h4>Field Status: {singlePlayer.status}</h4>
            <img src={singlePlayer.imageUrl}/>
            <br />
            <Link to={`/teams/${teamId}`}>Back to all players</Link>
        </div>
    );
}

export default SinglePlayer