import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
    state = {
        count: 0
    }

    incrementer = () => {
        this.setState(state => ({ count: state.count + 1}))
    }

    decrementer = () => {
        this.setState(state => ({ count: state.count - 1}))
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Hello, Worlda!!!</h1>
                <h2 className={count > 10 ? 'warning' : null}>
                    Count: {count}
                </h2>
                <button onClick={this.incrementer}>+</button>
                <button onClick={this.decrementer}>-</button>
            </div>
        )
    }
}

export default hot(module)(App)
