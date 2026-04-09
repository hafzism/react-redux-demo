import {create} from "zustand"

export const useUser = create((set)=>({
    user: 0,
    increaseOneUser: ()=> set((state)=> ({user: state.user + 1}))
}))