import Navigation from './Navigation';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';

export default function RootLayout() {
	return (
		<>
			<Navigation/>
			<Outlet/>
			<Login />

			<Footer/>
		</>);
}

