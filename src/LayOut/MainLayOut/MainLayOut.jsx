import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const MainLayOut = ({children}) => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut();
  }

    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/allAssignments">All Assignments</Link></li>
    
    
    
   
    { user?.email ?  <>
        <li><Link to="/createassignments">Create Assignment</Link> </li>
        <li><Link to="/allSubmittedAssignments">Submitted Assignment</Link> </li>
        <li><Link to="/myAssignment">My Assignment</Link> </li>
        <li><Link to="/addResources">Add Resource & Support</Link> </li>
        <li><button onClick={handleSignOut}>Log out</button></li>
        
    </> 
    : 
    <>
      <li> <Link to="/login">Login</Link> </li>
      <li> <Link to="/register">Register</Link> </li>
    </>
   }
   
</>

    return (
     <div className="-mx-8 lg:-mx-16">
                <div className="drawer  w-full ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-sky-800 text-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        
        <img className="w-52" src="https://i.ibb.co/87XK3Ty/l1-removebg-preview.png" alt="" />
      </div>
      <div className="flex-none hidden lg:block bg-sky-800">
        <ul className="menu menu-horizontal text-white">
          {/* Navbar menu content here */}
          {navItems}
          {
            user && <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
            title={user.displayName} />
          }
        </ul>
      </div>
    </div>
    {/* Page content here */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-sky-800 text-white">
      {/* Sidebar content here */}
      {navItems}
      {
            user && <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
            title={user.displayName} />
          }
      
    </ul>
  </div>
</div>
     </div>
    );
};

export default MainLayOut;