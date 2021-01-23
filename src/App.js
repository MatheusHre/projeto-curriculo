import React, { useState } from "react";
import './App.css'
import Perfil from "./components/Perfil";
import Sidebar from "./components/Sidebar"
import Experience from "./components/Experience"

function App() {

  const fakeAPI =  
    {
      nome: 'Matheus Henrique Silva',
      ocupacao: 'Front End Developer',
      resumo: '24 anos, estudante de Engenharia da Computação e futuro desenvolvedor Front-End',
      perfilProfissional: 'Iniciante na area de programação...',
      contatos: [
        {
          id: 1,
          tipo: 'Telefone :',
          contato: '(19) 98164-4362'
        },
        {
          id: 2,
          tipo: 'E-mail :',
          contato: 'matheus.hresilva@gmail.com'
        },
        {
          id: 3,
          tipo: 'Github :',
          contato: 'github.com/MatheusHre'
        },
        {
          id: 4,
          tipo: 'Linkedin :',
          contato: 'linkedin.com/in/matheus-hresilva/'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'UNISAL',
          curso: 'Engenharia da Computação'
        },
        {
          id: 2,
          instituicao: 'CEMEP',
          curso: 'Técnico em Informatica'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front',
          periodo: 'Agosto 2019 - Atualmente',
          empresa: 'NASA',
          local: 'Nova York',
          conteudo: 'Fazia de tudo e mais um pouco.'
        },
        {
          id: 2,
          cargo: 'Front',
          periodo: 'Agosto 2018 - Agosto 2019',
          empresa: 'CIA',
          local: 'Boston',
          conteudo: 'Fazia tudo e ainda tinha um pouco mais.'
        },
        {
          id: 3,
          cargo: 'Front',
          periodo: 'Janeiro 2016 - Agosto 2018',
          empresa: 'Google',
          local: 'Califórnia',
          conteudo: 'Fazia muito coisa e ainda faltava coisas.'
        }
      ]
  }

  const [resposta] = useState(fakeAPI)

  return (
    <main>
      <Perfil resposta={resposta} />
      <Sidebar resposta={resposta} />
      <Experience resposta={resposta} />
    </main>
  );
}

 
export default App;