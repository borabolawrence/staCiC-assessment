'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import Loader from './Loader';

export default function Card({ name, avatar, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description.length > 100 && !isExpanded
    ? `${description.substring(0, 100)}...`
    : description;

  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <Image className={styles.avatar} src={avatar} alt="avatar" height={150} width={150} priority/>
      <p className={styles.description}>{truncatedDescription}</p>
      {description.length > 100 && (
        <button className={styles.readMore} onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
