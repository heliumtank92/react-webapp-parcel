import React, { PureComponent } from 'react'
import {
  DsBox,
  DsImage,
  DsTypography,
  DsToggle,
  DsRemixIcon
} from '@am92/react-design-system'
import withColorScheme from '~/src/Lib/withColorScheme'

const homeImage = [
  {
    src: new URL(
      '~/public/assets/images/home.png?as=webp',
      import.meta.url
    ).href,
    alt: 'Home Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/public/assets/images/home.png', import.meta.url)
      .href,
    alt: 'Home Image',
    as: 'image/png'
  }
]
class HomePage extends PureComponent {
  handleModeChange = (name, value) => {
    const { setThemeMode } = this.props
    const newMode = value ? 'dark' : 'light'
    setThemeMode(newMode)
  }

  render () {
    const { themeMode } = this.props
    return (
      <DsBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          px: 'var(--ds-spacing-warm)'
        }}
      >
        <DsImage
          srcSet={homeImage}
          style={{ width: '100%', height: 'auto' }}
          width='100'
          height='100'
        />
        <DsTypography variant='headingBoldItalicExtraLarge'>Home Page</DsTypography>
        <DsBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 'var(--ds-spacing-glacial)'
          }}
        >
          <DsToggle
            name='Dark Mode'
            value={themeMode === 'dark'}
            onChange={this.handleModeChange}
          />
          <DsRemixIcon className='ri-contrast-2-line' />
        </DsBox>
      </DsBox>
    )
  }
}

export default withColorScheme(HomePage)
