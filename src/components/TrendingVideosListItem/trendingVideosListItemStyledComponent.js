import styled from 'styled-components'

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 15px;
    margin-bottom: 0px;
  }

  @media (min-width: 576px) {
    margin-bottom: 0px;
    font-size: 18px;
    margin-top: 0px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#7A8CB1')};

  @media (min-width: 576px) {
    margin-bottom: 0px;
    font-size: 17px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const XsTrendingVideoDot = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#7A8CB1')};
  margin-top: 14px;

  @media (min-width: 576px) {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 17px;
  }
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#7A8CB1')};
  font-size: 17px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#7A8CB1')};
  font-size: 17px;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`
