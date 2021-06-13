function formatTime(date){
    date=new Date(date);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export {formatTime}