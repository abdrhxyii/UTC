"use client";
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ imageSrc, name, username, date, text, icon }: any) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-2xl flex flex-col items-start justify-between space-y-4 border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mb-3">
          <Image src={imageSrc} alt={name} width={48} height={48} objectFit="cover" />
        </div>
        <div>
          <h3 className="text-md font-semibold">{name} <CheckCircleIcon className="w-4 h-4 inline text-blue-500" /></h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{text}</p>
      <div className="flex justify-between items-center w-full">
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  )
}

export default TestimonialCard