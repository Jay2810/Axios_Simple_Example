import "./styles.css";
import Action from './Action'

export default function App() {
  return (
    <div className="App">
      <h1>AXIOS</h1>
      <h3 style={{color:"Red"}}>Simple Axios App to learn the curve!</h3>
      <h4 style={{color:"Red"}}>
        Styling is not used to keep code clean
      </h4>
      <Action/>
    </div>
  );
}
