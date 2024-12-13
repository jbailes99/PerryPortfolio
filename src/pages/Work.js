'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

export default function Work() {
  return (
    <div className='bg-white'>
      <main>
        {/* Hero section */}
        <div className='relative isolate overflow-hidden bg-white pb-16 pt-14 sm:pb-10 shadow-sm'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl justify-center py-32 sm:py-48 lg:py-12'>
              <div className='text-center'>
                <h1 className='text-6xl font-bold tracking-tight text-gray-900'>About my Work</h1>
                <p className='mt-12 w-full mx-auto text-2xl leading-8 text-center text-gray-600'>
                  I partner with innovative teams to develop transformative solutions that fuel growth and success. With
                  over a decade of experience, I’ve <strong>led IT operations</strong>,{' '}
                  <strong>built seamless systems from scratch</strong>, and{' '}
                  <strong>streamlined technology to empower businesses </strong>
                  with simple, efficient, and impactful IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work details section */}
        <div className='mt-32 sm:mt-12'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-base font-semibold leading-7 text-indigo-600'>What I Do</h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Delivering Excellence in IT Solutions
              </p>
            </div>
            <div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-20 md:mt-14 lg:px-8'>
              <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                <div className='relative pl-9 flex flex-col '>
                  <dt className='inline font-semibold text-gray-900'>Leadership</dt>
                  <dd className='inline'>Expert in leading teams and driving performance.</dd>
                </div>
                <div className='relative pl-9 flex flex-col'>
                  <dt className='inline font-semibold text-gray-900'>Technical Support</dt>
                  <dd className='inline'>Skilled in resolving complex technical issues.</dd>
                </div>
                <div className='relative pl-9 flex flex-col'>
                  <dt className='inline font-semibold text-gray-900'>Project Management</dt>
                  <dd className='inline'>Proficient in overseeing projects from start</dd>
                </div>
              </dl>
              <div className='text-center mt-12'>
                <a
                  href='mailto:perrybailes@gmail.com'
                  className='inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded'
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Get in Touch section */}
    </div>
  )
}
