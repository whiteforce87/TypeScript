import { useTimerContext } from "../store/timers-contex";
import Timer from "./Timer.tsx"


export default function Timers() {

 const {timers} = useTimerContext();
 
 return <ul>{timers.map(timer => (
  <li key={timer.name}>
      <Timer {...timer}></Timer>
  </li>
 )
 )
}</ul>;
}
