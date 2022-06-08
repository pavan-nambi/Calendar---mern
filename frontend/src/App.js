import "./App.css";
import { useEffect } from "react";
// import { ContextHolder } from "@frontegg/rest-api";
// import { useAuth, useLoginWithRedirect } from "@frontegg/react";
// import { AdminPortal } from "@frontegg/react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

// function App() {
//   const { user, isAuthenticated } = useAuth();
//   const loginWithRedirect = useLoginWithRedirect();

//   // Uncomment this to redirect to login automatically
//   useEffect(() => {
//     if (!isAuthenticated) {
//       loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   const logout = () => {
//     const baseUrl = ContextHolder.getContext().baseUrl;
//     window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
//   };

//   const handleClick = () => {
//     AdminPortal.show();
//   };

//   return (
//     <div className="App">
//       {isAuthenticated ? (
//         <div>
//           <div>
//             {console.log(user.accessToken)}

//             <img src={user?.profilePictureUrl} alt={user?.name} />
//           </div>
//           <div>
//             <span>Logged in as: {user?.name}</span>
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 const { code } = user.accessToken;
//                 axios
//                   .post("http://localhost:5000/api/create-tokens", { code })
//                   .then((response) => {
//                     console.log(response.data);
//                   })
//                   .catch((error) => console.log("error", error.message));
//               }}
//             >
//               What is my access token?
//             </button>
//           </div>
//           <div>
//             <button onClick={() => logout()}>Click to logout</button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <button onClick={() => loginWithRedirect()}>Click me to login</button>
//         </div>
//       )}
//       <button onClick={handleClick}>Settings</button>
//     </div>
//   );
// }

// function App() {
//   const failureHandler = (err) => {
//     console.log("error is(in app.js) ", err);
//   };
//   const responseGoogle = (response) => {
//     console.log(response);
//   };

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//       console.log(codeResponse);
//       const { code } = codeResponse;
//       axios
//         .post("http://localhost:5000/api/create-tokens", { code })
//         .then((response) => {
//           console.log(response.data);
//         })
//         .catch((error) => console.log("error", error.message));
//     },
//     flow: "auth-code",
//   });
//   return (
//     <div>
//       <h1>hello</h1>
//       <button onClick={() => login()}>Sign in with Google 🚀 </button>; ;
//     </div>
//   );
// }
function App() {
  return;
  <div></div>;
}

export default App;
