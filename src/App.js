// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
// import Emoji from "./components/composition/Emoji";
// import Text from "./components/composition/Text";
// import Bracket from "./components/composition/Bracket"
// import Calculator from './components/state up/Calculator'

import ClickCounter from "./components/render props/ClickCounter";
// import HoverCounter from "./components/render props/HoverCounter";
// import User from "./components/render props/user";
import Counter from './components/render props/Counter';
import Section from "./components/context-api/Content";
import ThemeContext from "./components/context-api/ThemeContext";
import React from "react";


export default class App extends React.Component {
  state = {
    theme: 'dark',
  }

  switchTheme = () => {
    this.setState(({theme}) => {
      if (theme === 'dark') {
        return { theme: 'light' };
      }
      else {
        return {
          theme: 'dark'
        };
      }
    })
  }

  render() {
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>

      </>
    );
  }
}

