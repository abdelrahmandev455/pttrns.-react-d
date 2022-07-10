import classes from "./css/nav.module.css"

function Nav() { 
  return (
    <div className={classes.nav}>
     <button className={classes.black}> Start 3 day free trial</button>
     <button className={classes.white}> Log in </button>
    </div>
  ); 
}
export default Nav; 