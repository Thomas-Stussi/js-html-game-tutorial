import React from 'react';
import styles from './engine.module.scss';
import { useDidMount, useEvent } from '../../hooks';


export default function Engine() {
    const handleKeyPress = (e) => {
        if (e.key === ' ') {
            console.log('SPACEBARRRRRRR')
        }
    };

    useEvent('keyup', handleKeyPress);

    return (
        <div
          className={styles.container}
        >
          <span
            className={styles.character}
          />  
        </div>
    );
}