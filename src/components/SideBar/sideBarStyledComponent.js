import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  background-color: ${props => (props.isdarkMode ? '#212121' : '#ffffff')};
  height: 95vh;
  padding-bottom: 10px;
  position: fixed;
  left: 0;
  margin-top: 55px;

  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'flex' : 'none')};
    max-height: 95vh;
    padding-bottom: 10px;
    width: 100vw;
    margin-top: 0px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  margin-left: 0px;
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => {
    if (!props.isActive) {
      return 'transparent'
    }

    return props.isdarkMode ? '#383838' : '#f1f5f9'
  }};
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
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }

    return props.isdarkMode ? '#909090' : '#000000'
  }};
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

export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
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
