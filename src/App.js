import logo from './logo.svg';
import ResponsiveAppBar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { Paper } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Paper sx={{width:'90%', marginLeft:10}}>
      <ResponsiveAppBar/>
      <Content/>
      <Footer/>

      </Paper>
    </div>
  );
}

export default App;
