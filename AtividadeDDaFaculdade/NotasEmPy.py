def verificar_situacao(n1, n2, frequencia):
    media = (n1 + n2) / 2

    if media >= 7.0 and frequencia >= 75:
        situacao = "Aprovado ✅"
    elif media >= 5.0 and media < 7.0 and frequencia >= 75:
        situacao = "Recuperação ⚠️"
    else:
        situacao = "Reprovado ❌"

    print(f"Média: {media:.1f} | Frequência: {frequencia}% | Situação: {situacao}")
    return situacao

# Testes
verificar_situacao(8, 9, 80)   
verificar_situacao(5, 7, 80)   
verificar_situacao(4, 5, 80)   
verificar_situacao(9, 10, 60) 