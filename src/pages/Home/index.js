import { Header } from "../../components/Header";
import background from "../../assets/background.svg";
import "./styles.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} className="background" alt="Logo do GitHub" />
        <div className="info">
          <div>
            <Input />
            <Button />
          </div>
          <div class="profile">
            <img src="https://avatars.githubusercontent.com/u/6638272?v=4" className="profile-image" alt="profile image" />
            <div>
              <h3>Diego Nunes</h3>
              <span>@diegodnunes12</span>
              <p>Diego Nunes</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
