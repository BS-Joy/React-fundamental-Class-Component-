import Counter from "../render props/Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./ThemeContext";

export default function Section(){
    return (
        <>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => {
                    return <ThemeContext.Consumer>
                        {({theme, switchTheme}) => <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />}
                    </ThemeContext.Consumer>
                }}
            </Counter>
        </>
    );
}