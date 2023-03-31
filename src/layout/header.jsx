import React ,{ useState} from "react";
import LogoutButton from "../components/Logoutbutton";

export default function header() {
    return( 
        <div className="header">
            <header>
                <h1>LentalCare</h1>
                <nav>
                    <ul>
                        <li><a href="{() => false}">홈</a></li>
                        <li><a href="{() => false}">음주</a></li>
                        <li><a href="{() => false}">흡연</a></li>
                        <li><a href="{() => false}">충돌</a></li>
                    </ul>
                </nav>
                <LogoutButton/>
            </header>
        </div>

    )
}