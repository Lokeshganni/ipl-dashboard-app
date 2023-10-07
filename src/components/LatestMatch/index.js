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

  return (
    <div className="latest-match-main-container">
      <div className="latest-match-team-name-logo-container">
        <div className="latest-match-name-and-date-container">
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-para">{venue}</p>
          <p className="latest-match-para">{result}</p>
        </div>
        <div className="latest-match-logo-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
        </div>
      </div>
      <hr className="horizontal-rule" />
      <div className="latest-match-innings-container">
        <p className="latest-match-heading">First Innings</p>
        <p className="latest-match-para">{firstInnings}</p>
        <p className="latest-match-heading">Second Innings</p>
        <p className="latest-match-para">{secondInnings}</p>
        <p className="latest-match-heading">Man Of The Match</p>
        <p className="latest-match-para">{manOfTheMatch}</p>
        <p className="latest-match-heading">Umpires</p>
        <p className="latest-match-para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
