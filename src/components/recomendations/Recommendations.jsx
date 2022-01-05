import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIos } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listitem/ListItem'
import './recomendations.scss'


export default function Recommendations({title}) {
    
    const listRef = useRef();
    const rightArrowRef = useRef();
    const [slideHua, setSlideHua] = useState(0);

    function handleClick(direction){
        //const distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction == "left" && slideHua > 0){
            setSlideHua(slideHua - 1);
            listRef.current.style.transform = `translateX(-${230*(slideHua-1)}px)`;
        }else if(direction == "right" && (2300- 230*(slideHua)) > rightArrowRef.current.getBoundingClientRect().x){
            setSlideHua(slideHua + 1);
            listRef.current.style.transform = `translateX(-${230*(slideHua+1)}px)`;
        }
    }

    return (
        <div className='recommendation'>
            <span className="list-title">{title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='slider-arrow left' onClick={()=>handleClick("left")}
                    style={{visibility:slideHua?"visible":"hidden"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index = {0} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfgHZMIuwHVuG033KMYHRi5sxkjPIfVxmoE-wfGl0_H7DPPdRNIyK4P1wlkD57yzra97xGQi1vX6zXL_kicQHrBylVcSUNFYhZm-7zZCyIW0D6_9391sHA8oseG.jpg?r=0dc"/>
                    <ListItem index = {1} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0AeqN391JQuluZfPUdfw55iSitKKH2zUJjxh_Ao1xtxRYbWcGwO5GnpqHIgtmUrvfH4k51nli_gyGMLn_EVj6dKxi_xkWTchZ0NFNO44j1XUVVfAJgscELL9EU.jpg?r=753"/>
                    <ListItem index = {2} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRJ2ph1YCMQHhaaWu4vYa3eFkWdJ_xPpp6paqPq7kQdMUUCIOen3joy0PAn1GgljhZexV-0vArh9aFQp_1oTwbi-c7me9PSusw6OthG4JoaHdiEV9U8NsfYWWBXB.jpg?r=4d9"/>
                    <ListItem index = {3} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWmA2gllUAlexG05T5aJWy-PQycut_ecACcyYIuY5wViG2FLeqFytQQcv4ln1Gfndgw7D6kd9Vu0E1RXUhN2xfbMA6xJ2zn3Vnu6yUqxYpA1P-5NBOt_RpOfqznVhscQaw.jpg?r=043"/>
                    <ListItem index = {4} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeAuDKIU6ojBLB_b3eTdFBIUmNJ57Sr7xXk4z8I7GyygIrXQyknSm8gI_dhh5Fsp2lnm8DY9ZOEOIA-C1ReeZ5254Ow.jpg?r=01d"/>
                    <ListItem index = {5} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZYzFKU9iO0EWpU96V1GRE_aCwc6bzYrhL6BLKgj9Jh5IAQEO4UlSR0OUWFG8E4iIvZpeFiXVdkw2XI2y1p8HRfrpY.jpg?r=967"/>
                    <ListItem index = {6} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXpnLrDXEFtayu-lE4Om3hqJv59urVP1JCqhG8FUj-MFjHiZp5YrpGQAYDWlMGkXImBoyxuK5NkZDdLpC8FqkQnrFQg.jpg?r=750"/>
                    <ListItem index = {7} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbxR0ZQC6vPW8gSdoOjDJLDHFru2jWkkP8ahOnvt_qz3BOyDsLWiVDlPp4Er5VRixNE7S7EtUS69cVH_MKbxhuKwrfcrpoOqeYWeqCOUY7C-eT0RSHC1aO0k6cD0.jpg?r=2ee"/>
                    <ListItem index = {8} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYryfSD2xXO3xKEPb6TJdccJ1pXIto2FWmwlmeiLno1w8qmKs-rieQp78QaimZFfnNFjgf8zqVT8PyORowGvzsUIzqE.jpg?r=75b"/>
                    <ListItem index = {9} img="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS3om16T6zfR1N1qCSNpHAatBKJuiLulRr7IsbUAWS_IWxkVtdtOlI0QZLmluo1_UWh4P6i_iK4115PC38WCI2fTdwL4aO3D0fE49LMjoSHNPd8C11srecK0BrEp.jpg?r=f9b"/>
                </div>
                <ArrowForwardIos innerRef={rightArrowRef} className='slider-arrow right' onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
