import { useParams } from 'react-router-dom';

function SingleTeam() {
    let { teamId } = useParams();

    return (
        <div>
            <h2>Team ID: {teamId}</h2>
        </div>
    );
}

export default SingleTeam