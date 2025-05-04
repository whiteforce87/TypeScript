import CourseGoal from "./CourseGoal"
import {type CourseGoal as CGoal } from "../App"
import Infobox from "./Infobox"
import {ReactNode} from 'react'

type CourseGoalListProps = {
    goals:CGoal[];
    onDeleteGoal: (id : number) => void 
}

function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {


  if(goals.length === 0){
    return <Infobox mode="hint">You have no course yet.</Infobox>
  }

  let warningBox: ReactNode;

  if(goals.length >=4){
    warningBox = <Infobox mode="warning" severity='high'>
      You are collecting alot of goals to do!
    </Infobox>
  }

  return (
    <>
    {warningBox}
     <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
          <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
  </ul>
    </>
   
  )
}

export default CourseGoalList