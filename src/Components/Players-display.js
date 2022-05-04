export default function PlayersDisplay(props) {
    return <div className="players-display-wrapper">
        <div className="players-display">
            {props.players.map((player, index) => {
                return <div className="player-display-wrapper">
                    {player}
                </div>
            })}
        </div>
    </div>

}