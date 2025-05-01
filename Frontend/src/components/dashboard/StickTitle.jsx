import React from 'react'
import { IoCheckbox } from 'react-icons/io5'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const StickTitle = ({ title, bgColor }) => {
  return (
    <div className={`${bgColor} inline-flex items-center gap-1 p-1 pr-2 rounded-sm ${title === "Todo" ? "text-[#202020]" : "text-white"}`}>
      {
        title === "Todo" ? <MdOutlineCheckBoxOutlineBlank /> :
          title === "In Progress" ? <MdOutlineCheckBox /> :
          <IoCheckbox />
      }
      <span className={`font-semibold text-center ${title === "Todo" ? "text-[#202020]" : "text-white"}`}>{title}</span>
    </div>
  )
}

export default StickTitle