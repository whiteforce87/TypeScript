import {type FormEvent, type ComponentPropsWithoutRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value:unknown) => void 
}


function Form(props: FormProps) {

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        props.onSave(data);
    }


  return (
    <form {...props} onSubmit={handleSubmit}>
        {props.children}
    </form>
    )
}

export default Form