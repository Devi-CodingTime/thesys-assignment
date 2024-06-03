import React from 'react'
import MenuItem from './MenuItem'

function Sidebar() {
  return (
    <div className='flex flex-col gap-2'>
      <MenuItem gallery="gallery" listContent="Tasks" count="4" src="../gallery.png"/>
      <MenuItem gallery ="download" listContent = "Drive Files" count="435" src="../drive.jpg"/>
      <MenuItem gallery ="boards" listContent = "Boards" count="5" src="../board.png"/>
      <MenuItem gallery ="clock" listContent = "Updates" count="" src="../clock.png"/>
      <MenuItem gallery ="recycle" listContent = "Analytics" count="2" src="../analitics.png"/>
      <MenuItem gallery ="CRM" listContent = "CRM Dashboards" count="2" src="../dashboard.png"/>
      <MenuItem gallery ="setting" listContent = "Settings" count="2" src="settings.png"/>

    </div>
  )
}

export default Sidebar
