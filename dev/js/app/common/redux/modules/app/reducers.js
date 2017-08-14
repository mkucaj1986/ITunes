define([
    './constants'
], function(constants) {
    return {
        loading: function(state, action) {
            if (state === undefined) state = { isLoading: true };
            switch (action.type) {
                case constants.actionTypes.LOADING:
                    return action.payload;

                default:
                    return state;
            }
        }
    };
});
