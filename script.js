


const informationId = document.getElementById("information")
const searchId = document.getElementById("search")


const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/good"

searchId.addEventListener("click" ,function(){
    seacr_api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+searchId.value
    getWordInfo(seacr_api_url)
})

















// getWordInfo(api_url)
let data = []
let meaningArr = []
let definitionArr = []
let word, phonetic ;
let n = 1;



async function getWordInfo(api_url){


    let response  = await fetch(api_url)
    let data = await response.json()


    if(response.status >= 200 && response.status < 300){

        definitionArr = data[0].meanings[0].definitions
        meaningArr = data[0].meanings
        word = data[0].word
        phonetic = data[0].phonetic
        showMeaning()

    }
    else{
        informationId.innerHTML =""
        console.log(response.status, response.statusText)
        informationId.innerHTML = "<h3>No result found <br> please enter correct word</h3>"
    }

   
    




   


}


function showMeaning(){

    informationId.innerHTML = ""


    let div0 = document.createElement("div")
    div0.className = "key"
    let text0 = document.createTextNode("Word : ")

    let div_wr = document.createElement("div")
    div_wr.className = "value"
    div_wr.innerHTML = word
    
    div0.appendChild(text0)
    

    informationId.appendChild(div0)
    informationId.appendChild(div_wr)


    let div1 = document.createElement("div")
    div1.className = "key"
    let text1 = document.createTextNode("Phonetics : ")

    let div_ph = document.createElement("div")
    div_ph.className = "value"
    div_ph.innerHTML = phonetic
    
    div1.appendChild(text1)
    

    informationId.appendChild(div1)
    informationId.appendChild(div_ph)



    meaningArr.forEach(item => {


        let div1 = document.createElement("div")
        div1.className = "key"
        let text1 = document.createTextNode("Part of speech : ")

        let div2 = document.createElement("div")
        div2.className = "value"
        div2.innerHTML = item.partOfSpeech

        div1.appendChild(text1)
        

        informationId.appendChild(div1)
        informationId.appendChild(div2)


        definitionArr = item.definitions

        definitionArr.forEach(x=>{

            let div3 = document.createElement("div")
        div3.className="key"
        let text3= document.createTextNode(`Example ${n} : `)

        let div4 = document.createElement("div")
        div4.className = "value"
        div4.innerHTML = x.definition

        div3.appendChild(text3)


        informationId.appendChild(div3)
        informationId.appendChild(div4)

        n=n+1
            
        })
        n=1
    });

   
    
    let div5 = document.createElement("div")
    div5.className = "key"
    let text5 = document.createTextNode("Antonyms : ")

    div5.appendChild(text5)

    let div6 = document.createElement("div")
    div6.className = "value"
    div6.innerHTML = meaningArr[0].antonyms

    informationId.appendChild(div5)
    informationId.appendChild(div6)
    

    let div7 = document.createElement("div")
    div7.className = "key"
    let text6 = document.createTextNode("synonyms : ")

    div7.appendChild(text6)

    let div8 = document.createElement("div")
    div8.className = "value"
    div8.innerHTML = meaningArr[0].synonyms

    informationId.appendChild(div7)
    informationId.appendChild(div8)
    

    

};