import { useState } from "react";
import swal from 'sweetalert';

export default function useForm(initialForm,validateForm) {

const [form,setForm] = useState(initialForm)
const [errors,setErrors] = useState({})
//const [loading,setLoading] = useState(false)
//const [response,setResponse] = useState(null)

const handleChange = (e) => {
    //DESTRUCTURACION DE name y value:

    const {name,value} = e.target;
    setForm({  
        ...form, //copia el valor actual del form +
        [name]: value //actualiza el valor del form.
    })
}
//validaciones: Al perder el foco de la pagina, actualizar estado + capta si tiene algun error
const handleBlur = (e) => {
handleChange(e);
setErrors(validateForm(form)) //capta el error.
}

const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(form))
setForm(initialForm)
if(errors){
    return swal("Muchas gracias por contactarnos", "Revisa tu correo", "success");
}
}

return {
    form,errors,handleBlur,handleChange,handleSubmit
}
}
