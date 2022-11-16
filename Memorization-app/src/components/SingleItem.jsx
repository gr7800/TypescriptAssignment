import { memo } from "react";
import { listType } from "./Todo";
import styles from './SingleItem.module.css';
import useTimeout from "../hooks/UseTimeout";

type toggleType = {
    handleToggle: (s: number) => void;
}

const SingleITem = (props: listType & toggleType) => {
    const color = useTimeout(2);
  return (
    <div className={styles.cont}>
        <div style={{background:`#${color}`}}></div>
    <h3>{props.title}</h3>
    <h3>{props.body}</h3>
    <button onClick={()=>props.handleToggle(props.id)}>{props.verify?"Verified":"Verify"}</button>
    </div>
  )
}

export default SingleITem;

export const MemoisedSingleItem = memo(SingleITem)