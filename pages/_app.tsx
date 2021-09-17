import Header from 'components/UI/Header';
import ProgressBar from 'components/UI/ProgressBar';
import Footer from 'components/UI/Footer';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap"
				rel="stylesheet"
			/>

			<ProgressBar color="#61ffce" startPosition={0.3} stopDelayMs={200} height={2} />

			<Header />
			<Component {...pageProps} />

			<Footer />
		</>
	);
}

export default MyApp;
