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

//se arranjo p!=n, se permutacao p==n
function arranjoPermutacaoSimples(n, p) {
    if (p==0) {
        return 1;
    }
    else{
        return n * arranjoPermutacaoSimples(n-1, p-1)
    }
}
//arranjo
console.log(arranjoPermutacaoSimples(5, 2))//20
//permutacao
console.log(arranjoPermutacaoSimples(5, 5))//120