export default function Footer(props){
    let buttonClicked = props.buttonClicked;
    return <div className="footer">
        <button onClick={buttonClicked}>
            randomize order
        </button>
    </div>
}