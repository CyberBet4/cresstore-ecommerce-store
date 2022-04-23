import React,  { useEffect, useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ProductThumbnail from '../components/ProductThumbnail';
import { app } from '../Firebase';

const SinglePage = () => {

    const [exitState, setexitState] = useState(false)
    const [ product, setproduct ] = useState(null)
    const [colors, setcolors] = useState([''])
    const [sizes, setsizes] = useState([''])

    let { pid } : any = useParams();

    let data = {
        id : pid,
        name : "Coudory Long Sleeve",
        price : "9000",
    }
    // console.log(pid)

    const db:any = getFirestore(app)
    const productRef = doc(db, `products/${pid}`)
    const [snapshot, loading, error] : any = useDocument(productRef);


    
    useEffect(() => {
        // let price:number = 5000;
        // let stringedPrice:string = price.toString()
        // console.log(stringedPrice.split(','))
        if(snapshot){
            setproduct(snapshot.data());
            setcolors(snapshot.data().color)
            setsizes(snapshot.data().size)
        }
    }, [snapshot])
    


  return (
      <>
      {error ? <div>Error</div> : 
    loading ? <div>Loading...</div> :
    <div className={!exitState ? 'container animate__animated animate__fadeInUp animate__faster mt-5 p-3' 
    : 'container animate__animated animate__fadeOutDown animate__faster mt-5 p-3'}>
        <div className="row mb-5">
            <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb" className='d-flex'>
                    <button onClick={() => {setexitState(true); setTimeout(() => window.history.back(), 200)}} className="d-flex btn btn-link mr-2" style={{alignItems : 'center', padding : 0}}>
                        <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
                        Product Page
                    </button>
                    <div> / {snapshot.data().name}</div>
                </nav>

            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <ProductThumbnail pid={data.id} prod={data} large={true} />
                <div className="d-flex mt-3" style={{justifyContent : 'center', maxWidth : 454}}>
                    <button className="btn btn-primary btn-lg mr-3">
                        Buy Now
                    </button>
                    <button className="btn btn-secondary btn-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="col-md-6">
                {/* product details */}
                <div className="row">
                    <div className="col-12">
                        <div className="mb-5">
                            <h2 className="big-title">{snapshot.data().name}</h2>
                            <h4 className="text-mid">N{snapshot.data().price}</h4>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-mid-sub">
                                Description
                            </h4>
                            <p className="text-p">
                                {snapshot.data().description}
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-mid-sub">
                                Color
                            </h4>
                            <p className="text-p">
                                <div className="d-flex">
                                    {colors && colors.map((color:string) => {
                                            return(
                                                <div className="color-box mr-2" key={colors.indexOf(color)} style={{backgroundColor : color}}></div>
                                            )
                                        })
                                    }
                                </div>
                            </p>
                        </div>

                        <div className="mb-5">
                            <h4 className="text-mid-sub">
                                Available Size
                            </h4>
                            <p className="text-p">
                                <div className="d-flex">
                                    <div className="size-box active mr-2">S</div>
                                    <div className="size-box mr-2">M</div>
                                    <div className="size-box mr-2">L</div>
                                    
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    </>
  )
}

export default SinglePage