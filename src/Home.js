import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import jsPDF from 'jspdf';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const Home = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {

        const doc = new jsPDF();
        doc.text(values.firstName, 10, 10);
        doc.text(values.lastName, 10, 20);
        doc.text(values.email, 10, 30);
doc.save("slip.pdf");
      
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}

          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}

          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}


          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Home;