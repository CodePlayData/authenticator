# CredentialsGateway

## Sobre
Essa `interface` define as condições que uma classe deve ter para buscar as [Credenciais](../../app/Credentials.ts) em um _endpoint_ externo.

## Justificativa
A necessidade de abstrair a forma de busca das [Credenciais](../../app/Credentials.ts) do método que a classe vai utilizar, _i.e._ via Http, via CLI e etc.

## Implementação

### Métodos
1. login - recebe as [Credenciais](../../app/Credentials.ts) do usuário e envia para uma aplicação externa para autenticar as credenciais (normalmente com nome login também).