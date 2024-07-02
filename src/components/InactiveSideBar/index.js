import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {
  InactiveSideBarContainer,
  ListItem,
  ItemsContainer,
  ListButton,
  TabName,
  ContactUs,
  SidebarIcon,
  SideBarFooterText,
} from './inactiveSideBarStyledComponent'

class InActiveSideBar extends Component {
  render() {
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
            <InactiveSideBarContainer
              smDevice={smSideBar}
              isdarkMode={darkMode}
            >
              <ul className="tabs-container">
                <ListItem isdarkMode={darkMode}>
                  <Link to="/" className="link-item">
                    <ItemsContainer isdarkMode={darkMode}>
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                      >
                        <SidebarIcon isdarkMode={darkMode}>
                          <AiFillHome />
                        </SidebarIcon>
                        <TabName isdarkMode={darkMode}> Home </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/trending" className="link-item">
                    <ItemsContainer isdarkMode={darkMode}>
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                      >
                        <SidebarIcon isdarkMode={darkMode}>
                          <FaFire />
                        </SidebarIcon>

                        <TabName isdarkMode={darkMode}> Trending </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/gaming" className="link-item">
                    <ItemsContainer isdarkMode={darkMode}>
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                      >
                        <SidebarIcon isdarkMode={darkMode}>
                          <SiYoutubegaming />
                        </SidebarIcon>

                        <TabName isdarkMode={darkMode}> Gaming </TabName>
                      </ListButton>
                    </ItemsContainer>
                  </Link>
                </ListItem>

                <ListItem isdarkMode={darkMode}>
                  <Link to="/saved-videos" className="link-item">
                    <ItemsContainer isdarkMode={darkMode}>
                      <ListButton
                        type="button"
                        isdarkMode={darkMode}
                        onClick={onClickTabItem}
                      >
                        <SidebarIcon isdarkMode={darkMode}>
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
            </InactiveSideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default InActiveSideBar
