import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen background-color antialiased">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
