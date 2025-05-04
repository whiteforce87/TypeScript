//interface CourseGoalProps = {
//    title:string,
//    description: string
//}


//import {type PropsWithChildren,type ReactNode} from 'react'
//import {type FC, type PropsWithChildren} from 'react'
import {type PropsWithChildren} from 'react'



//interface CourseGoalProps{
//    title:string;
//    children: ReactNode
//}

type CourseGoalProps = PropsWithChildren<{
    id: number,
    title:string,
    onDelete: (id : number) => void 
}>

//export default function CourseGoal({title, description}:{title:string, description: string}){

/* const CourseGoal: FC<CourseGoalProps> = ({title,children}) =>{

    return( <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>DELETE</button>
        </article>)
}

export default CourseGoal;
 */


export default function CourseGoal({title,children, onDelete, id}:CourseGoalProps){

    return( <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>DELETE</button>
        </article>)
}