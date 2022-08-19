import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './data/Slider';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={Slider} />
    </>
  );
}

export default App;
