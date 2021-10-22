import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import MoneyChart from './pages/MoneyChart';
import Notifications from './pages/Notifications';
import Payments from './pages/Payments';
import ManageService from './pages/ManageService';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/clients' component={Clients} />
          <Route path='/moneychart' component={MoneyChart} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/payments' component={Payments} />
          <Route path='/manageservice' component={ManageService}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
