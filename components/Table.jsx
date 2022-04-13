const Table = () => {
    return <div>
        <div className="card" style={{ width: '18rem' }}>
            <img src={this.props.gambar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>{this.props.title}</h5>
                <p>{this.props.Content}</p>
                <a href="Pembelian.html" className="btn btn-primary">Pesan</a>
            </div>
        </div>
    </div>
};

export default Table;