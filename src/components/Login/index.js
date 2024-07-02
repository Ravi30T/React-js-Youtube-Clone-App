import {Component} from 'react'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginBg,
  LoginMain,
  LoginLogoContainer,
  LoginImg,
  LabelItem,
  UserNameContainer,
  UsernameInput,
  PasswordContainer,
  PasswordInput,
  ShowPasswordContainer,
  ShowPassword,
  ShowPasswordLabelItem,
  LoginButtonContainer,
  LoginButton,
  ErrorMsg,
} from './loginStyledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState(prevState => ({
      errorMsg,
      showError: !prevState.showError,
    }))
  }

  onClickLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      const {history} = this.props

      history.replace('/')
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <LoginBg isDarkMode={darkMode}>
              <LoginMain isDarkMode={darkMode} onSubmit={this.onClickLogin}>
                <LoginLogoContainer>
                  <LoginImg
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="webisite logo"
                  />
                </LoginLogoContainer>

                <UserNameContainer>
                  <LabelItem htmlFor="username" isDarkMode={darkMode}>
                    {' '}
                    USERNAME{' '}
                  </LabelItem>
                  <UsernameInput
                    type="input"
                    id="username"
                    placeholder="Username"
                    isDarkMode={darkMode}
                    onChange={this.onEnterUsername}
                    value={username}
                  />
                </UserNameContainer>

                <PasswordContainer>
                  <LabelItem htmlFor="password" isDarkMode={darkMode}>
                    {' '}
                    PASSWORD{' '}
                  </LabelItem>

                  <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    isDarkMode={darkMode}
                    onChange={this.onEnterPassword}
                    value={password}
                  />
                </PasswordContainer>

                <ShowPasswordContainer>
                  <ShowPassword
                    type="checkbox"
                    id="show-password"
                    onChange={this.onClickShowPassword}
                  />
                  <ShowPasswordLabelItem
                    htmlFor="show-password"
                    isDarkMode={darkMode}
                  >
                    Show Password
                  </ShowPasswordLabelItem>
                </ShowPasswordContainer>

                <LoginButtonContainer>
                  <LoginButton type="submit"> Login </LoginButton>
                </LoginButtonContainer>

                {showError && (
                  <ErrorMsg isDarkMode={darkMode}> *{errorMsg} </ErrorMsg>
                )}
              </LoginMain>
            </LoginBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
