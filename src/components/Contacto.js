import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Contacto() {
  return (
    <div>
      <Header />
      <h1>Ingresa tus datos</h1>
      <Formik
        initialValues={{ 
          email: '', 
          nombre: '', 
          apellido: '', 
          telefono: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          // Validación personalizada para los otros campos, por ejemplo:
          if (!values.dni) {
            errors.dni = 'Required';
          }

          // Agregar más validaciones según sea necesario

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email: </label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="nombre">Nombre: </label>
              <Field type="text" name="nombre" />
              <ErrorMessage name="nombre" component="div" />
            </div>
            <div>
              <label htmlFor="apellido">Apellido: </label>
              <Field type="text" name="apellido" />
              <ErrorMessage name="apellido" component="div" />
            </div>
            <div>
              <label htmlFor="telefono">Teléfono: </label>
              <Field type="text" name="telefono" />
              <ErrorMessage name="telefono" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
}
