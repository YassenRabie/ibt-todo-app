import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import moment from 'moment'
import { DatePicker } from "antd"

const CalendarFilter = () => {
   const { dateFilter, updateDateFilter } = useContext(GlobalContext)
   const [date, setDate] = useState(dateFilter)

   useEffect(() => {
      updateDateFilter(date)
   }, [date])

   const onChange = (value) => {
      setDate(moment(value).format("DD-MM-YYYY"))
   }

   return (
      <div className="flex">
         <DatePicker className="input" defaultValue={moment(new Date())} onChange={(value) => onChange(value)} />
      </div>
   )
}

export default CalendarFilter
