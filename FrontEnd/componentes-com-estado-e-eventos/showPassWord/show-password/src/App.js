import React from "react";

class PasswordInput extends React.Component {
  constructor() {
    super();

    this.state = {
      inputType: 'password' /*Agora só precisamos alterar esse estado para mudar o comportamento*/
    };
    /*this.toggleShowPassword = this.toggleShowPassword.bind(this); não precisa disso se usar arrow function */
  }

  toggleShowPassword = () => {
    const {inputType} = this.state;
    this.setState({
      inputType: inputType === 'password' ? 'text' : 'password'
    });
  }  

  render () {
    return (
      <>
      <label htmlFor="password">
        senha:
        <input type={this.state.inputType} id='password' name='password' />
      </label>
      <button onClick={this.toggleShowPassword} >Mostrar</button> {/* Em react os eventos são escutados na própria tag */}
      </>
    )
  }
}

/*
a definição da função toggleShowPassword está dentro da classe do componente,
então é necessário buscar a definição da função dentro da classe,
e não dentro do render, para isso usa o this.toggleShowPassword
*/

/* 
Para mudar a senha ao clicar em Mostrar, 
é preciso alterar o type em input de password para text.
é necessário armazenar alguma informação, que vai definir o comportamento do 
objeto. 
ESTADO: É algo interno do componente...
A primeira coisa a se fazer para passar a ter estado é 
criar um estado no constructor. O constructor é uma função chamada quando o 
componente inicia. Nessa função é definido o estado inicial. É definido com 
this.state
obs.: qdo escrevemos função extends React.Component, eu estou dizendo que
eu quero que esse componente que eu estou criando traga tudo que tem dentro do
react.component, isso faz com que o a funçao criada tenha todos os componentes de 
react.component, incluindo (const props, const state, function render(), 
functio constructor().
 o super() dentro do componente, chama a constructor do react.component, isso é
 importante para garantir um bom funcionamento do nosso componente.

setState: é a função que modifica o valor do estado, essa função 
está dentro da classe, para isso usamos this.setState() ela recebe dois parametro
o primeiro é o novo estado que queremos alterar. Esse novo estado é um objeto, sempre
um objeto, pq nosso estado é um objeto.
o valor passado é a chave do objeto que queremos alterar. nesse caso a chave inputType
e o valor que queremos alterar é para text, mas podemos fazer uma condicional para ir e voltar de text para password,
é necessário tambem usar um bind, sem isso não consegue acessar o setState do this,
pq this dentro dessa função ainda não é da classe onde estamos trabalhando. 
para poder referenciar faz isso no constructor, usando o seguinte código: 

this.toggleShowPassword = this.toggleShowPassword.bind(this);

se usar arrow funciton no toggleShowPassword, não é necessário usar o bind

*/
 
export default PasswordInput;
