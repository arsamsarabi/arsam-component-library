export type ComplexColor = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ThemeModes = 'primary' | 'secondary' | 'success' | 'danger'

export type Colors = {
  [key in string]: string | ComplexColor
}

export type Palette = Colors &
  {
    [keys in ThemeModes]: string
  }

export type Theme = {
  palette: Palette
}

export type WithTheme = {
  theme?: Theme
}
