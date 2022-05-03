import React,  { useState } from 'react'
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
    const [_usercolor, set_usercolor] = useState(0)
    const [_usersize, set_usersize] = useState(0)
    const [photos, setphotos] = useState([''])

    let { pid } : any = useParams();

    // console.log(pid)

    const db:any = getFirestore(app)
    const productRef = doc(db, `products/${pid}`)
    const [snapshot, loading, error] : any = useDocument(productRef);
    
    React.useEffect(() => {
        if(snapshot){
            setproduct(snapshot.data());
            setcolors(snapshot.data().color)
            setsizes(snapshot.data().size)
            setphotos(snapshot.data().photos)
        }
    }, [snapshot])
    

    const selectColor = (color : string) => {}

    const selectSize = (size : string) => {}

    const addToCart = () => {}

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
                <ProductThumbnail product={snapshot.data()} large={true} />
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
                            <div className="text-p">
                                <div className="d-flex">
                                    {colors && colors.map((color:string, index:number) => {
                                            return(
                                                <div className={`color-box mr-2 ${index === _usercolor ? 'active' : ''}`} id={color} onClick={() => set_usercolor(index)} key={index} style={{backgroundColor : color}}></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h4 className="text-mid-sub">
                                Available Size
                            </h4>
                            <div className="text-p">
                                <div className="d-flex">
                                    {sizes && sizes.map((size:string, index:number) => {
                                            return(
                                                <div className={`size-box mr-2 ${index === _usersize ? 'active' : '' } `} onClick={() => set_usersize(index)} key={index}>{size}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
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