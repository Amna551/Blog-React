import TopBar from "./component/topbar/topbar";
//import Post from "./component/post/post";
import Home from "./pages/home/home";
import SinglePost from "./pages/single/single";
import Write from "./pages/write/write";
import Setting from "./pages/setting/setting";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
      <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/register'>
          {user ? <Home /> : <Register />}
          </Route>
          <Route path='/login'>
          {user ? <Home /> : <Login />}
          </Route>
          <Route path='/write'>
          {user ? <Write /> : <Register />}
          </Route>
          <Route path='/setting'>
          {user ? <Setting /> : <Register />}
          </Route>
          <Route path='/post/:postId'>
            <SinglePost/>
          </Route>
      </Switch>
      </Router>
  );
}

export default App;
