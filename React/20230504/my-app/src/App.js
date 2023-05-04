import './App.css';
import Menu from './components/menu/Menu.jsx';
import NewMenu from './components/newMenu/NewMenu.jsx';
import Clock from './components/clock/Clock.jsx';
import List from './components/list/List';

function App() {
  const name = '라이캣!!!';

  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <Clock />
      <List />
    </div>
  );
}

export default App;
