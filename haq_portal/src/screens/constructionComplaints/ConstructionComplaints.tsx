"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { useConstructionComplaintsVM } from "@/context";
import { UIButton, UIInput, UISep, UITextarea } from "@/ui";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { toast } from "sonner";

export const ConstructionComplaintsScreen = observer(() => {
  const {
    username,
    phoneNumber,
    homeAddress,
    problemFull,
    setUsername,
    setPhoneNumber,
    setHomeAddress,
    setProblemFull,
    sendComplaint,
  } = useConstructionComplaintsVM();

  return (
    <div className={clsx(stylesGlobal.screen, stylesGlobal.center)}>
      <div className={stylesGlobal.center}>
        <h1>Подайте жалобу</h1>
        <h1>на Вашего застройщика</h1>
        <div className={styles.halfSep} />
        <h4>Интерактивный портал города Ташкент.</h4>

        <UISep />
        <UISep />
        <h4>
          Пожалуйста, сообщите нам о нарушениях, допущенных Вашей строительной
          компанией.
        </h4>
      </div>

      <UISep />
      <div style={{ display: "flex", alignSelf: "center", width: "100%" }}>
        <div className={styles.inputWrapper}>
          <UIInput
            placeholder="Ваше имя"
            value={username}
            icon="/svg/user.svg"
            onChange={setUsername}
          />
        </div>
        <div className={styles.inputWrapper}>
          <UIInput
            placeholder="Ваш телефон"
            value={phoneNumber}
            icon="/svg/phone.svg"
            onChange={setPhoneNumber}
          />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder="Ваш фактический адрес проживания (город)"
          value={homeAddress}
          icon="/svg/location.svg"
          iconSize={11}
          onChange={setHomeAddress}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder="Сумма первоначального взноса (если вносили)"
          value=""
          icon="/svg/dollar.svg"
          iconSize={15}
          onChange={() => {}}
        />
      </div>

      <UISep />
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder="Именование компании-застройщика"
          value=""
          icon="/svg/company.svg"
          iconSize={12}
          onChange={() => {}}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder="Именование жилого комплекса"
          value=""
          icon="/svg/house.svg"
          iconSize={12}
          onChange={() => {}}
        />
      </div>

      <UISep />
      <UISep />
      <UITextarea
        value={problemFull}
        placeholder="Краткий текст обращения (300 символов). Например: отсутствие кадастровых документов, разрешений на строительство,
        несоблюдение сроков, приостановка строительства и др нарушения."
        onChange={setProblemFull}
      />
      <div className={styles.subtitle}>Тип обращения: жалоба*</div>

      <UISep />
      <div className={styles.buttonWrapper}>
        <UIButton
          title="Отправить"
          icon="/svg/telegram.svg"
          onClick={sendComplaint}
        />
      </div>

      <UISep />
      <div className={styles.subtitle}>
        Обращения рассматриваются в порядке очереди.
      </div>
      <div className={styles.subtitle}>
        Срок рассмотрения обращения - до 3 рабочих дней.
      </div>
      <div className={styles.subtitle}>
        Пожалуйста, не дублируйте обращение - это не ускорит его обработку.
      </div>
    </div>
  );
});
