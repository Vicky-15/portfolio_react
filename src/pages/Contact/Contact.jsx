// import React, { useReducer } from "react";

// import "./Contact.scss";
// import {
//   CHANGE_TEXT_INPUT,
//   formReducer,
//   INITIAL_DATA,
// } from "./ContactFormReducer.jsx";

// import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
// import { CiLocationOn } from "react-icons/ci";

// export const Contact = () => {
//   const [state, dispatch] = useReducer(formReducer, INITIAL_DATA);

//   const inputHandler = (e) => {
//     dispatch({
//       type: CHANGE_TEXT_INPUT,
//       payload: { name: e.target.name, value: e.target.value },
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // console.log(state);
//   };
//   return (
//     <>
//       <section id="contact-a" className="text-center py-4">
//         <div className="container">
//           <h1 className="section-title">Contact Me</h1>
//           <div className="bottom-line"></div>
//           <p className="lead" title="something">
//             Reach me if you have any queries, discussing ideas, any project
//             needs to be done with clear and cool ui with no excessive libraries.
//           </p>
//           <div className="center">
//             <form
//               onSubmit={(e) => {
//                 submitHandler(e);
//               }}
//             >
//               <div className="input-fields">
//                 <input
//                   type="text"
//                   name="name"
//                   value={state.name}
//                   onChange={inputHandler}
//                   placeholder="Name"
//                   className="name-input"
//                 />
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   className="subject-input"
//                   value={state.subject}
//                   onChange={inputHandler}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="email-input"
//                   value={state.email}
//                   onChange={inputHandler}
//                 />
//                 <input
//                   type="phone"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   className="mobile-input"
//                   value={state.mobile}
//                   onChange={inputHandler}
//                 />
//                 <textarea
//                   maxLength={"400"}
//                   name="message"
//                   placeholder="Message"
//                   className="message-input"
//                   value={state.message}
//                   onChange={inputHandler}
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn-dark">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section id="contact-b" className="text-center py-3 bg-dark ">
//         <div className="container">
//           <div className="contact-info">
//             <div>
//               <i>
//                 <AiOutlineMail className="icon" />
//               </i>
//               <h3>Email</h3>
//               <p>
//                 <a href="mailto:vigneshstudent98@gmail.com">
//                   vigneshstudent98@gmail.com
//                 </a>
//               </p>
//             </div>
//             <div>
//               <i>
//                 <AiOutlinePhone className="icon" />
//               </i>
//               <h3>Contact</h3>
//               <p>
//                 <a href="tel:+919688128726">9688128726</a>
//               </p>
//             </div>
//             <div>
//               <i>
//                 <CiLocationOn className="icon" />
//               </i>
//               <h3>Location</h3>
//               <p>Erode, Tamil Nadu, India</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact-c" className="bg-main text-center py-4">
//         <div className="container">
//           <h1>Let's Start Your Next Project</h1>
//         </div>
//       </section>
//     </>
//   );
// };
