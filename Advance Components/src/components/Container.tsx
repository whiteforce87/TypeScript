import {type ElementType, type ReactNode, ComponentPropsWithoutRef} from 'react'

//type ContainerProps = {
type ContainerProps<T extends ElementType> = {
    //as: ElementType,
    as?: T,
    children: ReactNode
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
const Component = as || 'div';

  return (
    <Component className='container' {...props}>
        {children}</Component>
    )
}

export default Container