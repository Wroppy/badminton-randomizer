import {useState} from "react";

export default function Switch(props){
    let id = props.id;
    let index = props.index;
    let players = props.players;
    let [checked, setChecked] = useState(players[index].selected)
    return <label className="switch" htmlFor={id}>
        <input type="checkbox" id={id} checked={checked} onChange={(e) => {
            setChecked(e.currentTarget.checked)
            players[index].selected = e.currentTarget.checked;
        }}/>
        <span className="slider round"/>
    </label>
}