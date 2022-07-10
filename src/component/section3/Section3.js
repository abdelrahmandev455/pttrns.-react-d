
import classes from "./css/section.module.css"
import Cardcon from "./Cardcon.js"

function Section3(){
  return(
    <div className={classes.section}>
     <h1>
      Level up <br/> your craft <br/>
      and career <br/> with Pttrns.
     </h1>
     <p className={classes.p}>
      Choose the right plane for you
     </p>
     <Cardcon />
    </div>
  );
}

export default Section3