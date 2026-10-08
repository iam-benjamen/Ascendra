import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({ status: false, key: "" })

    const handleToggle = (key) => {
        setIsActive(isActive.key === key ? { status: false } : { status: true, key })
    }

    return (
        <>
            <ul className="navigation">
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="menu-item-has-children"><Link href="/courses">Courses</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/courses">All Courses</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div>
                </li>
                <li><Link href="/contact">Services</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}
