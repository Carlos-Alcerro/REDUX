import { useAppDispatch} from "./stores";
import { deleteUserById, userId } from "../store/users/slice";

export const useUserActtions=()=>{
    const dispatch=useAppDispatch()
    
    const removeUserId=(id:userId)=>{
        dispatch(deleteUserById(id))
    }

    return{removeUserId}
}