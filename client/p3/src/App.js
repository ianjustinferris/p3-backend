
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/users'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import Home from './pages/homePage'
import Login from './pages/loginPage'
import View from './pages/placePage'
import Place from './pages/viewPage'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/view' element={<View />} />
              <Route path='/place' element={<Place />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>

    </>
  );
}

export default App;
