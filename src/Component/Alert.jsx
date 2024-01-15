import React from 'react'
import '../assets/Css/Alert.css'

function Alert(props) {
  return (
    <div className='container alert_aria'>
        <div className='alert_section'>
          <div style={props.showAlert} className={`container alert alert-success alert-dismissible Show`}>
              <strong>{props.alert}</strong>
          </div>
        </div>
    </div>
  )
}

export default Alert