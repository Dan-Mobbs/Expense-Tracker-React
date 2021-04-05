import './App.css';
import { AddTrans } from './components/AddTrans';
import { Balance } from './components/Balance';
import { Header } from './components/header';
import { Incomingex } from './components/Incomingex';
import { TransList } from './components/TransList';
import { GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomingex />
        <TransList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
