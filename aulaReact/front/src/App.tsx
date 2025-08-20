
import Entrada from "./components/entrada"
import Msg from "./components/msg"
import Saudacao from "./components/saudacao"


function App() {

  return (
    <>
      <Msg />
      <Msg />
      <h1>Boa Noite!</h1>
      <Saudacao nome={"Vinicius de Oliveira"} idade={21} />
      <Saudacao nome={"Dom Peso I"} idade={18} />
      <Entrada />
    </>
  )
}

export default App
