import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './App.module.css';

function App() {
  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = (a) => {
    console.log(a);
  }
  
  const checarCep = (a) => {
    const cep = a.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data =>{console.log(data);
      
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
    })
  }

  return (
    <main>
      <div className={styles.mainDiv}>
        <h2>API CEP</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formCep}>
          <label>
            CEP:
            <input type="text" {...register("cep")} onBlur={checarCep} />
          </label>
          <label>
            Rua:
            <input type="text" {...register("rua" )}/>
          </label>
          <label>
            Número:
            <input type="text" {...register("numeroCasa" )}/>
          </label>
          <label>
            Bairro:
            <input type="text" {...register("bairro" )}/>
          </label>
          <label>
            Cidade:
            <input type="text" {...register("cidade" )}/>
          </label>
          <label>
            Estado:
            <input type="text" {...register("uf" )}/>
          </label>
       </form>
       <button type="submit" onClick={handleSubmit(onSubmit)}>Enviar</button>
      </div>
    </main>
  )
}

export default App
