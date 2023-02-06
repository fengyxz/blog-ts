import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>({});
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lvdanyu39@gmail?subject=${formData.subject}&body=Hi,my name is ${formData.name}, ${formData.message}(${formData.email})`
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='z-20 absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl tracking-[20px] '>
        Contact
      </h3>

      <div className='flex absolute top-36 bottom-100 flex-col space-y-10'>
        <h4 className='text-3xl font-semibold text-center'>
          I have got just what you need.
          <span className='decoration-pink-300/50 underline'> Let's Talk</span>
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-pink-200/50 h-7 w-7 animate-pulse' />
            <p className='text-xl'>+86 17799855571</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-pink-200/50 h-7 w-7 animate-pulse' />
            <p className='text-xl'>lvdanyu39@gmail.com</p>
          </div>

        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-1 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button type="submit" className='bg-pink-200 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )

}

export default ContactMe