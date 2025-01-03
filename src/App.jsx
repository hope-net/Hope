import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRouter from './AppRouter'

function App({ className }) {
  return (
    <div className={className}>
      <Header /> 
      <AppRouter /> 
      <Footer />
    </div>
  );
}

export default App;

