import React from 'react'
import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-col flex-start'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{type} Post</span></h1>
      <p className='desc text-left max-w-md'>{type} and share amazing prompts with the world and let your imagination run wild with any AI-powered platform.</p>
      <form action="" 
      className='mt-10 w-full smax-w-2xl flex flex-col gap-7 glassmorphism'
      onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your Ai Prompt</span>
        </label>
        <textarea
        value={post.prompt}
        onChange={(e) => setPost({...post, prompt: e.target.value})}
        placeholder='Write your prompts here...'
        required
        className='form_textarea'
        />
      </form>
      <form action="" 
      className='mt-10 w-full smax-w-2xl flex flex-col gap-7 glassmorphism'
      onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag 
            <span className='font-normal text-gray-400'> (#weddev, #productdesign, #vacation)</span>
          </span>
        </label>
        <input
        value={post.tag}
        onChange={(e) => setPost({...post, tag: e.target.value})}
        placeholder='Add post tag'
        required
        className='form_input'
        />

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
          <button
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          type='submit'
          disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form