import "../index.css";
import memesData from "../memesData";
import { useState } from "react";

export default function MemeGenerator() {
//   const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImages:"http://i.imgflip.com/1bij.jpg",
  })
  const[allMemeImages, setAllMemeImages]= useState(memesData);
  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    const randomImages = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomImages].url;
    setMeme(prevState => {
        return ({
            ...prevState,
            randomImages: url
        })
    });
  }
  return (
    <main className="meme-container">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form-input" />
        <input type="text" placeholder="Bottom Text" className="form-input" />
        <button onClick={handleClick} className="meme-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="image-container">
        <img src={meme.randomImages} alt="" className="meme-image" />
      </div>
    </main>
  );
}
