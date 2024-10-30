// For Global installation of Mocha:
// npm install mocha -g

// For Project installation of Mocha:
// npm install mocha -- save-dev

// For installation of Chai:
// npm install chai -- save-dev


/**
"scripts": {
    "dev": "nodemon bin/www",
    "test": "NODE_ENV=test ./node_modules/.bin/mocha node ./tests/index.js --timeout=9200000 --exit"
  },


  Import assertion styles as local variables
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

import { expect, use } from 'chai';  // Creates local variables `expect` and `use`; useful for plugin use
Usage with Mocha


assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);


foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

 

 */


const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
  it('1. The side length of the Cube', function(done) {
    let c1 = new Cube(2);
    expect(c1.getSideLength()).to.equal(2);
    done();
  });

  it('2. The surface area of the Cube', function(done) {
  let c2 = new Cube(5);
  expect(c2.getSurfaceArea()).to.equal(50); //Updated to fail
  done();
  });

  it('3. The volume of the Cube', function(done) {
    let c3 = new Cube(7);
    expect(c3.getVolume()).to.equal(100); //Updated to fail
    done();
  });

});