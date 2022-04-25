# Teste SelfSolutions

Teste de bolsa para estágio home-office na Startup SelfSolutions.

## Enunciado:

### Aplicação de lista de tarefas

#### Premissas

Faça uma aplicação com campo de entrada de dados para que o usuário
digite tarefas, que serão enviadas em uma lista quando o usuário
pressiona enter ou clica em um botão.

As tarefas inseridas devem ser visualizadas na tela.

Vaga back-end: Estruturar os dados em um banco de dados.

#### Bônus

* As tarefas podem ser marcados como "completed";
* O usuário pode editar, ou remover as tarefas inseridas;
* O usuário pode ver uma lista com as tarefas concluídas;
* Ao fechar a janela do navegador, as tarefas serão armazenadas em
localStorage e quando o usuário retornar, os dados serão recuperados;
* Utilizar banco de dados na Amazon AWS (RDS ou dynamoDB).

*Para a vaga de back-end, o front-end desenvolvido não será avaliado.*

## Solução:

O enunciado pede uma aplicação de tarefas do tipo CRUD: create, read, update, delete.

Consistindo em uma To-Do-List, também é necessário uma opção para verificar facilmente todas as tarefas concluídas, portanto também haverá uma apenas com as que ainda faltam completar também.

As informações devem ser guardadas e resgatadas a partir do localStorage, também pode utilizar um banco de dados na Amazon AWS (RDS ou dynamoDB) especificamente, portanto não posso utilizar Firebase para fazer uma fácil integração com um banco de dados.

### Tecnologias utilizadas:

No desenvolvimento:

- ReactJS;
- Jest;
- React Beautifull DnD;
- React Framer-Motion;
- React Circular Progressbar
- localStorage;
- eslint;
- prettier;
- javascript;
- sass;

### Aba de Controle:

Nessa aba é possível aplicar todas as interações com as tarefas, inserí-las, editá-las,
remove-las e marcar como finalizada.
É possível segurar o click do mouse, para arrastar as tarefas reordenando-as na lista.

A opção de inserir uma tarefa nova, aparece no canto inferior direito, abrindo uma modal
para a inserção dos dados.

<img src='./git/ControlNoTasks.png' style='margin: auto; width: 80%;'/>
<img src='./git/ControlWithTasks.png' style='margin: auto; width: 80%;'/>

### Modal:

A modal entra animada com a animação do framer motion.

<img src='./git/Modal.png' style='margin: auto; width: 80%;'/>

### Aba de tarefas incompletas:

Nessa aba, aparecem apenas as tarefas incompletas, a única opção possível é completá-las =,
enquanto que existe uma progressbar animada.

Quando todas as tarefas são completas, existe uma tela preparada.

<img src='./git/IncompleteTasks.png' style='margin: auto; width: 80%;'/>
<img src='./git/IncompleteTab.png' style='margin: auto; width: 80%;'/>

### Aba de tarefas completas:

Aparecem todas as tarefas feitas, sem opção de edição.

<img src='./git/CompleteTab.png' style='margin: auto; width: 80%;'/>
