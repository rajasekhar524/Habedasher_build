import React,{useState,useEffect} from 'react'
import './styless.scss'
// import contact from './../../assets/contact.jpg'
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import SendIcon from '@material-ui/icons/Send';
import ImageUpload from './Imageupload/ImageUpload'
import BlueButton from '../BlueButton/BlueButton'
import {firestore,storage} from './../../Firebase/utils'
import DropSubmit from './dropSubmit/DropSubmit';
import emailjs from 'emailjs-com';



function Dropdesign() {
const [confirm, setConfirm] = useState(false)
const [load, setLoad] =useState(false)
const [progress, setProgress] = useState(0)
const [imageurl, setImageurl] = useState()

const [sizes, setSizes] = useState([
  { id: 'Suit', name: "Suit", title: "Suit" },
  { id: 'Sherwani', name: "Sherwani", title: "Sherwani" },
 , { id: 'Bandi', name: "Bandi", title: "Bandi" },
  { id: 'Bandhgala', name: "Bandhgala", title: "Bandhgala" },
  { id: 'Trouser', name: "Trouser", title: "Trouser" },
  { id: 'Shirt', name: "Shirt", title: "Shirt" },
  { id: 'Kurta', name: "Kurta", title: "Kurta" },
  { id: 'Tuxedo', name: "Tuxedo", title: "Tuxedo" }
])

const [prices, setPrices] = useState([
  { id: '₹ 1000 - ₹ 5000', name: "₹ 1000 - ₹ 5000", title: "₹ 1000 - ₹ 5000" },
  { id: '₹ 5000 - ₹ 10000', name: "₹ 5000 - ₹ 10000", title: "₹ 5000 - ₹ 10000" },
  { id: '₹ 10000 - ₹ 15000', name: "₹ 10000 - ₹ 15000", title: "₹ 10000 - ₹ 15000" },
  { id: '₹ 15000 - ₹ 20000', name: "₹ 15000 - ₹ 20000", title: "₹ 15000 - ₹ 20000" },
  { id: '₹ 20000+', name: "₹ 20000+", title: "₹ 2000+" },
 
])

const [selected,setSelected] = useState()
const [selectedpprice,setSelectedprice] = useState()
const [typeSelect, setTypeSelecct] = useState()
const [budgetSelect, setBudgetSelecct] = useState()

const [data,setData] =useState({
    name:"",
    email:"",
    mobile:"",
    link:"",
    image:null
  });

  useEffect(()=>{
   
    setProgress(progress)
   
  },[progress])
  
  function sendEmail(e) {
    // e.preventDefault();
    emailjs.sendForm('service_4ixk2sk', 'template_rjh40xg', e.target, 'user_NsmYNG9ZCacyiLENdmvOa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    // history.push('/djabkassjd');  
  }
  const changeColor = (id,title) => {
    setSelected(id)
    // setSelected([...selected,id]); 
    setTypeSelecct(title)    
   };

   const changePrice = (id,title) => {
    setSelectedprice(id)
    setBudgetSelecct(title)
   }


  function HandleChange(e){
    e.preventDefault()
    const {name, value} =e.target;
    setData((prev)=>{
      return{...prev,[name]:value};
    })
  }

  function submitDesign(e){
    e.preventDefault();
    sendEmail(e);
    setLoad(true)
    // data.image.name
    const uploadTask= storage.ref( data.image.name).put(data.image);
   
    
    uploadTask.on("state_changed",(snapshot)=>{
      let progress;
      progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setProgress(progress)
    
    },
    (err)=>{
      console.log(err);
    
    },
     ()=>{
     storage.ref(data.image.name).getDownloadURL()
      .then((imageUrl)=>{
          setImageurl(imageUrl)
          firestore.collection("dropData")
          .doc(data.name)
          .set({
            name:data.name,
            email:data.email,
            type:typeSelect,
            budget:budgetSelect,
            mobile:data.mobile,
            link:data.link,
            image:imageUrl
          })
      })
      .then(()=>{
        setBudgetSelecct('')
        setTypeSelecct('')
        setData({
          name:"",
          email:"",
          mobile:"",
          
          link:"",
       
          image:null
        })
      }).then(()=>{
        setProgress(0)
        setLoad(false)
        setConfirm(true)
        setInterval(()=>{
          setConfirm(false)
        },100000)
      })
    }
    )}
    return (
        <div className="droppcontainter">

          
                      
                <div className="dropback">
                  
                <form className='droppform' onSubmit = {submitDesign}>
               
                <div className="category">

                    <div className="droppheader">
                        {/* <span className="droplike">Like some design?</span><br /><br /> Share it with us and we will make it for you */}
                        {/* <hr /> */}
                        
                    </div>
           
                        <div className="chooseheader">
                            Choose category
                        </div>
                        <div className='margin_upload'>

                      </div>
                        <div className='product_sizes'>
                            {sizes.map(({ name, id, title }) => (
                              <div key={id} className='size_layout'>                   
                                <div className={selected === id ? "size_bg" : "size_wl"}
                                  onClick={() => changeColor(id,title)}
                                  name={name}>
                                  {title}
                                </div>
                              </div>
                            ))}
                        </div>
                        {/* {selected} */}
                        <div className="chooseheader">
                            Choose Your Budget
                        </div>
                        <div className='margin_upload'>

                      </div>
                        <div className='product_prices'>
                            {prices.map(({ name, id, title }) => (
                              <div key={id} className='price_layout'>                   
                                <div className={selectedpprice === id ? "size_bg" : "size_wl"}
                                  onClick={() => changePrice(id,title)}
                                  name={name}>
                                  {title}
                                </div>
                              </div>
                            ))}
                        </div>
                        {/* {selectedpprice} */}
                    </div>
                    
                    <br />
                    <div className="category">
                        <div className="chooseheader">
                                Please Upload an image
                        </div>
                        <div className='margin_upload'>

                      </div>
                        
                        
                    </div>
                    {/* <hr /> */}
                    
                    <div className="mail">
                      <ImageUpload setData={setData} />
                    <br />
                    
                    </div>
                    {confirm?
                    <div className="confirmBg">
                      <div className="confirmNote">
                      
                    <DropSubmit />
                    </div>
                    </div> :"" }
                    
                    <div className='dropform-inputs'>
          <div className='form-labels'>reference image link 1</div>
            <input
              className='dropform-input'
              type='URL'
              name='link'
              placeholder=''
              value={data.link}
              onChange={HandleChange}
            
            />
        
          </div>
          
                    <div className='dropform-inputs'>
            <div className='form-labels'>Name *</div>
            <input
              className='dropform-input'
              type='text'
              name='name'
              placeholder=''
              value={data.name}
              required
              onChange={HandleChange}
            
            />
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Email </div>
            <input
              className='dropform-input'
              type='email'
              name='email'
              placeholder=''
              value={data.email}
              // required
              onChange={HandleChange}
            
            />
        
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Mobile *</div>
            <input
              className='dropform-input'
              type='phone'
              name='mobile'
              placeholder=''
              value={data.mobile}
              required
              onChange={HandleChange}
            
            />
        
          </div>
          <br />
          <br />
          
          <BlueButton load={load} type='submit' >Submit</BlueButton>
          <br/>
          
          <div style={{width:`${progress}%`, color:"black", height:"0.3rem", background:"blue"}}>
              
              </div>
          </form>
                </div>
            
        </div>
    )
}

export default Dropdesign