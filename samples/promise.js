const fetchData = () =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        data ="feched data"
        if(data){
            resolve(data)
        }else{
            reject('unable to fetch')
        }
      },2000)

    })
}

fetchData().then((response)=>{
   console.log(response)

}).catch(err=>{
    console.log(err)

})