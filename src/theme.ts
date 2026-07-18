import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      deep: '#659287',
      mid: '#88BDA4',
      light: '#B1D3B9',
      pale: '#E6F2DD',
      // Verde oscuro derivado de la paleta para asegurar la legibilidad del texto
      ink: '#33524B',
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.pale',
        color: 'brand.ink',
      },
      a: {
        color: 'brand.deep',
        fontWeight: 500,
      },
      'a:hover': {
        color: 'brand.mid',
        textDecoration: 'underline',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'brand.deep',
      },
    },
  },
})

export default theme
