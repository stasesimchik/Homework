function HashStorageFunc(){
  var that = {};

  that.addValue = function(key,value){
    that[key] = value;
  };

  that.getValue = function(key){
    if( key in that){
      return that[key];
    }else{
      return undefined;
    }
  };

  that.deleteValue = function(key){
    if(key in that){
      delete that[key];
      return true;
    }else{
      return false;
    }

  };

  that.getKeys = function(){
    return Object.keys(that);
  };
}

var drinkStorage = new HashStorageFunc();

var addInfo = document.querySelector('.addInfo');
addInfo.onclick = function(){
  var key = prompt('Введите название напитка');
  var value = {};
  value.alcohol = confirm('Напиток алкогольный?');
  value.recept = prompt('Введите рецепт напитка');

  return drinkStorage.addValue(key, value);
}
