import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//calc farial
function calcFatorial(number){
    const n = parseInt(number)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

// calc par ou impar
// function calcParouImpar(number){
//     const n = parseInt(number)
//     if(n%2===0){
//         return true
//     }else{
//         return false
//     }
// }

const UseEffect = (props) => {
    
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [number, setNumber] = useState(0)
    const [status, setStatus] = useState('')

    useEffect(function(){
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function(){
        if(fatorial > 1000000) {
            window.alert('Você ficou milionario!!')
        }
    }, [fatorial])

    useEffect(function(){
        setStatus(number % 2 === 0 ? true : false)
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

        <SectionTitle title="Exercicio #01" />
        <div className="center">
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
            </div>

            <input 
                type="number"
                className="input"
                value={num}
                onChange={e => setNum(e.target.value)} />
        </div>

        <SectionTitle title="Exercicio #02" />
        {/* impar ou par */}
        <div className="center">
            <div>
                <span className="text">Status: </span>
                <span className="text red">{status ? 'Par' : 'Impar'}</span>
            </div>

            <input 
                className='input'
                type="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />

        </div>

        </div>

        
    )
}

export default UseEffect
