import {useRef, type FormEvent } from "react";

type NewGoalProps ={
    onAddGoal: (goal:string,summary:string) => void
}

function NewGoal({onAddGoal} : NewGoalProps) {

   const goal =  useRef<HTMLInputElement>(null);
   const summary =  useRef<HTMLInputElement>(null);



    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        //new FormData(event.currentTarget)
        const enteredGoal= goal.current!.value;
        const enteredSummary = summary.current!.value;
        onAddGoal(enteredGoal,enteredSummary)

        event.currentTarget.reset();
    }

  return (
<form onSubmit={handleSubmit}>
    <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}></input>
    </p>
    <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}></input>
    </p>
    <p>
        <button>Add Goal</button>
    </p>
</form> )
}

export default NewGoal