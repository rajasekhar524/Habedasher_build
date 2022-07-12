import React,{useState,useEffect} from 'react'
import BlueButton from '../../components/BlueButton/BlueButton'
import Button from '../../components/Button/Button'
import './register.scss'
// import {signInWithGoogle} from './../../Firebase/utils'
import {withRouter} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {emailSignInStart,googleSignInStart,signUpUserStart,facebookSignInStart} from '../../redux/User/user.actions'
import { saveWalletHistory } from '../../redux/Wallet/wallet.actions'
import firebase from './../../Firebase/utils'
 
const mapState = ({user}) => ({
    currentUser: user.currentUser,
    loader:user.loader,
    signUpSuccess:user.signUpSuccess,
    signUpError:user.signUpError,
    userErr:user.userErr
})

function Register(props) {
    const {currentUser} = useSelector(mapState);
    const dispatch = useDispatch();
    const [selectlogin, setSelectlogin] = useState(true)
    const [selectsignup, setSelectsignup] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [phone,setPhone] = useState({})


    useEffect(()=>{
        if(currentUser){
            setEmail('');
            setPassword('')
            props.history.push('/')
        }
    },[currentUser])
    useEffect(()=>{
        dispatch(saveWalletHistory({wallet}));
    },[currentUser])

    const handleSubmit = (e) =>{
      
        e.preventDefault()
        dispatch(emailSignInStart({email,password}), saveWalletHistory({wallet}));
    }
    const wallet = '1000'
    
    const handleRegister = (e) =>{
        e.preventDefault()
        setDisplayName(firstName + secondName)
        dispatch(
                    signUpUserStart({displayName,email,password,confirmPassword}),
                    saveWalletHistory({wallet})
                )
    }

    const handleGoogleSignIn =() =>{
        // console.log('fired')
        dispatch(googleSignInStart())
       
    }

    const handleFacebookSignIn =() =>{
        dispatch(facebookSignInStart(), saveWalletHistory({wallet}));
    }

    const clicksignin = ()=>{
        setSelectlogin(true)
        setSelectsignup(false)
    }
    const clicksignup = ()=>{
        setSelectlogin(false)
        setSelectsignup(true)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setPhone({[name]:value})
    }

    const configureCaptcha = () =>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
              console.log('catcha verified')
            },
            defaultCountry:"IN"
          });
    }

    const onSignInSubmit = (e) =>{
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = "+91" + phone.mobile;
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log('otp sent')
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log('sms in not sent')
            });
    }

    const onSubmitotp = (e) => {
        e.preventDefault()
        const code = phone.otp;
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert('user verified')
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }

  
  return (
    <div className='logging'>
        <div className='black_margin'>

        </div>
        {/* <div className='loggin_title'>Account login</div> */}
        <div className='logging_buttons'>
            <div onClick={clicksignin} aria-hidden="true" className={selectlogin?'sign_in':'sign_in_shadow'}>
                sign in
            </div>
            <div onClick={clicksignup} aria-hidden="true" className={selectsignup?'sign_up':'sign_up_shadow'}>
                create account 
            </div>
        </div>

        {/* <div>
            mobile
            <form onSubmit={onSignInSubmit}>
                <input type='number' name='mobile' placeholder="MObile number" required onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            otp
            <form onSubmit={onSubmitotp}>
                <input type='number' name='otp' placeholder="otp number" required onChange={handleChange}  />
                <button type="submit">Submit</button>
            </form>
        </div> */}
        <div id="sign-in-button"></div>
        <div className='login_layout'>
            <div className={selectlogin?'signin_layout':'signin_layout_hide'}>
                    <div className='social_button'>
                        <div  className='social_button_icon'>
                            {/* <Button icon='facebook' text='Continue with facebook' onClick={handleFacebookSignIn} /> */}
                        </div>
                        <div className='social_button_icon'onClick={handleGoogleSignIn}>
                        <Button icon='google' text='Continue with google' />
                        </div>
                    </div>
                    <div className='social_button_or'>
                        or
                    </div>
                  
                        <div className='login_manual'>  
                        <div className='login_manual_social'>
                           
                                <div className='login_manual_email'>
                                    <input className='input_class_email' type='text' placeholder='* Email Address' onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <div className='login_manual_password'>
                                    <input className='input_class_pass' type='password' placeholder='*Password' onChange={e=>setPassword(e.target.value)} />
                                </div>
                          
                        </div>
                        <div className='login_manual_password'>
                            <div className='login_manual_pass'>
                            {/* Forgot password ? */}
                            </div>
                            <div className='login_manual_required'>
                            *required
                            </div>
                        </div>
                            <div className='login_manual_button' >
                                <BlueButton onClick={handleSubmit}>
                                    sign in
                                </BlueButton>
                         </div>
                    </div>

            </div>
            <div className={selectsignup?'signup_layout':'signup_layout_hide'}>
            <div className='social_button'>
                        {/* <div  className='social_button_icon'>
                            <Button icon='facebook' text='Continue with facebook' onClick={handleFacebookSignIn} />
                        </div> */}
                        <div className='social_button_icon'>
                        <Button icon='google' text='Continue with google' onClick={handleGoogleSignIn}  />
                        </div>
                    </div>
                    <div className='social_button_or'>
                        or
                    </div>
                    <div className='login_manual'>
                        <div className='login_manual_social'>
                            <div className='login_manual_email'>
                                <input className='input_class' type='text' placeholder='* Email' onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div className='login_manual_password'>
                                <input className='input_class' type='password' placeholder='*Password' onChange={e=>setPassword(e.target.value)} />
                            </div>
                            <div className='login_manual_password'>
                                <input className='input_class' type='password' placeholder='* Re-Enter Password' onChange={e=>setConfirmPassword(e.target.value)}/>
                            </div>
                            <div className='login_manual_password'>
                                <input className='input_class' type='text' placeholder='*First Name' onChange={e=>setFirstName(e.target.value)} />
                            </div>
                            <div className='login_manual_password'>
                                <input className='input_class' type='text' placeholder='*Last Name' onChange={e=>setSecondName(e.target.value)}/>
                            </div>

                        </div>
                        <div className='login_manual_password'>
                            <div className='login_manual_pass'>
                            {/* Forgot password */}
                            </div>
                            <div className='login_manual_required'>
                            *required
                            </div>
                        </div>
                        <div className='login_manual_button'>
                            <BlueButton onClick={handleRegister}>
                                    Register
                            </BlueButton>
                        </div>
                    </div>
            </div>
        </div>
        {/* <div className='need_help_section'>
            
        </div> */}
        
    </div>
  )
}

export default withRouter(Register)