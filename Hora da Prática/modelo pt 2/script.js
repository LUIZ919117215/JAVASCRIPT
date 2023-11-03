
 
function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.getElementById('res')
   let img = document.createElement('img')
   img.setAttribute('id', 'foto')

   if (fano.legth == 0 || fano.value >= ano) {
      window.alert('[ERRO] verifique os dados e tente novamente!')
   } else {
      let fsex = document.getElementsByName('radiosex')
      let idade =  ano - Number(fano.value)
      let genero = ''   
      
      if (fsex[0].checked) {
         genero = 'Homen'
         if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'menino.jpeg')
         } else if (idade <= 25) {
            //Jovem
            img.setAttribute('src', 'garoto.jpeg')
         } else if (idade < 50) {
            //Adulto
            img.setAttribute('src','homen.jpeg')
         } else if (idade >= 50) {
            //Idoso
            img.setAttribute('src', 'vei.jpeg')
         }
      } else if (fsex[1].checked) {
         genero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'menina.jpeg')
         } else if (idade <= 25) {
            //Jovem
            img.setAttribute('src', 'garota.jpeg')
         } else if (idade < 50) {
            //Adulta
            img.setAttribute('src','mulheres.jpeg')
         } else if (idade >= 50) {
            //Idosa
            img.setAttribute('src', 'veia.jpeg')
         }
      }
      res.style.textAlign = 'center'
      img.style.borderRadius = '50%'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
      res.appendChild(img)
      
   }
}