<div align="center">

# Authenticator

![autenticador-logo](./assets/authenticator-dark-logo.png)

_DX sem atrito_

<br> 

</div>

O principal motivo dessa lib é implementação dos processos de autenticação de usuário seguindo as melhores práticas de arquitetura de software. 

> A princípio os componentes serão "documentados" em português nos testes e em inglês no próprio código com JsDoc.

<br> 

---

## Justificativa
A necessidade de abstrair lógicas de negócio das interfaces de usuários. A ideia é manter mais de uma opção de funcionamento do código, _i.e._ para quem quiser mais granulidade nos ciclos dessa aplicação é possível fazer com que a classe `Authenticator` funcione registrando os `Channels`, os `Handlers` e utilize a orientação a eventos; ou, caso o mais importante sejam os finais dos ciclos de ação então a estratégia de cadeia de comando seja ideal, pois caso todo o comando não seja finalizado ele deve proporcionar a reversão e emitir um erro pra quem o chamou.

<br>

## Implementação

### 1. Client

Ainda que explicitamente não exista um domínio identificado na estrutura da aplicação ainda é possível identificá-los pelos [Canais](./src/client/interface/Channel.ts) utilizados: atenticação de [Credenciais](./src/client/app/Credentials.ts) e identificação de [Usuário](./src/client/app/User.ts).

A aplicação tenta ao máximo ser aderente aos princípios de [Ports and Adapters - _Alistair Cockburn_](https://alistair.cockburn.us/hexagonal-architecture/), no entanto, o código dos adaptadores não estão nessa base de código, uma vez que eles podem ser utilizados em diferentes aplicações eles ficarão disponíveis no repositório: https://github.com/CodePlayData/adapters.



e sendo assim o ponto de entrada é com o **Caso de Uso** [app/CredentialsSubmit.ts](./src/client/app/CredentialsSubmit.ts) que envia as [Credenciais](./src/client/app/Credentials.ts) a uma 



<br>

## Como Usar