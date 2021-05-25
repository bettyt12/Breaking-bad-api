import React ,{useState} from 'react';
import { useTranslation } from 'react-i18next';

const Search = ({getQuery}) => {

    const [text,setText]=useState('')

    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }
    const { t, i18n } = useTranslation();

    return (
        <section>
            <form className='search'>
                <input 
                type="text" 
                className='form-control'
                placeholder={t('char.1')}
                value={text}
               
                onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
