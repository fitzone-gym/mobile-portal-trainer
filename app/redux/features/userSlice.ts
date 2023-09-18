import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userType = {
    user_id: number | null
    first_name: string
    last_name: string
    image: string
    role_id:number|null
}

const initialState = {
    user_id: null,
    first_name: '',
    last_name: '',
    image: '',
    role_id: null

} as userType;


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) =>{
            state.user_id = action.payload.user_id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.image = action.payload.image;
            state.role_id = action.payload.role_id;
        },
        removeUser: (state) =>{
            state.user_id = null
            state.first_name = ''
            state.last_name = ''
            state.image = ''
            state.role_id= null
        },
        
    }
})



export  default userSlice.reducer
export const { setUser, removeUser }  = userSlice.actions;

