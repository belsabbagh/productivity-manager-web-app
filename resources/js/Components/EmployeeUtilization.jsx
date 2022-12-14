function formatColor(r, g, b) {
    return `rgb(${r},${g},${b})`
}

function getUtilizationColor(val) {
    const r = (val <= 1) ? 255 * val : 255,
        g = (val <= 1) ? 255 : 100,
        b = 100
    return formatColor(r, g, b)
}

export default function EmployeeUtilization({value, projectCount}){
    return(
        <div className="flex flex-row justify-between items-center px-6">
            <div>
                <div className="flex flex-row">
                    <div className="rounded-full p-2" style={
                        {
                            backgroundColor: getUtilizationColor(value)
                        }
                    }>
                        {value}
                    </div>
                    <div className="p-2">
                        {(value>1)? "OverUtilized": ""}
                    </div>
                </div>
            </div>
            <div>
                {(projectCount>1)? "CrossUtilized": ""}
            </div>
        </div>
    )
}
