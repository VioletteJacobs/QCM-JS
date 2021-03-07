let body = document.body
body.style.backgroundColor ="#DBB688"
body.style.color ="#A44D08"
body.style.fontSize ="20px"
// style
let titre = document.querySelector("h1")
titre.style.textAlign ="center"
// titre.style.border ="#A44D08 1px solid"
titre.style.padding ="15px"

let intro = document.querySelector("p")
intro.style.color ="white"

// #3422006
// #F2DED9
//  #DEA02C

let divPrincipale = document.querySelector(".qcm")

let questions = divPrincipale.querySelectorAll("div")
for (let i = 0; i < questions.length; i++) {
    questions[i].style.margin = "15px"
    questions[i].style.borderTop = "#F2DED9 1px solid"
    questions[i].style.paddingTop ="10px"
    
}
let spans = document.querySelectorAll("span")
for (let i = 0; i < spans.length; i++) {
    spans[i].style.padding ="10px"
    spans[i].style.color ="white"
    spans[i].style.fontSize ="25px"
    
}
let para = document.querySelectorAll("p")
for (let i = 0; i < para.length; i++) {
    para[i].style.color = "white"
    para[i].style.padding ="5px"
    para[i].style.fontSize ="20px"
    
}


let reponsesQ1 = questions[0].querySelectorAll("input")
let reponsesQ2 = questions[1].querySelectorAll("input")
let reponsesQ3 = questions[2].querySelectorAll("input")
let reponsesQ4 = questions[3].querySelectorAll("input")
let reponsesQ5 = questions[4].querySelectorAll("input")
let reponsesQ6 = questions[5].querySelectorAll("input")
let reponsesQ7 = questions[6].querySelectorAll("input")
let reponsesQ8 = questions[7].querySelectorAll("input")
let reponsesQ9 = questions[8].querySelectorAll("input")
let reponsesQ10 = questions[9].querySelectorAll("input")
let reponsesQ11 = questions[10].querySelectorAll("input")

let span1 = document.querySelector("#bonneReponseUn")
let span2 = document.querySelector("#bonneReponseDeux")
let span3 = document.querySelector("#bonneReponseTrois")
let span4 = document.querySelector("#bonneReponseQuatres")
let span5 = document.querySelector("#bonneReponseCinq")
let span6 = document.querySelector("#bonneReponseSix")
let span7 = document.querySelector("#bonneReponseSept")
let span8 = document.querySelector("#bonneReponseHuit")
let span9 = document.querySelector("#bonneReponseNeuf")
let span10 = document.querySelector("#bonneReponseDix")
let span11 = document.querySelector("#bonneReponseOnze")


let resultat = document.querySelector(".score")
let score = 0

let temporaire
let bouton = document.querySelector("button")
bouton.style.backgroundColor = "#DEA02C"
bouton.style.color = "white"
bouton.style.border ="none"
bouton.style.borderRadius = "35px"
bouton.style.padding ="10px"
bouton.style.margin = "20px"
bouton.style.fontSize ="15px"
console.log(questions);

bouton.addEventListener("click", function(){
    bouton.style.outline = "none"
    for (let i = 0; i < questions.length; i++) {

        switch (i) {
            case 0:
                if (reponsesQ1[1].checked) {
                    score += 3
                    resultat.innerHTML =`Tu as ${score} points`
                    span1.innerHTML ="Bien joué l'artiste"
                    span1.style.color ="white" 
                }else{
                    score -= 1
                    resultat.innerHTML =`Tu as ${score} points`
                    span1.innerHTML ="Oups.. La bonne réponse était: d'un océan à l'autre"
                    span1.style.color ="red"
                }
                break;

            case 1:
                if (reponsesQ2[0].checked) {
                    score += 3
                    resultat.innerHTML =`Tu as ${score} points`
                    span2.innerHTML ="bien joué"  
                }else{
                    score -= 1
                    resultat.innerHTML =`Tu as ${score} points`
                    span2.innerHTML ="Oups... La bonne réponsé était Le premier juillet fin de célébrer le jour de la confédération, c'est à dire la formation de la fédération canadienne" 
                    
                }

                break;
            case 2:
                if (reponsesQ3[0].checked) {
                    score += 3
                    resultat.innerHTML =`Tu as ${score} points`  
                }else{
                    score -= 1
                    resultat.innerHTML =`Tu as ${score} points` 
                    
                }
                break;
            case 3:
                if (reponsesQ4[1].checked) {
                    score += 3
                    resultat.innerHTML =`Tu as ${score} points`  
                }else{
                    score.value -= 1
                    resultat.innerHTML =`Tu as ${score} points` 
                    
                }
                break;
            case 4:
                if (reponsesQ5[2].checked) {
                    score+= 3
                    resultat.innerHTML =`Tu as ${score} points`  
                }else{
                    score -= 1
                    resultat.innerHTML =`Tu as ${score} points` 
                    
                }
                break;
                case 5:
                    if (reponsesQ6[2].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                case 6:
                    if (reponsesQ7[1].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                case 7:
                    if (reponsesQ8[1].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                case 8:
                    if (reponsesQ9[0].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                case 9:
                    if (reponsesQ10[1].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                case 10:
                    if (reponsesQ11[2].checked) {
                        score += 3
                        resultat.innerHTML =`Tu as ${score} points`  
                    }else{
                        score -= 1
                        resultat.innerHTML =`Tu as ${score} points` 
                        
                    }
                    break;
                
                        
            default:
                break;
        }
    }
})
