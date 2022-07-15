import { useEffect, useState } from 'react'
import axios from 'axios';

function Porn({ category }) {
    const [data, setData] = useState()
    useEffect(() => {
        const URL = `https://www.eporner.com/api/v2/video/search/?query=${category}`
        const getData = async () => {
            await axios.get(URL).then(res => {
                setData(res.data.videos)
            }).catch(err => {
                console.log(err);
            })
        }
        getData()
    }, [category])
    console.log(data);
    console.log(category);
    return (
        <div className='row row-cols-sm-1 row-cols-md-3 row-lg-4' style={{ marginTop: '5rem', justifyContent: 'center' }}>
            {
                data ?
                    data.map(res => {
                        return (
                            <div className='card m-1 col-3' style={{ display: 'inline-block' }} key={res.id}>
                                <a className='card-img-top' href={res.embed}>
                                    <img src={res.default_thumb.src} className='img-fluid' style={{ width: res.default_thumb.width, height: res.default_thumb.height }} alt="imagess alt" />
                                </a>
                                <div className="card-body">
                                    <h5 className='card-title'>{res.title.slice(0, 30)}</h5>
                                    <p className='card-text'><small className='text-muted'>{res.added}</small></p>
                                </div>
                            </div>
                        )
                    }) : 'loading ...'
            }
        </div>
    );
}

export default Porn;
