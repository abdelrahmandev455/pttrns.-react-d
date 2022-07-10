
import classes from "./css/section.module.css"
import Sponsors from "./Sponsors.js"

function Section2(){
  return(
    <div className={classes.section}>
      <h3>
        <center>
         Used daily by individuals teams and companies of All sizes
         </center>
      </h3>
      <Sponsors />
    </div>
  )
}

export default Section2