define([
    './constants'
], function (constants) {
    return {
        loading: function (isLoading) {
            return {
                type: constants.actionTypes.LOADING,
                payload: {
                    isLoading: isLoading
                }
            };
        }
    };
});