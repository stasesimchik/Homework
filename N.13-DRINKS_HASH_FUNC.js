function HashStorageFunc(){
  var self = this;

  self.addValue(key,value){
    self[key] = value;
  };

  self.getValue(key){
    if( key in self){
      return self[key];
    }else{
      return undefined;
    }
  };

  self.deleteValue(key){
    if(key in self){
      delete self[key];
      return true;
    }else{
      return false;
    }

  };

  self.getKeys(){
    return Object.keys(self);
  };
}
