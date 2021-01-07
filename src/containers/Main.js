import Nav from '../components/Nav';
import IconFooter from './IconFooter';

const Main = () => {
  return (
    <main>
      <div id="home">
        <Nav status="home" />
        <h1 id="mainHeader">IN VINO VERITAS</h1>
      </div>
      <div id="about-us">
        <Nav status="second" />
        <h1 id="aboutHeader">ДОЛИНА ДОНА</h1>
        <div id="aboutBody">
          <h2>О нас</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae justo, a odio maecenas arcu at adipiscing tellus. Condimentum tellus nunc commodo donec. Faucibus quis dignissim massa cras et, pulvinar convallis morbi. Pulvinar sit quis elementum, ac. Tristique faucibus at suspendisse commodo suspendisse enim. Sem sit donec purus vivamus. Proin enim elit lectus integer in. Vitae laoreet ut at pellentesque. Eget quis diam ultrices consequat turpis. Id maecenas et iaculis elementum praesent id consectetur tincidunt...
          </p>
        </div>
        <IconFooter />
      </div>
    </main>
  );
}

export default Main;