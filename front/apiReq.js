
let caixa = document.querySelector(".cx");
(async()=>{
    try{ await fetch("http://localhost:3003/games",
    {method: 'GET', header: {'Content-Type':'application/json'}})
        .then((dt)=>{
            if(!dt.ok){ throw new Error('Deu ruim '+dt.statusText)}
                return dt.json()})
        .then((dta)=> console.log(dta))
    }catch(error){console.log(`Deu Ruim ${error}`)}
})()
console.log("bora")