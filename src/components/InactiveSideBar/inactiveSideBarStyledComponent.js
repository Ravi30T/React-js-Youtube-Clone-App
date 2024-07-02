import styled from 'styled-components'

export const InactiveSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  background-color: ${props => (props.isdarkMode ? '#212121' : '#ffffff')};

  @media (min-width: 768px) {
    width: 20%;
    background-color: ${props => (props.isdarkMode ? '#212121' : '#ffffff')};
    height: 95vh;
    padding-bottom: 10px;
    position: fixed;
    left: 0;
    margin-top: 55px;
  }

  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'flex' : 'none')};
    height: 100vh;
    width: 100vw;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  margin-left: 0px;
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
`

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 50px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;

  @media (max-width: 767px) {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`

export const SidebarIcon = styled.p`
  margin-right: 25px;
  font-size: 25px;
  color: ${props => (props.isdarkMode ? '#909090' : '#000000')};
`

export const TabName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isdarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ContactUs = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isdarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const SideBarFooterText = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isdarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
