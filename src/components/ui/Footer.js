import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="footer">
                <div>
                <p className="text-center mt-2">&copy; Juan Villa - { year } &copy;</p>
                </div>
            </footer>
        </div>
    )
}
