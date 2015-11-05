'use strict';

/* Controllers */
var marsrobotControllers = angular.module('marsrobotControllers', []);

marsrobotControllers.controller('HomeCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.data = {
      mapSize : '0,0',
      robotsNum : 0,
      robotsData : [],
      results : []
    };

    var mapL = [];
    var sizeX = 0;
    var sizeY = 0;


    $scope.changeNumber = function(num){
      if(num>0){
        for(var i=0;i<num;i++){
          var robot = {
            id: i,
            initialization : '',
            commands : '',
            coordX : 0,
            coordY : 0,
            orientation : 'N',
            lost : false
          }
          $scope.data.robotsData.push(robot);
        }
        
      }else{
        $scope.data.robotsData = [];
      }
    }

    $scope.submitData = function(){
      var nor = $scope.data.robotsNum;
      if($scope.data.mapSize.indexOf(',')!=-1 && nor>0){
        sizeX = parseInt($scope.data.mapSize.split(',')[0]);
        sizeY = parseInt($scope.data.mapSize.split(',')[1]);
        
        mapL = [];
        
        for(var i=0; i<=sizeX; i++) {
            mapL[i] = new Array(sizeY);
        }
        
        for(var i=0;i<nor;i++){
          var mrobot = $scope.data.robotsData[i];
          mrobot.coordX = parseInt(mrobot.initialization.split(',')[0]);
          mrobot.coordY = parseInt(mrobot.initialization.split(',')[1].substr(0));
          mrobot.orientation = mrobot.initialization.split(',')[1].substr(1);
          
          if(mrobot.commands.length>0){
            moveRobot(mrobot);
          }else{
            alert("Missing robot commands.");
          }
          
          if(mrobot.lost){
            $scope.data.results.push("LOST");
          }else{
            $scope.data.results.push(mrobot.coordX+","+mrobot.coordY+mrobot.orientation);
          }
        }

      }else{
        alert('Validation Error. Please check your input.');
      }
      
    }

    function moveRobot(mrobot){
      var noc = mrobot.commands.length;
      var input = mrobot.commands;
      for(var i=0;i<noc;i++){
        if(input[i] === 'L'){
          mrobot = command.turnLeft(mrobot);
        }else if(input[i] === 'R'){
          mrobot = command.turnRight(mrobot);
        }else if(input[i] === 'F'){
          if(mapL[mrobot.coordX][mrobot.coordY] != null){
            if(mrobot.orientation != mapL[mrobot.coordX][mrobot.coordY]){
                mrobot = command.moveForward(mrobot, sizeX, sizeY);
            }
          }else{
            mrobot = command.moveForward(mrobot, sizeX, sizeY);
            if(mrobot.lost){
              mapL [mrobot.coordX][mrobot.coordY] = mrobot.orientation;
              break;
            }
          }
        }else{
          alert("Invalid Command.");
          break;
        }
        
      }
    }

    
  }]);

