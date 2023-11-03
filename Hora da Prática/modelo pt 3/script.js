let pevent = window.document.getElementById('a')
pevent.addEventListener('click', contar)

function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.getElementsByName('fim')[0]
    let pass = document.getElementById('txtp')
    let res  = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = `Contando: `

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0){
            window.alert('Passo invalido! Consinderando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente 
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrecente
            for(let c =i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}