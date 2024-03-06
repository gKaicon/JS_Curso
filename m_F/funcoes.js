//exemplo
function acao(params) {
    return
}
acao()

//par impar
function par_imp(n) {
    if (n%2==0) {
        return 'par'
    }
    else{
        return 'impar'
    }
}
let res = par_imp(5)
console.log(res)

//soma
function soma(n1=0, n2=0) {
    return n1+n2
}
console.log(soma(5))
console.log(soma(5,3))

//fatorial
function fatorial(n) {
    if (n==1) {
        return 1;
    }
    else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))