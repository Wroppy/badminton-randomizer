import Switch from "./Switch";

export default function PlayersDisplay(props) {
    return <div className="players-display-wrapper">
            {props.players.map((player, index) => {
                return <div className="player-display-wrapper" key={index}>
                    <label className="player-name" htmlFor={`switch-${index}`}>
                        {player.name}
                    </label>
                    <Switch id={`switch-${index}`} index={index} players={props.players}/>
                </div>
            })}
    </div>

}