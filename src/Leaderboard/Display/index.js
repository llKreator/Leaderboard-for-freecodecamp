import React from 'react';
import './index.css';

const Display = (props) => {
    let recentInfo = [], allTimeInfo = [], temp;
    let r = props.recentInfo, a = props.allTimeInfo, n = 1;
    [].forEach.call(r, (e) => {
        temp = (
            <div key={n} className="elem">
                <div className="number"><span>{n}</span></div>
                <div className="name"><span><img width="50px" height="50px" src={e.img} alt="" /></span><span> {e.username}</span></div>
                <div className="recentPoints"><span>{e.recent}</span></div>
                <div className="allTimePoints"><span>{e.alltime}</span></div>
            </div>
        )
        recentInfo.push(temp);
        n++;
    })
    n = 1;
    [].forEach.call(a, (e) => {
        temp = (
            <div key={n} className="elem">
                <div className="number"><span>{n}</span></div>
                <div className="name"><span><img width="50px" height="50px" src={e.img} alt="" /></span><span> {e.username}</span></div>
                <div className="recentPoints"><span>{e.recent}</span></div>
                <div className="allTimePoints"><span>{e.alltime}</span></div>
            </div>
        )
        allTimeInfo.push(temp);
        n++;
    })
    return (
        <div id="leaderboard">
            <div id="header">Leaderboard</div>
            <div id="headerInfo">
                <div>#</div>
                <div>Camper Name</div>
                <div
                    onClick={props.showRecent}
                    className={"cursorPointer" + (props.isRecent ? " choosen" : '')}>Points in past 30 days
                </div>
                <div
                    onClick={props.showAllTime}
                    className={"cursorPointer" + (props.isRecent ? "" : ' choosen')}>All time points
                </div>
            </div>
            {props.isRecent ? recentInfo : allTimeInfo}
        </div>
    );
}

export default Display;