import React from 'react';

/**
 * Import statements for the Hero and Demo components.
 * These components are used to display the main content of the page.
 * @import {Hero} from './components/Hero'
 * @import {Demo} from './components/Demo'
 */
import Hero from './components/Hero';
import Demo from './components/Demo';

/**
 * This statement imports the CSS file for the App component. The CSS file contains
 * styles that are applied to the App component and its child components. The styles
 * are defined using CSS syntax and are used to control the layout and appearance of
 * the components. The imported CSS file is applied to the App component using the
 * className attribute in the JSX code.
 */
import './App.css';

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient"/>
        </div>

        <div className="app">
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App