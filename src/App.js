
import './App.css';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-100 to indigo-50">
      <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </div>
  );
}

export default App;
