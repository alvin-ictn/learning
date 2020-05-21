var myNodes = document.querySelectorAll(".codebook")
elementlist = ["h1","h2","h3","h4"]
var i = 0;
const SetElementColor = (e) => {
  let newElement = ""
  e.innerHTML.split("<br>").forEach(d=>{
    let replace_element = d
    if(d.includes != "comment"){
      
      elementlist.forEach(c=>{
        replace_element = replace_element.replace(c,`<a style='progate-element-color ${c}'>${c}</a>`)
      })
    }else{
      replace_element
    }
    newElement += `${replace_element}<br>`
    console.log(replace_element)
  })
  return newElement
}

myNodes.forEach(data=>{
  myNodes[i].innerHTML = `${SetElementColor(data)}`
  i+=1
})

