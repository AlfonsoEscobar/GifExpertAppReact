/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";
import { GifItem } from "./GifItem";

export const GridGift = ({ category }) => {

  const [images, setImages] = useState(['one']);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect( () => {
    getImages();
  }, []);


  return (
    <>
        <h3>{ category }</h3>
        
        <div className="card-grid">
          {
            images.map(( images) => (
              <GifItem 
                key={images.id}
                { ...images }
              />
            ))
          }
        </div>
    </>
  )
}
