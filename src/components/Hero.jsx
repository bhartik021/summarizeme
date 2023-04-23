import React from "react";

/**
 * Imports the logo asset from the assets directory.
 * @returns The logo asset.
 */
import { logo } from "../assets";

/**
 * A functional component that renders the hero section of the SummarizeMe website.
 * @returns {JSX.Element} - The hero section of the website.
 */
const Hero = () => {
  return (
    /**
     * Renders the header section of the SummarizeMe website, which includes a navigation bar with a logo and a GitHub button,
     * a title with a gradient effect, and a description of the website.
     * @returns A JSX element that represents the header section of the website.
     */
    <header className="w-full flex justify-center items-center flex-col">
      /** * A navigation bar component that displays a logo and a button that
      links to the project's GitHub page. * @param {{ string }} logo - The URL
      of the logo image to display. * @returns A JSX element that can be
      rendered to the DOM. */
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        /** * Renders an image element with the specified logo and styling. *
        @param {{ string }} logo - the URL or path to the logo image. * @returns
        An image element with the specified logo and styling. */
        <img src={logo} alt="summarizeme" className="w-28 object-contain" />
        /** * A button component that, when clicked, opens a new window to the
        specified URL. * @param {{ string }} url - The URL to open in a new
        window when the button is clicked. * @param {{ string }} className - The
        CSS class name to apply to the button. * @returns A button element with
        an onClick event that opens a new window to the specified URL. */
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/bhartik021/summarizeme");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      /** * Renders a heading element with the text "Summarize Articles with"
      followed by a line break * and the text "OpenAI GPT-4" in an orange
      gradient. * @returns The rendered heading element. */
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      /** * Renders a description header for the Summize article summarizer. *
      @returns A JSX element containing the description header. */
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
