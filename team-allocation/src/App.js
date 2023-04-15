import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';


function App() {
  return (
    <div className="App">
      <Content />
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
