import {useState, useEffect} from "react";
import PlayersDisplay from "./Players-display";

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
            selected: true
        })));
    }, []);

    const [players, setPlayers] = useState([]);
    const [addPlayer, setAddPlayer] = useState("");
    const [addPlayerError, setAddPlayerError] = useState("");

    return <div className="player-chooser">
        <form className="player-add-wrapper" onSubmit={(e) => {
            e.preventDefault();
            if (addPlayer.length === 0) {
                return;
            }
            setPlayers([{name: addPlayer, selected: true}, ...players])
            setAddPlayer("");
        }}>
            <label htmlFor="player-name">Player name:</label>
            <input placeholder="add player" autoComplete="off" type="text" id="player-name" value={addPlayer} onChange={(e) => {
                setAddPlayer(e.currentTarget.value);
            }}/>
            <button className="add-player">+</button>
        </form>
        <PlayersDisplay players={players}/>

    </div>
}

