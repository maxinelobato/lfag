import React, { useState, useEffect } from 'react'

const CountdownComponent: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    const startDate = new Date('2024-04-04')
    const endDate = new Date('2024-04-08T18:00:00')

    const intervalId = setInterval(() => {
      const currentDate = new Date()
      if (currentDate >= startDate && currentDate <= endDate) {
        // Se a data atual estiver dentro do intervalo desejado
        const timeLeft = endDate.getTime() - currentDate.getTime()
        if (timeLeft <= 0) {
          // Quando o tempo acabar
          setDisabled(true)
          clearInterval(intervalId)
        }
      } else {
        // Se a data atual estiver fora do intervalo, desabilita
        setDisabled(true)
        clearInterval(intervalId)
      }
    }, 1000) // Verifica a cada segundo

    return () => clearInterval(intervalId) // Limpa o intervalo quando o componente é desmontado
  }, []) // Executa o efeito apenas uma vez ao montar o componente

  return (
    <div>
      <h2>Contagem regressiva:</h2>
      <p>{disabled ? 'Tempo expirado' : 'Contador em andamento'}</p>
    </div>
  )
}

export default CountdownComponent
