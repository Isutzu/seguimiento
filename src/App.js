import './App.css';
import {MapView} from '@aws-amplify/ui-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
<div className='App'>
  <h1> Este es el mapita</h1>
    <MapView
					initialViewState={{
						latitude: -12.059246,
            longitude: -77.034727,
            zoom: 15,
					}}
					style={{ width: '900px', height: '600px' }}
				/>
</div>
  );
}

export default App;
