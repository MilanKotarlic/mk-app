import logo from './milan.jpg';
import './styles/main.scss';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';


function App() {
  const image = ref(storage, 'milan.jpg');
  console.log(image)
  
  const [users, setUsers] = useState([]);
  const [images, setImages] = useState('');
  useEffect( () => {
    getUsers()
    getDownloadURL(image).then(url => setImages(url))
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
        <img src={images} className="App-logo" alt="logo" />
        <p>
          Welcome to the app.
        </p>
        <ul>
         { users.map(user => <li>{user.email}</li>)
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
