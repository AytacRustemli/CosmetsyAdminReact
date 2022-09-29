import './App.css';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import MyRouter from './router/MyRouter';


function App() {
  return (
    <div className='container-fluid' style={{backgroundColor:"#F0F2F5"}}>
      {/* <Login /> */}
        <div className="row">
          <div className="col-lg-3 p-0">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <MyRouter />
          </div>
        </div>
      </div>
  );
}

export default App;
