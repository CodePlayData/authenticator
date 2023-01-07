# UserGateway

## Sobre
Essa `interface` define as condições que uma classe precisa ter para buscar informações do [Usuário](../../app/User.ts) em um serviço externo.

## Justificativa
A necessidade de abstrair a forma de busca dos dados externos do usuário do método que a classe vai utilizar, _i.e._ via Http, via CLI e etc.

## Implementação

### Métodos
1. whoami - envia as [Credenciais](../../app/Credentials.ts) para um endpoint (normalmente com o mesmo nome) que então utiliza o token de autenticação emitido como assinatura para buscar os dados do próprio [Usuário](../../app/User.ts) que assinou no banco de dados do autenticador.