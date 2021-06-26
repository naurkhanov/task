import React from 'react'
import styles from './Header.module.css'
import crmImg from '../assets/4.png'
import lineModel from '../assets/3.png'
import settingImg from '../assets/2.png'
import target from '../assets/1.png'
function TopHeader (props) {
  return (
    <div className={styles.header}>
      <div className={styles.source}>
        <h4>Источники трафика</h4>
      </div>
      <div className={styles.traffic}>
        <h4>Трафик</h4>
      </div>
      <div className={styles.sales}>
       <div>
         <div className={styles['sales_child']}>
           <img width={20} height={20} src={crmImg} alt="crm"/>
           <h4>Продажи</h4>
         </div>
         <div className={styles['sales_child']}>
           <img width={20} height={20} src={lineModel} alt="crm"/>
           <p>Линейная модель</p>
         </div>
       </div>
      </div>
        <div className={styles.target}>
          <div>
            <div className={styles['sales_child']}>
              <img src={settingImg} width={20} alt=""/>
              <h4>Цель с осн. GA</h4>
            </div>
            <div className={styles['sales_child']}>
              <img width={20} height={20} src={target} alt="crm"/>
              <p>Составная цель</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TopHeader