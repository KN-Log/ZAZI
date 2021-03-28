import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Majax from 'react-mathjax';
import { HashRouter, Route } from 'react-router-dom';

import { Container } from 'reactstrap';


import Contents from './components/contents/contents';
import Header from './components/header/header';
import Br_theor_info from './components/Br_theor_info/br_theor_info';
import Algo_opt_ground_dev from './components/Algo_opt_ground_dev/algo_opt_ground_dev';
import Break_cap_neutral from './components/Break_cap_neutral/break_cap_neutral';
import An_examp_eval_break_cap_null from './components/An_examp_eval_break_cap_null/an_examp_eval_break_cap_null';

function App(){
  return (
    <Container className="p-0" fluid>
        <HashRouter>
          <Header />         
              <Route exact path="/" component={Contents}/>
              <Route path="/br_theor_info" component={Br_theor_info}/>
              <Route path="/algo_opt_ground_dev" component={Algo_opt_ground_dev}/>
              <Route path="/break_cap_neutral" component={Break_cap_neutral}/>
              <Route path="/an_examp_eval_break_cap_null" component={An_examp_eval_break_cap_null}/>
        </HashRouter>
    </Container>
  );
}

export default App;



//export default Majax;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;*/
