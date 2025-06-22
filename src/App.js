import './App.css';
import letter from './newsletter 1.png'
import slice from './Slice 1.png'

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("You Have Successfully Signed Up");
   
  }
  return (
    <div className="App h-screen  w-screen bg-[#FFFFFF]">
      <div className='bg-[#6CD8D5] absolute left-[18rem] top-[16rem] rounded-full h-[14rem] w-[14rem]'></div>
      <div className='border-[#6CD8D5] left border-[.20rem]  border-dotted  absolute left-[17.50rem] top-[15.50rem] rounded-full h-[15rem] w-[15rem]'></div>
      <img src={letter} alt='letter-image' className='h-[15rem] absolute top-[12rem] left-[19.50rem]' />
      <h1 className='absolute text-2xl top-[12rem] left-[44rem] font-semibold'>Sign up to our</h1>
      <h1 className='absolute text-6xl top-[15rem] left-[44rem] font-semibold'>Newsletter</h1>
      <p className='absolute text-[20px] top-[20rem] left-[44rem]'>Subscribe to our newsletter and stay updated.</p>
      <form onSubmit={handleSubmit}>
        <img src={slice} alt='email-icon' className='top-[24.60rem] z-30 absolute left-[44.50rem]'/>
        <input type='email' name='email'  placeholder='Your email' className='h-[2.50rem] text-lg pl-[2rem] outline-none border-[rgba(0,0,0,0.2)] rounded-lg w-[26rem] left-[44rem] top-[24rem] absolute border-[1px]' />
        <input type='submit' value="Sign up" className='h-[2.50rem] hover:cursor-pointer text-center text-lg  rounded-lg w-[26rem] left-[44rem] bg-[#ffd453] top-[28.50rem] absolute border-2' />
      </form>
    </div>

  );
}

export default App;
