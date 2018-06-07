import React from 'react'

export const Details = (props) => (
    <div className="extra content">
        <p>Greased: {props.hog.greased ? "Yes" : "No"}</p>
        <p>Weight: {props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
        <p>Achievement: {props.hog["highest medal achieved"]}</p>
        <em><p className="extra content">Click to hide</p></em>
    </div>
)

