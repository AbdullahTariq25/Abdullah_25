// const form = document.getElementById("contact-form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     emailjs.send(
//         "service_pfagh1v",
//         "template_dtnhuau", {
//             name: name,
//             email: email,
//             message: message,
//         }, {
//             publicKey: "LqAaYWEtM18O3Gev5", // Replace with your User API key
//         }
//     ).then(
//         (response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             alert("Email sent successfully!");
//         },
//         (error) => {
//             console.log("FAILED...", error);
//             alert("Error sending email. Please try again.");
//         }
//     );
// });




(function() {
    emailjs.init({
        publicKey: "LqAaYWEtM18O3Gev5",
    });
})();




const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send(
        "service_pfagh1v",
        "template_dtnhuau", {
            name: name,
            email: email,
            message: message,
        }, {
            publicKey: "LqAaYWEtM18O3Gev5", // Replace with your User API key
        }
    ).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
            form.reset(); // Clear the form
        },
        (error) => {
            console.log("FAILED...", error);
            alert("Error sending email. Please try again.");
        }
    );
});






document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";












// const form = document.getElementById("contact-form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     emailjs.send(
//         "gmail",
//         "template_odtezqk", {
//             name: name,
//             email: email,
//             message: message,
//         },
//         "LqAaYWEtM18O3Gev5"
//     ).then(
//         (response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             alert("Email sent successfully!");
//         },
//         (error) => {
//             console.log("FAILED...", error);
//             alert("Error sending email. Please try again.");
//         }
//     );
// });
// // e.target.reset()












// 2.  **Missing `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_USER_ID`**: In the `emailjs.sendForm()` method, you need to replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_USER_ID` with your actual EmailJS service ID, template ID, and user ID.

//     ```javascript
// // Replace with your actual EmailJS credentials
// emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')







// 4.  **Undefined `e` variable**: In some parts of the code, you are using the `e` variable without defining it. Make sure to define `e` as an event parameter in your event listener function.

//     ```javascript
// // Define the event parameter
// form.addEventListener("submit", (e) => {
//   // Your code here
// })




















// const form = document.getElementById("contact-form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     emailjs.send(
//         "gmail",
//         "template_odtezqk", {
//             name: name,
//             email: email,
//             message: message,
//         },
//         "JdbLtt2eAkX9xZ6tJqIUY"
//     ).then(
//         (response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             alert("Email sent successfully!");
//         },
//         (error) => {
//             console.log("FAILED...", error);
//             alert("Error sending email. Please try again.");
//         }
//     );
// });







// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// e.preventDefault();

// emailjs
//     .sendForm('gmail', 'template_odtezqk', form.current, {
//         publicKey: 'xDfitviHedM03dwM_',
//     })
//     .then(
//         () => {
//             console.log('SUCCESS!');
//         },
//         (error) => {
//             console.log('FAILED...', error.text);
//         },
//     );
// e.target.reset()


// return {

// }




















// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [sent, setSent] = useState(false);

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//             .then((result) => {
//                 console.log(result.text);
//                 setSent(true);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };

//     return ( <
//         form onSubmit = { sendEmail } >
//         <
//         label >
//         Name:
//         <
//         input type = "text"
//         name = "name"
//         value = { name }
//         onChange = {
//             (e) => setName(e.target.value)
//         }
//         /> < /
//         label > <
//         label >
//         Email:
//         <
//         input type = "email"
//         name = "email"
//         value = { email }
//         onChange = {
//             (e) => setEmail(e.target.value)
//         }
//         /> < /
//         label > <
//         label >
//         Message:
//         <
//         textarea name = "message"
//         value = { message }
//         onChange = {
//             (e) => setMessage(e.target.value)
//         }
//         /> < /
//         label > <
//         button type = "submit" > Send < /button> {
//         sent && < p > Email sent successfully! < /p>} < /
//         form >
//     );
// };

// export default ContactForm;












// import emailjs from 'emailjs-com';








// // import React from 'react';
// // import emailjs from 'emailjs-com';

// // const ContactForm = () => {
// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
// //       .then((result) => {
// //         console.log(result.text);
// //       }, (error) => {
// //         console.log(error.text);
// //       });
// //   };

// //   return (
// //     <form onSubmit={sendEmail}>
// //       <input type="text" name="name" placeholder="Name" />
// //       <input type="email" name="email" placeholder="Email" />
// //       <textarea name="message" placeholder="Message" />
// //       <input type="submit" value="Send" />
// //     </form>
// //   );
// // };

// // export default ContactForm;








// const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
// };


// <
// form onSubmit = { sendEmail } >
//     <
//     input type = "text"
// name = "name"
// placeholder = "Name" / >
//     <
//     input type = "email"
// name = "email"
// placeholder = "Email" / >
//     <
//     textarea name = "message"
// placeholder = "Message" / >
//     <
//     input type = "submit"
// value = "Send" / >
//     <
//     /form>