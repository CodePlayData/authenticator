# HttpGateway

## Sobre
Essa `interface` define o protocolo Http como método de busca do gateway para os dados externos.

## Justificativa
Abstrair o método de busca dos dados externos da implementação do tipo de gateway.

## Implementação

### Propriedades
1. httpClient - o adaptador do cliente http utilizado, _i.e._ Fetch, Axios e etc.
2. url - o endpoint que será vinculado a esse gateway;
