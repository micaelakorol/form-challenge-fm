import React from 'react'
import '../css/form.css'
import {initialForm} from './initialForm'
import useForm from '../hook/useForm'
import img from'../images/icon-error.svg'

const validationsForm = (form) => {
  let errors ={}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


    //validations:

    if(!form.name.trim()){
      errors.name = 'Name cannot be empty'
          }else if(!regexName.test(form.name.trim())){
              errors.name = 'Name  only accepts letters and spaces'
  }

  if(!form.lastname.trim()){
    errors.lastname = 'Last Name cannot be empty'
        }else if(!regexName.test(form.lastname.trim())){
          errors.lastname = 'Last Name only accepts letters and spaces'
}
    if(!form.email.trim()){
       errors.email = 'Looks like this is not an email'
        }else if(!regexEmail.test(form.email.trim())){
          errors.email = 'Write a valid format email'
            }

if(!form.password){
  errors.password = 'Password cannot be empty'
}else if(form.password.length <= 5){
  errors.password='Minimum 6 characters'
}
return errors;
}
/* formulario */


const Form = () => {
  const {form,errors,handleBlur,handleChange,handleSubmit} = useForm(initialForm,validationsForm)

  return (
    <div className='container'>

  <button className='btn-top'>
      <b>Try it free 7 days</b> 
          then $20/mo.thereafter</button>

  <section className='section-der'>
    <form action="" onSubmit={handleSubmit}>

    <input type="text" name='name' placeholder='Juan'autoComplete='off' onChange={handleChange}
    // eslint-disable-next-line no-mixed-operators
    onBlur={handleBlur} value={form.name} required className={errors.name && 'input'}/>
    
        {errors.name && <p className='error__message'>*{errors.name}</p>}
        {errors.name && <img src={img} alt="" className="error__img" />}

      <input type="text" name='lastname' placeholder='Perez' autoComplete='off' value={form.lastname} required onBlur={handleBlur} onChange={handleChange} className={errors.lastname && 'input'}/>

      {errors.lastname && <p className='error__message'>*{errors.lastname}</p>}
      {errors.lastname && <img src={img} alt="" className="error__img" />}

        <input type="email" placeholder='email@example.com' name='email' autoComplete='off' 
        value={form.email} required onBlur={handleBlur} onChange={handleChange} className={errors.email && 'input'} />

        {errors.email && <p className='error__message'>*{errors.email}</p>}
        {errors.email && <img src={img} alt="" className="error__img" />}

          <input type="password" name='password' placeholder='******' autoComplete='off' minLength={6} value={form.password} required onBlur={handleBlur} onChange={handleChange} className={errors.password && 'input'}/>

          {errors.password && <p className='error__message'>*{errors.password}</p>}
          {errors.password && <img src={img} alt="" className="error__img" />}
            <button type='submit' className='btn-end'>CLAIM YOUR FREE TRIAL</button>

                <p className='p-finish'>By clocking the button, you are agreeing to out  
                  <a href="/"> Terms and Services</a>
                     </p>

            </form>

              </section>
    </div>
  )

  }
export default Form