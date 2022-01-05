import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type == "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRsu-CXBe-GsWVWukb691Df5SD41PyIjfbd9k8HEvBPH5hAMWmr-JAgDCX4TuUz8_BJAlMQWuj9oFmWI89riQpFBC8VZ.jpg?r=d06" alt="" />
            <div className="info">
                <img src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABczZYDxuKWMjwZ2T4yxbF7ZMubBD8daM0C6gf8ypMfNmx61-YbkZX7NChFGAW_G09cCULPhRPqEKD-dhSV4QYP8XATCHBsgv8_ArN7fysZunxb2EPrD9uLKayoDsz9HWbVA9VDTeHLkTzpyE40O8_YDMt8noApDJ5_STfnHa1Xvdjg.png?r=768" alt="" />
                <span className="desc">
                Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
