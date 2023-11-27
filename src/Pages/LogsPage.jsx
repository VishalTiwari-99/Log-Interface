import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import ListAllLogsComponents from '../Components/ListAllLogsComponents'

const LogsPage = () => {
  return (
    <div>
        <HeaderComponent />
        <div className='container'>
            <ListAllLogsComponents />
        </div>
    </div>
  )
}

export default LogsPage