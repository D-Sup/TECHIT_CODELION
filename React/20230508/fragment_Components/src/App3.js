import Time from './Components/Time.jsx'
import HelloProps from './Components/Hello.jsx'
import Licat from './Components/Licat.jsx'
import Resume from './Components/Resume.jsx'
import ColorText from './Components/ColorText.jsx'

function App() {
  return (
    <div>
      <Licat name="gary" />
      <Time />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </div>
  );
}

export default App;
