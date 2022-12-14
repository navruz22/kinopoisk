import React from "react";
import InfoContent from "./components/InfoContent/InfoContent";
import InfoPicture from "./components/InfoPicture/InfoPicture";
import styles from "./Info.module.css";

const Info = ({ film }) => {
  return (
    <div className={styles.info}>
      <InfoPicture imgUrl={film.poster?.url} />
      <InfoContent film={film} />
    </div>
  );
};

export default Info;
