import logo from './logo.svg';
import './App.css';
import Posts from "./components/PostContainer/Posts";
import React, {useState} from "react";
import Launches from "./components/spaceX/Launches";

function App() {
    const[post, setPost] = useState(null)
    const chosePost = (obj)=>{
        setPost(obj);
    }

  return (
    <div className="App">
      {/*  {*/}
      {/*      post && <h4>User ID: {post.userId}</h4>*/}
      {/*  }*/}
      {/*  {*/}
      {/*      post && <h4>ID: {post.id}</h4>*/}
      {/*  }*/}
      {/*  {*/}
      {/*      post && <h2>Title: {post.title}</h2>*/}
      {/*  }*/}
      {/*  {*/}
      {/*      post && <h3>Body: {post.body} </h3>*/}
      {/*  }*/}
      {/*<Posts chosePost={chosePost}/>*/}

        <Launches/>

    </div>
  );
}

export default App;
