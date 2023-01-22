import React from 'react';
import Image from 'next/image';

interface Props {
  close: () => void;
}
// TODO
function Overlay({ close }: Props) {
  return (
    <div className='fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
      <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
        <div className='mt-3 text-center'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            WeChat
          </h3>
          <Image src='/images/QR.png' alt='QR image' width={400} height={400} />
          <div className='mt-2 px-7 py-3'>
            <p className='text-sm text-gray-500'>Wechat ID: Anktii</p>
          </div>
          <div className='items-center px-4 py-3'>
            <button
              id='ok-btn'
              className='px-4 py-2 bg-pink-300 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300'
              onClick={close}
            >
              Get it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
