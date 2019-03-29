// import React, { Component } from "react";
// import fire from "./config/Fire";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   login = e => {
//     e.preventDefault();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(this.state.email, this.state.password)
//       .then(u => {})
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div className="col-md-6">
//         <h1>Log In Page</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               value={this.state.email}
//               onChange={this.handleChange}
//               type="email"
//               name="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//               name="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={this.login}
//             className="btn btn-primary"
//           >
//             Login
//           </button>
//         </form>
//         <button
//           style={{ marginLeft: "25px", marginTop: "25px" }}
//           className="btn btn-info"
//           onClick={() => this.props.changeView("landing")}
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }
// }
// export default Login;
