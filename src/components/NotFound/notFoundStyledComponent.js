import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'none' : 'flex')};
    flex-direction: column;
    width: 100vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  width: 100%;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-size: 26px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#7e858e')};
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`
