const initialState = {
    message: 'Hello world'
}

export default function (state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case 'TEST':
            return {
                ...state,
                message: " New"
            }

        default:
            return state;
    }

}