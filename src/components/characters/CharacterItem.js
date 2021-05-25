import React from 'react'
import { useTranslation } from 'react-i18next';





const CharacterItem = ({item}) => {

  const { t, i18n } = useTranslation();


    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>{t('char.3')}:</strong> {item.portrayed}
              </li>
              <li>
                <strong>{t('char.4')}:</strong> {item.nickname}
              </li>
              <li>
                <strong>{t('char.5')}:</strong> {item.birthday}
              </li>
              <li>
                <strong>{t('char.6')}:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
        )


}



export default CharacterItem;