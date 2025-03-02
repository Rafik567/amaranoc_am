import React from 'react';
import "./post.css";
import { postData } from "../Data/DataBase";

interface PostDataField {
  id: number;
  type: string;
  className: string;
  placeholder: string;
}

const Post = () => {
  return (
    <>
      <div className="photo flex justify-center flex-wrap">
        <div className="mt-[100px] bg-blue-1 shadow-lg shadow-gray-500/50 w-[90%] sm:w-[1100px] h-[300px] rounded-[10px] border-2 border-gray-300">
          <div className='h-full w-full rounded-1xl overflow-hidden bg-white/10 backdrop-blur-[20px] border border-white/50'>
            <div className="flex flex-wrap justify-center">
              <h1 className="text-white text-[24px] sm:text-[30px]">Տեղադրել հայտարարություն</h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <p className="text-white mt-[20px] text-[14px] sm:text-[16px]">
                Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[15px] sm:gap-[20px] mt-[70px]">
              {postData.map((field: PostDataField) => (
                <input
                  key={field.id}
                  type={field.type}
                  className={field.className}
                  placeholder={field.placeholder}
                />
              ))}
              <button className="bg-orange-500 rounded-[30px] w-[80%] sm:w-[100px] h-[50px]">
                Ուղարկել
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
