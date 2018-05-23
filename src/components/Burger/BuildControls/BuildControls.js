import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Special', type: 'special'},
    {label: 'Soup', type: 'soup'},
    {label: 'Bagel', type: 'bagel'},
    {label: 'Side Avo', type: 'sideavo'},
    {label: 'Side_Protein', type: 'sideprotein'}
]


const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl =>(<BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};


export default buildControls;

