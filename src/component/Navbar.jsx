"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    console.log({ pathname });
    return (
        <>
            <nav className="navbar p-3" style={{ backgroundColor: "#c3e3ff" }}>
                    <img src="/images/school_logo.jpeg" width={120} height={120} />
                    <div className="mx-auto d-flex flex-column align-items-center" style={{marginLeft : "auto"}}>
                        <h1>S.N.B.P. School & Junior College</h1>
                        <h3>S.E.SOCIETY&#39;S</h3>
                        <h4>Yerwada, Pune&#8210;06</h4>
                    </div>
            </nav>

            <nav className="nav nav-pills nav-justified p-3">
                <Link className={pathname === "/section_one" ?
                    "nav-link active"
                    :
                    "nav-link"} aria-current="page" href="/section_one">
                    Section 1
                </Link>
                <Link className={pathname === "/section_two" ?
                    "nav-link active"
                    :
                    "nav-link"} href="/section_two">
                    Section 2
                </Link>
                <Link className={pathname === "/result" ?
                    "nav-link active"
                    :
                    "nav-link"} href="/result">
                    Result
                </Link>
            </nav>

        </>

    )
}

export default Navbar