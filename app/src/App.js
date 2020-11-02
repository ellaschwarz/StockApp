import React, {useState, useEffect} from 'react'; 
import {Switch, Route, Link} from 'react-router-dom';
import Markets from './pages/Markets';
import Indexes from './pages/Indexes';
import Currencies from './pages/Currencies';
import Crypto from './pages/Crypto';
import CryptoDetail from './pages/detail/CryptoDetail';
import IndexDetail from './pages/detail/IndexDetail';
import CurrencyDetail from './pages/detail/CurrencyDetail';
import SingleMarket from './components/SingleMarket';
import MarketDetail from './pages/detail/MarketDetail';

import {ApiContext} from './context/api-context';

function App() {
  const [data, setData] = useState(null)
  
  const handleFetchData = () => {
    if(data) {
      return console.log('Data is already set')
    }
    fetch('https://market-data-collector.firebaseio.com/market-collector.json')
    .then(res => res.json())
    .then(res => {
        setData(res);
        console.log(res)
    });
  };

  useEffect(() => {
    handleFetchData();
  }, [])

  return (
    <>
        <li><Link to='/markets'>Markets</Link></li>
        <li><Link to='/indexes'>Indexes</Link></li>
        <li><Link to='/currencies'>Currencies</Link></li>
        <li><Link to='/crypto'>Crypto</Link></li>

      <Switch>
        {data && (
        <ApiContext.Provider value={{data}}>

        <Route exact path='/markets' component={Markets}></Route>
        <Route exact path='/indexes' component={Indexes}></Route>
        <Route exact path='/currencies' component={Currencies}></Route>
        <Route exact path='/crypto' component={Crypto}></Route>

        <Route exact path='/crypto/:id' component={CryptoDetail}></Route>
        <Route exact path='/currencies/:id' component={CurrencyDetail}></Route>
        <Route exact path='/indexes/:id' component={IndexDetail}></Route>

        <Route exact path='/markets/:page' component={SingleMarket}></Route>
        <Route exact path='/markets/:page/:id' component={MarketDetail}></Route>


        </ApiContext.Provider>

        )}
      </Switch>

    </>
  );
}

export default App;
