import {useEffect, useState, forwardRef} from 'react'

const AnswerBlock = ({answerOptions, chosenAnswers}, ref) => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        answerOptions.forEach(answer => {
            if (chosenAnswers.includes(answer.combination[0]) &&
                chosenAnswers.includes(answer.combination[1])
            ) {
                setResult(answer)
            } else if (!result) {
                setResult(answerOptions[0])
            }
        })
    }, [result])


    return (
        <div ref={ref} className="answer-block">
            <h2>{result?.text}</h2>
            <img src={result?.image} alt={result?.text}/>
            <h4 className="information">{result?.resources}</h4>
            <a href={result?.href1}target="_blank" rel="noreferrer">{result?.title1}</a>
            <a href={result?.href2}target="_blank" rel="noreferrer">{result?.title2} </a>
            <a href={result?.href3}target="_blank" rel="noreferrer">{result?.title3} </a>
            <a href={result?.href4}target="_blank" rel="noreferrer">{result?.title4} </a>
            <a href={result?.href5}target="_blank" rel="noreferrer">{result?.title5} </a>
            <h4>Need more? Connect with me<a href={result?.connect}target="_blank" rel="noreferrer">here</a></h4>
        </div>
    )
}

export default forwardRef(AnswerBlock)