import './App.css';
import Header from "./Components/Header";
import PlayerChooser from "./Components/Player-chooser";
import Footer from "./Components/Footer";
import './custom-icons/style.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <PlayerChooser/>
        </div>
    );
}

export default App;
