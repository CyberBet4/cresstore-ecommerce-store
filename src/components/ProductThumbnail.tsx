import React from 'react'
import { Link } from 'react-router-dom'

const ProductThumbnail = ({ large = false, pid, prod, products }:any ) => {

    const useLargeThumbnail = () => {
        if(large) {
            return (
                <div className="col-12">
                    <img src="https://via.placeholder.com/454x454" className="img-fluid" alt="Placeholder" />
                </div>
            )
        }
    }

    const useSmallThumbnail = () =>{
        if(!large){
                return(
                <div className="row">
                
                <div className="col">
                    <Link to='/product/1234'>
                    <div className="card" style={{height : 278, width : 278}}>
                        <img src="https://www.gstatic.com/webp/gallery3/1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">N9000</h5>
                            <p className="card-text">
                                Coudory Long Sleeve
                            </p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <div className="card" style={{height : 278, width : 278}}>
                        <img src="https://www.gstatic.com/webp/gallery3/1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">N9000</h5>
                            <p className="card-text">
                                Coudory Long Sleeve
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{height : 278, width : 278}}>
                        <img src="https://www.gstatic.com/webp/gallery3/1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">N9000</h5>
                            <p className="card-text">
                                Coudory Long Sleeve
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    
  return (
    <div>
        {useLargeThumbnail()}
        {useSmallThumbnail()}
        
    </div>
  )
}

export default ProductThumbnail