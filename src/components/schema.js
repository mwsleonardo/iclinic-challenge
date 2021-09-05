import * as Yup from 'yup'


export default Yup.object().shape({
    nome: Yup.string().min(2).required("Campo obrigatório!"),   
    cpf: Yup.number().min(11).required("Campo obrigatório!"),
    email: Yup.string().email().required("Campo obrigatório!"),
    capital: Yup.number().min(6).required("Campo obrigatório!"),
    

    
});