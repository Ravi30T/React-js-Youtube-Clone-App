import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoTitle,
  ChannelName,
  ViewsCount,
  PublishedDate,
  HomeVideoDot,
} from './homeVideoListItemStyledComponent'

import './index.css'

const HomeVideosListItem = props => {
  const {videoDetails} = props

  const {id, channel, publishedAt, thumbnailUrl, title, viewsCount} =
    videoDetails

  const {name, profileImgUrl} = channel

  const newDate = formatDistanceToNow(new Date(publishedAt))

  const publishedDate = newDate.slice(-8)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <li className="video-list-item">
            <Link to={`/videos/${id}`} className="video-link-item">
              <div className="image-container">
                <img
                  src={thumbnailUrl}
                  className="video-img"
                  alt="video thumbnail"
                />
              </div>

              <div className="video-details-container">
                <div className="profile-title-container">
                  <div className="profile-container">
                    <img
                      src={profileImgUrl}
                      className="channel-profile-img"
                      alt="channel logo"
                    />
                  </div>

                  <div className="video-title-container">
                    <VideoTitle isDarkMode={darkMode}> {title} </VideoTitle>
                    <div className="sm-channel-views-date-container">
                      <div className="channel-name-container">
                        <ChannelName isDarkMode={darkMode}>
                          {' '}
                          {name}{' '}
                        </ChannelName>
                      </div>

                      <div className="views-date-container">
                        <div className="dot-container">
                          <HomeVideoDot isDarkMode={darkMode}>
                            <BsDot />
                          </HomeVideoDot>
                        </div>
                        <div className="views-container">
                          <ViewsCount isDarkMode={darkMode}>
                            {' '}
                            {viewsCount} views{' '}
                          </ViewsCount>
                        </div>

                        <div className="dot-container">
                          <HomeVideoDot isDarkMode={darkMode}>
                            <BsDot />
                          </HomeVideoDot>
                        </div>

                        <div className="date-container">
                          <PublishedDate isDarkMode={darkMode}>
                            {publishedDate} ago
                          </PublishedDate>
                        </div>
                      </div>
                    </div>

                    <div className="lg-channel-views-date-container">
                      <div className="channel-name-container">
                        <ChannelName isDarkMode={darkMode}>
                          {' '}
                          {name}{' '}
                        </ChannelName>
                      </div>

                      <div className="views-date-container">
                        <div className="views-container">
                          <ViewsCount isDarkMode={darkMode}>
                            {' '}
                            {viewsCount} views{' '}
                          </ViewsCount>
                        </div>

                        <div className="dot-container">
                          <HomeVideoDot isDarkMode={darkMode}>
                            <BsDot />
                          </HomeVideoDot>
                        </div>

                        <div className="date-container">
                          <PublishedDate isDarkMode={darkMode}>
                            {publishedDate} ago
                          </PublishedDate>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideosListItem
