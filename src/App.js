import { AppRoute } from './Routes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from './Components/Loader/Loader';
import { Provider } from 'react-redux'
import {store, persistor} from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Suspense fallback={<PageLoader/>}>
					<AppRoute/>
				</Suspense>
			</PersistGate>
		</Provider>
    </BrowserRouter>
  );
}

export default App;
