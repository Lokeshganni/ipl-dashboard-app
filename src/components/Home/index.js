// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: formattedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="home-main-container">
        <div className="ipl-logo-and-title-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        <div className="home-loader-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="home-team-list-container">
              {teamList.map(each => (
                <TeamCard teamDetails={each} key={each.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
