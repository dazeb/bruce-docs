import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '24px' }}>🦈</span>
      <span style={{ fontWeight: 'bold', fontSize: '20px' }}>BRUCE</span>
    </div>
  ),
  project: {
    link: 'https://github.com/dazeb/esp32-flipper-devboard'
  },
  docsRepositoryBase: 'https://github.com/dazeb/esp32-flipper-devboard/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BRUCE Documentation'
    }
  },
  head: () => {
    const { title } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title ? title + ' – BRUCE' : 'BRUCE'} />
        <meta property="og:description" content="Big Brother Ultimate Communication Equipment - When your Dolphin needs a Great White" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦈</text></svg>" />
      </>
    )
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  primarySaturation: {
    dark: 80,
    light: 100
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>
          "When your Dolphin needs a Great White" 🦈
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          MIT {new Date().getFullYear()} © BRUCE Project
        </p>
      </div>
    )
  },
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  }
}

export default config
