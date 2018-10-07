# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Quando o navegador está analisando um arquivo html e encontra uma tag script, o navegador para a análise, busca o script e o executa e só depois ele continua a análise.
Para evitar esse comportamento, as tags async e defer informam ao navegador para continuar a análise e construir o DOM sem esperar os sripts. 

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Serve para executar o map depois que api estiver carregada através da função especicada no parâmetro callback.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: o mapa não é renderizado, porque a api não terá os dados necessários para renderizar o mapa. Estes dados estão na função initMap.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Uma forma seria declarar a api no final do documento html.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: O manifesto do aplicativo web fornece informações sobre uma aplicação em um arquivo de texto. Permitindo instalar aplicações web na tela inicial de um aparelho, 
propiciando aos usuários um acesso mais rápido e uma experiência enriquecida.

Os metas servem para personalizar o navegador e até mesmo elementos da plataforma.
Theme-color para especificar a cor do tema; apple-mobile-web-app-capable especificar que o navegador pode executar a aplicação em tela cheia caso content seja yes; 
apple-mobile-web-app-status-bar-style para desterminar o estilo da barra de estatus do aplicativo. No caso, o valor do content é black. Ele determinar que a barra de estatus tenha uma 
cor de fundo preta. 

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não. Faltam componentes que permitam a ele de tanto ter o comportmanto de um aplicativo desktop como aplicativo mobile.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: ngOnInit é chamado após o angular atribuir os valores iniciais das prorpiedades de entrada. Pode ser usada para inicializar alguma variável ao carregar uma página.
ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngOnDestroy.

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Components são um conjunto de plataforma web que permite que o criar personalizado e encapsulado tags HMTL para usar nas páginas web
A vantagem é reutilizar os códogos o tanto que possível.

### c) Para que serve a tag ngFor do angular?
R: Repete uma seção do conteúdo para cada objeto em uma sequência de objetos. Equivale ao foreach loop.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R Representa a inicialização do array legends do tipo string. 

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: É um novo modo de layout em CSS3. É similar ao layout em bloco (block), exceto que ele não tem muitas das propriedades que podem ser usadas num layout em bloco, como floats e columns.
Porém é mais flexível por distribuir espaço e alinhar conteúdo em formas que aplicações web e páginas web complexas geralmente precisam.
ion-grid é um reponsível sistema que para rearrajnar as colunas dependendo do tamanho da tela.
ion-row serve para indicar uma coluna do sistema grid e é onde ficam as colunas.
ion-row são componentes na forma de celulas e ficam dentro de colunas.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: async serve para definir que uma função é assicrona ou seja ela vai retornar uma promise. wait é utilizado para cada processamento assíncrono dentro da função.

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: