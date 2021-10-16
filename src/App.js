import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { MainPage } from 'modules/main/pages/MainPage'

function App() {
  return (
    <div className="App">
      <MainPage>Главная</MainPage>
    </div>
  );
}

export default App;
