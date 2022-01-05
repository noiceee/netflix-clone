import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './listitem.scss'

export default function ListItem({img, index}) {
    
    const itemRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    const videoUrl = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";
    return (
        <div className='dummy-div'>
        <div
            className="list-item" ref={itemRef}
            style={{left: isHovered && index * 225 - 37.5 + 5*index}}
            onMouseOver={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >   
            {!isHovered ? <img src={img} alt=""/> : (
                <>
                <video src = {videoUrl} autoPlay={true} loop progress/>
                <div className="item-info">
                    <div className="icons">
                        <PlayArrow className="icon"/>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownOutlined className="icon"/>
                    </div>
                    <div className="item-info-top">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>1999</span>
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit rerum ea? Libero deserunt
                    </div>
                    <div className="genre">Action</div>
                </div>
                </>
            )}
        </div>
        </div>
    )
}
