import React from 'react'
import { useColorScheme } from '@am92/react-design-system'

export default function withColorScheme(Child) {
  return props => {
    const { mode, setMode } = useColorScheme()
    return <Child {...props} themeMode={mode} setThemeMode={setMode} />
  }
}
