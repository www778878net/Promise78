<h1 align="center">Promise78</h1>
<div align="center">

[English](./README.en.md) | 简体中文

「Promise78」是一个开源的改造promise函数，避免了try问题。

[![Release Version](https://img.shields.io/github/v/release/www778878net/Promise78?style=flat-square)](https://github.com/www778878net/Promise78/releases/latest)
[![GitHub license](https://img.shields.io/github/license/www778878net/Promise78?style=flat-square)](LICENSE)
[![QQ群](https://img.shields.io/badge/QQ群-323397913-blue.svg?style=flat-square&color=12b7f5&logo=qq)](https://qm.qq.com/cgi-bin/qm/qr?k=it9gUUVdBEDWiTOH21NsoRHAbE9IAzAO&jump_from=webapi&authKey=KQwSXEPwpAlzAFvanFURm0Foec9G9Dak0DmThWCexhqUFbWzlGjAFC7t0jrjdKdL)

</div>
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
