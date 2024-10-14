import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

import Home from './pages/home';
import StickyBoardPending from './pages/stickyBoardPending';
import StickyBoardReplied from './pages/stickyBoardReplied';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/board' element={<StickyBoardPending/>}/>
              <Route path='/board/pending' element={<StickyBoardPending/>}/>
              <Route path='/board/replied' element={<StickyBoardReplied/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
