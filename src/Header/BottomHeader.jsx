import React from 'react'
import styles from './Header.module.css'
function BottomHeader (props) {
  return (
    <div className={styles.header}>
      <div className={styles.source}>
        <h4>Итого</h4>
      </div>
      <div className={styles.traffic}>
        <ul className={styles.categories}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div className={styles.sales}>
        <ul className={styles.categories}>
          <li>2323</li>
          <li>0.424</li>
          <li>0.4343</li>
        </ul>
      </div>
      <div>
        
      </div>

    </div>
  )
}

export default BottomHeader