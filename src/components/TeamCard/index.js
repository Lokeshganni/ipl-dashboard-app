// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card-container">
      <img src={teamImageUrl} alt={name} className="team-card-image" />
      <p className="team-card-name">{name}</p>
    </Link>
  )
}

export default TeamCard
