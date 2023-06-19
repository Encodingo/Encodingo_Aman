import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'

const ProtectedRouteverify = ({isVarified, isAuthenticated, children , adminRoute , isAdmin}) => {
  console.log(isVarified);
  console.log(isAuthenticated);
  if(!isVarified && !isAuthenticated){
    return <Navigate to={'/'}/>
   }
   if( isAuthenticated && !isVarified){
    return <Navigate to={'/verify'}/>
   }
   if(adminRoute && !isAdmin){
    return <Navigate to={'/'}/>
   }
  return children ? children : <Outlet/>
}

export default ProtectedRouteverify


// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, Route } from "react-router-dom";

// const ProtectedRouteverify = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//    const Navigate = useNavigate();
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return Navigate('/');
//             }

//             if(!user.verified){
//                return Navigate('/verify');
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return Navigate('/');
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRouteverify;
