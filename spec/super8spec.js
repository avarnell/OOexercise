var Super8 = require('../super8.js')

describe('super8', function(){
  var cammy = new Super8()

  it('starts out empty', function(){
    expect(cammy.film).toEqual(false)
  })

  it('has a method to add film', function(){
    cammy.addFilm()
    expect(cammy.film).toEqual(true)
  })

  it('decreases based on the film speed', function(){
    cammy.run()
    setTimeout(function(){
        cammy.stopFilming()
        expect(cammy.frames).toEqual(3492)
    },600) 
  })
})

describe('slow-mo', function(){
  var cammy = new Super8()
  it('can change the fp interval based on filming speed',function(){
    cammy.slowMotion()
    setTimeout(function(){
        cammy.stopFilming()
        expect(cammy.frames).toEqual(3384)
    },600)
  })
})

describe('fast-mo', function(){
  var cammy = new Super8()
  it('can change the fp interval based on filming speed', function(){
    
    cammy.fastMotion()
    setTimeout(function(){
        cammy.stopFilming()
        expect(cammy.frames).toEqual(3546)
    },600)

  })
})