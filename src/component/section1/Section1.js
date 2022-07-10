
import classes from './css/section.module.css'
import Nav from "./Nav"
import Logo from "./Logo"
import Intro from "./Intro.js"
import Text from "./Text.js"

function Section1() { 
  return (
    <div className={classes.section}>
     <Nav />
     <Logo />
     <Intro /> 
     <Text />
    </div>
  ); 
}
export default Section1; 