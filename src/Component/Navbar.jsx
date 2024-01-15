import '../assets/Css/Navbar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bar from '../assets/img/bar.png';
import logo from '../assets/img/logo.png'

function Navbar(props) {
  return (
    <div>
        <header style={props.mode}>
          <nav className={`bg-${props.mode} navbar container navbar-expand-md`}>
            <Link style={{color: props.mode.color == 'black'? 'rgb(0, 196, 231)' : 'rgb(0, 255, 225)'}} to="/" className="navbar-brand"><img src={logo} alt="" /><p>TextUtils</p></Link>
              <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#collapseId'  aria-expanded="false" aria-label="Toggle navigation">
                <img src={bar} alt="" />
              </button>
              <div className="navbar-collapse collapse" id='collapseId'> 
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><Link style={{color: props.mode.backgroundColor == 'white'? 'rgb(0, 196, 231)' : 'rgb(0, 255, 225)'}} className='nav-link' to='/'>{props.home}</Link></li>
                      <li className="nav-item me-3"><Link style={{color: props.mode.backgroundColor == 'white'? 'rgb(0, 196, 231)' : 'rgb(0, 255, 225)'}} className='nav-link' to='/aboutUs'>{props.aboutUs}</Link></li>
                      
                      <li className="form-check form-switch">
                        <label className='form-check-lbel' htmlFor="mode">Dark Mode</label>
                        <input onClick={props.toggleMode} className='form-check-input' type="checkbox" id="mode" />
                      </li>
                  </ul>
              </div>
          </nav>
        </header> 
    </div>
  )
}

export default Navbar;
Navbar.prototype ={
  home : PropTypes.string.isRequired,
  blog : PropTypes.string,
  portfolio : PropTypes.string,
  aboutUs : PropTypes.string
}