'use strict';
const Promise78 = require('../dist/index').default;
const expect = require('chai').expect;

describe("resolve  reject test" , () => {
    it('resolve ', async() => {
        function test() {
            return new Promise78((resolve, reject) => {
                setTimeout(() => { 
                    resolve("testback")
                }, 1000)
            })
        }
        let [err, back] = await test();
        
        expect(err).to.be.null;
       
        expect(back).to.equal("testback");
        //done(); //  
    });

    it('reject ', async () => {
        function test() {
            return new Promise78((resolve, reject) => {
                setTimeout(() => {
                    reject("testerr")
                }, 1000)
            })
        }
        let [err, back] = await test(); 
        expect(err).to.equal("testerr");
        expect(back).to.be.undefined;
    });
   
});

 