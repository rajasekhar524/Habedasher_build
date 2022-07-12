import React,{useState,useEffect} from 'react'
import './default.scss';
import {useDispatch} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import {checkUserSession} from './redux/User/user.action'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Orderplaced from './components/Orderplaced/Orderplaced';
import Mainlayouto from './Layouts/Mainlayouto/Mainlayouto'
import Mainlayout from './Layouts/MainPageLayout/Mainlayout'
import AdminLayout from './Layouts/Adminlayout/AdminLayout'
import AdminToolbar from  './components/Admintoolbar/AdminToolbar'
import Cancelpolicy from './components/Footer/Cancelpolicy/Cancelpolicy'
// import Faqs from './components/Footer/Faqs/Faqs'
import Paymentoptions from './components/Footer/Paymentoptions/Paymentoptions'
import Shippingdel from './components/Footer/Shippingdel/Shippingdel'
import Sizechart from './components/Footer/Sizechart/Sizechart'
import Terms from './components/Footer/Terms/Terms'
import Returnex from './components/Footer/Returnex/Returnex'
import Wallet from './components/Footer/Wallet/Wallet'

const Mainpage = React.lazy(() => import('./Pages/Mainpage/Mainpage'))
const Register = React.lazy(() => import('./Pages/Register/Register'))
const Cart = React.lazy(() => import('./Pages/Cart/Cart'))
const Admin = React.lazy(() => import('./Pages/Admin/Admin'))
const WithAdminAuth = React.lazy(() => import('./Hoc/withAdminAuth'))

const WithAuth = React.lazy(() => import('./Hoc/withAuth'))
const Productresults = React.lazy(() => import('./Pages/Productresults/Productresults'))
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'))
const Dropdesign = React.lazy(() => import('./components/dropdesign/Dropdesign'))
const Appointment = React.lazy(() => import('./components/Appointment/Appointment'))
const Checkout = React.lazy(() => import('./components/Checkout/Checkout'))
const ProductPage = React.lazy(() => import('./Pages/ProductPage/ProductPage'))
const Wishlist = React.lazy(() => import('./Pages/Wishlist/Wishlist'))
const Paymentdetails = React.lazy(() => import('./components/Paymentdetails/Paymentdetails'))

const override = css`
display: block;
margin: 0 auto;
border-color: rgb(0, 17, 53);
color:rgb(0, 17, 53);

`;

function App() {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(0, 17, 53)");

  useEffect(()=>{
    dispatch(checkUserSession());
},[]);
  
  return (
    <div className="App">
 
     <AdminToolbar />
    {/* <Header /> */}
    {/* <HeadermobileV /> */}
      <Switch>
          <Route exact path="/" render={() => (
              
            <React.Suspense fallback={<div className='clipload_poso'><div className='clipload_posoon'><ClipLoader color={color} loading={loading} css={override} size={80} /></div></div>}>
              <Mainlayout>
                <Mainpage />
              </Mainlayout>
            </React.Suspense>
            )}
          />
          <Route exact path="/register" render={() => (
              
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
              <Mainlayouto>
              <Register />
              </Mainlayouto>
            </React.Suspense>
            )}
          />
          <Route exact path="/productpage" render={() => (
            
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                <Mainlayouto>
                <Cart />
                </Mainlayouto>
            </React.Suspense>
            )}
          />
           <Route path="/cart" render={() =>(
            
             
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
               <Mainlayouto>
                <Checkout />
               </Mainlayouto>
            </React.Suspense>
         
           )} /> 
          <Route exact path="/search" render={() => (
              
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
              <Mainlayouto>
              <Productresults />
              </Mainlayouto>
            </React.Suspense>
            
            )}
          />
          
          <Route exact path="/search/:filterType" render={() =>(
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                <Mainlayout>
                <Productresults />
                </Mainlayout>
            </React.Suspense>
              
            
             )} /> 

          
             <Route exact path="/search/size/:filterSize" render={() =>(
            
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
            <Mainlayout>
            <Productresults />
            </Mainlayout>
            
        </React.Suspense>
            
             )} /> 
             <Route  path="/search/dress/:filterDresstype" render={() =>(
            
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
              <Mainlayouto>
                <Productresults />
              </Mainlayouto>    
            </React.Suspense>
            
             )} /> 
             <Route  path="/search/dresstype/:dresstype/:size/:price" render={() =>(
            
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
            <Mainlayouto>
            <Productresults />
            </Mainlayouto>
            
        </React.Suspense>
            
             )} /> 

          <Route   path="/product/:productID" render={() => (

            
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                <Mainlayout>
                  <ProductPage />   
                </Mainlayout>
            </React.Suspense>

          )} />
          <Route  path="/payment" render={() =>(
              <WithAuth>
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                  <Mainlayouto>
                    <Paymentdetails />
                  </Mainlayouto>
            </React.Suspense>
              </WithAuth>
             )} /> 

          <Route  path="/Orders" render={()=>(
              <WithAuth >
                <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                <Mainlayouto>
                  <Dashboard /> 
                  </Mainlayouto>
                </React.Suspense>
              </WithAuth>
              
            ) }/>

            <Route  path="/wishlist" render={() =>(
             
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
               <Mainlayouto>
                <Wishlist />
               </Mainlayouto>
            </React.Suspense>
             )} /> 

          <Route  path="/appointment" render={() =>(
             
            <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
              <Mainlayouto>
                 <Appointment />
              </Mainlayouto>
            </React.Suspense>
             )} />

            <Route  path="/orderplaced" render={() =>(
             
             <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
               <Mainlayouto>
                  <Orderplaced />
               </Mainlayouto>
             </React.Suspense>
              )} />

          <Route  path="/dropdesign" render={() =>(
           
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                 <Mainlayouto>
                 <Dropdesign />
                 </Mainlayouto>
            </React.Suspense>
          
             )} />

<Route   path="/cancelpolicy" render={() =>(
          
          <Mainlayouto >
           <Cancelpolicy />
        </Mainlayouto>
         
          
      )} />
      {/* <Route  path="/faqs" render={() =>(
          
          <Mainlayouto >
          <Faqs />
        </Mainlayouto>
         
          
      )} /> */}
      <Route  path="/shipping" render={() =>(
          
          <Mainlayouto >
          <Shippingdel />
        </Mainlayouto>
         
          
      )} />

      <Route  path="/paymentoptions" render={() =>(
          
          <Mainlayouto >
          <Paymentoptions />
        </Mainlayouto>
         
          
      )} />

      <Route  path="/returns" render={() =>(
          
          <Mainlayouto >
          <Returnex />
        </Mainlayouto>
         
          
      )} />

      <Route  path="/wallet" render={() =>(
          
          <Mainlayouto >
          <Wallet />
        </Mainlayouto>
         
          
      )} />
      <Route  path="/sizechart" render={() =>(
          
          <Mainlayouto >
          <Sizechart />
        </Mainlayouto>
         
          
      )} />

      <Route  path="/termsandconditions" render={() =>(
          
          <Mainlayouto >
          <Terms />
        </Mainlayouto>
         
          
      )} />
             
          <Route exact path="/admin" render={()=>(
            
            <WithAdminAuth >
              <React.Suspense fallback={<div className='clipload_poso'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>}>
                <AdminLayout>
                  <Admin />
                </AdminLayout>
                </React.Suspense>
            </WithAdminAuth>
              
            ) }/>
      </Switch>

      
      
    
    </div>
  );
}
export default App;
