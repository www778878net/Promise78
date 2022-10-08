export default function Promise78(promisefun){ 
 	return new Promise((resolveover)=>{ 
		new Promise((resolve,reject)=>{
			promisefun(resolve,reject) 
		})
		.then(data=>resolveover([null,data]))
		.catch(err=>resolveover([err])) 
 	})
 }