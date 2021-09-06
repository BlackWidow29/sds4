import Footer from './components/footer/index';
import Navbar from './components/navbar/index';
import DataTable from './components/DataTable/index';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso %</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas Vendas</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
