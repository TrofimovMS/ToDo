// Ф-ия принимает state и action, 
// action объект, который имеет type 
const reducer = (state = 15, action) =>{

    switch(action.type){
        case 'RND':
            return state + action.payload;

        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        // При получении неизвестного типа мы не трогаем state
        default:
            return state;
    }
};

export default reducer;