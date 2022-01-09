import { useFormik } from "formik";
import Header from "./Header";


const Contact = () => {

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } 
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
            errors.phone = 'Required';
          } else if (values.message.length < 4) {
            errors.firstName = 'Must be 4 characters or more';
          }
        
      
        return errors;
      };
      



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: () => {
            alert("Thank you");
            
        },
    });



    return (
        <>
        <Header/>
  

        <div className="contact">
         
<h1 className="contact_header">CONTACT</h1>
         
<h3 className="contact_header-h3">You can contact me with this form.</h3>
            <div className="contact_form">

                <form onSubmit={formik.handleSubmit}>
           
                <label htmlFor="name">Name :</label>
                <div className="form_name"> <input id="name" name="name" type="name" onChange={formik.handleChange} value={formik.values.name} /></div>
                    {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
                    
                    <label htmlFor="email">Email Address :</label>
                    <div className="form_email"> <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} /></div>
                    {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}

                  
                    <label htmlFor="phone">Your Message :</label>
                    <div className="form_message"> <textarea  placeholder="Your Message" id="message" name="message" value={formik.values.message} onChange={formik.handleChange} /></div>
                    {formik.errors.message ? <div className="errors">{formik.errors.message}</div> : null}

                    <button type="submit">Submit</button>
                </form>



            </div>





        </div>



        </>

    );



};

export default Contact;