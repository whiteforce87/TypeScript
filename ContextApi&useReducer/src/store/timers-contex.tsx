import {type ReactNode, createContext, useContext, useReducer} from 'react'

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer []
}

const initialState : TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

 const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimerContext(){

    const timersCtx = useContext(TimersContext)

    if(timersCtx === null){
        throw new Error('TimerContext is null!')
    }

    return timersCtx;
}

type TimerContextProviderProps = {
    children: ReactNode
}


type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState{

        if(action.type === 'START_TIMERS'){
            return {
                ...state,
                isRunning: true
            }
        }
        if(action.type === 'STOP_TIMERS'){
            return {
                ...state,
                isRunning: false
            }
        }
        if(action.type === 'ADD_TIMER'){
            return {
                ...state,
                timers:[
                    ...state.timers,
                    {
                        name: action.payload.name,
                        duration: action.payload.duration
                    }
                ]
            }
        }
        return state;
}

export default function TimerContextProvider({children}: TimerContextProviderProps){

    const [timerState, dispatch] =  useReducer(timersReducer, initialState)

    const ctx: TimersContextValue={
        timers: timerState.timers,
        isRunning: timerState.isRunning,

        addTimer(timerData){
            dispatch({type:'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({type:'START_TIMERS'})
        },
        stopTimers() {
            dispatch({type:'STOP_TIMERS'})
        },

    }
    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}
