import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import SearchComponent from '../Components/SearchComponent'



const LogsPage = () => {
  return (
    <div>
        <HeaderComponent />
        <div className='container'>
            <SearchComponent />
        </div>
    </div>
  )
}

export default LogsPage