// const url =`https://randomuser.me/api/`
// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data))
const handleSearch=()=>{
     const inputValue = document.getElementById('input_value');
     const inputItem =inputValue.value;

 if(inputItem){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputItem}`)
    .then(response=>response.json())
    .then(data =>{
        // console.log(data)
        if(data.title ==='No Definitions Found'){
            alert('sorry you have bad luck')
        }else{
            displayResult(data)
        }
   })
  }else{
    alert('sorry you have to valid field')
  }

      
     inputValue.value=" ";
}
const displayResult =(data)=>{
    console.log (data)
    const parent = document.getElementById('diction-container')
    // data[0].meanings.forEach(item=>{
    //     const container = document.createElement("div")
    //      const synonyms = document.createElement('h1')
    //      synonyms.innerText=item.partOfSpeech
    //      container.appendChild( synonyms)
    //      parent.appendChild(container)

    // })
//    synonyms

   data[0].meanings.forEach(item=>{
   
    const container = document.createElement("div")
        container.innerHTML=`<h2> PartsOfSpeech: ${item.partOfSpeech?item.partOfSpeech:"Not available  "}</h2>
             <h2>Synonyms:  ${item.synonyms[0]?item.synonyms:" Not available "}</h2>
             <h2> Antonyms: ${item.antonyms[0]?item.antonyms:"Not available  "}</h2>
             <h2> Definitions: ${item.definitions[0].definition?item.definitions[0].definition:"Not available  "}</h2>`

 
    parent.appendChild(container)
   })


    // parts OF speech.....

    const meanings = data[0].meanings[0].partOfSpeech?data[0].meanings[0].partOfSpeech:'It is not found' 
    const container = document.createElement("div")
         const synonyms = document.createElement('h1')
         synonyms.innerText= `partsOfSpeech: ${meanings}`
         container.appendChild( synonyms)
         parent.appendChild(container)

   data[0].phonetics.forEach(element => {
      const audio = document.createElement('audio')
      audio.src = element.audio

      const button = document.createElement('button');
      button.innerText='play'
      button.onclick =()=>{
        audio.play();
      };

      const container = document.createElement("div")
      container.appendChild(button)
      container.appendChild(audio)
      
       
      parent.appendChild(container)
   });

}