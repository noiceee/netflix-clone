import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import './watch.scss'

export default function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBack className='arrow'/>
                Back
            </div>
            <video 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                autoPlay
                controls
                progress
                className='video'
            />
        </div>
    )
}
