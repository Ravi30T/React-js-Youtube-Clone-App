import {Link} from 'react-router-dom'

import {
  GamingVideoTitle,
  GamingVideoViewsCount,
} from './gamingVideosListItemStyledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

const GamingVideosListItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewsCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <li className="gaming-video-list-item">
            <Link to={`/videos/${id}`} className="gaming-video-link-item">
              <div className="gaming-video-details-container">
                <img
                  src={thumbnailUrl}
                  className="gaming-video-img"
                  alt="video thumbnail"
                />
                <GamingVideoTitle isDarkMode={darkMode}>
                  {' '}
                  {title}{' '}
                </GamingVideoTitle>
                <GamingVideoViewsCount isDarkMode={darkMode}>
                  {' '}
                  {viewsCount} Watching Worldwide{' '}
                </GamingVideoViewsCount>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideosListItem
