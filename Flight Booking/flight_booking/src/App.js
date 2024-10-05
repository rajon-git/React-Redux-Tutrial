import './styles.css';
import Header from './components/Header/Header';
import InputSection from './components/Section/InputSection';
import BookList from './components/Section/BookList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputSection />
      <BookList />
    </Provider>
  );
}

export default App;