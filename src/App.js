import Layout from './components/Layout'
import Card from './components/Card'
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Layout />
      <Container>
        <Card />
      </Container>
    </div>
  );
}

export default App;
