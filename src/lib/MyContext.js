class MyContext {
    constructor(value){
        this.value = value;
    }

    // provider context
    Provider = ({children, value}) => {
        this.value = value;
        return children;
    }

    // consumer context
    Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
    const context = new MyContext(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}

export default createContext;