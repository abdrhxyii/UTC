"use client";
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ title, imageUrl }: any) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-6">
      <div className="h-48 flex items-center justify-center">
        <Image src={imageUrl} alt={title} width={200} height={150} objectFit="contain" />
      </div>
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <Link href="/" className="text-blue-500 hover:underline mt-2 inline-block">
        VIEW ALL
      </Link>
    </div>
  );
};

export default CategoryCard;
