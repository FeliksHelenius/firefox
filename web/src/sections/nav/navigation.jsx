import Settings from '../../assets/icons/settings.svg'
import './navigation.css'
import { useState } from 'react'

export default function Navigation() {
    const [settingsActive, setSettingsActive] = useState(false)

    return <div id='navigation'>
        <div className="settings-button-wrapper">
            <img src={Settings} alt="" className='icon' onClick={()=>{setSettingsActive(true)}} />
        </div>
    </div>
}