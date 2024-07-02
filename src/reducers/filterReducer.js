import { createSlice } from "@reduxjs/toolkit" // 6b 2nd half! current is for console.logging from the anecdoteSlice in human-readable format
// const anecdotes = useSelector(state => state.anecdotes)

const initialState = ''

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        filterChange(state, action) {
            const filter = action.payload
            return filter
        }
    }
})
export const { filterChange } = filterSlice.actions
export default filterSlice.reducer

// OLD (6b 1st half)
// const filterReducer = (state = '', action) => { // the default state of the FILTER is '', that is, don't filter anything. // OLD 6b 1st half before redux toolkit
//     // console.log("ENTERING filterReducer:")
//     console.log("ENTERING filterReducer with state:", state, "and action:", action);
//     const filter = action.payload
//     switch (action.type) {
//       case 'SET_FILTER': {                      // jos hakukentässä on muuta kuin ''. MUISTA AALTOSULUT
//         console.log("   SET_FILTER")
//         if (filter === '') {
//             console.log("           strToSearch === '', therefore returning state as-is")
//             return filter
//         } else {
//             return filter
//         }
//       }
//       default:
//         return state
//     }
//   }


// export const filterChange = filter => ({ type: 'SET_FILTER', payload: filter}) // OLD 6b 1st half before redux toolkit

// export default filterReducer // OLD 6b 1st half before redux toolkit