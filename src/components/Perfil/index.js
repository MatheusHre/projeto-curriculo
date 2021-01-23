import React from 'react'

function Perfil(prop) {

  console.log(prop)

  const { nome, ocupacao, perfilProfissional, resumo } = prop.resposta

  return(
    <>
      <div className="perfil">
        <img src="https://avatars.githubusercontent.com/u/72346496?s=400&u=9feeb2d0e06775ad374e6d84c09423838fb648e6&v=4" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
          <p>{resumo}</p>
      </div>
      <div className="titulo">
        Perfil <br /> Profissional
      </div>
      <div className="perfil-profissional">
        <p>
          {perfilProfissional}
        </p>
      </div>
    </>
  )
}

export default Perfil