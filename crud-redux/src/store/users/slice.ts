import {createSlice} from '@reduxjs/toolkit'
import { PayloadAction } from '../../../node_modules/@reduxjs/toolkit/dist/createAction';

export type userId = String

export interface User{
    name:String;
    email:String;
    github:String
}

export interface UserWidthId extends User{
    id:userId;
}

const initialState : UserWidthId[]=[
    {
        id: "1",
        name: "Peter Doe",
        email: "carlos1999@gmail.com",
        github: "carlitos",
      },
      {
        id: "2",
        name: "Marcus Rashford",
        email: "rasf999@gmail.com",
        github: "rashford",
      },
      {
        id: "3",
        name: "Jack Doe",
        email: "jack1999@gmail.com",
        github: "JACK",
      },
      {
        id: "4",
        name: "Romeu Oriol",
        email: "oriol1999@gmail.com",
        github: "Ori",
      },
      {
        id: "5",
        name: "Leone",
        email: "messi1999@gmail.com",
        github: "Messi",
      },
]

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        deleteUserById:(state,action:PayloadAction<userId>)=>{
            const id = action.payload;
            return state.filter((user)=>user.id!==id)
        }
    },
})

export default usersSlice.reducer

export const {deleteUserById} = usersSlice.actions