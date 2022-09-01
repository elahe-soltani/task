import React from 'react';
import { Route , Routes } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
//component
import Login from './components/Login';
import Post from './components/Post';
import UpdatePage from './components/UpdatePage'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login />} />
           <Route path='/post/:id' element={<Post />} /> 
           <Route path='/updatePage/:id' element={<UpdatePage />} /> 
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
