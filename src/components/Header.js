import React from 'react'

function Header({isItDarkMode, handleDarkMode}) {
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button
                    onClick={handleDarkMode}
                >
                {isItDarkMode ? "Dark" : "Light"} Mode
                </button>

            </header>
        </div>
    )
}

export default Header; 