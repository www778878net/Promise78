## 简介 introduction

promise封装 
1. 不要try catch
2. no try catch
3. 返回[err,back] 
4. reback [err,back]
5. if(err)告警然后返回即可;然后使用back值
6. if(err)warn and return  ;get back 

## 适用端 apply

**use for `js ts` project**

|端|支持|
|---|---|
|Web|√|
|微信小程序|√|
|iOS|√|
|Android|√|

## 依赖 rely on

nothing



## 属性 props

nothing

## 方法 method

nothing

## DEMO 

```js
...
//const clone78 = require('../dist/index').default;
import Promise78 from "@www778878net/promise78"
function test() {
    return new Promise78((resolve, reject) => {
        setTimeout(() => {
            reject("testerr")
        }, 1000)
    })
}
let [err, back] = await test(); 
if(err){
    console.log(err)
    return
}

...
```

## OTHER
https://github.com/www778878net/promise78.git
you can see test/test.js
