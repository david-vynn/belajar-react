function Produk({ nama, harga, stok}) {
    return (
        <>
            <h2>{nama}</h2>
            <p>Harga: {harga}</p>
            <p>Stok: {stok}</p>
        </>
    )
};

export default Produk;