import {ComponentPropsWithoutRef} from 'react'

type InputProps = {
    label:string;
    id:string;
} & ComponentPropsWithoutRef<'input'>; 


function Input2({label, id, ...props}: InputProps) {
  return (<p>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props}/>
  </p>)
}

export default Input2