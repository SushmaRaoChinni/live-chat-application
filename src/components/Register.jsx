import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

  const [state,setstate] = useState({
    userName : '',
    email:'',
    password:'',
    confirmPassword : '',
    image : ''
})

const inputHendle = e => {
  setstate({
       ...state,
       [e.target.name] : e.target.value 
  })
}

const fileHendle = e =>{
  if(e.target.files.length !==0){
       setstate({
            ...state,
            [e.target.name] : e.target.files[0]
       })
  }
}

const register = e =>{
  e.preventDefault();
  console.log(state)

}


  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3>Register</h3>
       </div>

       <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>User Name</label>
            <input type='text' onChange={inputHendle} name="userName" 
            value={state.userName}  className='form-control' 
            placeholder='User Name' id='username'></input>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input type='email' onChange={inputHendle} name="email" 
            value={state.email} 
            className='form-control' 
            placeholder='email' id='email'></input>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input type='password' onChange={inputHendle} name="password"
             value={state.password} 
            className='form-control' 
            placeholder='password' id='password'></input>
          </div>

          <div className='form-group'>
            <label htmlFor='confirmPassword'>confirm Password</label>
            <input type='confirmPassword'onChange={inputHendle} name="confirmPassword"
           value={state.confirmPassword}
          placeholder='confirmPassword' id='confirmPassword'></input>
          </div>


          <div className='form-group'>
            <div className='file-image'>
              <div className='image'>

              </div>

             <div className='file'>
              <label htmlFor='image'>Select Image</label>
              <input type='file' onChange={fileHendle}  name="image"  className='form-control' id='image'>
              </input>
              </div> 

            </div>
          </div>

          <div className='form-group'>
            <input type='sumbit' value='register' className='btn'></input>
          </div>

          <div className='form-group'>
            <span><Link to='/messenger/login'>Login Your account</Link></span>
          </div>
          
        </form>

       </div>

      </div>
    </div>
  )
}

export default Register;