var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');


//max function test
describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })

  //start with a describe
  //THE TDD: test-driven development
  describe('#min', function() {
    it('should find the smallest item in the array', function(){
      //could do this to make sure it is hooked into the system, everythings working
      //failing tests to make sure it's working
      //expect(true).to.equal(false);
      expect(Iterators.min([7, 3, 21])).to.equal(3);
    }); 
  })

})