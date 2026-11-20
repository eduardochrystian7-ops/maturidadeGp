# maturidadeGp
Sistema de Reserva de Laboratórios

Protótipo web funcional desenvolvido a partir de artefatos de Engenharia de Software (Diagramas UML e Especificação de Requisitos).

Sobre o Projeto

Este projeto consiste em um protótipo front-end desenvolvido para a disciplina de Maturidade em Desenvolvimento de Software (UNINASSAU), ministrada pelo Prof. Rafael Pacheco Ferreira.

O objetivo pedagógico da atividade é simular um fluxo real de desenvolvimento: interpretar necessidades de negócio, requisitos funcionais/não funcionais e diagramas UML (Casos de Uso e Classes) para construir uma aplicação funcional sem depender de telas prontas ou código-base inicial.

O Problema

A instituição necessita de uma interface simples e intuitiva para que professores possam consultar a disponibilidade dos laboratórios e registrar reservas durante o período de aula.

Tecnologias Utilizadas

De acordo com as restrições do projeto, a solução foi construída utilizando tecnologias web padrão, rodando localmente no navegador sem necessidade de back-end ou banco de dados externo:

HTML5 (Estruturação semântica)

CSS3 (Estilização e layout responsivo)

JavaScript (ES6+) (Lógica de negócio, validações e manipulação do DOM em memória)

Modelagem e Arquitetura (UML)

Atores e Casos de Uso

Ator Principal: Professor (nome, matrícula)

Fluxo Principal:

Consultar laboratórios disponíveis e indisponíveis.

Realizar reserva (inclui obrigatoriamente a Validação e Confirmação da reserva).

Listar reservas realizadas na sessão.

Entidades (Diagrama de Classes)

Professor: nome, matrícula

Laboratório: nome, capacidade, disponível (booleano)

Reserva: data, horário, finalidade (relaciona Professor e Laboratório)

Requisitos do Sistema

Requisitos Funcionais (RF)

RF01 - Consultar laboratórios: Exibir nome, capacidade e situação atual (Disponível/Indisponível) dos laboratórios.

RF02 - Realizar reserva: Permitir selecionar o laboratório, informar data, horário e finalidade da aula.

RF03 - Validar reserva: Impedir o envio do formulário caso existam campos obrigatórios vazios ou laboratórios indisponíveis.

RF04 - Confirmar reserva: Exibir feedback visual claro ao usuário assim que a reserva for concluída com sucesso.

RF05 - Listar reservas: Exibir na tela o histórico de reservas efetuadas durante a execução da página.

Requisitos Não Funcionais (RNF)

RNF01 - Usabilidade: Organização visual clara, facilitando a distinção entre a lista de laboratórios, o formulário de reserva e as reservas confirmadas.

RNF02 - Responsividade: Interface adaptável para uso tanto em computadores (desktop) quanto em dispositivos móveis (smartphones).

 Dados Iniciais (Mock)O sistema inicia carregado com os seguintes laboratórios em memória:LaboratórioCapacidadeSituação InicialLaboratório 0130 alunos DisponívelLaboratório 0240 alunos IndisponívelLaboratório 0325 alunos Disponível(Nota: Laboratórios marcados como indisponíveis têm seu agendamento bloqueado pela regra de negócio da interface).

 Evolução / Mudança de Requisito

Durante o ciclo de desenvolvimento, foi incorporada uma nova regra de negócio ao escopo:

Regra de Capacidade Mínima: "Laboratórios com capacidade inferior a 30 alunos não podem ser reservados para aulas regulares."

Impacto: Afeta diretamente os requisitos RF02 (Realizar reserva) e RF03 (Validar reserva).

Comportamento Esperado: Ao tentar reservar o Laboratório 03 (25 alunos) para a finalidade de "Aula Regular", o sistema deve barrar a operação e alertar o usuário sobre a restrição de capacidade.

 Como Executar o Projeto

Faça o clone deste repositório ou baixe os arquivos do projeto:

git clone https://github.com/seu-usuario/sistema-reserva-laboratorios.git


Navegue até a pasta do projeto.

Abra o arquivo index.html diretamente em qualquer navegador moderno (Google Chrome, Firefox, Edge, etc.).

 Autor

Documentado por jair liberato da silva filho-01864955/Sistemas de informanção
Desenvolvido por Marcelo Nascimento Silva-01865122/Engenharia da computação, 
Desenvolvido por Chrystian Eduardo Santos Sousa-01862423/Sistemas de informação.

Atividade Prática — UNINASSAU | Disciplina: Maturidade em Desenvolvimento de Software