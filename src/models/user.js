export default {
    namespace: 'user',
    state:  
    {
        islogin:false,
        username:'',
        token:'',
        

    },
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };