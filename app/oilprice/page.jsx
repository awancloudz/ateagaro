async function getDataOil(){
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetch("http://localhost:3001/oilprices/weekly")
    return res.json()
}

export default async function Oilprice(){
    const oilpriceall = await getDataOil()
    return (
        <section id="get-in-touch-section" data-jarallax='{"speed": 0.6}' className="pt-120 pb-50">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-title section-title style-01">
                                <div className="title-transparent">
                                    <span>Oil Price</span>
                                </div>
                                <h3 className="subtitle">Global Oil Price</h3>
                                <h2 className="title"><span>Daily / Weekly </span> Oil Price Information</h2>
                            </div>
                            <div className="works-img-box mt-30">
                                <img src="images/about.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Futures & Indexes</th><th>Last</th><th>Change</th><th>% Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {oilpriceall.map((oil) => {
                                    return (
                                        <tr key={oil.id}>
                                            <td>{oil.name}</td>
                                            <td>{oil.last_price}</td>
                                            <td>{Number.parseFloat(oil.change).toFixed(2)}</td>
                                            <td>{oil.change_percent}</td>
                                        </tr>                                         
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}