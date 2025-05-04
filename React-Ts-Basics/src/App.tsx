import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import myGoals from "./assets/myGoals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string, summary:string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title:goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))

  }

  return (
    <main>
      <Header image={{ src: myGoals, alt: "List of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}></NewGoal>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}

export default App;
