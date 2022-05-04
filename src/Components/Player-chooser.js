import {useState, useEffect} from "react";

const DEFAULT_PLAYERS = [
    "Puvin",
    "Terry",
    "Weyman",
    "Tran",
    "Frank"
]

export default function PlayerChooser() {
    useEffect(() => {
        setPlayers(DEFAULT_PLAYERS.map(player => ({
            name: player,
            selected: false
        })));
    }, []);

    const [players, setPlayers] = useState([]);
    const [addPlayer, setAddPlayer] = useState("");
    const [addPlayerError, setAddPlayerError] = useState("");

    return <div className="player-chooser">
        <div className="player-adder-wrapper">
            <label for="player-name">Player name:</label>
            <input type="text" id="player-name" value={addPlayer}/>
            <button className="add-player">+</button>
        </div>
    </div>
}

