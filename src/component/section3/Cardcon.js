import Card from "./Card.js"
import classes from "./css/cardcon.module.css"

function Cardcon(){
  return(
   <div className={classes.cardcon}>
     <Card class="normal" permonth="Quarterly Plan" money="$27" month="$9 per month Billed every 3 months" />
     <Card class="special" permonth="Yearly Plan" money="$72" month="$6 per month Billed only once per year" />
    <Card class="unspecial" permonth="month to month plan" money="$12" month="$6 per month Billed only once per year" />
     </div>
  )
}
export default Cardcon