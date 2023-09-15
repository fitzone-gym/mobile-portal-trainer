import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userType = {
    id: number | null
    first_name: string
    last_name: string
    image: string
    user_role:number|null
}

const initialState = {
    id: null,
    first_name: '',
    last_name: '',
    image: '',
    user_role: null

} as userType;


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) =>{
            state.id = action.payload.id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.image = action.payload.image;
            state.user_role = action.payload.user_role;
        },
        removeUser: (state) =>{
            state.id = null
            state.first_name = ''
            state.last_name = ''
            state.image = ''
            state.user_role= null
        },
        
    }
})



export  default userSlice.reducer
export const { setUser, removeUser }  = userSlice.actions;

