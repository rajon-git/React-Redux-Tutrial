
import './App.css';
import './static/styles/output.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="py-16">
        <HomePage/>
        <CartPage/>
      </main>
    </div>
  );
}

export default App;
