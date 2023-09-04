// import logo from './logo.svg';
import './App.css';

// import axios from 'axios';
// import { useEffect, useState } from 'react';

import Layout from './components/Layout/Layout';
// import CircularProgress from '@mui/joy/CircularProgress';


// const baseURL = 'https://api.adviceslip.com/advice';

function App() {
  // const [advice, setAdvice] = useState(null);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log('response: ', response)
  //     setAdvice(response.data);
  //   });
  // }, []);

  // console.log('advice: ', advice)

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* {advice ?
        <>
          <div>Advice # {advice.slip.id}</div>
          <div>"{advice.slip.advice}"</div>
        </>
        : <CircularProgress />
      } */}

      <Layout />

      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}

export default App;
