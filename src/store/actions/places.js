import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from './actionTypes'

{/* action creators*/} 

export const addPlace = (placeName,placeImage)=>{

    return {
        type:ADD_PLACE,
        placeName:placeName, // now these are the payloads (payloads are content that is transfered to reducers from the actions .Action recieves payloads from the component via a dispatch)
        placeImage:placeImage
    };
}

export const deletePlace =()=>{
    return {
        type:DELETE_PLACE,

    }
}


export const selectPlace = (key) =>{

    return {
        type:SELECT_PLACE,
        placeKey:key
    }
}


export const deselectPlace =()=>{
    return {
        type:DESELECT_PLACE
    }
}