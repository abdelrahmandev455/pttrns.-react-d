
import classes from "./css/card.module.css"
import "./css/card.css"

function Card(props){
  return(
    <>
     <div className={props.class}>
      <p className={classes.money}>
       {props.permonth}
      </p>
      <p>
       <span className={classes.title}><b>{props.money}</b></span> <br />
       <span className={classes.moneypermonth}>{props.month}</span>
      </p>
      <ul>
       <li>Save hours of research time</li>
       <li>Store of your favorites for future refrence</li>
       <li>Acsses to 7k+ patterns...and counting</li>
      </ul>
      <button style={{
        padding:"1rem 1rem",
        background:"black",
        color: "white",
        border: "none",
        borderRadius: "25px",
        width:"60%" ,
      }}>Start your free trial</button>
     </div>
    </>
  );
}

export default Card