import Title from './components/Title';
import Setup from "./examples/2-headers"; 
// import PostRequest from "./examples/3-post-request"; 
// import GlobalInstance from './examples/4-global-instance';
import CustomInstance from "./examples/5-custom-instance";
import './axios/global';
function App() {
  return (
    <main>
      {/* <Title /> */}
      {/* <Setup/>   */}
      {/* <PostRequest/> */}
      {/* <GlobalInstance/> */}
      <CustomInstance />
    </main>
  );
}

export default App;
