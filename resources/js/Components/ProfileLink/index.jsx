import React from "react";

export default function ProfileLink({user}) {
    return (
        <div className={'px-8'}>{user.name}</div>
    )
}
