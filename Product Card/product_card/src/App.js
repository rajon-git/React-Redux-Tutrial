
import './App.css';
import './static/styles/output.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';

function App() {
  const [isCartPage, setIsCartPage] = useState(false)
  return (
    <Provider store = {store}>
        <Header setIsCartPage={setIsCartPage}/>
        <main className="py-16">
        {!isCartPage ?
          <HomePage/>
          :
          <CartPage/>
        }
        </main>
    </Provider>
  );
}

export default App;
