import React,{Suspense } from 'react'
import ReactDOM from 'react-dom';
// import { IntlProvider} from 'react-intl'
import App from './App';
// import Spanish from './languages/es-MX.json';
// import English from './languages/en-US.json';
// import Amharic from './languages/am-ET.json';

  import  './i18n';
 
ReactDOM.render(
 // <IntlProvider locale messages={}>
  <React.StrictMode>
  <Suspense fallback="Loading...">
    <App />
    </Suspense>
  </React.StrictMode>,
  //</IntlProvider>,
  document.getElementById('root')
);


