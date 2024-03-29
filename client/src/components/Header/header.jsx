import { Link } from 'react-router-dom';


import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className='header'>
      <Link to='/' className='homeLink'>
        <h1>The Daily Dashboard!</h1>
      </Link>
      <p className='description-tag'>A handful of app's that offer help for your daily routine!</p>


      <div className='navbar-links'>
        {Auth.loggedIn() ? (
                      <button className="logout-btn" onClick={logout}>
                      Logout
                    </button>
        ) : (
          <>         
          <Link to="/Login" className='login-signup'>Login</Link>
          <Link to="/Signup" className='login-signup'>Signup</Link>
          </> 
          )}
      </div>
      <hr></hr>

    </nav>
  );
};

export default Header;



// <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//   <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//     <Link className="text-dark" to="/">
//       <h1 className="m-0" style={{ fontSize: '3rem' }}>
//         Tech Friends
//       </h1>
//     </Link>
//     <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//       Meet your new programming pals.
//     </p>
//     <div>
//       {Auth.loggedIn() ? (
//         <button className="btn btn-lg btn-light m-2" onClick={logout}>
//           Logout
//         </button>
//       ) : (
//         <>
//           <Link className="btn btn-lg btn-primary m-2" to="/login">
//             Login
//           </Link>
//           <Link className="btn btn-lg btn-light m-2" to="/signup">
//             Signup
//           </Link>
//         </>
//       )}
//     </div>
//   </div>
// </header>