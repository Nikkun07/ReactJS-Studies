import UserGreet from "./UserGreet.jsx";

function App() {

  return(
    <>
      <UserGreet isLoggedIn ={false} username="Nikkun"></UserGreet>
      <UserGreet isLoggedIn ={true} username="Sakuya"></UserGreet>
      <UserGreet isLoggedIn ={true} username="Nikkun"></UserGreet>
    </>
  );
}

export default App
