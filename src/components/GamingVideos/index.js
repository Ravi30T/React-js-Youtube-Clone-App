import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import NavBar from '../NavBar'
import SideBar from '../SideBar'

import NxtWatchContext from '../../context/NxtWatchContext'

import GamingVideosListItem from '../GamingVideosListItem'

import {
  GamingContainer,
  GamingBannerContainer,
  GamingImageContainer,
  GamingHeading,
  GamingVideosContainer,
  GamingVideosFailureHeading,
  GamingVideosFailureDescription,
} from './gamingVideosStyledComponent'

import './index.css'

const gamingApiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {
    gamingVideosData: [],
    gamingVideosApi: gamingApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  onClickGamingVideosRetry = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingVideosApi: gamingApiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedGamingVideosData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewsCount: each.view_count,
      }))

      this.setState({
        gamingVideosData: updatedGamingVideosData,
        gamingVideosApi: gamingApiStatusConstants.success,
      })
    } else {
      this.setState({gamingVideosApi: gamingApiStatusConstants.failure})
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, smSideBar} = value

          const renderGamingVideosInProgress = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </div>
          )

          const renderGamingVideosSuccess = () => {
            const {gamingVideosData} = this.state

            return (
              <div className="gaming-videos-main-container">
                <ul className="gaming-videos-container">
                  {gamingVideosData.map(each => (
                    <GamingVideosListItem key={each.id} videoDetails={each} />
                  ))}
                </ul>
              </div>
            )
          }

          const renderGamingVideosFailure = () => (
            <div className="gaming-videos-failure-container">
              <img
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
                className="no-search-results-img"
              />
              <GamingVideosFailureHeading isDarkMode={darkMode}>
                {' '}
                Oops! Something Went Wrong{' '}
              </GamingVideosFailureHeading>
              <GamingVideosFailureDescription isDarkMode={darkMode}>
                {' '}
                We are having some trouble to complete your request. Please try
                again.{' '}
              </GamingVideosFailureDescription>
              <button
                type="button"
                className="gaming-videos-retry-button"
                onClick={this.onClickGamingVideosRetry}
              >
                Retry
              </button>
            </div>
          )

          const renderGamingVideos = () => {
            const {gamingVideosApi} = this.state

            switch (gamingVideosApi) {
              case gamingApiStatusConstants.inProgress:
                return renderGamingVideosInProgress()
              case gamingApiStatusConstants.success:
                return renderGamingVideosSuccess()
              case gamingApiStatusConstants.failure:
                return renderGamingVideosFailure()
              default:
                return null
            }
          }

          return (
            <>
              <NavBar />
              <div className="sidebar-gaming-videos-container">
                <SideBar />
                <GamingContainer
                  data-testid="gaming"
                  isDarkMode={darkMode}
                  smDevice={smSideBar}
                >
                  <GamingBannerContainer
                    isDarkMode={darkMode}
                    data-testid="banner"
                  >
                    <GamingImageContainer isDarkMode={darkMode}>
                      <SiYoutubegaming />
                    </GamingImageContainer>

                    <GamingHeading isDarkMode={darkMode}>Gaming</GamingHeading>
                  </GamingBannerContainer>
                  <GamingVideosContainer isDarkMode={darkMode}>
                    {renderGamingVideos()}
                  </GamingVideosContainer>
                </GamingContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideos
