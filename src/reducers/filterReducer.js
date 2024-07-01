// const anecdotes = useSelector(state => state.anecdotes)

const filterReducer = (state = '', action) => { // the default state of the FILTER is '', that is, don't filter anything
    // console.log("ENTERING filterReducer:")
    console.log("ENTERING filterReducer with state:", state, "and action:", action);
    const filter = action.payload
    switch (action.type) {
      case 'SET_FILTER': {                      // jos hakukentässä on muuta kuin ''. MUISTA AALTOSULUT
        console.log("   SET_FILTER")
        if (filter === '') {
            console.log("           strToSearch === '', therefore returning state as-is")
            return filter
        } else {
            return filter
        }
      }
      default:
        return state
    }
  }



export const filterChange = filter => ({ type: 'SET_FILTER', payload: filter})

export default filterReducer