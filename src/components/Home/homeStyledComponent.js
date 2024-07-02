import styled from 'styled-components'

export const HomeContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'none' : 'flex')};
    background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
    flex-direction: column;
    margin-left: 0px;
    width: 100%;
    padding-top: 5px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px;
    padding-top: 55px;
    background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
    width: 80%;
    margin-left: 20%;
  }
`

export const SearchBoxContainer = styled.div`
  display: flex;
  border: 2px solid ${props => (props.isDarkMode ? '#2D2D2D' : '#94a3b8')};

  @media (max-width: 575px) {
    width: 95vw;
  }

  @media ((min-width: 576px) and (max-width: 767px)) {
    width: 260px;
  }

  @media (min-width: 768px) {
    width: 450px;
    margin-top: 20px;
  }
`

export const SearchBox = styled.input`
  outline: none;
  padding: 10px;
  border: none;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 575px) {
    width: 85vw;
  }

  @media ((min-width: 576px) and (max-width: 767px)) {
    width: 220px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => (props.isDarkMode ? '#2D2D2D' : '#94a3b8')};
  background-color: ${props => (props.isDarkMode ? '#383838' : '#ebebeb')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 575px) {
    width: 10vw;
  }

  @media ((min-width: 576px) and (max-width: 767px)) {
    width: 40px;
  }

  @media (min-width: 768px) {
    width: 50px;
  }
`

export const HomeFailureHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const HomeFailureDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  text-align: center;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#475569')};

  @media (max-width: 767px) {
    font-size: 19px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const AdContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    height: 210px;
    width: 95vw;
    margin-bottom: 10px;
  }
`

export const AdCloseButton = styled.button`
  align-self: end;
  background: none;
  border: none;
  outline: none;
  font-size: 28px;
  cursor: pointer;
`

export const AdWebsiteLogo = styled.img`
  width: 160px;

  @media (max-width: 767px) {
    width: 120px;
  }
`

export const AdMessage = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  width: 65%;

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const SubscriptionButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  outline: none;
  border: 2px solid #283243;
  color: #283243;
  padding: 10px;
  width: 120px;
  font-weight: 500;
  cursor: pointer;
`
