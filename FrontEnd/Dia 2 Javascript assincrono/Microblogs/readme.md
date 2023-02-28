Exercício de fixação
Microblogs
Neste exercício vamos criar uma página para leitura de posts de várias pessoas. Você já começará com uma página HTML estruturada e com algumas funções auxiliares prontas.

Seu objetivo será preencher o HTML existente com as informações que você irá recuperar de várias APIs diferentes. Ao final, sua aplicação deverá ser capaz exibir uma lista de pessoas, exibir uma lista de posts de acordo com a pessoa selecionada e também exibir os comentários do post destacado. Cada item dessa lista (pessoas, posts e comentários), será recuperado através de uma chamada para API diferente.

Curtiu o desafio? Então vamos aos passos necessários para desenvolver o exercício:

Faça um fetch para a API https://dummyjson.com/users para recuperar as informações das pessoas usuárias. Depois de receber os dados, passe o array retornado pela API com as informações das pessoas usuárias para a função fillUsersSelect para que o select da página seja atualizado.
Na estrutura inicial do projeto já existe o eventListener para o evento change do select que dispara a função a clearPage. Depois da chamada dessa função, faça um fetch para a API https://dummyjson.com/posts/user/{userID}. Lembre-se que você deve pegar o id da pessoa selecionada através do atributo value do select.
A requisição feita no item anterior irá retornar um array com os posts da pessoa selecionada. Após receber as informações da API, utilize a função fillPosts, passando a lista de posts recebida, para exibir os posts na tela. ℹ️ O primeiro item do array será o post destacado. Os demais posts entram na lista de posts relacionados.
Ainda usando o a lista de posts retornada pela requisição do item 2, pegue o id do primeiro post da lista (esse será o post destacado) e faça uma requisição para URL https://dummyjson.com/posts/{featuredPost.id}/comments para pegar os comentários do post destacado. 💡Dica: lembre-se de usar o return e retornar essa chamada de fetch. Dessa forma será possível encadear mais um .then em sequência.
Depois de receber da API os comentários do primeiro post, use a função fillFeaturedPostComments para exibi-los. Você deve passar para essa função o array de comentários recebido no retorno da API.
Adicione um .catch ao final do encadeamento de todos os .then. Caso aconteça algum erro, esse .catch deverá chamar a função fillErrorMessage e passar a mensagem de erro.


Solução
Antes de começar: esse exercício possui uma estrutura inicial. Se você tiver curiosidade, pode acessar as funções da pasta utils/updateUI para entender como elas funcionam. Elas foram criadas para facilitar o tratamento do DOM, dessa forma você pode focar somente na parte de códigos assíncronos para resolver o exercício.

Agora sim, vamos ao passos para resolver o exercício:

Passo 1: vamos começar fazendo o fetch para recuperar as informações das pessoas usuárias. Lembre-se que é necessário usar o método .json() depois de receber o retorno da API. Como a API já retorna um array de pessoas, podemos passá-lo diretamente para a função fillUsersSelect, pois ela já está preparada para receber os dados nesse formato:

Passo 2: o próximo passo é fazer com que toda vez que selecionarmos uma pessoa, a lista de posts dessa pessoa seja carregada. Para isso, vamos precisar do evento de change do user-select.

O projeto já tem o eventListener adicionado, então vamos usá-lo para fazer nossa requisição. Vamos usar a URL: