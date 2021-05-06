import Content from './layouts/Content';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';

function App() {
  // const title = 'Welcome to the blog';
  // const likes = 50;
  // const person = { name: 'mcdeden', age: 40 };
  
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content />
      {/* <Dashboard /> */}

      {/* net ninja bootcamp */}
      {/* <div className="content-wrapper"> */}
        {/* <h1>{ title }</h1> */}
        {/* <p>Liked { likes } times</p> */}
        {/* <p>{ person.name }</p> */}
      {/* </div> */}
      {/* end net ninja bootcamp */}

      <Footer />
    </div>
  );
}

export default App;