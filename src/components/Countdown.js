import {React, useState, useEffect} from 'react'
// import Timer from './Timer'

const Countdown = () => {
  // const { register, handleSubmit, errors } = useForm();
  const [ value, setValue] = useState('')
  const [ seconds, setSeconds ] =  useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else {
          clearInterval(timer)
        }
      }, 1000)

      return () => {
        clearInterval(timer);
      };
    });

  const handleSubmit = (e) => {
    e.preventDefault()
    setSeconds(value);
    setValue('')
  }

  return (
    <>
      <div className='wrapper'>
        <h1>Countdown</h1>
        <form onSubmit={handleSubmit}>
          <input
            id='countdown_seconds'
            type='number'
            pattern='[0-9]'
            name='countdown_seconds'
            placeholder='Type hier het aantal seconden in...'
            onChange={e => setValue(e.target.value)}
            value={value}
            required
          />
          <button type='submit' id='submit_button'>Start</button>
          {/* {error && (
            <label style={{ color: 'red' }} htmlFor='message'>
              {error}
            </label>
          )} */}
        </form>
      </div>
      {seconds > 0 ? <h1>{seconds}s</h1> : null}
    </>
  )
}

export default Countdown;
