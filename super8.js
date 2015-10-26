function Super8(){
  this.film = false;
  this.frames = 0;
  this.filmSpeed = 18;
  this.filming = false
}

Super8.prototype.addFilm = function(){
  this.film = true
  this.frames += 3600
}

Super8.prototype.normalSpeed = function(){
  this.filmSpeed = 18;

}

Super8.prototype.slowMotion = function(){
  this.filmSpeed = 36;
}

Super8.prototype.fastMotion = function(){
  this.filmSpeed = 9;

}

Super8.prototype.run = function(){
  if(!this.film) return 'there is no film in the camera'
  this.filming = true
  var that = this
  var filming = setInterval(function(){
    that.frames -= that.filmSpeed
    console.log(that.frames)
    if(that.frames <= 0 || that.filming == false){
      clearInterval(filming)
      return 'there is no film in the camera'
    }
  },100);
}


Super8.prototype.stopFilming = function(){
  this.filming = false
}

module.exports = Super8