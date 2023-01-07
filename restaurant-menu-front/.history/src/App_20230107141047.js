import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Router } from "react-router-dom";
import './App.css';
import AddMenu from "./components/AddMenu";
import MenuList from "./components/MenuList";
import UpdateMenu from "./components/UpdateMenu";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-info">
                <a href="/" className="navbar-brand">
                </a>
            </nav>
        </div>
    );
}

export default App;
