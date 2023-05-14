import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-white text-center bg-black' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4 text-warning'>Quizzy</h1>
                        <h5 className='mb-4'>there will be 10 question</h5>
                        <h5 className='mb-4'>Each Question Will carry 5 Marks</h5>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-primary text-dark fw-bold">Let's Start</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;