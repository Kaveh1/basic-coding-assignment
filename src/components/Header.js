import React from 'react';
// import useRouter from './Router'

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
  useHistory
} from "react-router-dom";

const Header = () => {

  const history = useHistory();
  const handleClick = () => history.push('/goodbye');
  
  return (
    <button type="button" onClick={handleClick}>
      Goodbye
    </button>
  );
  // const router = useRouter();
  
  // const handleRoute = () => { 
  //   history.push("/about");
  // }

  // const routeChange = () =>{ 
  //   let path = `countdown`; 
  //   console.log('Hello, are you there?')
  //   history.push(path);
  //   console.log('No')
  // }

  // return (
    // <>
      {/* <button onClick={(e) => router.push("/countdown")}>Countdown</button> */}
      {/* <button onClick={() => history.push('/coundown')}>Countdown</button> */}
      {/* <button onClick={(e) => router.push("/countdown")}>Countdown</button>; */}
      {/* <Router>
        <button to="/countdown">Countdown</button>
        <button to="/image_viewer">Upload image</button>
        <Switch>
          <Route path="/countdown">
            <CountDown />
          </Route>
          <Route path="/image_viewer">
            <ImageViewer />
          </Route>
        </Switch>
      </Router> */}
  //   </>
  // );
}

export default Header;

function CountDown() {
  return <h2>CountDown</h2>;
}

function ImageViewer() {
  return <h2>ImageViewer</h2>;
}



// return (
  // <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/users">Users</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     {/* A <Switch> looks through its children <Route>s and
  //         renders the first one that matches the current URL. */}
  //     <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/users">
  //         <Users />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
// );