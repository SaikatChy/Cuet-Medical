import React from 'react';
import './About.scss'
const About = () => {
    const doctorName = "X";
    return (
        <div className='mt-36'>
            <div className='container2 mt-28 flex mx-auto justify-center '>
                <div className='left w-1/2'>
                    <h1 className='text-gray-600 font-bold py-0'>Dr. {doctorName}<br /></h1>
                    <small className='pb-3 text-gray-600 text-xl font-bold text-justify'>(Your Trusted Cardiologist)</small>
                    <p className='py-3 text-justify'>Dr. {doctorName} is a highly experienced and dedicated cardiologist with a wide-ranging expertise in various cardiac conditions. With a deep understanding of heart health, Dr. {doctorName} provides comprehensive cardiac care, ensuring that patients receive the highest standard of diagnosis and treatment. From routine check-ups to managing complex cardiac issues, Dr. {doctorName} is your trusted partner in maintaining a healthy heart. </p>
                    <p className='text-gray-600 text-3xl font-bold py-3 text-justify'>Specialist in the Sub Division of Cardiology</p>
                    <p className='py-3 text-justify'>In the vast field of cardiology, Dr. {doctorName} has expertise in many of them. Here are some of the expertises.</p>
                    <p className='font-bold text-lg text-gray-600 py-3'>Expert in Heart Rhythm Problems</p>
                    <p className='mx-0 text-justify'>Dr. {doctorName} is a specialist in diagnosing and treating heart rhythm problems. They support the treatment of disorders like atrial fibrillation and irregular heartbeats. Dr. {doctorName} has a great deal of experience and consistently uses the most recent therapies, so patients rely him. </p>
                    <p className='font-bold text-lg text-gray-600 py-3'>Expert in Minimally Invasive cardiac Surgery</p>
                    <p className='mx-0 text-justify'>Dr. {doctorName} who is known for treating heart issues with minimal incisions, is a highly skilled cardiac specialist . They concentrate on problems like blocked arteries and make sure patients receive the most advanced treatments.</p>
                    <p className='font-bold text-lg text-gray-600 py-3'>Leading in Heart Failure and Transplants</p>
                    <p className='mx-0 text-justify'>In the treatment of severe heart failure, Dr. {doctorName} is a renowned specialist. He supervises heart transplant programs in addition to helping to manage it. He offer whole assistance to patients who require sophisticated cardiac care.</p>
                    <p className='font-bold text-lg text-gray-600 py-3'>Specialist in Preventive Cardiology</p>
                    <p className='mx-0 text-justify'>Dr. {doctorName} specializes in Preventive Cardiology, helping patients reduce their risk of heart disease through tailored lifestyle interventions, dietary guidance, and medication management. With a compassionate approach, Dr. {doctorName} empowers individuals to achieve optimal heart health and overall well-being.</p>
                </div>
                <div className='right w-1/3 flex flex-col'>
                    <img src="/public/images/doctor-1.png" className='w-fit' />
                </div>
            </div>

            <h1 className='font-bold mt-20 text-slate-600 text-center'>Medical Degree</h1>
            <div className="timeline mb-[6%]">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">

                    </div>
                    <div className="timeline__event__date">
                        Jun 2000 - Apr 2005
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            Bachelor of Medicine
                        </div>
                        <div className="timeline__event__description ">
                            <h5 className=''>(MBBS)</h5>
                            <p>Dhaka Medical College Hospital</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-burger"></i>
                    </div>
                    <div className="timeline__event__date">
                        Aug 2005 - Nov 2010
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Fellowship of college of Physicians & Surgeon
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(FCPS)</h5>
                            <p>BCPS, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-slim"></i>

                    </div>
                    <div className="timeline__event__date">
                        Mar 2011 - Sep 2016
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Doctor of Medicine
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(MD)</h5>
                            <p>BSMMU, Dhaka</p>
                        </div>

                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>

                    </div>
                    <div className="timeline__event__date">
                        Dec 2016 - Jan 2019
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Diploma in Cardiology
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''></h5>
                            <p>BSMMU, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type4">
                    <div className="timeline__event__icon">
                    </div>
                    <div className="timeline__event__date">
                        Nov 2016 - Present
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Professor
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''></h5>
                            <p>Dhaka Medical College Hospital</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;