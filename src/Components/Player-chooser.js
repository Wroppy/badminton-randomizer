import {useState, useEffect} from "react";
import PlayersDisplay from "./Players-display";
import Footer from "./Footer";

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
    const [showModal, setShowModal] = useState(false);

    const shuffle = (array) => {

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    let buttonClicked = () => {
        console.log("Button clicked");
        console.log(players);
        setShowModal(true);
    }

    let closeModal = () => setShowModal(false);
    window.onclick = (event) => {
        if (event.target === document.getElementById("modal-box")) {
            closeModal();
        }
    }

    return <div className="player-chooser">
        <div id="modal-box" className="modal" style={showModal ? {display: "block"} : {display: "none"}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span>
                        Player Order:
                    </span>
                    <span className="close" onClick={closeModal}>X</span>
                </div>
                <div className="modal-body">
                    {shuffle([...players]).filter(player => player.selected).map((player, index) => {
                        return <div className="player-playing" key={index}>{index + 1}. {player.name}</div>
                    })}
                </div>
            </div>

        </div>

        <form className="player-add-wrapper" onSubmit={(e) => {
            e.preventDefault();
            if (addPlayer.length === 0) {
                return;
            }
            setPlayers([{name: addPlayer, selected: true}, ...players])
            setAddPlayer("");
        }}>
            <label htmlFor="player-name">Player name:</label>
            <input placeholder="add player" autoComplete="off" type="text" id="player-name" value={addPlayer}
                   onChange={(e) => {
                       setAddPlayer(e.currentTarget.value);
                   }}/>
            <button className="add-player">+</button>
        </form>
        <PlayersDisplay players={players}/>
        <Footer buttonClicked={buttonClicked}/>
    </div>
}

