function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // var step = Math.ceil((target-obj.offsetLeft)/10);
        var step = (target-obj.offsetLeft)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            //回调函数写道定时器结束后边
            if(callback){
                callback();
            }
        }
        else{
            obj.style.left = obj.offsetLeft+step+'px';
        }
    },1000/24) 
}