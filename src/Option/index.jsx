import React from 'react';
import Icon from '../Icon/index';
import './style.css';
/*4) Nyní chceme komponentě Option přidat callback, pomocí kterého může informovat svého rodiče, že otázka byla zodpovězena. Přidejte tedy komponentě Option prop s názvem onSelected. V této prop očekáváme funkci. Zařiďte, aby komponenta Option zavolala funkci onSelected ve chvíli, kdy na tuto komponentu klikneme.*/

/*3-2) Nyní budeme potřebovat, aby nám komponenta Option skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta Option tedy musí callbacku onSelect předat typ ikony, kterou zobrazuje. */

const Option = ({ type, text, onSelected }) => {
  const handleClick = () => {
    console.log(type);
    onSelected(type);
  };

  return (
    <div onClick={handleClick} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;
