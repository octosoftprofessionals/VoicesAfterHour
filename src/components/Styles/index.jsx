import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { colors } from './Color'

let Theme = createTheme({
  spacing: 4,
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Roboto',
      'Bebas Neue',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: colors.White,
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: colors.Black,
    },
    background: {
      default: colors.Tolopea,
    },
  },
})
Theme = responsiveFontSizes(Theme)
export default Theme
