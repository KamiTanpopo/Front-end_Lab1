import React, {useState} from 'react'
import '../css/Header.css'

export default function Header() {
    const [setFirstStyle] = useState({ background: 'rgb(255, 166, 134)', color: '#516364'});
    const [setSecondStyle] = useState({ background: '#b7ffc3', color: '#788788'});
    let clickedBefore = 0;
    const change_first_element = () => {
        if (clickedBefore===0)
            {
                setFirstStyle({ background: 'rgb(134, 196, 255)', color: 'Black'});
                clickedBefore = 1;
        }
        else
            {
                setFirstStyle({ background: 'rgb(255, 166, 134)', color: '#516364'});
                clickedBefore = 0;
            }
        }
    const change_second_element = () => {
        if (clickedBefore===0)
            {
                setSecondStyle({ background: 'rgb(255, 251, 134)', color: 'Black'});
                clickedBefore = 1;
        }
        else
            {
                setSecondStyle({ background: '#b7ffc3', color: '#788788'});
                clickedBefore = 0;
            }
        }

return (<>
        <div id="first_element" onclick={change_first_element}>
            <h2>Клеба Олександра Андріївна</h2>
        </div>
        <div class="second_element" onclick={change_second_element}>
            Дата народження: 29 серпня 2003р. <br/>
            Місце народження: пологовий будинок міста Шостка, Сумської області
        </div>
    </>)
}
