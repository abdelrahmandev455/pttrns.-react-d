
import classes from "./css/section.module.css"
function Section4(){
  return(
    <div className={classes.section}>
      <div className={classes.fotter}>
        <img src="./img/logo.jpg" alt="logo of pttrns."/>
        <p>
          Stay of the curve <br/>
          and become a better <br/>
          <span>interface designer.</span>
         </p>
         <h4 className={classes.p}>
          2022 Pttrns.All right reseved
         </h4>
         <ul>
          <li>Contact</li>
          <li>Support</li>
          <li>Terms&Privacy</li>
          <li>Twitter</li>
         </ul>
      </div>
    </div>
  );
}

export default Section4