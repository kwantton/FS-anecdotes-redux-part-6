import { filterChange } from '../reducers/filterReducer'        // see redux-notes app VisibilityFilter.jsx
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {                                // props can be placed here
    const dispatch = useDispatch()

    const search = event => {
        const teksti = event.currentTarget.value    // works. This was in App.jsx, now moved here
        console.log(`Visibility filter: teksti: '${teksti}'`)
        dispatch(filterChange(teksti))              // from '../reducers/filterReducer'. In redux-notes, this dispatch(filterChange("ALL"))... etc was done directly below in the onChange attribute
      }

    const style = {
        marginBottom:10
    }

    return (
    <div style={style}>
        filter {" "} {/** " " is for some additional whitespace */}
        <input name='filter' onChange={search}></input>
    </div>)
    
}

export default VisibilityFilter