'use client'
import { useState, useEffect } from 'react'

import dynamic from "next/dynamic";
import Loading from '@/components/loading';

const Oilprice = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/oilprice/all')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
    }, [])

    var textloading;
    if(isLoading){
        textloading = <Loading/>
    } 
    else{
        textloading = "";
    }
    
    return (
        <>
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
                                {data && data.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.last_price}</td>
                                            <td>{Number.parseFloat(item.change).toFixed(2)}</td>
                                            <td>{item.change_percent}</td>
                                        </tr>                                         
                                    )
                                })}
                                </tbody>
                            </table>
                            {textloading}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default dynamic (() => Promise.resolve(Oilprice), {ssr: false})