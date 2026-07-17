import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      indigo: '#2b2d42',
      lavender: '#8d99ae',
      platinum: '#edf2f4',
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.platinum',
        color: 'brand.indigo',
      },
      a: {
        color: 'brand.indigo',
        fontWeight: 500,
      },
      'a:hover': {
        color: 'brand.lavender',
        textDecoration: 'underline',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'brand.indigo',
      },
    },
  },
})

export default theme
