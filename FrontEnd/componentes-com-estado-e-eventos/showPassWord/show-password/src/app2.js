import React from "react";
import Input from "./App";

class App extends React.Component {
  funcaoNoPai = (estadoDoFilho) => {
    console.log('A função do pai acessa o estado: ', estadoDoFilho);
  };
  render() {
    return <Input funcao={this.funcaoNoPai} />
  }
}

export default App;

