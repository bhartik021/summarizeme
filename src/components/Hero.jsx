import React from 'react';

import { logo } from '../assets';

const Hero = () => {
  return (
    /**
     * Renders the header section of the SummarizeMe website, which includes a navigation bar with a logo and a GitHub button,
     * a title with a gradient effect, and a description of the website.
     * @returns A JSX element that represents the header section of the website.
     */
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="summarizeme" className="w-28 object-contain"/>

            <button
            type="button"
            onClick={() => {
                window.open('https://github.com/bhartik021/summarizeme')
            }}
            className="black_btn"
            >
                GitHub
            </button>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden"/>
            <span className="orange_gradient">
                OpenAI GPT-4
            </span>
        </h1>

        <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero