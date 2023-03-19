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
    const parent = document.getElementById('diction-container')
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