import {  useTimerContext } from '../store/timers-contex.tsx';
import Button from './UI/Button.tsx';


export default function Header() {

  const timersCtx = useTimerContext();


  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers}>{timersCtx.isRunning ? 'Stop ' : 'Start '} Timers</Button>
    </header>
  );
}
