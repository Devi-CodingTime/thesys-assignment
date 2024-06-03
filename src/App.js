import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import MenuItem from './components/MenuItem';
import PlusCard from './components/PlusCard';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App flex border gap-4 w-full">
      
      <div className='w-[17%] flex flex-col gap-4'>
        <div className='flex justify-between'>
          <p>Dashboard</p>
          <img src='../menulit.png'  width="20px" style={{height:"50%"}} alt='dashboard'/>
        </div>
        <div>
          <div className='flex justify-between'>
            <p>DASHBOARDS</p>
            <img src='../topArr.png'  width="20px" style={{height:"50%"}} alt='top-arrow'/>
          </div>
          <Sidebar/>
        </div>
      </div>
      {/* side bar end */}
      <div className='w-[75%]'>
         <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
              <p>Task Board</p>
              <img src='../pen.jpg'  width="20px" style={{height:"30%"}} alt='top-arrow'/>
            </div>
            <Input/>
         </div>
         <div className='flex gap-2'>
          <div className='flex flex-col gap-2'>
            <TaskList task="Backlog Task" count = "3"/>
              <PlusCard/>
              <Card/>
              <Card/>
              <Card/>
          </div>
          <div className='flex flex-col gap-2'>
          <TaskList task="Backlog Task" count = "3"/>
            <PlusCard/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
         </div>
         <div className='flex flex-col gap-2'>
          <TaskList task="Backlog Task" count = "3"/>
            <PlusCard/>
            <Card/>
         </div>
         <div className='flex flex-col gap-2'>
          <TaskList task="Backlog Task" count = "3"/>
            <PlusCard/>
            <Card/>
            <Card/>
            <Card/>
         </div>
         </div>
         
      </div>
      {/* middle dashboard end */}
      <div className='w-[8%] flex flex-col justify-between'>
        {/* <img src='../cross.png' alt='cross' style={{height:"2%"}} width="25px"/>
        <div className='flex flex-col gap-2'>
            <img alt='img' src='../user1.avif' className="rounded-full border "  style={{height:"20%"}} width="25px"/>
            <img alt='img' src='../user22.webp' className="rounded-full border  "  style={{height:"20%"}} width="25px"/>
            <img alt='img' src='../user3.webp' className="rounded-full border  "  style={{height:"20%"}} width="25px"/>
            <img alt='img' src='../user1.avif' className="rounded-full border "  style={{height:"20%"}} width="25px"/>
            <img alt='img' src='../user22.webp' className="rounded-full border  "  style={{height:"20%"}} width="25px"/>
            <img alt='img' src='../user3.webp' className="rounded-full border  "  style={{height:"20%"}} width="25px"/>

        </div>
        <img src='../next.png' alt='next' style={{height:"2%"}} width="25px"/> */}
      </div>
      {/* last bar end */}
      
    </div>
  );
}

export default App;
