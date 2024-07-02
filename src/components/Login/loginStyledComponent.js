import styled from 'styled-components'

export const LoginBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  height: 100vh;
`

export const LoginMain = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: ${props => !props.isDarkMode && '2px 2px 16px #cccccc'};
  @media (max-width: 767px) {
    width: 90vw;
    height: 70vh;
  }

  @media (min-width: 768px) {
    width: 60vw;
    height: 60vh;
  }
`

export const LoginLogoContainer = styled.div`
  display: flex;
  margin-bottom: 55px;
  justify-content: center;
`

export const LoginImg = styled.img`
  width: 80%;
`

export const LabelItem = styled.label`
  font-family: 'Roboto';
  margin-bottom: 5px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#909090')};
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const UsernameInput = styled.input`
  font-family: 'Roboto';
  padding: 10px;
  outline: none;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  border: 1px solid ${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const PasswordInput = styled.input`
  font-family: 'Roboto';
  padding: 10px;
  outline: none;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  border: 1px solid ${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const ShowPassword = styled.input`
  font-family: 'Roboto';
  cursor: pointer;
`

export const ShowPasswordLabelItem = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`

export const LoginButtonContainer = styled.div`
  display: flex;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ff0000' : '#ff0b37')};
  @media (max-width: 767px) {
    width: 80vw;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    width: 50vw;
    font-size: 14px;
  }
`
