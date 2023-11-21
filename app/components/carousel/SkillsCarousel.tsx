"use client";

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import Image from "next/image";
import Link from "next/link";
import Subtittle from '../subtittle/Subtittle';
import type { Skills } from '@/types/skills';

type Props = {
  skills: Skills[]
};
const SkillsCarousel: React.FC<Props> = ({ skills }) => {


  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const items = skills.reverse().map((skill) => {

    const image = skill?.image || "";
    const skil = skill?.skill || "";
    const url = skill?.url || "";
    return (
      <>
        <Link href={`${url}`} key={skill._id}>
          <div className=" text-center flex justify-center">
            <div
              className="text-sm font-extrabold bg-gradient-to-r 
      from-green-400 to-blue-700 bg-clip-text text-transparent"
            >
              {skil}
            </div>
          </div>

          <div className="mx-2 grid justify-center ">
            {skill.image && (
              <Image
                src={image}
                alt={skil}
                width={116.5}
                height={78.5}
                className="vibrate img-pro rounded-md align-middle"
              />
            )}
          </div>
        </Link>
      </>
    )
  });

  const renderSlideInfo = ({ item, itemsCount }: any) => {
    return `${item}\\${itemsCount}`;
  };

  const renderDotsItem = ({ isActive }: any) => {
    return isActive ? <p className='font-Comic md:mr-3 mr-1 text-green-500 font-black'>🔵</p> : <p className='font-Comic md:mr-3 mr-1 font-black'>⚪</p>;
  };


  const Carousel1 = () => (
    <AliceCarousel
      autoPlay
      infinite
      animationDuration={3000}
      // autoPlayDirection='rtl'
      // mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      // 
      // autoPlayControls
      disableSlideInfo={true}
      renderSlideInfo={renderSlideInfo}
      renderDotsItem={renderDotsItem}
    // renderPrevButton={renderPrevButton}
    // renderNextButton={renderNextButton}`
    />
  );


  return (
    <>
      <Subtittle subtittle="Skills:" marginTop="mt-2" />
      <div className='md:mx-14 mx-6 md:my-14 my-10'>
        {Carousel1()}
      </div>
    </>
  );
}

export default SkillsCarousel;