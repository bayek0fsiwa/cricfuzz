import Layout from './components/Layout'
import Card from './components/Card'
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
