import React, { useState, useEffect } from 'react';

const Quiz = ({ showQuiz, question, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showTheResult }) => {

    const [secondsLeft, setSecondsLeft] = useState(60);

    let timer;

    useEffect(() => {
        if (secondsLeft <= 0) {
            clearTimeout(timer);
            nextQuestion();
        }
        timer = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [secondsLeft]);

    useEffect(() => {
        setSecondsLeft(60);
    }, [question]);

    function startTimer() {
        setSecondsLeft(60);
    }

    function resetTimer() {
        clearTimeout(timer);
        startTimer();
    }

    return (
        <section className="bg-black text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#ffffff', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base text-black'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item}`}
                                        onClick={(event) => { checkAnswer(event, item); resetTimer(); }}
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={() => { nextQuestion(); resetTimer(); }} disabled={!selectedAnswer}>Next Question ({secondsLeft})</button>
                                    :
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
