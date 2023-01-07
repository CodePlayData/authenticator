# Tarefas pendentes

- [ ] O usecase presente no `src/app/usecase.ts#CredentialsSubmit` pode ser aproveitado na recuperação de senha, apenas necessitando alterar a parte do ciclo em que ele acha as crendenciais salvas no cache. Invés de emitir um evento de aprovação de usuário (CredentialsSaved) ele emitirá um evento do tipo aviso (que será escutado no frontend em um Alerta) já que dessa vez o UseCase CredentialsSubmit veio sem senha.
>Sugestão 1: Como o objeto Credentials fica sendo repassado de evento/handlers pra evento/handlers quando ele chegar no evento de CredentialsSaved o evento deve conter dois parâmetros, o objeto e as credenciais:
>![código do CredentialsSaved](./assets/Captura%20de%20tela%20de%202022-11-10%2012-26-38.png)
>bastaria inserir uma condicional que compare um objeto com outro e: caso estejam iguais segue o fluxo normal, caso o `object` não contenha um password cai no NOVO ciclo do aviso, caso estejam diferentes ele recusa (que acho que implicitamente já ocorre desse jeito pq em algum lugar na estrutura essa comparação do 'se diferente' ocorre).

<br>

- [ ] Implementar na `src/app/usecase.ts` os casos de uso responsáveis pelo novo cadastro, que nesse caso é um ciclo todo novo.
>Sugestão 1: Extenda a classe Usuário para Doctor (https://www.typescriptlang.org/docs/handbook/2/classes.html) de modo que todas as propriedades se mantenham e insira as propriedades presentes no formulário de cadastro médico.

<br>

- [ ] Para o usecase acima ele terá que chamar o `src/engine/adapters.ts#FetchAdapter` com uma `Request` feita pelo `src/engine/builders.ts#RequestBuilder` que contenha a nova entidade `Doctor`. 

- [ ] Definir um evento que defina que o cadastro desse novo médico foi emitido e esse será o último evento do ciclo. É por isso evento que o frontend atualizará. Lembrando que como é uma arquitetura orientada a eventos, não necessariamente ele precisa esperar aprovação, até porque, o API pode não aprovar e nesse caso o usuário é comunicado pelo email fornecido.

- [ ] Fazer o excalidrawn do novo ciclo do UseCase `SubmitCredentials` incluindo a parte da recuperação de email e o do Cadastro de novo médico.

- [ ] Na atualização do UseCase `SubmitCredentials` será necessário implementar a lógica caso a pessoa não forneça a senha (por ter ido pelo link de recuperar) e não exista nada na base de dados! Para essa parte defina:
    - [ ] Uma Request com o `src/engine/builders.ts#RequestBuilder` com o `BaseUrl` com o parâmetro + /`email` e envie ao `src/engine/adapters.ts#FetchAdapter`. 
    - [ ] Emita um evento que registre o envio de solicitação de recuperação de senha encaminhado pelo adaptador (invente um nome). Esse será o último evento e no frontend isso irá retornar a tela inicial com um Alerta descrevendo que a o pedido foi feito e deve-se aguardar o email.
>Sugestão 1: É de responsabilidade do Backend a criação do email toda a lógica de conectar ao Gmail, portanto, esse ciclo deve ser bem mais simples.

- [ ] Atualizar o `README.md` inserindo o .svg de todos os novos ciclos, suas explicações de porquê acontecem e uma seção de exemplos de código.