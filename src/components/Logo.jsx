import React from 'react'

function Logo({width = '100px',styling}) {
return (
<img 
src="../../IMG_20250227_210506-removebg-preview.png"
width={width}
className={`animate-spin ${styling}`}
/>
)
}

export default Logo
