import React from 'react'

export function AltButton({title}) {
    return (
        <div>
            <button>{title}</button>
        </div>
    )
}

function Button({title, cStyle, to}) {
    // function handleClick() {
    //     const str = "Hello from " + title
    //     alert(str)
    // }

    // function handleMouseOver() {
    //     const str = "Cursor over the button"
    //     alert(str)
    // }

  return (
    <div>
        {/* <button style={cStyle}><a href={to}>{title}</a></button> */}
        {/* <button type='submit' onClick={handleClick} onMouseOver={handleMouseOver} style={cStyle}>{title}</button> */}
        <button type='submit' style={cStyle}>{title}</button>
    </div>
  )
}

export default Button


