# Authenticator

## Sobre
Essa classe com um padrão de `facade`, que também se comporta como um `singleton`, organiza de fato toda a lógica necessária para a regra de negócio funcionar. Ela é reponsável por registrar os [canais](../interface/Channel.ts), os [handlers](../interface/Handlers/Handler.ts), os repositórios, adaptadores e etc.

Esse file também contém o tipo **AuthConfig** que é justamente a classe que determina tudo o que será utilizado pela classe *Authenticator*.

## Justificativa
Exportar de forma simples o pacote para ser utilizado em outras aplicações apenas chamando os _usecase_ passando como parâmetro a própria _facade_.

## Implementação

### Propriedades
1. hasAlready - 
2. channels - 
3. credentialsRepository - 
4. usersRepository - 
5. config - 

