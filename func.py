from unicodedata import normalize

texto = "A Terra plana é uma concepção arcaica do formato da Terra como um plano ou disco."


def contator (texto):
        
    texto = normalize('NFKD', texto).encode('ASCII','ignore').decode('ASCII')

    texto = texto.lower()
    lista = texto.split()
    resposta = {}
    cont = 0
    for i in lista: 
        for  n in lista: 
            if i == n:
                cont += 1                  
        resposta[i] = cont
        cont = 0
    return resposta

    
aaa = contator(texto)
print(aaa)