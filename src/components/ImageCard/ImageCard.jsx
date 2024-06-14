import styles from './ImageCard.module.css';
import PropTypes from 'prop-types';

const ImageCard = ({url})=>{
    return <img className={styles.image}src={url} alt="" />
}

ImageCard.propTypes = {
    url:PropTypes.string,
}


export default ImageCard;