import React, { useEffect } from "react";
import db from '../utils/firebase';
import { collection, getDocs, query, orderBy, } from 'firebase/firestore';


const Leaderboard = (props) => {
    const { leaderboard, setLeaderboard } = props;

    useEffect(() => {
        getLeaderboard();
    }, []);

    const getLeaderboard = async() => {
        const querySnapshot = await getDocs(query(collection(db, 'leaderboard'), orderBy('time')));
        querySnapshot.forEach((doc) => {
          leaderboard.push(doc.data());
        });
        setLeaderboard(leaderboard);
    }

    return(
        <div id="leaderboard">
            <div id="waldoLeaderboard">
                <h2>Waldo Leaderboard</h2>
                    <div id='waldoLevelOne'>
                        <h3>Level One</h3>
                        {leaderboard.waldoMode.levelOne.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='waldoLevelTwo'>
                        <h3>Level Two</h3>
                        {leaderboard.waldoMode.levelTwo.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='waldoLevelThree'>
                        <h3>Level Three</h3>
                        {leaderboard.waldoMode.levelThree.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='waldoLevelFour'>
                        <h3>Level Four</h3>
                        {leaderboard.waldoMode.levelFour.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
            </div>
            <div id="challengeLeaderboard">
                <h2>Challenge Leaderboard</h2>
                    <div id='challengeLevelOne'>
                        <h3>Level One</h3>
                        {leaderboard.challengeMode.levelOne.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='challengeLevelTwo'>
                        <h3>Level Two</h3>
                        {leaderboard.challengeMode.levelTwo.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='challengeLevelThree'>
                        <h3>Level Three</h3>
                        {leaderboard.challengeMode.levelThree.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
                    <div id='challengeLevelFour'>
                        <h3>Level Four</h3>
                        {leaderboard.challengeMode.levelFour.map(entry => {
                        return <div className="entry" key={entry.id}>
                                <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                                <div className="gameLevel">{entry.level}</div>
                                <div className="gameName">{entry.name}</div>
                            </div>
                        })}
                    </div>
            </div>
            {/* <div id="challengeLeaderboard">
                <h2>Challenge Leaderboard</h2>
                {leaderboard.challengeBoard.map(entry => {
                    return <div className="entry" key={entry.id}>
                        <div className="gameTime">{entry.time.min + ":" + entry.time.sec}</div>
                        <div className="gameLevel">{entry.level}</div>
                        <div className="gameName">{entry.name}</div>
                    </div>
                })}
            </div> */}
            
        </div>
    )
}

export default Leaderboard;