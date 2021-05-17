import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

/*3) Zařiďte následující: pokud je ve stavu answered hodnota false, chceme, aby componenta QuestionBody měla ikonku symbolQuestion. Pokud je stav true, chceme, aby typ ikonky byl symbolTick.*/

/*5) V komponentě Question si vytvořte funkci handleSelect. Všem komponentám Option pak skrze prop onSelect tuto funkci předejte. Funkce handleSelect nechť nastaví stav answered na hodnotu true. Takto zajístíme, že kdykoliv uživatel klikne na nějakou možnost, stav se nám nastaví na true a tím se změní ikonka v těle otázky na fajfku.*/

/*3-1) Stav answered uvnitř komponenty Question přejmenujte na answer. Nýní bude obsahovat řetězec s typem ikonky pro QuestionBody. Výchozí hodnota stavu bude symbolQuestion. */

/*3-3) Funkce handleSelect v komponentě Question bude pak mít jeden parametr, který nazveme iconType. Jakmile se tato funkce zavolá, nastavíme náš stav answer na hodnotu získanou v tomto parametru. */

const Question = (props) => {
  const [answer, setAnswer] = useState('symbolQuestion');

  const handleSelect = (iconType) => {
    console.log(iconType);
    setAnswer(iconType);
  };

  return (
    <div className="question">
      <QuestionBody iconType={answer} text={props.text} />
      <div className="question__options">
        <Option
          onSelected={handleSelect}
          type="smileyStrongYes"
          text="Souhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyYes"
          text="Spíše souhlasím"
        />
        <Option onSelected={handleSelect} type="smileyNeutral" text="Nevím" />
        <Option
          onSelected={handleSelect}
          type="smileyNo"
          text="Spíše nesouhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyStrongNo"
          text="Nesouhlasím"
        />
      </div>
    </div>
  );
};

export default Question;
