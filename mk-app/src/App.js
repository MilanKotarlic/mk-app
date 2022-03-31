import './styles/main.scss';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import Router from './Router';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';


function App() {
  // const image = ref(storage, 'milan.jpg');
  // const vinylImage = ref(storage, 'vinyl.png');

  // const [users, setUsers] = useState([]);
  // const [images, setImages] = useState([]);
  // useEffect( () => {
  //   async function fetchData () {
  //   await getUsers()
  //   await getDownloadURL(image).then(url => setImages(url))
  //   await getDownloadURL(vinylImage).then(url => setImages(prevState => [prevState, url]))
  //   }
  //   fetchData()
  // }, [])
  // async function getUsers() {
  //   const usersCol = collection(db, 'users');
  //   const usersSnapshot = await getDocs(usersCol);
  //   const cityList = usersSnapshot.docs.map(doc => doc.data());
  //   setUsers(cityList);
  // }
  return (
    <>
    <Header />
    <PageWrapper  />
    <Router />
    </>
  );
}

export default App;
