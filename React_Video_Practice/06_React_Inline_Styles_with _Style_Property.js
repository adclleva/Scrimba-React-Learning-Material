import React from 'react'
import ReactDOM from 'react-dom'

function App() {

  const date = new Date(2018, 6, 31, 15);
  const hours = date.getHours();
  let timeOfDay

  const styles = {
      fontSize : 30 // this is equivalent to font-size in HTML
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <div>
       <h1 style={styles}>Good {timeOfDay}</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
