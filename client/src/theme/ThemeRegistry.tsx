'use client'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#1E74FD',
    },
    secondary: {
      main: '#673BB7',
    },
    success: { main: '#10d876' },
    info: { main: '#2754e6' },
    warning: { main: '#FE9431' },
    error: { main: '#E50202' },
    text: {
      primary: '#1e74fd',
      secondary: '#673bb7',
    },
  },
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
