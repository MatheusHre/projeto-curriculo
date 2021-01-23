import React from 'react'

function Experience(prop){

    const { experiencia } = prop.resposta

    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>

                {experiencia.map(procura => (
                    <div className="experience-item" id={procura.id}>
                        <div>    
                            <h4>{procura.cargo}</h4>
                            <span>{procura.periodo}</span>
    
                            <strong>{procura.empresa}</strong>
                            <span className="final">{procura.local}</span>
                        </div>
                            <p>
                                {procura.conteudo}
                            </p>
                    </div>      
                    ))}           
            </div>        
        </>
    )
}

export default Experience