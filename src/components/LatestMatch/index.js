// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    date,
    venue,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetails
  console.log(matchStatus)
  return (
    <div>
      <div>
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className=""
        />
      </div>
      <hr />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
