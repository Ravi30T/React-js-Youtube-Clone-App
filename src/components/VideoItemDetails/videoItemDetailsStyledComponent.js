import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'none' : 'flex')};
    flex-direction: column;
    width: 100vw;
    padding: 10px;
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  }

  height: 100vh;
  @media (min-width: 768px) {
    padding: 10px;
    padding-top: 55px;
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
    width: 80%;
    margin-left: 20%;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 767px) {
    width: 90vw;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    width: 90vw;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  margin-right: 15px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
const getLikeDislikeColor = props => {
  if (props.isActive) {
    return '#2563eb'
  }
  if (props.isDarkMode) {
    return '#616e7c'
  }
  return '#64748b'
}

export const LikeButton = styled.button`
  font-family: 'Roboto';
  color: ${props => getLikeDislikeColor(props)};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const DislikeButton = styled.button`
  font-family: 'Roboto';
  color: ${props => getLikeDislikeColor(props)};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const SaveButton = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#64748b')};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

const getSavedButtonColor = props => {
  if (props.isActive) {
    return '#2563eb'
  }
  if (props.isDarkMode) {
    return '#616e7c'
  }
  return '#64748b'
}

export const SavedButton = styled.button`
  font-family: 'Roboto';
  color: ${props => getSavedButtonColor(props)};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Hr = styled.hr`
  color: ${props => (props.isDarkMode ? 'lightgrey' : '#616e7c')};

  @media (max-width: 767px) {
    width: 95vw;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`

export const SubsribersCount = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};
`

export const LgVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    display: none;
  }
`

export const SmVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const VideoDetailsFailureHeading = styled.h1`
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

export const VideoDetailsFailureDescription = styled.p`
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
