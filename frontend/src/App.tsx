import Footer from './components/footer/index';
import Navbar from './components/navbar/index';
import DataTable from './components/DataTable/index';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
