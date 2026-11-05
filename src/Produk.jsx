function Produk({ nama, harga, stok }) {
    return (
        <>
            <h2>{nama}</h2>
            <p>Harga: {harga}</p>
            <p>Stok: {stok}</p>

            {stok > 5
            ? (<p>Banyak</p>)
            : stok > 0
                ? (<p>Tersedia</p>)
                : (<p>Habis</p>)
            }  
        </>
    )
};

export default Produk;