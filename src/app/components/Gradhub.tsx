'use client'

import Image from "next/image"
import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Clock, Home, HelpCircle, User, CalendarDays, MessagesSquare } from 'lucide-react'
import img1 from "../assets/Group 8.png"

export default function Component() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  
  const handleDelete = (time:string) => {
    if (selectedSlot === time) {
      setSelectedSlot(null); 
    }
  };


  const handleSlotClick = (time: string) => {
    setSelectedSlot(time);
  };

  const changeMonth = (increment: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + increment)
      return newDate
    })
  }

  
  const renderSlotDetails = (time:string) => {
    switch (time) {
      case '11:00 AM':
        return (
          <div className="flex flex-col items-start">
            <span className="text-[#000000] text-xl">Slot 1</span>
            <span className="text-gray-500">Time: {time}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => handleDelete(time)}
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        );
      case '12:00 PM':
        return (
          <div className="flex flex-col items-start">
            <span className="text-[#000000] text-xl">Slot 2</span>
            <span className="text-gray-500">Time: {time}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => handleDelete(time)}
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        );
      case '13:00 PM':
        return (
          <div className="flex flex-col items-start">
            <span className="text-[#000000] text-xl">Slot 3</span>
            <span className="text-gray-500">Time: {time}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => handleDelete(time)}
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        );
      default:
        return <span>{time}</span>;
    }
  };

  const renderCalendar = () => {
    const today = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = Array.from({ length: 42 }, (_, i) => {
      const day = i - (firstDay - 1)
      return day > 0 && day <= daysInMonth ? day : null
    })

    return days.map((day, index) => (
      <div
        key={index}
        className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
          ${day === selectedDate ? 'bg-blue-500 text-white' :
            (day && day >= 24 && day <= 29) ? 'text-blue-500' : 'text-gray-500'}
          ${day === null ? 'invisible' : ''}`}
        onClick={() => day && setSelectedDate(day)}
      >
        {day}
      </div>
    ))
  }

  return (
    <div className="flex flex-col h-screen bg-[#F0F8FF]">
      <header className="bg-[#00BFFF] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Image src={img1} alt="Logo" width={43} height={43} className="rounded-full cursor-pointer" />
          </div>
          <span className="text-2xl font-bold cursor-pointer">Grad<span className="text-[#000000]">Hub</span></span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-[#dbf5ff] rounded-full">
            <MessagesSquare className="h-5 w-5 text-[#000000]" />
          </button>
          <button className="p-2 bg-[#dbf5ff] rounded-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#000000]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 flex bg-[#dbf5ff] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#000000]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <ChevronDown className="text-[#000000] font-bold w-3 h-3" />
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="w-48 bg-white p-4 flex flex-col">
          <div className="space-y-4 flex-grow">
            <button className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100">
              <Home className="w-7 h-7" />
              <span>Home</span>
            </button>
            <button className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded bg-[#ebf9ff]">
              <User className="w-7 h-7 text-[#00b2f2]" />
              <span className="text-[#00b2f2]">Applicants</span>
            </button>
            <button className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100">
              <CalendarDays className="w-7 h-7" />
              <span>Calendar</span>
            </button>
          </div>
          <button className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100 mt-auto">
            <HelpCircle className="h-6 w-6" />
            <span>Help</span>
          </button>
        </nav>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-center space-x-8">
            <div className="relative flex items-center">
              <div className="bg-white text-[#20b038] border border-[#20b038] px-4 py-2 cursor-pointer rounded">Assessment</div>
              <div className="absolute left-full w-16 h-0.5 bg-[#4CAF50]"></div>
            </div>
            <div className="relative flex items-center">
              <div className="bg-white text-[#20b038] border border-[#20b038] px-4 py-2 cursor-pointer rounded">Interview 1</div>
              <div className="absolute left-full w-16 h-0.5 bg-[#878787]"></div>
            </div>
            <div className="relative flex items-center">
              <div className="bg-white text-[#525252] border border-[#939596] px-4 py-2 cursor-pointer rounded">Interview 2</div>
              <div className="absolute left-full w-16 h-0.5 bg-[#878787]"></div>
            </div>
            <div className="relative flex items-center">
              <div className="bg-white text-[#525252] border border-[#939596] px-4 py-2 cursor-pointer rounded">Offer letter</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-[#58cbf5]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Interview 1</h2>
              <button className="bg-[#00BFFF] text-white px-4 py-2 rounded text-sm">
                View students
              </button>
            </div>
            <p className="text-[#000000] mb-4">(Create slots for interview)</p>
            <div className="flex space-x-8">
              <div className="space-y-4 w-40">
                <div className="relative flex items-center border border-gray-300 p-2 rounded bg-white cursor-pointer">
                  <Clock className="h-5 w-5 text-gray-400 mr-10" />
                  <span className="text-gray-700 flex-1">Duration</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="relative flex items-center border border-gray-300 p-2 rounded bg-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 mr-10">
                    <path d="M12.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75h-.5ZM17.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75h-.5ZM3.288 4.819A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.277l6.323-3.906a1.5 1.5 0 0 0 0-2.552L3.288 4.819Z" />
                  </svg>
                  <span className="text-gray-700 flex-1">Interval</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="relative w-48 flex items-center border border-gray-300 p-2 rounded bg-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mr-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span className="text-gray-700">Graphic designer</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">Select date and time</h3>
                <div className="flex justify-between items-center mb-4">
                  <button onClick={() => changeMonth(-1)}>
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                  <button onClick={() => changeMonth(1)}>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                    <div key={day} className="text-xs font-semibold text-gray-500">{day}</div>
                  ))}
                  {renderCalendar()}
                </div>
                <div className="w-2/5 p-6">
                  <h3 className="text-lg font-semibold mb-2">Time zone</h3>
                  <div className="relative flex items-center border border-gray-300 p-2 rounded bg-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-800 font-bold mr-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span className="text-gray-700 flex-1">Indian standard time</span>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              {selectedDate && (
                <div className="w-48">
                  <h3 className="text-lg font-semibold mb-4">
                    {selectedDate} {currentDate.toLocaleString('default', { month: 'long' })}, {currentDate.getFullYear()}
                  </h3>
                  <div className="space-y-2">
                    {['11:00 AM', '12:00 PM', '13:00 PM'].map((time) => (
                      <div key={time} className="relative">
                        <button className="w-full p-2 text-sm text-[#5fcdf5] rounded border border-[#5fcdf5] flex items-center justify-between" onClick={() => handleSlotClick(time)}>
                          <span>{time}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedSlot && (
                <div className="w-48 mt-4">
                  <h3 className="text-lg font-semibold mb-4">Details for {selectedSlot}</h3>
                  <div className="space-y-2">
                    <div className="relative">
                      <button className="w-full p-2 text-sm text-[#5fcdf5] rounded border border-[#5fcdf5] flex items-center justify-between">
                        {renderSlotDetails(selectedSlot)}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}