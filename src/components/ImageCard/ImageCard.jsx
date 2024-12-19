import css from './ImageCard.module.css'

export default function ImageCard({image, onClick}){
  return(
    <div className={css.container}>

<img onClick={()=> onClick(image)} className={css.cardImg} src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}