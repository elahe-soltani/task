import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';
const Card = ({id,title,body}) => {
    return (
        <div className={styles.container}>
            <div>
            <h3><Link to={`/updatePage/${id}`}> {title}</Link> </h3>
            <p>{body}</p>
            </div>
            
        </div>
    );
};

export default Card;