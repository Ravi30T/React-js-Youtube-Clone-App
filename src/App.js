import './App.css'

// Replace your code here

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    darkMode: false,
    showAd: true,
    smSideBar: false,
    savedVideos: [],
    likedVideos: [],
    disLikedVideos: [],
  }

  onToggleDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  onToggleAd = () => {
    this.setState(prevState => ({showAd: !prevState.showAd}))
  }

  onToggleSideBar = () => {
    this.setState(prevState => ({smSideBar: !prevState.smSideBar}))
  }

  onAddSavedVideos = details => {
    const {savedVideos} = this.state

    const findVideo = savedVideos.filter(each => each.id === details.id)

    if (findVideo.length === 0) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, details],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [
          ...prevState.savedVideos.filter(each => each.id !== details.id),
        ],
      }))
    }
  }

  /* onClickLikeButton = details => {
    const {disLikedVideos} = this.state
    console.log(disLikedVideos)
    console.log(details)

    const verifyDislikedVideos = disLikedVideos.filter(
      each => each.id === details.id,
    )

    if (verifyDislikedVideos.length === 0) {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, details],
      }))
    } else {
      this.setState(prevState => ({
        disLikedVideos: [
          ...prevState.disLikedVideos.filter(each => each.id !== details.id),
        ],
        likedVideos: [...prevState.likedVideos, details],
      }))
    }
  } */

  onClickLikeButton = details => {
    const {id} = details
    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        return {
          likedVideos: [...prevState.likedVideos.filter(each => id !== each)],
        }
      }
      if (prevState.disLikedVideos.includes(id)) {
        return {
          disLikedVideos: [
            ...prevState.disLikedVideos.filter(each => id !== each),
          ],
          likedVideos: [...prevState.likedVideos, id],
        }
      }
      return {likedVideos: [...prevState.likedVideos, id]}
    })
  }

  onClickDislikeButton = details => {
    const {id} = details
    this.setState(prevState => {
      if (prevState.disLikedVideos.includes(id)) {
        return {
          disLikedVideos: [
            ...prevState.disLikedVideos.filter(each => id !== each),
          ],
        }
      }
      if (prevState.likedVideos.includes(id)) {
        return {
          likedVideos: [...prevState.likedVideos.filter(each => id !== each)],
          dislikedVideos: [...prevState.disLikedVideos, id],
        }
      }
      return {disLikedVideos: [...prevState.disLikedVideos, id]}
    })
  }

  /* onClickDislikeButton = details => {
    const {likedVideos} = this.state

    const verifyLikedVideos = likedVideos.filter(each => each.id === details.id)

    if (verifyLikedVideos.length === 0) {
      this.setState(prevState => ({
        disLikedVideos: [...prevState.disLikedVideos, details],
      }))
    } else {
      this.setState(prevState => ({
        likedVideos: [
          ...prevState.likedVideos.filter(each => each.id !== details.id),
        ],
        disLikedVideos: [...prevState.disLikedVideos, details],
      }))
    }
  } */

  render() {
    const {
      darkMode,
      showAd,
      smSideBar,
      savedVideos,
      likedVideos,
      disLikedVideos,
    } = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          showAd,
          smSideBar,
          savedVideos,
          likedVideos,
          disLikedVideos,
          toggleDarkMode: this.onToggleDarkMode,
          toggleAd: this.onToggleAd,
          toggleSideBar: this.onToggleSideBar,
          toggleLikeButton: this.onClickLikeButton,
          toggleDislikeButton: this.onClickDislikeButton,
          onAddSavedVideos: this.onAddSavedVideos,
        }}
      >
        <Switch>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/trending' component={TrendingVideos} />
          <ProtectedRoute exact path='/gaming' component={GamingVideos} />
          <ProtectedRoute exact path='/saved-videos' component={SavedVideos} />
          <ProtectedRoute
            exact
            path='/videos/:id'
            component={VideoItemDetails}
          />
          <Route path='/not-found' component={NotFound} />
          <Redirect to='/not-found' />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
