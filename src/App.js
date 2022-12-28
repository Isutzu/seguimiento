import './App.css';
import {MapView} from '@aws-amplify/ui-react';
import {Map} from './Map'
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

//Amplify.configure(awsExports);
Amplify.configure({
  Auth: {
    identityPoolId: "us-west-2:9513e82a-eb54-4b54-8be7-c5a4bd1f2ca3",
    region: "us-west-2",
  },
  geo: {
    AmazonLocationService: {
      maps: {
        items: {
          "trackerMap-dev": {
            style: "Default style"
          },
        },
        default: "trackerMap-dev",
      },
      region: "us-west-2",
    },
  }
});

function App() {
  return(
    <div>
    <h1> este es el mapa</h1>
    <Map />
    </div>
  )
  }
// function App() {
//   return (
//        <div className='App'>
//   <h1> Este es el nuevo mapa</h1>
//     <MapView
// 					initialViewState={{
// 						latitude: -12.059246,
//             longitude: -77.034727,
//             zoom: 15,
// 					}}
// 					style={{ width: '900px', height: '600px' }}
// 				/>
// </div> 

// )}
  
        

export default App;
