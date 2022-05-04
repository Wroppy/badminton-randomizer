export default function Switch(props){
    let id = props.id
    return <label className="switch" htmlFor={id}>
        <input type="checkbox" id={id}/>
            <span className="slider round"/>
    </label>
}