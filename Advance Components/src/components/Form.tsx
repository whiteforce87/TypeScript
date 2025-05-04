import {type FormEvent, type ComponentPropsWithoutRef, useImperativeHandle, forwardRef } from "react"
import { useRef } from "react";

export type FormHandle = {
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value:unknown) => void 
}


const Form = forwardRef<FormHandle, FormProps>(function Form({
    onSave, children, ...otherProps},
    ref) {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () =>{
        return{
            clear(){
                console.log('CLEARING')
                form.current?.reset()
            }
        }
    });

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        //form.current?.reset();
    }


  return (
    <form {...otherProps} onSubmit={handleSubmit} ref={form}>
        {children}
    </form>
    )
}
)

export default Form