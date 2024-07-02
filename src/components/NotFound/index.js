import NxtWatchContext from '../../context/NxtWatchContext'

import NavBar from '../NavBar'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundDescription,
} from './notFoundStyledComponent'
import './index.css'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, smSideBar} = value
      return (
        <>
          <NavBar />
          <div className="sidebar-notfound-container">
            <SideBar />
            <NotFoundContainer isDarkMode={darkMode} smDevice={smSideBar}>
              <img
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                className="not-found-img"
                alt="not found"
              />
              <NotFoundHeading isDarkMode={darkMode}>
                {' '}
                Page Not Found{' '}
              </NotFoundHeading>
              <NotFoundDescription isDarkMode={darkMode}>
                {' '}
                We are sorry, the page you requested could not be found.{' '}
              </NotFoundDescription>
            </NotFoundContainer>
          </div>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
