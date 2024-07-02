import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import {
  VideoTitle,
  ChannelName,
  XsTrendingVideoDot,
  ViewsCount,
  PublishedDate,
} from './savedVideosListItemStyledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const SavedVideosListItem = props => {
  const {videoDetails} = props

  const {
    id,
    publishedAt,
    channelName,
    profileImg,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <li className="saved-video-list-item">
            <Link to={`/videos/${id}`} className="saved-video-link-item">
              <img
                src={thumbnailUrl}
                className="saved-video-image"
                alt="video thumbnail"
              />

              <div className="xs-video-details-container">
                <div className="channel-logo-container">
                  <img
                    src={profileImg}
                    alt="channel logo"
                    className="saved-video-channel-profile-img"
                  />
                </div>

                <div className="xs-main-video-details-container">
                  <div className="xs-video-title-container">
                    <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                  </div>

                  <div className="xs-video-channel-name-views-date-container">
                    <ChannelName isDarkMode={darkMode}>
                      {' '}
                      {channelName}{' '}
                    </ChannelName>
                    <XsTrendingVideoDot isDarkMode={darkMode}>
                      <BsDot />
                    </XsTrendingVideoDot>
                    <ViewsCount isDarkMode={darkMode}>
                      {viewsCount} views
                    </ViewsCount>
                    <XsTrendingVideoDot isDarkMode={darkMode}>
                      <BsDot />
                    </XsTrendingVideoDot>
                    <PublishedDate isDarkMode={darkMode}>
                      {publishedAt} ago
                    </PublishedDate>
                  </div>
                </div>
              </div>

              <div className="sm-video-details-container">
                <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                <ChannelName isDarkMode={darkMode}> {channelName} </ChannelName>
                <div className="sm-video-views-date-container">
                  <ViewsCount> {viewsCount} views </ViewsCount>
                  <XsTrendingVideoDot isDarkMode={darkMode}>
                    <BsDot />
                  </XsTrendingVideoDot>
                  <PublishedDate> {publishedAt} ago </PublishedDate>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideosListItem
