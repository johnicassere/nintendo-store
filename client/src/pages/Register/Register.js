import { useState } from "react"
import axios from 'axios';

export default function Register() {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    
  }

  return(
    <div>
      <h2>Criar uma conta Nintendo</h2>
      <form onSubmit={handleSubmit}>

        <label>Nome</label>
        <input type='text' required onChange={event => setName(event.target.value)} /> <br />

        <label>Nickname</label>
        <input type='text' required onChange={event => setNickname(event.target.value)}/> <br />

        <label>Email</label>
        <input type='email' required onChange={event => setEmail(event.target.value)}/> <br />

        <label>Data de Nascimento</label>
        <input type='text' required onChange={event => setBirthdate(event.target.value)} /> <br />

        <label>Imagem de perfil</label>
        <input type='text' required onChange={event => setImageUrl(event.target.value)} /> <br />

        <label>Senha</label>
        <input type='password' required onChange={event => setPassword(event.target.value)} /> <br />

        <label>Confirmação da Senha</label>
        <input type='password' required onChange={event => setPasswordConfirmation(event.target.value)} /> <br />

        <input type='checkbox' required/>
        <label>Eu concordo com os termos</label> <br />

        <input type='submit' value='Continuar' />
      </form>
    </div>
  )
}