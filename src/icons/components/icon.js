import React from "react";
function Icon(props) {
    const{
        fill,
        size
    }=props
    return (
        <svg fill={fill} viewBox="0 0 32 32" height={size} width={size}>
            {props.children}
        </svg>
    );
}
export default Icon;