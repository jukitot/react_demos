import {useContext} from "react";
import {Context} from "../Hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context);
    return {
        isAuth: state.isAuth,
        me: state.me,
        setIsAuth:(value)=>setState(prev=>({...prev, isAuth:value})),
        setMe:(value)=>setState(prev=>({...prev, me:value}))
    }
}

export {useAppContext}