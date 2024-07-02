import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FaFire} from 'react-icons/fa'

import NavBar from '../NavBar'
import SideBar from '../SideBar'
import TrendingVideosListItem from '../TrendingVideosListItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  TrendingBannerContainer,
  TrendingImageContainer,
  TrendingHeading,
  TrendingVideosContainer,
  TrendingVideosFailureHeading,
  TrendingVideosFailureDescription,
} from './trendingVideosStyledComponent'
import './index.css'

const trendingApiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    trendingVideosData: [],
    trendingApiStatus: trendingApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  onClickTrendingVideosRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'
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
      const updatedTrendingVideos = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImgUrl: each.channel.profile_image_url,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))
      this.setState({
        trendingVideosData: updatedTrendingVideos,
        trendingApiStatus: trendingApiStatusConstants.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiStatusConstants.failure})
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, smSideBar} = value

          const renderTrendingVideosInProgress = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </div>
          )

          const renderTrendingVideosSuccess = () => {
            const {trendingVideosData} = this.state

            return (
              <div className="trending-videos-main-container">
                <ul className="trending-videos-container">
                  {trendingVideosData.map(each => (
                    <TrendingVideosListItem key={each.id} videoDetails={each} />
                  ))}
                </ul>
              </div>
            )
          }

          const renderTrendingVideosFailure = () => (
            <div className="trending-videos-failure-container">
              <img
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
                className="trending-videos-failure-img"
              />
              <TrendingVideosFailureHeading isDarkMode={darkMode}>
                {' '}
                Oops! Something Went Wrong{' '}
              </TrendingVideosFailureHeading>
              <TrendingVideosFailureDescription isDarkMode={darkMode}>
                {' '}
                We are having some trouble to complete your request. Please try
                again.{' '}
              </TrendingVideosFailureDescription>
              <button
                type="button"
                className="trending-videos-retry-button"
                onClick={this.onClickTrendingVideosRetry}
              >
                Retry
              </button>
            </div>
          )

          const renderTrendingVideos = () => {
            const {trendingApiStatus} = this.state

            switch (trendingApiStatus) {
              case trendingApiStatusConstants.inProgress:
                return renderTrendingVideosInProgress()
              case trendingApiStatusConstants.success:
                return renderTrendingVideosSuccess()
              case trendingApiStatusConstants.failure:
                return renderTrendingVideosFailure()
              default:
                return null
            }
          }

          return (
            <>
              <NavBar />
              <div className="trending-videos-sidebar-container">
                <SideBar />
                <TrendingContainer
                  data-testid="trending"
                  isDarkMode={darkMode}
                  smDevice={smSideBar}
                >
                  <TrendingBannerContainer
                    isDarkMode={darkMode}
                    data-testid="banner"
                  >
                    <TrendingImageContainer isDarkMode={darkMode}>
                      <FaFire />
                    </TrendingImageContainer>

                    <TrendingHeading isDarkMode={darkMode}>
                      Trending
                    </TrendingHeading>
                  </TrendingBannerContainer>
                  <TrendingVideosContainer isDarkMode={darkMode}>
                    {renderTrendingVideos()}
                  </TrendingVideosContainer>
                </TrendingContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideos
