import React, { Component, Fragment } from 'react';

// first we wil make a new context
const MyContext = React.createContext();

// then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Kristina',
    age: 100,
    cool: true
  }

  render() {
    return (
      // value --> data we want to pass down that lives inside our Provider
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      // MyContext.Consumer --> when we want to access the data ; 
      //   --> accepts a function with the value of provider as an agrument and it renders it.
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>Increase age</button>
            </Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;

// Consumer --> where I actually want to access the data.