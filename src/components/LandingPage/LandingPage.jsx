import React from 'react';
import './LandingPage.css'
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <div className='body'>
                <div className="text-white min-h-screen p-10">
                    <main className="h-[780px] w-full flex items-center justify-center text-center">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-black w-96 mx-auto lg:text-6xl lg:w-full">Unlimited movies, TV
                                shows, and
                                more.</h1>
                            <h2 className="text-2xl mt-5">Watch anywhere. Cancel anytime.</h2>
                            {/*<p>Ready to watch? Enter your email to create or restart your membership.</p>*/}
                            {/*<div className="email-btn md:flex items-center justify-center pb-3">*/}
                            {/*    <input className="input px-2 py-3 w-[380px] rounded" type="text"*/}
                            {/*           placeholder="Email address" />*/}
                            {/*    <div className="flex justify-center pt-5 md:pt-0">*/}
                            {/*        <button className="rounded cta-btn bg-[#e50914] flex py-3 px-5 items-center">*/}
                            {/*            <p> TRY 30 DAYS FREE</p>*/}
                            {/*            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                            {/*                 className="bi bi-chevron-right" viewBox="0 0 16 16">*/}
                            {/*                <path fill-rule="evenodd"*/}
                            {/*                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>*/}
                            {/*            </svg>*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<p>Only new members are eligible for this offer.</p>*/}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default LandingPage;