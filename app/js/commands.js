var command = (function () {

  var checkLost = function (mrobot, sizeX, sizeY) {
    if(mrobot.orientation==='E'){
      if((mrobot.coordX+1) > sizeX){
        return true;
      }else{
        return false;
      }
    }else if(mrobot.orientation==='S'){
      if((mrobot.coordY-1) < 0){
        return true;
      }else{
        return false;
      }
    }else if(mrobot.orientation==='W'){
      if((mrobot.coordX-1) < 0){
        return true;
      }else{
        return false;
      }
    }else if(mrobot.orientation==='N'){
      if((mrobot.coordY+1) > sizeY){
        return true;
      }else{
        return false;
      }
    }else{
      return null;
    }
  }; //Private method
  
  return {
    turnRight: function (mrobot) {
      if(mrobot.orientation==='E'){
        mrobot.orientation = 'S';
        return mrobot;
      }else if(mrobot.orientation==='S'){
        mrobot.orientation = 'W';
        return mrobot;
      }else if(mrobot.orientation==='W'){
        mrobot.orientation = 'N';
        return mrobot;
      }else if(mrobot.orientation==='N'){
        mrobot.orientation = 'E';
        return mrobot;
      }else{
        return null;
      }
    },
    turnLeft: function (mrobot) {
      if(mrobot.orientation==='E'){
        mrobot.orientation = 'N';
        return mrobot;
      }else if(mrobot.orientation==='S'){
        mrobot.orientation = 'E';
        return mrobot;
      }else if(mrobot.orientation==='W'){
        mrobot.orientation = 'S';
        return mrobot;
      }else if(mrobot.orientation==='N'){
        mrobot.orientation = 'W';
        return mrobot;
      }else{
        return null;
      }
    },
    moveForward: function (mrobot, sizeX, sizeY) {
      if(checkLost(mrobot, sizeX, sizeY)){
        mrobot.lost = true;
      }else{
        if(mrobot.orientation==='E'){
          mrobot.coordX++;
        }else if(mrobot.orientation==='S'){
          mrobot.coordY--;
        }else if(mrobot.orientation==='W'){
          mrobot.coordX--;
        }else if(mrobot.orientation==='N'){
          mrobot.coordY++;
        }


      }
      return mrobot;
    }
    
  };

})();