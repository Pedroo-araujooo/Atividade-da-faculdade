function notas(N1, N2, frequencia) {
    const mediaFinal = (N1 + N2) / 2

    let situacao

    if(mediaFinal >= 7.0 && frequencia >= 75) {
        situacao = "Aprovado ✅"
    }else if(mediaFinal >= 5.0 && mediaFinal < 7.0 && frequencia >= 75) {
        situacao = "Recuperação ⚠️"
    }else{ 
        situacao = "Reprovado ❌"
    }
    
console.log(`Media: ${mediaFinal.toFixed(1)} | frequÊncia: ${frequencia}% | Situação ${situacao} `)
 return situacao
}


notas(9, 10, 80)
notas(5, 7, 70)
notas(4, 5, 80)
notas(9, 10, 60)