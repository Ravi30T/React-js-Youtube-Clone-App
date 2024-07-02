import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  smSideBar: false,
  showAd: true,
  toggleAd: () => {},
  toggleDarkMode: () => {},
  toggleSideBar: () => {},
  savedVideos: [],
  likedVideos: [],
  disLikedVideos: [],
  onAddSavedVideos: () => {},
  toggleLikeButton: () => {},
  toggleDislikeButton: () => {},
})
export default NxtWatchContext
