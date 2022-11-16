import './App.css';
import Heading from './Heading';
import History from './History';
import ResDes from './ResDes';

function App() {
  return (
    <div>
      <div className='flex bg-gradient-to-r from-cyan-500 to-blue-500 h-[380px] w-screen'>
        <Heading />
      </div>
      <div className='bg-offwhite w-screen h-12'></div>
      <div className='flex bg-offwhite w-screen h-screen'>
        <History />
      </div>
      <div className='w-screen h-[175vh]'>
        <ResDes />
      </div>
    </div>
  );
}

export default App;
