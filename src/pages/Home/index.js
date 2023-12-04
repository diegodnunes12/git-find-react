import { Header } from "../../components/Header";
import background from "../../assets/background.svg";
import "./styles.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ItemList } from "../../components/ItemList";
import { useState } from "react";

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    
    if(newUser.name) {
      const {avatar_url, name, login, bio} = newUser;
      setCurrentUser({avatar_url, name, login, bio});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} className="background" alt="Logo do GitHub" />
        <div className="info">
          <div>
            <Input value={user} onChange={event => setUser(event.target.value)} />
            <Button onClick={handleGetData} />
          </div>
          {currentUser?.name ? (
            <>
              <div class="profile">
                <img src={currentUser.avatar_url} className="profile-image" alt="profile image" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos?.length ? (
            //{repos.map(repo )}
            <div className="repositories">
              <h4>Repositories</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}              
            </div>
          ) : null}          
        </div>
      </div>
    </div>
  );
}

export default App;
