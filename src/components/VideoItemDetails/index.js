import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'

import {formatDistanceToNow} from 'date-fns'

import NavBar from '../NavBar'
import SideBar from '../SideBar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  VideoTitle,
  ViewsCount,
  PublishedDate,
  LikeButton,
  DislikeButton,
  SavedButton,
  SaveButton,
  Hr,
  ChannelName,
  SubsribersCount,
  LgVideoDescription,
  SmVideoDescription,
  VideoDetailsFailureHeading,
  VideoDetailsFailureDescription,
} from './videoItemDetailsStyledComponent'
import './index.css'

const videoDetailsApiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoData: [],
    videoDetailsApiStatus: videoDetailsApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onClickVideoDetailsRetry = () => {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({
      videoDetailsApiStatus: videoDetailsApiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        channelName: data.video_details.channel.name,
        profileImg: data.video_details.channel.profile_image_url,
        subscribersCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ).slice(-8),
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        viewsCount: data.video_details.view_count,
      }

      this.setState({
        videoData: updatedVideoDetails,
        videoDetailsApiStatus: videoDetailsApiStatusConstants.success,
      })
    } else {
      this.setState({
        videoDetailsApiStatus: videoDetailsApiStatusConstants.failure,
      })
    }
  }

  render() {
    const {videoData} = this.state

    const {
      id,
      title,
      channelName,
      profileImg,
      subscribersCount,
      description,
      publishedAt,
      videoUrl,
      viewsCount,
    } = videoData

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            darkMode,
            smSideBar,
            savedVideos,
            onAddSavedVideos,
            toggleLikeButton,
            toggleDislikeButton,
            likedVideos,
            disLikedVideos,
          } = value

          const findVideoSaved =
            savedVideos.filter(each => each.id === id).length === 1

          let videoSaved

          if (findVideoSaved) {
            videoSaved = true
          } else {
            videoSaved = false
          }

          const findVideoLiked = likedVideos.includes(id)

          let likeButton

          if (findVideoLiked) {
            likeButton = true
          } else {
            likeButton = false
          }

          const findVideoDisliked = disLikedVideos.includes(id)

          let dislikeButton

          if (findVideoDisliked) {
            dislikeButton = true
          } else {
            dislikeButton = false
          }

          const onClickSave = () => {
            onAddSavedVideos(videoData)
          }

          const onClickLikeButton = () => {
            toggleLikeButton(videoData)
          }

          const onClickDislikeButton = () => {
            toggleDislikeButton(videoData)
          }

          const renderVideoDetailsInProgress = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </div>
          )

          const renderVideoDetailsSuccess = () => (
            <>
              <VideoPlayerContainer>
                <div className="video-player-responsive-container">
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </VideoPlayerContainer>
              <div className="video-details-container">
                <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                <div className="video-main-details-container">
                  <div className="video-views-published-date-container">
                    <ViewsCount isDarkMode={darkMode}>
                      {' '}
                      {viewsCount} views{' '}
                    </ViewsCount>
                    <PublishedDate isDarkMode={darkMode}>
                      {publishedAt} ago
                    </PublishedDate>
                  </div>

                  <div className="like-dislike-saved-container">
                    <LikeButton
                      onClick={onClickLikeButton}
                      isDarkMode={darkMode}
                      isActive={likeButton}
                    >
                      <span className="like-dislike-save-span-el">
                        <AiOutlineLike />{' '}
                      </span>{' '}
                      Like{' '}
                    </LikeButton>
                    <DislikeButton
                      type="button"
                      onClick={onClickDislikeButton}
                      isDarkMode={darkMode}
                      isActive={dislikeButton}
                    >
                      <span className="like-dislike-save-span-el">
                        <AiOutlineDislike />
                      </span>
                      Dislike{' '}
                    </DislikeButton>
                    {videoSaved ? (
                      <SavedButton
                        type="button"
                        onClick={onClickSave}
                        isDarkMode={darkMode}
                        isActive={videoSaved}
                      >
                        <span className="like-dislike-save-span-el">
                          <MdPlaylistAddCheck />
                        </span>{' '}
                        Saved{' '}
                      </SavedButton>
                    ) : (
                      <SaveButton
                        type="button"
                        onClick={onClickSave}
                        isDarkMode={darkMode}
                      >
                        <span className="like-dislike-save-span-el">
                          <MdPlaylistAdd />
                        </span>{' '}
                        Save{' '}
                      </SaveButton>
                    )}
                  </div>
                </div>
              </div>
              <Hr />
              <div className="channel-details-container">
                <div className="logo-name-subscribers-container">
                  <div className="logo-container">
                    <img
                      src={profileImg}
                      className="channel-logo"
                      alt="channel logo"
                    />
                  </div>

                  <div className="name-subscribers-lgdescription-container">
                    <ChannelName isDarkMode={darkMode}>
                      {' '}
                      {channelName}{' '}
                    </ChannelName>
                    <SubsribersCount isDarkMode={darkMode}>
                      {' '}
                      {subscribersCount} subscribers
                    </SubsribersCount>
                    <LgVideoDescription isDarkMode={darkMode}>
                      {' '}
                      {description}{' '}
                    </LgVideoDescription>
                  </div>
                </div>
              </div>

              <div className="sm-video-description-container">
                <SmVideoDescription isDarkMode={darkMode}>
                  {' '}
                  {description}{' '}
                </SmVideoDescription>
              </div>
            </>
          )

          const renderVideoDetailsFailure = () => (
            <div className="video-details-failure-container">
              <img
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
                className="no-search-results-img"
              />
              <VideoDetailsFailureHeading isDarkMode={darkMode}>
                {' '}
                Oops! Something Went Wrong{' '}
              </VideoDetailsFailureHeading>
              <VideoDetailsFailureDescription isDarkMode={darkMode}>
                {' '}
                We are having some trouble to complete your request. Please try
                again.{' '}
              </VideoDetailsFailureDescription>
              <button
                type="button"
                className="video-details-retry-button"
                onClick={this.onClickVideoDetailsRetry}
              >
                Retry
              </button>
            </div>
          )

          const renderVideoDetails = () => {
            const {videoDetailsApiStatus} = this.state

            switch (videoDetailsApiStatus) {
              case videoDetailsApiStatusConstants.inProgress:
                return renderVideoDetailsInProgress()
              case videoDetailsApiStatusConstants.success:
                return renderVideoDetailsSuccess()
              case videoDetailsApiStatusConstants.failure:
                return renderVideoDetailsFailure()
              default:
                return null
            }
          }

          return (
            <>
              <NavBar />
              <div className="video-details-side-bar-container">
                <SideBar />
                <VideoItemDetailsContainer
                  isDarkMode={darkMode}
                  smDevice={smSideBar}
                  data-testid="videoItemDetails"
                >
                  {renderVideoDetails()}
                </VideoItemDetailsContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
