import {React, Fragment} from "react";
import AvailableMeals from "./AvailableMeals";
import RestaurantSummary from "./RestaurantSummary";

const Meals=()=>{
return (
    <Fragment>
        <RestaurantSummary/>
        <AvailableMeals/>
    </Fragment>
)
}
export default Meals;