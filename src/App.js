import anim from './lottie-adidas-rider.json';
import * as jLottie from '@lottiefiles/jlottie';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    jLottie.loadAnimation({
        container: document.querySelector("#animation"),
        animationData: JSON.stringify(anim)
    });
  });

  return (
    <div>
      <div id='animation'></div>
    </div>
  );
}

export default App;
