import React from 'react'

export default props => (
    <div>
        <h1> Familia </h1>
        
        {/* {React.cloneElement(props.children, props)}  -> assim pasa as propriedades direto, o que nao é bom*/}
         {/* {React.cloneElement(props.children,{...props})} --> Assim é melhor*/}
        {React.Children.map(props.children,
            child => React.cloneElement(child, {...props}))}
    </div>
)