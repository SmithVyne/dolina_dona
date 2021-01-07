import { Component } from 'react';
import '../styles/App.css';
// import logo from '../assets/dolina-logo.png';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 7000);
  }

  render() {
    // const {loaded} = this.state;
    // if(loaded) {
    //   return (
    //     <Main />
    //   );
    // }
    // return (
    //   <div className="loaderPage">
    //     <img src={logo} alt="logo" />
    //     <p>
    //       Винный кластер “Долина Дона” - это это объединение ведущих научно-образовательных, производственных, инжиниринговых и инновационно-внедренческих организаций и предприятий Ростовской области, осуществляющих деятельность в таких направлениях, как виноделие, виноградарство, развитие винно-гастрономического туризма, научно-исследовательские и образовательные программы, развитие торговой инфраструктуры, производство комплектующих для винодельческих предприятий.
    //     </p>
    //     <p>Винный кластер НЕ является магазином!</p>
    //   </div>
    // );
    return (
      <Main />
    );
  }
}

export default App;
