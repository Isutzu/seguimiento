import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify} from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import config from './aws-exports'
import './index.css'
import '@aws-amplify/ui-react/styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

Amplify.configure(config);

// Amplify.configure({
//   Auth: {
//     identityPoolId: "us-west-2:9513e82a-eb54-4b54-8be7-c5a4bd1f2ca3",
//     region: "us-west-2",
//   },
//   geo: {
//     AmazonLocationService: {
//       maps: {
//         items: {
//           "trackerMap-dev": {
//             style: "Default style"
//           },
//         },
//         default: "trackerMap-dev",
//       },
//       region: "us-west-2",
//     },
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
