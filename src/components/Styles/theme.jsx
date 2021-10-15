import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { colors, shadows } from './color'

let Theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: { scrollBehavior: 'smooth' },
        '*::-webkit-scrollbar': {
          width: '.5rem',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: `inset ${shadows.boxShadow1}, inset ${shadows.boxShadow2}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: colors.HotPinkLight,
          outline: `1px solid ${colors.Razzmatazz}`,
          borderRadius: 25,
        },
      },
    },
  },
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
      main: '#ffffff',
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
