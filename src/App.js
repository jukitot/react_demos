import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
  let {register, handleSubmit} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title', {required: true})}/>
        <input {...register('body')}/>
        <button>Save Post</button>
      </form>

    </div>
  );
}

export default App;
