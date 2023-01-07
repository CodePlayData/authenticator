# Authenticator

## Sobre o projeto

A CodePlayData é um projeto criado com a missão de simplificar os processos de gerência, tratamento e consumo de dados em aplicações e softwares de alguns setores da sociedade. Acreditamos ser possível desenvolver produtos e serviços que reduzam a complexidade da manipulação de dados, da acessibilidade de dados, das melhores práticas de desenvolvimento de software e da incorporação de novas tecnologias nos ciclos de desenvolvimento, _i.e._ tornando acessível a análise de dados espaciais como feito no repositório [tesa](https://github.com/CodePlayData/tesa); implementando boas prática de arquitetura de software no processo de autenticação do usuário em uma aplicação, que é o caso desse repositório.

Sempre que possível optaremos por soluções open-source e esperamos contribuições da comunidade.

### Redes Sociais

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow%20%40bukotsunikki)](https://twitter.com/CodePlayData)

<br>

---

## Sobre o repositório

O principal motivo dessa lib é implementação um cliente de autenticação seguindo as melhores práticas de arquitetura de software. A princípio os componentes serão "documentados" em português nos testes e em inglês no próprio código com JsDoc.

<br> 

## Justificativa
A necessidade de abstrair lógicas de negócio das interfaces de usuários. A ideia é manter mais de uma opção de funcionamento do código, _i.e._ para quem quiser mais granulidade nos ciclos dessa aplicação é possível fazer com que a classe `Authenticator` funcione registrando os `Channels` e os `Handlers` e utilize a orientação a eventos; ou caso o mais importante sejam os finais dos ciclos de ação então a estratégia de cadeia de comando seja ideal, pois caso todo o comando não seja finalizado ele deve proporcionar a reversão e emitir um erro pra quem o chamou.

## Implementação

1. Ciclo de autenticação

<br>

---

<br>

### Autor(es/as): 

- [Pedro Paulo dos Santos (dr2p/dr2pedro)](https://github.com/dr2pedro) - Idealizador do projeto [CodePlayData](https://github.com/CodePlayData) que busca construir ferramentas para melhor gerenciar dados no ciclo de desenvolvimento das aplicações e facilitar a rotina do dev. Meste em Ciências pela Fundação Oswaldo Cruz - Epidemiologia na Saúde Pública. Cientista e Analista de dados para fins comerciais e acadêmicos, com conhecimentos avançados em R e intermediário em Python (e atualmente um sonhador do JS/TS como linguagens válidas para dados). Desenvolvedor Full-Stack MEVN e conhecedor de Deno, Tailwind e mais alguns outros setups atuais. Preferência de backend por Typescript.



