export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-activity'>
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

export const CustomTooltipSessions=({ active, payload }) =>{
  if (active && payload) {
    return (<><div className='custom-tooltip-sessions'>{`${payload[0].value} min`}</div></>)
  }

  return null
}