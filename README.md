# NavegaF3capitalTesteApp

Projeto criado em Angular 16(v16.2.10) e utilizando PrimeNg (v17.1.0). 

## Development server

Para executar o projeto é recomendado instalar o Node na versão 18. Em seguida utilizar o comando `npm install` ou `npm install --force`caso algumas dependencias não seja instaladas corretamente. Utilize a linha de comando `ng build` e em seguida `ng serve` para inicializar o projeto, a porta utilizada é `http://localhost:4200/`. 

## Sobre o desenvolvimento do Projeto

- O Projeto contem 2 telas (Login e Conteudo) com componentes reutilizaveis e responsivos.
- Estilização utilizando CSS com pre processador Less.
- Estruturação do projeto de acordo com as normas de boas praticas do Angular.
- Testes unitarios utilizando o framework Jest.

## Tela Login

- A tela possui campos de insercao de dados para login, utilizando Email ou CPF
- Validacao  para caso o usuario não preencha os campos e tentar acessar, uma mensagem abaixo dos campos indicara preenchimento obrigatorio dos campos
- Validacao caso o Email/ CPF e senha estejam incorretos nao permitindo o usuario avancar para a tela posterior e exibira uma mensagem de alerta

Dados Mock para login:
```
  email: test@example.com,
  cpf: 12345678910,
  senha:navega123
```
## Tela Conteúdo

- Contem um menu lateral com opçoes de acordo com prototipo
- Grafico apresentando numeros randomicos a cada interacao ou atualização da tela, assim mostrando como seria um grafico recebendo dados em tempo real
- Os mesmos numeros randomicos são exibidos como valores em Contribuição Mensal e Contribuição Voluntaria

## Running unit tests

Use o `npm run test` para executar os teste via Jest.

## Notas do desenvolvedor
- Algumas partes dos componentes pode demonstrar outro comportamento ao utilizar em dispositivos menores. Ë a primeira vez que trabalho com responsividade nesse framework e não tive tempo habil para entender melhor como funciona a Responsividade (CSS Grid e Flexbox) e estudar a documentacao. É um pouco diferente do que estou acostumado a ver e trabalhar, porem pude entender que no PrimeNG é comum e demonstrado em exemplos misturar o CSS Grid e Flexbox no HTML do componente. Achei interessante essa solucao para criar Grid's nas telas e eliminar os break-points e trabalhar com excalas fixas.
- A maior parte de testes unitarios foi feito no `login.componenent.ts` pois o mesmo recebeu mais logica e funcionalidades para demonstrar em Mock o comportamente real de um acesso.
- Tomei a liberdade de utilziar o `Math.random()` no componente `chart.componenent.ts` para demonstrar numeros reais e o funcionamento do grafico. O Grafico utiliza o Charts.js como extensão do PrimeNG
- Alguns componentes foram customizados, para que sua estilizacao fosse efetiva em alguns momentos utilizei o `::ng:deep`

