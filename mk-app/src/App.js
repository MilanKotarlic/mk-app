import './styles/main.scss';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import Metronome from './components/metronome';


function App() {
  const image = ref(storage, 'milan.jpg');
  const vinylImage = ref(storage, 'vinyl.png');

  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);
  useEffect( () => {
    async function fetchData () {
    await getUsers()
    await getDownloadURL(image).then(url => setImages(url))
    await getDownloadURL(vinylImage).then(url => setImages(prevState => [prevState, url]))
    }
    fetchData()
  }, [])
  async function getUsers() {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const cityList = usersSnapshot.docs.map(doc => doc.data());
    setUsers(cityList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
        <img className="App-logo__image App-logo__image--big" src={images[1]} alt="logo" />
        <img className="App-logo__image" src={images[0]}  alt="logo" />
        </div>
        <p>
          Welcome to the app.
        </p>
        <Metronome />
        <ul>
         { users.map(user => <li key={user.email}>{user.email}</li>)
         }
        </ul>
        <a
          className="App-link"
          href="https://milankotarlic.github.io/Portfolio/#top"
          target="_blank"
          rel="noopener noreferrer"
        >
          My portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
