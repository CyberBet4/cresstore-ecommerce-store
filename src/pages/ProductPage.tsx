import React from 'react'
import { app } from '../Firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getFirestore, collection } from 'firebase/firestore'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ProductThumbnail from '../components/ProductThumbnail'

const ProductPage = () => {

    const db:any = getFirestore(app)

    const productsRef:any = collection(db, 'products')
    const [ values, loading, error ] : any = useCollection(productsRef)
    
    // console.log(values, loading)
    // if(loading){
    //     console.log('loading')
    // }else{
    //     console.log(values.docs.map((product : { data : () => any }) => product.data()));   
    // }

  return (
    <div className='animate__animated animate__fadeInUp animate__faster'>
        <div className="row">
            <div className="col-md-3">
                <div className="small-navbox mb-4">
                    <button className='btn btn-link mb-3'>
                        <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
                        Home
                    </button>

                    <h2 className="page-title">
                        Street Wears
                    </h2>
                </div>
                <div className="filter-box p-3">
                <h4 className="sub-title mb-4">Filters</h4>
                <div className="filter-section mb-4">
                    <h4 className="filter-title">
                        Price Range
                    </h4>
                    <div>
                        <input type="range" className="form-range" id="customRange1" />
                        <div className="d-flex" style={{justifyContent : 'space-between'}}>
                            <div>N0</div>
                            <div>N1,000,000</div>
                        </div>
                    </div>
                </div>

                <div className="filter-section mb-4">
                    <h4 className="filter-title">
                        Brands
                    </h4>
                    <div className='d-flex' style={{flexDirection : 'column'}}>

                        <label>
                            <input type="checkbox" className=" mr-2" />
                            <span>Brand #1</span>
                        </label>

                        <label>
                            <input type="checkbox" className=" mr-2" />
                            <span>Brand #1</span>
                        </label>

                        <label>
                            <input type="checkbox" className=" mr-2" />
                            <span>Brand #1</span>
                        </label>
                        
                    </div>
                </div>

                </div>
                
            </div>
            <div className="col-md-9 p-3">
                <ProductThumbnail />
                {error ? <div>Error!</div> : 
                loading ? <div>Loading...</div> : 
                values.docs.map((product : any) => <ProductThumbnail key={product.id} pid={product.id} product={product.data()} />)}
            </div>
        </div>
    </div>
  )
}

export default ProductPage