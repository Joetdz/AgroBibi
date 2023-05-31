import React from 'react'
import Header from './Hearder'


function Layout({children}) {
  return (
    <div>
      <Header/>
         {children}

         <h1>Footer</h1>

    </div>
  )
}

export default Layout