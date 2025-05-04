    const [resposta, setResposta] = useState(null);

Cria um estado chamado resposta, inicialmente null.

setResposta é a função usada para atualizar esse estado.

Esse estado será usado para armazenar e mostrar o que vier do backend.


    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

Configura a requisição HTTP do tipo GET.

Define o cabeçalho dizendo que o conteúdo esperado é JSON.


    fetch('http://localhost:3000/teste', requestOptions)
        .then(response => response.json())
        .then(data => setResposta(data))
        .catch(error => console.log("Deu ruim", error));


Envia uma requisição GET para o endpoint http://localhost:3000/teste.

Se a resposta vier corretamente:

.json() transforma o corpo da resposta em um objeto JavaScript.

setResposta(data) atualiza o estado com esse dado.

Se der erro (ex: servidor não encontrado), ele cai no .catch() e imprime "Deu ruim" + erro no console.


    <div>
        Retornado: {resposta}
    </div>
    
Mostra o valor da variável resposta (o que veio do backend).

Se ainda não houve resposta, será null.