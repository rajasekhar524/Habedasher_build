import Header from './components/Header/Header';
import './default.scss';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='bgimg'>
     {/* <img style={{width:"100%",objectFit:"cover"}} src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /> */}
     <img style={{width:"100%",objectFit:"cover"}} src="https://images.unsplash.com/photo-1519831296458-9341fc9d2b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
     <img style={{width:"100%",objectFit:"cover"}} src="https://images.unsplash.com/photo-1519831296458-9341fc9d2b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
     <img style={{width:"100%",objectFit:"cover"}} src="https://images.unsplash.com/photo-1519831296458-9341fc9d2b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
     </div>
     
    </div>
  );
}
export default App;
