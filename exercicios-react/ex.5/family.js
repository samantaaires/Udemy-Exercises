import React from 'react'
import {childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>
        <h1> Familia </h1>
        
        {/* {React.cloneElement(props.children, props)}  -> assim pasa as propriedades direto, o que nao é bom*/}
         {/* {React.cloneElement(props.children,{...props})} --> Assim é melhor*/}
        {childrenWithProps(props.children, props)}
    </div>
)