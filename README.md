<p align="center">
     <img src="./Design/preview.png" />
</p>

# Olhar180 Teste Técnico
Desenvolver uma aplicação web para gerenciar tarefas, permitindo ao usuário criar, editar e excluir tarefas, além de visualizar uma lista de tarefas existentes.
<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gabrielmoura33/Olhar180">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gabrielmoura33/Olhar180">
  
  <a href="https://github.com/WallysonGalvao/rocketseat-gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielmoura33/Olhar180">
  </a>

  <a href="https://github.com/WallysonGalvao/rocketseat-gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gabrielmoura33/Olhar180">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


**Descrição do projeto:**
A aplicação será uma lista de tarefas simples, com as seguintes funcionalidades:
- Página inicial: exibe uma lista de todas as tarefas existentes, permitindo que o usuário as visualize e as marque como concluídas. A página também deve ter um botão "Adicionar tarefa", que leva o usuário a uma página de criação de tarefas.
- Página de criação de tarefas: permite ao usuário adicionar uma nova tarefa à lista. A página deve ter um formulário que inclui campos para título da tarefa, descrição, data de conclusão e prioridade (alta, média, baixa).
- Página de edição de tarefas: permite ao usuário editar uma tarefa existente. A página deve ter um formulário com os mesmos campos da página de criação de tarefas.
- Página de exclusão de tarefas: permite ao usuário excluir uma tarefa existente da lista.

## 🛠️ Tecnologias utilizadas
- NestJS
- Next.js
- Styled Components
- TypeScript
- Auth0
- GraphQL

## 📚 Instalação
- Pré-requisitos
- Node + npm ou yarn

Passos para instalação
1. Clone este repositório:
```bash 
    git clone https://github.com/gabrielmoura33/Olhar180
```

2. Execute a aplicação em ambos os ambientes:
```bash 
    cd server
    yarn    
    docker-compose up -d
    npx prisma migrate deploy
    yarn start:dev

    cd ..
    cd frontend
    yarn
    yarn dev
```
   

3. Acesse o aplicativo no navegador em http://localhost:3000

## 🤝 Contribuindo
Sinta-se à vontade para abrir issues ou enviar pull requests com suas sugestões e melhorias. Adoraríamos receber sua ajuda!

## 📞 Contato
Se você tiver alguma dúvida, entre em contato com os desenvolvedores por e-mail: gabrielmourajs@gmail.com

## 🎯 Próximos passos
À medida que o projeto evolui, planejamos implementar os seguintes recursos e melhorias:

1. **Containerizaçao com Docker e Docker-Compose**

2. **Gateway para conexão de múltiplos serviços utilizando Apollo Federation + GraphQL**: Integrar a arquitetura de microserviços usando Apollo Federation para facilitar a expansão e manutenção do aplicativo, permitindo a conexão de múltiplos serviços GraphQL.

Sinta-se à vontade para contribuir com essas melhorias ou sugerir novas ideias através de issues e pull requests no repositório do projeto.