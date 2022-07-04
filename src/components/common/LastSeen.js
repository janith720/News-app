import React from 'react'
//import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

export default function LastSeen( {date} ) {

  const formatter = buildFormatter(frenchStrings)

  return (
    <div>
     
      <TimeAgo date={date} formatter={formatter} />
    </div>
  )
}