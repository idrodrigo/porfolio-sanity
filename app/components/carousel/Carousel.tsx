"use client";

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import Subtittle from '../subtittle/Subtittle';
import { useClient } from 'sanity';

async function Carousel() {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };


  const projects = await getProjects();
  const pro = projects || "";

  const items =
    pro.reverse().map((project) => {
      const slug = project?.slug || "";
      const image = project?.image || "";
      const name = project?.name || "";
      const tools = project?.tags || [];
      return (
        <div key={project._id} className='flex justify-center mb-6'>
          <Link
            href={`/projects/${slug}`}
            key={project._id}
            className="slide-top shadow-lg border border-gray-100 rounded-3xl hover:shadow-inner max-w-[300px] min-w-[300px]
            max-h-[430px] min-h-[430px] hover:transition"
          >
            <div className="p-2 text-center flex justify-center">
              <div
                className="text-xl font-extrabold bg-gradient-to-r 
  from-green-400 to-blue-700 bg-clip-text text-transparent"
              >
                {name}
              </div>
            </div>
            <div className="mx-2 grid justify-center ">
              {project.image && (
                <Image
                  src={image}
                  alt={name}
                  width={150}
                  height={1080}
                  className="object-cover  rounded-md align-middle "
                />
              )}
            </div>

            <div className="mx-4 my-4 flex-wrap flex items-center justify-around gap-x-auto gap-y-3 text-sm text-gray-500">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="border border-blue-100/30 shadow-inner shadow-blue-500/20 rounded-full px-3 "
                >
                  {tool}
                </div>
              ))}
            </div>
          </Link>
        </div>
      );
    })

  const renderSlideInfo = ({ item, itemsCount }: any) => {
    return `${item}\\${itemsCount}`;
  };

  const renderDotsItem = ({ isActive }: any) => {
    return isActive ? <p className='font-Comic md:mr-3 mr-1 text-green-500 font-black'>🔵</p> : <p className='font-Comic md:mr-3 mr-1 font-black'>⚪</p>;
  };


  const Carousel1 = () => (
    <AliceCarousel
      mouseTracking
      // disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      // 
      // autoPlayControls
      disableSlideInfo={false}
      renderSlideInfo={renderSlideInfo}
      renderDotsItem={renderDotsItem}
    // renderPrevButton={renderPrevButton}
    // renderNextButton={renderNextButton}
    />
  );


  return (
    <>
      <Subtittle subtittle="Projects:" marginTop="md:mt-2" />
      <div className='pt-7 mx-2'>
        {Carousel1()}
      </div>
    </>
  );
}

export default Carousel;