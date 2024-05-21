import { ThemeType } from 'react-native-magnus/src/theme/type'

export const THEME: ThemeType = {
  colors: {
    logo: '#fff',
  },
  fontSize: {
    logo: 116,
  },
  spacing: {
    none: 0,
    container: 32,
  },
  components: {
    Text: {
      color: 'asdas',
    },
  },
}

export const FONTS = {
  regular: 'Roboto-Regular',
  blackItalic: 'Roboto-BlackItalic',
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  medium: 'Roboto-Medium',
  thinItalic: 'Roboto-ThinItalic',
  hiatus: 'Hiatus',
} as const // `as const` ensures the type is literal and readonly

export const COLORS = {
  primary: '#196EEE',
  white: '#fff',
  bluelight: '#F3F8FE',
  grey: '#606060',
  greylight: '#B8B8B8',
}

export const TYPOGRAPHY = {
  logo: {
    fontSize: 116,
    fontFamily: FONTS.hiatus,
    letterSpacing: 8.5,
    textAlign: 'center',
  },
  welcome_text: {
    fontSize: 24,
    fontFamily: FONTS.regular,
  },
  title_text: {
    fontSize: 40,
    fontFamily: FONTS.medium,
  },
  button_label: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  default: {
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  header_title: {
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  header_heading: {
    fontSize: 32,
    fontFamily: FONTS.medium,
  },
  location_text: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  tab_active: {
    fontSize: 14,
    fontFamily: FONTS.bold,
  },
  tab: {
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
}
