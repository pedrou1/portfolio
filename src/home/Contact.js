import React from 'react';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  TextField,
  Grid,
  Typography
} from '@mui/material';

const validationSchema = yup.object({
    name: yup
      .string('Ingresa tu nombre')
      .min(4, 'El nombre debe tener una longitud mínima de 4 caracteres')
      .required('El nombre es obligatorio'),
      email: yup.string().email('Email incorrecto')
      .min(5, 'El email debe tener una longitud mínima de 4 caracteres')
      .required('El email es obligatorio'),
      message: yup
      .string('Ingresa un mensaje')
      .min(15, 'El mensaje debe tener una longitud mínima de 15 caracteres')
      .required('El mensaje es obligatorio')
    
  });
    

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(4)
    },
    button: {
        margin: theme.spacing(2)
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(8)
      }
}))

const Contact = () => {

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        message: ''
        },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      
    },
  });

    const classes = styles();

    return (
        <div id='contact' className={classes.root} style={{ minHeight: '50vh', width: '100%' }}>
            <Typography variant="h2">
                Contacto
            </Typography>
            <Typography component="h1" variant="h5">
         
          </Typography>
           <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="name"
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12} mb={4}>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                  fullWidth
                  id="message"
                  label="Mensaje"
                  autoFocus
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Enviar
            </Button>
          </form>

        </div>
    );
}

export default Contact;