import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import NavBar from '../NavBar'
import SideBar from '../SideBar'
import SavedVideosListItem from '../SavedVideosListItem'

import {
  SavedVideosContainer,
  SavedVideosBannerContainer,
  SavedVideosFailureHeading,
  SavedVideosFailureDescription,
  SavedVideosImageContainer,
  SavedVideosHeading,
} from './savedVideosStyledComponent'

import './index.css'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, smSideBar, savedVideos} = value
      const savedVideosLength = savedVideos.length !== 0
      return (
        <>
          <NavBar />
          <div className="sidebar-saved-videos-container">
            <SideBar />
            <SavedVideosContainer
              data-testid="savedVideos"
              isDarkMode={darkMode}
              smDevice={smSideBar}
            >
              <div className="saved-videos-main-container">
                {savedVideosLength && (
                  <SavedVideosBannerContainer
                    isDarkMode={darkMode}
                    data-testid="banner"
                  >
                    <SavedVideosImageContainer isDarkMode={darkMode}>
                      <MdPlaylistAdd />
                    </SavedVideosImageContainer>

                    <SavedVideosHeading isDarkMode={darkMode}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosBannerContainer>
                )}
                <ul className="saved-videos-container">
                  {savedVideosLength ? (
                    savedVideos.map(each => (
                      <SavedVideosListItem key={each.id} videoDetails={each} />
                    ))
                  ) : (
                    <div className="saved-videos-failure-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                        className="no-saved-videos-img"
                      />
                      <SavedVideosFailureHeading isDarkMode={darkMode}>
                        No saved videos found
                      </SavedVideosFailureHeading>
                      <SavedVideosFailureDescription isDarkMode={darkMode}>
                        You can save your videos while watching them
                      </SavedVideosFailureDescription>
                    </div>
                  )}
                </ul>
              </div>
            </SavedVideosContainer>
          </div>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
