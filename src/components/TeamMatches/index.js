// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {matchList: [], isLoading: true, bannerImageUrl: '', matchDetails: {}}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await res.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      matchList: recentMatches,
      isLoading: false,
      bannerImageUrl: teamBannerUrl,
      matchDetails: latestMatchDetails,
    })
  }

  render() {
    const {bannerImageUrl, matchDetails} = this.state
    return (
      <div className="team-matches-main-container">
        <img src={bannerImageUrl} alt="team banner" className="team-banner" />
        <p className="latest-matches-para">Latest Matches</p>
        <LatestMatch matchDetails={matchDetails} />
      </div>
    )
  }
}
export default TeamMatches
