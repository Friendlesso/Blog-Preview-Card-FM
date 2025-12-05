import UserImage from '../assets/images/image-avatar.webp'
import CardThumbnail from '../assets/images/illustration-article.svg'
import { useState } from 'react';

export function Card() {
  const [hovered, setHovered] = useState<boolean>(false);

  const tags = [
    {
      name: "Learning",
      colorClass: "bg-[var(--learning-tag-color)]"
    }
    // We can add and new tag that is needed here and its respective color
  ];

  const card =
  {
    user: 'Greg Hooper',
    userImage: UserImage,
    thumbnail: CardThumbnail,
    publishDate: '21 Dec 2023',
    title: 'HTML & CSS foundations',
    description: `These languages are the backbone of every website, defining structure, content, and presentation`
  }


  return (
    <article 
      className={` card flex flex-col justify-center max-w-[80vw] w-84  bg-white border border-black box-border p-6 rounded-[1.250rem] gap-6 transition-shadow duration-150 ${hovered  ? 'shadow-(--box-shadow-hovered)' : 'shadow-(--box-shadow)'}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      >

      {/* Map trough the "Tags". useful if we have multiple tags */}
      <img src={card.thumbnail} className='rounded-[0.625rem]' alt="Card Thumbnail" />
      <div className='flex flex-col items-start gap-3'>
        {tags.map(tag => (
          <p
            key={tag.name}
            className={`text-sm/(150%) text-(--text-gray-dark) font-[Figtree-ExtraBold] rounded-sm px-3 py-1 ${tag.colorClass}`}
          >
            {tag.name}
          </p>
        ))}
        <p className='text-(--text-gray-dark) text-sm/(150%) font-[Figtree-Medium] '>
          Published {card.publishDate}
        </p>
        <h3 className={` font-[Figtree-ExtraBold] text-2xl leading-[150%] transition-colors duration-300 ${hovered ? 'text-(--text-yellow-hovered)' : 'text-(--text-gray-dark)'}`}>
          {card.title}
        </h3>
        <p className='leading-[150%] font-[Figtree-Medium] text-(--text-gray-light)'>
          {card.description}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        <img src={card.userImage} className='w-8 h-8' alt="User Image" />
        <p className='text-sm text-(--text-gray-dark) leading-[150%] font-[Figtree-ExtraBold]'>{card.user}</p>
      </div>
    </article>
  )
}