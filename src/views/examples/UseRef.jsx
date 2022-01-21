 import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1, s2){
    return s1.concat(s2)
    
}

const UseRef = (props) => {

    const [num, setNum] = useState("")
    const [num1, setNum1] = useState("")

    const count = useRef(0)

    const inputEl = useRef(null)
    const inputEl2 = useRef(null)

    // const onButtonClick = () => {
    //     inputEl.current.focus();
    // }
    

    useEffect(function(){
        count.current++
        inputEl2.current.focus()
    }, [num])

    useEffect(function(){
        count.current++
        inputEl.current.focus()
    }, [ num1])

    return (


        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(num,num1)}</span>
                    <span className='text'>[</span>
                    <span className="text red">{count.current}</span>
                    <span className='text'>]</span>
                </div>

                <input 
                    type="text" 
                    className="input"
                    value={num}
                    ref={inputEl}
                    onChange={e => setNum(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <input 
                    type="text" 
                    className="input"
                    value={num1}
                    ref={inputEl2}
                    onChange={e => setNum1(e.target.value)} />

                    {/* <button 
                        className="btn" 
                        onClick={onButtonClick}>
                            Focus no input
                    </button> */}
            </div>

         
        </div>
    )
}

export default UseRef
