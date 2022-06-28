import './App.css';
import { CreateContainer, Header, MainContainer } from './components';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-slate-100'>
        <Header></Header>
        <main className='mt-16 md:mt-22 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
