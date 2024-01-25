import './App.css';
import CoreInfo from "./components/CoreInfo.jsx";
import Demo from "./components/Demo.jsx";
const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient"/>
            </div>

            <div className="app">
                <CoreInfo/>
                <Demo/>
            </div>
        </main>
    )
}
export default App
