import React from 'react'
import { Link } from 'react-router-dom'

const ProductThumbnail = ({ large = false, pid, product }:any ) => {

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
        if(!large && product){
            console.log(pid);
            
                return(
                // <div className="row">
                    <div className="col">
                        <Link to={`/product/${pid}`}>
                        <div className="card" style={{height : 278, width : 278}}>
                            <img src="https://www.gstatic.com/webp/gallery3/1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
            // </div>
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