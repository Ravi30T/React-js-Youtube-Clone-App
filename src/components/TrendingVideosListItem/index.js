import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoTitle,
  ChannelName,
  XsTrendingVideoDot,
  ViewsCount,
  PublishedDate,
} from './trendingVideosListItemStyledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const TrendingVideosListItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    name,
    profileImgUrl,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails

  const newDate = formatDistanceToNow(new Date(publishedAt))

  const publishedDate = newDate.slice(-8)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <li className="trending-video-list-item">
            <Link to={`/videos/${id}`} className="trending-video-link-item">
              <img
                src={thumbnailUrl}
                className="trending-video-image"
                alt="video thumbnail"
              />

              <div className="xs-video-details-container">
                <div className="channel-logo-container">
                  <img
                    src={profileImgUrl}
                    alt="channel logo"
                    className="trending-video-channel-profile-img"
                  />
                </div>

                <div className="xs-main-video-details-container">
                  <div className="xs-video-title-container">
                    <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                  </div>

                  <div className="xs-video-channel-name-views-date-container">
                    <ChannelName isDarkMode={darkMode}> {name} </ChannelName>
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
                      {publishedDate} ago
                    </PublishedDate>
                  </div>
                </div>
              </div>

              <div className="sm-video-details-container">
                <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                <ChannelName isDarkMode={darkMode}> {name} </ChannelName>
                <div className="sm-video-views-date-container">
                  <ViewsCount> {viewsCount} views </ViewsCount>
                  <XsTrendingVideoDot isDarkMode={darkMode}>
                    <BsDot />
                  </XsTrendingVideoDot>
                  <PublishedDate> {publishedDate} ago </PublishedDate>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideosListItem
