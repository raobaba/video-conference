import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        Header
        {children}
        Footer
    </main>
  )
}

export default RootLayout