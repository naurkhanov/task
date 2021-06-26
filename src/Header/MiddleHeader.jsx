import React from 'react'
import styles from './Header.module.css'
function MiddleHeader (props) {
  return (
    <div className={styles.header}>
      <div className={styles.source}>
        <h4>Название</h4>
      </div>
      <div className={styles.traffic}>
        <ul className={styles.categories}>
          <li>Показы</li>
          <li>Клики</li>
          <li>Сеансы</li>
          <li>CTR, %</li>
          <li>Цена клика</li>
          <li>Затраты</li>
        </ul>
      </div>
      <div className={styles.sales}>
        <ul className={styles.categories}>
          <li>Кол-во</li>
          <li>CPA</li>
          <li>Выручка</li>
        </ul>
      </div>
      <div className={styles.target}>
        <ul className={styles.categories}>
          <li>Кол-во</li>
          <li>CPA</li>
          <li>CR, %</li>
        </ul>
      </div>
    </div>
  )
}

export default MiddleHeader