const initialstate=0;

const changereducer=(state=initialstate,action)=>{

if(action.type=="number50"){
    return state+50;
}
else if(action.type=="number20"){
    return state+20;
}
else{
    return state;
}
}

export default changereducer;