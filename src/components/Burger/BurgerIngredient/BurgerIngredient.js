import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):

                // ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):

                // ingredient = <div className={classes.BreadTop}>
                //     <div className={classes.Seeds1}></div>
                //     <div className={classes.Seeds2}></div>
                // </div>;
                break;
            case ('special'):
                // ingredient = <div className={classes.Meat}></div>;
                ingredient = <div>Special</div>;
                break;
            case ('soup'):
                // ingredient = <div className={classes.Cheese}></div>;
                ingredient = <div>Soup</div>;
                break;
            case ('bagel'):
                // ingredient = <div className={classes.Bacon}></div>;
                ingredient = <div>Bagel</div>;
                break;
            case ('sideavo'):
                // ingredient = <div className={classes.Salad}></div>;
                ingredient = <div>Side Avo</div>;
                break;
            case ('sideprotein'):
                // ingredient = <div className={classes.Tomato}></div>;
                ingredient = <div>Side Protein</div>;
                break;

            default:
                ingredient = null;

        }

        return ingredient;

    }
}


BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};



export default BurgerIngredient;
