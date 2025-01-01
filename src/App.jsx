import Header from './Components/Header'; // Import the Header
import Footer from './Components/Footer'; // Import Footer
import AppRouter from './AppRouter'; // Import the AppRouter to handle the routes

function App({ className }) {
  return (
    <div className={className}>
      <Header /> {/* The Header will be part of the layout */}
      <AppRouter /> {/* AppRouter will handle routing */}
      <Footer /> {/* Footer can be part of the layout */}
    </div>
  );
}

export default App;

