import React,{useState} from 'react'
import './app.css'
const App = () => {

const [text, setText] = useState('')
const date='';


const reverseString = (str) => {
    const x=(str.split(''))
    const y =x.reverse()
    console.log(y)
    return y.join('');
}

const isPallindrome = (ddmmyyyy) => {
    const original = ddmmyyyy
    const revString = reverseString(original)
    console.log(revString);
    if (original === revString) {
        setText("It's  a pallindrome")
    }else{
        setText("It's not a pallindrome")
    }
}

const dateTo = (str) =>{
    const x=str.split('-')
    console.log(x)
    var date ={
        day:x[2],
        month:x[1],
        year:x[0],
    }
    var ddmmyyyy = date.day+date.month+date.year;
    isPallindrome(ddmmyyyy)
    
}

  return (
    <div className='container'>
        <div className='text-container'>
            
            <div className='header'>
                <h1>Palindrome Birthday!</h1>
            </div>
            
            <div className='header'>
                <h3>Enter your birthday date:</h3>
            </div>
        
        <form>
            <input type="date" value={date} placeholder="dd-mm-yyyy" onChange={(e)=>dateTo(e.target.value)}></input>
        </form>
        <div className='info'>{text}</div>
        </div>
    </div>
  )
}

export default App