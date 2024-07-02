import styled from 'styled-components'

export const SmNav = styled.nav`
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};

  @media (min-width: 768px) {
    display: none;
  }
`

export const WebsiteLogoContainer = styled.li`
  list-style-type: none;
`

export const WebsiteLogo = styled.img`
  @media (max-width: 767px) {
    width: 100px;
  }

  @media (min-width: 768px) {
    width: 140px;
  }
`

export const NavButtonsContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ThemeContainer = styled.li`
  list-style-type: none;
`

export const ThemeButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
`

export const SmSidebarButtonContainer = styled.li`
  list-style-type: none;
`

export const SmSideBarButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
`

export const LogoutButtonContainer = styled.li`
  list-style-type: none;
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
`

export const LgNav = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }

  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
`

export const LgNavButtonsContainer = styled.div`
  display: flex;
`

export const LgThemeButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background: none;
  font-size: 34px;
  cursor: pointer;
  margin-right: 15px;
`

export const ProfileButtonContainer = styled.li`
  list-style-type: none;
`

export const ProfileButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
`

export const LgLogoutButton = styled.button`
  background: transparent;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-family: 'Roboto';
  cursor: pointer;

  @media ((min-width: 768px) and (max-width: 991px)) {
    margin-right: 10px;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  height: 150px;

  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 30vw;
  }
`

export const LogoutHeading = styled.p`
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.isDarkMode ? '#ebebeb' : '#00306e')};
  font-size: 16px;
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  border: 2px solid #909090;
  color: #909090;
  outline: none;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 500;
  width: 100px;
`

export const LogoutConfirmButton = styled.button`
  font-family: 'Roboto';
  border: none;
  outline: none;
  background-color: #3b82f6;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  width: 100px;
`
