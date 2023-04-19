import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3>Login page</h3>
       </div>

       <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>User Name</label>
            <input type='text' className='form-control' 
            placeholder='User Name' id='username'></input>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input type='password' className='form-control' 
            placeholder='password' id='password'></input>
          </div>

          <div className='form-group'>
            <div className='file-image'>
              <div className='image'>

              </div>

            </div>
          </div>

          <div className='form-group'>
            <input type='sumbit' value='login' className='btn'></input>
          </div>

          <div className='form-group'>
            <span><Link to='/messenger/register'>Don't have any account</Link></span>
          </div>

        </form>
       </div>

      </div>
    </div>
  )
}
export default Login