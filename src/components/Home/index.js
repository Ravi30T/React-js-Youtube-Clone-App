import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosSearch, IoIosClose} from 'react-icons/io'

import NavBar from '../NavBar'
import SideBar from '../SideBar'
import HomeVideosListItem from '../HomeVideosListItem'

import './index.css'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeContainer,
  SearchBoxContainer,
  SearchBox,
  SearchIconContainer,
  HomeFailureHeading,
  HomeFailureDescription,
  AdContainer,
  AdCloseButton,
  AdWebsiteLogo,
  AdMessage,
  SubscriptionButton,
} from './homeStyledComponent'

const homeApiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeData: [],
    searchVal: '',
    homeApiStatus: homeApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickSearchFailureRetry = () => {
    this.setState({searchVal: ''}, this.getHomeVideos)
  }

  onEnterSearchInput = event => {
    this.setState({searchVal: event.target.value})
  }

  onClickEnterKey = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  onClickSearchIcon = () => {
    const {searchVal} = this.state

    if (searchVal !== undefined) {
      this.getHomeVideos()
    }
  }

  getHomeVideos = async () => {
    this.setState({homeApiStatus: homeApiStatusConstants.inProgress})

    const {searchVal} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchVal}`

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
      const updatedHomeData = data.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImgUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({
        homeData: updatedHomeData,
        homeApiStatus: homeApiStatusConstants.success,
      })
    } else {
      this.setState({homeApiStatus: homeApiStatusConstants.failure})
    }
  }

  renderHomeInProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderHomeSuccess = darkMode => {
    const {homeData} = this.state

    const homeDataLength = homeData.length > 0

    return (
      <>
        {homeDataLength ? (
          <div className="home-videos-main-container">
            <ul className="home-videos-container">
              {homeData.map(each => (
                <HomeVideosListItem key={each.id} videoDetails={each} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="home-failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-search-results-img"
            />
            <HomeFailureHeading isDarkMode={darkMode}>
              {' '}
              No Search results found{' '}
            </HomeFailureHeading>
            <HomeFailureDescription isDarkMode={darkMode}>
              {' '}
              Try different key words or remove search filter{' '}
            </HomeFailureDescription>
            <button
              type="button"
              className="home-retry-button"
              onClick={this.onClickSearchFailureRetry}
            >
              Retry
            </button>
          </div>
        )}
      </>
    )
  }

  renderHomeFailure = darkMode => (
    <div className="home-failure-container">
      <img
        src={
          darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="no-search-results-img"
      />
      <HomeFailureHeading isDarkMode={darkMode}>
        {' '}
        Oops! Something Went Wrong{' '}
      </HomeFailureHeading>
      <HomeFailureDescription isDarkMode={darkMode}>
        {' '}
        We are having some trouble to complete your request. Please try again.{' '}
      </HomeFailureDescription>
      <button
        type="button"
        className="home-retry-button"
        onClick={this.onClickSearchFailureRetry}
      >
        Retry
      </button>
    </div>
  )

  renderHomeSwitchCondition = darkMode => {
    const {homeApiStatus} = this.state

    switch (homeApiStatus) {
      case homeApiStatusConstants.inProgress:
        return this.renderHomeInProgress(darkMode)
      case homeApiStatusConstants.success:
        return this.renderHomeSuccess(darkMode)
      case homeApiStatusConstants.failure:
        return this.renderHomeFailure(darkMode)
      default:
        return null
    }
  }

  render() {
    const {searchVal} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, smSideBar, showAd, toggleAd} = value

          const onClickCloseAd = () => {
            toggleAd()
          }

          return (
            <>
              <NavBar />
              <div className="home-sidebar-container">
                <SideBar />
                <HomeContainer
                  data-testid="home"
                  isDarkMode={darkMode}
                  smDevice={smSideBar}
                >
                  {showAd && (
                    <AdContainer data-testid="banner">
                      <AdCloseButton
                        data-testid="close"
                        type="button"
                        onClick={onClickCloseAd}
                      >
                        <IoIosClose />
                      </AdCloseButton>
                      <AdWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <AdMessage>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </AdMessage>
                      <SubscriptionButton> GET IT NOW </SubscriptionButton>
                    </AdContainer>
                  )}

                  <SearchBoxContainer isDarkMode={darkMode}>
                    <SearchBox
                      type="search"
                      isDarkMode={darkMode}
                      placeholder="Search"
                      onChange={this.onEnterSearchInput}
                      onKeyDown={this.onClickEnterKey}
                      value={searchVal}
                    />
                    <SearchIconContainer isDarkMode={darkMode}>
                      <button
                        type="button"
                        data-testid="searchButton"
                        className="search-icon-button"
                        onClick={this.onClickSearchIcon}
                        aria-label="Search"
                      >
                        <IoIosSearch />
                      </button>
                    </SearchIconContainer>
                  </SearchBoxContainer>
                  {this.renderHomeSwitchCondition(darkMode)}
                </HomeContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
