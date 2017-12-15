function notify (message){
  alert(message);
}

function add( a, b){
    return a+b+10;
}
//export {notify as notify,add as add};
export default {
    notify:notify,
    add:add
};
