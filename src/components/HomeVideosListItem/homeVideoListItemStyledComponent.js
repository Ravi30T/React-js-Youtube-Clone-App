import styled from 'styled-components'

export const VideoTitle = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  text-decoration: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#181818')};
  font-weight: 500;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const HomeVideoDot = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0px;

  color: ${props => (props.isDarkMode ? '#616e7c' : '#7A8CB1')};

  @media (min-width: 576px) {
    font-size: 16px;
    margin-bottom: 0px;
  }
`
