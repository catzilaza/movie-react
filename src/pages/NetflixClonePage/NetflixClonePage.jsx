import React from 'react'
import './NetflixClonePage.scss'
import HeaderComponent from '../../components/NetflixComponent/HeaderComponent/HeaderComponent'
import EnjoyComponent from '../../components/NetflixComponent/EnjoComponent/EnjoyComponent'
import DownloadComponent from '../../components/NetflixComponent/DownloadComponent/DownloadComponent'
import WatchComponent from '../../components/NetflixComponent/WatchComponent/WatchComponent'
import CreateComponent from '../../components/NetflixComponent/CreateComponent/CreateComponent'

function NetflixClonePage() {
  return (
    <>
    <HeaderComponent/> 
    <EnjoyComponent/> 
    <DownloadComponent/>
    <WatchComponent/> 
    <CreateComponent/> 
    </>
  )    
}

export default NetflixClonePage