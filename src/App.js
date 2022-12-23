import './App.css';
import {MapView} from '@aws-amplify/ui-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
<div className='App'>
  <h2> Este es el mapita</h2>
    <MapView
					initialViewState={{
						longitude: -122.3381659,
						latitude: 47.615686,
						zoom: 12,
					}}
					style={{ width: '600px', height: '600px' }}
				/>
</div>
  );
}

export default App;
