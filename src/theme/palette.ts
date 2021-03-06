import type { Colors, Palette } from '../types'

const colors: Colors = {
  midnightBlue: '#2c3e50',
  pink: '#FC427B',
  white: '#ffffff',
  black: '#000000',
  green: '#16a085',
  red: '#c0392b',
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

export const palette: Palette = {
  ...colors,
  primary: colors.midnightBlue as string,
  secondary: colors.pink as string,
  success: colors.green as string,
  danger: colors.red as string,
}
