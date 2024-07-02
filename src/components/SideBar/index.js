import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {
  SideBarContainer,
  ListItem,
  ItemsContainer,
  ListButton,
  TabName,
  ContactUs,
  SidebarIcon,
  SideBarFooterText,
} from './sideBarStyledComponent'

class SideBar extends Component {
  render() {
    const {history} = this.props

    const path = history.location.pathname
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, smSideBar, toggleSideBar} = value

          const onClickTabItem = () => {
            if (smSideBar) {
              toggleSideBar()
            }
          }

          return (
            <SideBarContainer smDevice={smSideBar} isdarkMode={darkMode}>
              <ul className="tabs-container">
                <ListItem isdarkMode={darkMode} isActive={path === '/'}>
                  <Link to="/" className="link-item">
                    <ItemsContainer
                      isdarkMode={darkMode}
                      isActive={path === '/'}
                    >
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                        isActive={path === '/'}
                      >
                        <SidebarIcon
                          isdarkMode={darkMode}
                          isActive={path === '/'}
                        >
                          <AiFillHome />
                        </SidebarIcon>
                        <TabName isdarkMode={darkMode}> Home </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/trending" className="link-item">
                    <ItemsContainer
                      isdarkMode={darkMode}
                      isActive={path === '/trending'}
                    >
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                        isActive={path === '/trending'}
                      >
                        <SidebarIcon
                          isdarkMode={darkMode}
                          isActive={path === '/trending'}
                        >
                          <FaFire />
                        </SidebarIcon>

                        <TabName isdarkMode={darkMode}> Trending </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/gaming" className="link-item">
                    <ItemsContainer
                      isdarkMode={darkMode}
                      isActive={path === '/gaming'}
                    >
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                        isActive={path === '/gaming'}
                      >
                        <SidebarIcon
                          isdarkMode={darkMode}
                          isActive={path === '/gaming'}
                        >
                          <SiYoutubegaming />
                        </SidebarIcon>

                        <TabName isdarkMode={darkMode}> Gaming </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/saved-videos" className="link-item">
                    <ItemsContainer
                      isdarkMode={darkMode}
                      isActive={path === '/saved-videos'}
                    >
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                        isActive={path === '/saved-videos'}
                      >
                        <SidebarIcon
                          isActive={path === '/saved-videos'}
                          isdarkMode={darkMode}
                        >
                          <MdPlaylistAdd />
                        </SidebarIcon>

                        <TabName isdarkMode={darkMode}> Saved Videos </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>
              </ul>

              <div className="sidebar-footer-container">
                <ContactUs isdarkMode={darkMode}> CONTACT US </ContactUs>
                <ul className="social-media-container">
                  <li className="social-list-item">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="social-logo"
                    />
                  </li>

                  <li className="social-list-item">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="social-logo"
                    />
                  </li>

                  <li className="social-list-item">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="social-logo"
                    />
                  </li>
                </ul>

                <SideBarFooterText isdarkMode={darkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </SideBarFooterText>
              </div>
            </SideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
