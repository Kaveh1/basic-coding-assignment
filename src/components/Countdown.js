import {React, useState} from 'react'
import Timer from './Timer'

const Countdown = () => {
  // const { register, handleSubmit, errors } = useForm();
  const [ counter, setCounter] = useState('')
  const [ showTimer, setShowTimer ] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setCounter('')
  }

  function handleChange(e) {
    const value = e.target.value;
    // if (value.includes('_')) {
    //   setError('You cannot use an underscore');
    // } else {
    //   setError(null);
    //   setMessage(value);
    // }
    setCounter(value);
  }

  return (
    <>
      <div className='wrapper'>
        <h1>Countdown</h1>
        <form onSubmit={handleSubmit}>
          <input
            id='countdown_seconds'
            name='countdown_seconds'
            type='number'
            pattern='[0-9]'
            placeholder='Type hier het aantal seconden in...'
            onChange={handleChange}
            value={counter}
          />
          <button 
            type='submit'
            onClick={() => setShowTimer(true)}>
            Start !
          </button>
          {/* {error && (
            <label style={{ color: 'red' }} htmlFor='message'>
              {error}
            </label>
          )} */}
        </form>
      </div>
      {showTimer ? <Timer props={counter}/> : null}
    </>
  )
}

export default Countdown;

// placeholder='Type hier het aantal seconden in...'
// onChange={e => setCounter(e.target.value)}