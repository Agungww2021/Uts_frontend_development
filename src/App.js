import Nav from '.../components/Nav';
import Table from '.../components/Table';
import Footer from '.../components/Footer';

const Daftar = [
{gambar: ".../img/modern.png", title:"Rumah modern", content:"Rp 300.000.000"},
{gambar: ".../img/prumtype 40.png", title:"prumtype 40", content:"Rp 150.000.000"},
{gambar: ".../img/villa1.png", title:"Villa modern", content:"Rp 200.000.000"},
{gambar: ".../img/villa2.png", title:"Villa minimalist", content:"Rp 400.000.000"},
];


function App() {
  return (
    <div>
      <Nav />
      <div className='countainer'>
        <div className='row'>
          {Daftar.map((agt, index) => (
            <div className='col-lg-3 col-md-4 col-sm-6 mb-6'>
              <Table gambar={agt.gambar} title={agt.title} content={agt.content} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default App;
