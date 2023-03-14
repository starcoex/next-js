import { isDarkState } from '@/recoil/atoms'
import { useRecoilState } from 'recoil'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles/thems'

import GlobalStyle from './GlobalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'

const Toggle = styled.button`
display:flex;
align-items:center;
justify-content:center;
position:fixed;
top:1rem;
right:1rem;
width:3rem;
height:3rem;
padding:0;
font-size:1.6rem;
border:none;
border-radius:50%;
background-color:${props => props.theme.bgColor};
color:${props => props.theme.textColor};
box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
`

export default function Providers({ children }: React.PropsWithChildren) {
  const [isDark, setIsDark] = useRecoilState(isDarkState)
  const toggleTheme = () => {
    setIsDark((prev: any) => !prev)
  }


  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
      <Toggle onClick={toggleTheme}><FontAwesomeIcon icon={isDark ? faMoon : faLightbulb} /></Toggle>
    </ThemeProvider >
  )
}
