import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoReorderThreeOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SmNav,
  WebsiteLogoContainer,
  WebsiteLogo,
  NavButtonsContainer,
  ThemeContainer,
  ThemeButton,
  SmSidebarButtonContainer,
  SmSideBarButton,
  LogoutButtonContainer,
  LogoutButton,
  LgNav,
  LgNavButtonsContainer,
  LgThemeButton,
  ProfileButtonContainer,
  ProfileButton,
  ProfileImg,
  LgLogoutButton,
  PopupContainer,
  LogoutHeading,
  PopupButtonsContainer,
  CancelButton,
  LogoutConfirmButton,
} from './navbarStyledComponent'

import './index.css'

const NavBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, toggleDarkMode, toggleSideBar} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <SmNav isDarkMode={darkMode}>
            <ul className="nav-list-container">
              <WebsiteLogoContainer>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
              </WebsiteLogoContainer>

              <NavButtonsContainer>
                <ThemeContainer>
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    isDarkMode={darkMode}
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? <IoSunnyOutline /> : <FaMoon />}
                  </ThemeButton>
                </ThemeContainer>

                <SmSidebarButtonContainer>
                  <SmSideBarButton
                    type="button"
                    isDarkMode={darkMode}
                    onClick={toggleSideBar}
                  >
                    <IoReorderThreeOutline />
                  </SmSideBarButton>
                </SmSidebarButtonContainer>

                <LogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" isDarkMode={darkMode}>
                        <FiLogOut />
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainer isDarkMode={darkMode}>
                          <LogoutHeading isDarkMode={darkMode}>
                            {' '}
                            Are you sure, you want to logout?{' '}
                          </LogoutHeading>
                          <PopupButtonsContainer>
                            <CancelButton
                              type="button"
                              onClick={() => close()}
                              isDarkMode={darkMode}
                            >
                              {' '}
                              Cancel{' '}
                            </CancelButton>
                            <LogoutConfirmButton
                              type="button"
                              onClick={onClickLogout}
                              isDarkMode={darkMode}
                            >
                              Confirm
                            </LogoutConfirmButton>
                          </PopupButtonsContainer>
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
                </LogoutButtonContainer>
              </NavButtonsContainer>
            </ul>
          </SmNav>

          <LgNav isDarkMode={darkMode}>
            <ul className="nav-list-container">
              <WebsiteLogoContainer>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
              </WebsiteLogoContainer>

              <LgNavButtonsContainer>
                <ThemeContainer>
                  <LgThemeButton
                    type="button"
                    data-testid="theme"
                    isDarkMode={darkMode}
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? <IoSunnyOutline /> : <FaMoon />}
                  </LgThemeButton>
                </ThemeContainer>

                <ProfileButtonContainer>
                  <ProfileButton type="button">
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ProfileButton>
                </ProfileButtonContainer>

                <LogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <LgLogoutButton type="button" isDarkMode={darkMode}>
                        Logout
                      </LgLogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainer isDarkMode={darkMode}>
                          <LogoutHeading isDarkMode={darkMode}>
                            Are you sure, you want to logout?
                          </LogoutHeading>
                          <PopupButtonsContainer>
                            <CancelButton
                              type="button"
                              onClick={() => close()}
                              isDarkMode={darkMode}
                            >
                              Cancel
                            </CancelButton>
                            <LogoutConfirmButton
                              type="button"
                              onClick={onClickLogout}
                              isDarkMode={darkMode}
                            >
                              Confirm
                            </LogoutConfirmButton>
                          </PopupButtonsContainer>
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
                </LogoutButtonContainer>
              </LgNavButtonsContainer>
            </ul>
          </LgNav>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavBar)
