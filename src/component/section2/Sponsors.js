
import classes from "./css/sponsors.module.css"
import Sponsorslogo from "./Helpers/Sponsorslogo.js"

function Sponsors(){
  return(
   <div className={classes.sponsors}>
    <Sponsorslogo img="./img/sponsors1.jpg"/>
    <Sponsorslogo img="./img/sponsors2.jpg"/>
   </div>
  );
}

export default Sponsors