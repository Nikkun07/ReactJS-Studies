import List from "./List.jsx";
function App() {

  const artists = [{id: 1, name: "Nikkun", level: 50}, 
                   {id: 2, name: "Sakuya", level: 99}, 
                   {id: 3, name: "Renti", level: 20}, 
                   {id: 4, name: "Sovo", level: 35}];

  const retars = [{id: 5, name: "Guian", level: 69}, 
                  {id: 6, name: "Mynalas", level: 47}, 
                  {id: 7, name: "Renti", level: 20}, 
                  {id: 8, name: "Sovo", level: 35}];
  const random = [];
  return(
    <>
      {artists.length > 0 ? <List items={artists} category="Artists"></List> : null}
      {retars.length > 0 ? <List items={retars} category="Retards"></List> : null}
      {random.length > 0 ? <List items={random} ></List> : null}
    </>
  );
}

export default App
