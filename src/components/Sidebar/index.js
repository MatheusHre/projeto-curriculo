import React, { useState} from 'react'

function Sidebar(prop) {

    const [showContact, contactStatus] = useState(false)
    const { contatos, educacao } = prop.resposta

    const change = () => {
        contactStatus(!showContact)
    }

    return(
        <>
            <aside>
                <div className="sidebar">
                <h3>Contatos</h3>

                <button onClick={change}>Mostrar Contatos</button>
                {showContact &&
                    <div className="lista-de-contatos">
                        {contatos.map(procura => (
                            <li id={procura.id}>
                                <div className="item-contato">
                                    <h4>{procura.tipo}</h4>
                                    <p>{procura.contato}</p>
                                </div>
                            </li>                            
                        ))}
                    </div>
                }
                </div>

                <div className="sidebar">
                    <h3>Educação</h3>
                    <div className="lista-de-formacao">
                        {educacao.map(procura => (
                            <li id={procura.id}>
                            <h4>{procura.curso}</h4>
                            <p>{procura.instituicao}</p>
                            </li>
                        ))}
                    </div>
                </div>
      </aside>
        </>
    )
}

export default Sidebar