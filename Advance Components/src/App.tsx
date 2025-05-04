import Input from "./components/Input";
import Input2 from "./components/Input2";
import Button from "./components/Button";
import Container from "./components/Container.tsx";
import { useRef } from "react";
import Form, {type FormHandle} from "./components/Form.tsx";

function App() {

 const input = useRef<HTMLInputElement>(null);

 const customForm = useRef<FormHandle>(null);

function handleSave(data: unknown){
  //const extractedData = data as {name:string, age:string} ; for extra secure below code is ok instead of this
 if (
    !data ||
    typeof data !== 'object' ||
    !('name' in data) ||
    !('age' in data)
  ) {
      return;
  } 
  //console.log(extractedData);
  customForm.current?.clear();
}

  return <main>

    <Input2 id="name" label="Your name" type="text"></Input2>
    <Input id="name" label="Your name" type="text" ref={input}></Input>
    <Input2 id="age" label="Your age" type="number"></Input2>
    <p>
    <Button abc="abc" target="">A Button</Button>
    </p>
    <p>
    <Button href = 'https://google.com'>A Link</Button>
    </p>

    <Container as={Button} onClick={() =>{}} >B button</Container>

    <Form onSave={handleSave} ref={customForm}>
      <Input type="text" label="Name" id="name"></Input>
      <Input type="number" label="Age" id="age"></Input>
      <p>
        <Button>Save</Button>
      </p>
    </Form>


  </main>
}

export default App;
