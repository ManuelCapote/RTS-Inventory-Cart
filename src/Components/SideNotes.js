import React from 'react'

const SideNotes = () => {
 return (
  <div className='ui' style={{marginTop: '100px', marginBottom: '100px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
   <div class="ui styled accordion" style={{marginLeft: 'auto', marginRight: 'auto'}}>
       <h1>Some notes:</h1>
       <p>I wanted to add these notes here because I won't have the chance to explain my solution this time.</p>
  <div class="active title">
    <i class="dropdown icon"></i>
   Context API
  </div>
  <div class="active content">
    <p>I decided to implement Context API, to manage the state of the app. it is a very lightweight solution, and for this case, where I need to update both components, and each component depends on each other, this approach is better than "Lifting Up" the state.</p>
  </div>
  <div class="active title">
    <i class="dropdown icon"></i>
    Splice vs Filter
  </div>
  <div class="active content">
    <p>Initially, I used the "splice method" to remove the item from the inventory. But I have now decided to change it to "filter method" I have read the Official React documentation at "reactjs.org". And They don't recommend using "splice" over the state of an array, mainly because it will mutate the array. Instead, I used "filter" which creates a new array.</p>
  </div>
  <div class="active title">
    <i class="dropdown icon"></i>
    Functional Components
  </div>
  <div class="active content">
    <p>I have decided to use function components, to use React Hook, instead of my initial approach of using class components. </p>
  </div>
  <div class="active title">
    <i class="dropdown icon"></i>
    Anonymous Functions
  </div>
  <div class="active content">
    <p>Last but not least, I remember during the interview Todd mentioning the concept of "Anonimous Function", and why was a recommended solution for some part of the code that I was implementing. Thanks to that feedback, I decided to learn more about anonymous functions and how to implement them. And so I did during this exercise, I used anonymous functions on several occasions in order  to call a function with an argument inside an "onClick event". </p>
  </div>
  </div>
  </div>
 )
}

export default SideNotes