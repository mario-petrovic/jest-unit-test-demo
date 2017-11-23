export const ActionTypes = {
    SET_NAME: 'SET_NAME',
    GET_NAME: 'GET_NAME'
};


export /* istanbul ignore next */ function setName(dispatch, name) {
    /* istanbul ignore next */
    dispatch({
        type: ActionTypes.SET_NAME,
        name
    });
}


export /* istanbul ignore next */ function getName() {
    /* istanbul ignore next */
    return{
        type: ActionTypes.GET_NAME,
        name
    };
}