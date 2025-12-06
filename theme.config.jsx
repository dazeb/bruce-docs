import React from 'react'

const config = {
  logo: <span style={{fontWeight: 'bold'}}>🦈 BRUCE Documentation</span>,
  project: {
    link: 'https://github.com/dazeb/bruce'
  },
  docsRepositoryBase: 'https://github.com/dazeb/bruce/tree/main/nextra',
  footer: {
    text: <span>
      {new Date().getFullYear()} © BRUCE Project - "When your Dolphin needs a Great White" 🦈
    </span>
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BRUCE Documentation'
    }
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BRUCE Documentation" />
      <meta property="og:description" content="Big Brother Ultimate Communication Equipment" />
    </>
  ),
  primaryHue: 204,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}

export default config
