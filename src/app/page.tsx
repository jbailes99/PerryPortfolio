'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  Bars3Icon,
  DocumentTextIcon,
  LifebuoyIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
  ClipboardIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ChartBarIcon,
} from '@heroicons/react/20/solid'

import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

const BetterVet = '/thevets.png'
const ConstantContact = '/cc.png'
const LogMeIn = '/logmein.png'
const WFF = '/wff.png'
const selfie = '/selfie.jpg'
const selfie2 = '/selfie2.png'

// Add company URLs
const companyLinks = {
  wff: 'https://wickedfrostyfarms.com',
  constantContact: 'https://www.constantcontact.com',
  betterVet: 'https://bettervet.com',
  logMeIn: 'https://www.logmein.com',
}

const features = [
  {
    name: 'Leadership and Team Management',
    description: 'Expert in leading and mentoring teams, driving performance, and managing diverse roles effectively.',
    icon: UserGroupIcon,
  },
  {
    name: 'Technical Support and Problem Solving',
    description:
      'Skilled in resolving complex technical issues and enhancing support effectiveness through strategic solutions.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Project Management',
    description:
      'Proficient in overseeing projects from start to finish, ensuring productivity and managing multiple initiatives.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Compliance and Quality Assurance',
    description: 'Specialized in maintaining high standards of quality and ensuring regulatory compliance.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Training and Development',
    description:
      'Experienced in creating and delivering impactful training programs to boost team skills and performance.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Strategic Planning and Analysis',
    description: 'Skilled in strategic planning and analysis to enhance team efficiency and operational effectiveness.',
    icon: ChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className='bg-white'>
      <main>
        {/* Hero section */}
        <div className='relative isolate overflow-hidden bg-white pb-16 pt-14 sm:pb-10 shadow-sm'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6b3e51] to-[#1b1576] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl justify-center py-32 sm:py-48 lg:py-12'>
              <div className='absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl'>
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25'
                />
              </div>
              <div className='text-center'>
                <div className='bg-gray-900 rounded-xl w-full p-12'>
                  <div className='mx-auto flex justify-center mb-6'>
                    <Image
                      src='/selfie2.png'
                      alt='Perry Bailes'
                      width={128}
                      height={128}
                      className='w-32 h-32 rounded-full object-cover border-4 border-gray-200'
                    />
                  </div>
                  <h1 className='text-6xl font-bold tracking-tight text-gray-200 m:text-9xl'>Perry Bailes</h1>
                  <p className='mt-6 w-3/4 mx-auto text-lg leading-8 text-center text-gray-200'>
                    Experienced professional with a passion for delivering exceptional results. Skilled in leading
                    teams, managing projects, and solving complex problems. Dedicated to continuous improvement and
                    achieving excellence in all endeavors.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className='mx-auto flex flex-grid max-w-lg grid-cols-4 justify-center items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-24 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
              <div className='flex justify-center items-center group'>
                <a
                  href={companyLinks.wff}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transform transition-all duration-300 ease-in-out hover:scale-110'
                >
                  <img alt='Wicked Frosty Farms' src={WFF} className='rounded-md p-2 max-h-16 w-auto object-contain' />
                </a>
              </div>
              <div className='flex justify-center items-center group'>
                <a
                  href={companyLinks.constantContact}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transform transition-all duration-300 ease-in-out hover:scale-110'
                >
                  <img
                    alt='Constant Contact'
                    src={ConstantContact}
                    className='rounded-md p-2 max-h-16 w-auto object-contain'
                  />
                </a>
              </div>
              <div className='flex justify-center items-center group'>
                <a
                  href={companyLinks.betterVet}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transform transition-all duration-300 ease-in-out hover:scale-110'
                >
                  <img alt='BetterVet' src={BetterVet} className='rounded-md p-2 max-h-24 w-auto object-contain' />
                </a>
              </div>
              <div className='flex justify-center items-center group'>
                <a
                  href={companyLinks.logMeIn}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transform transition-all duration-300 ease-in-out hover:scale-110'
                >
                  <img alt='LogMeIn' src={LogMeIn} className='rounded-md p-2 max-h-16 w-auto object-contain' />
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>

        {/* Feature section */}
        <div className='mt-32 sm:mt-12'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-base font-semibold leading-7 text-indigo-600'>Right to it.</h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Don't know me yet? No problem.
              </p>
            </div>
          </div>
          <div className='mx-auto mt-8 max-w-7xl px-6  lg:px-8'>
            <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
              {features.slice(0, 3).map(feature => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <feature.icon aria-hidden='true' className='absolute left-1 top-1 h-5 w-5 text-indigo-600' />
                    {feature.name}
                  </dt>{' '}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Testimonial section */}
          <div className='relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-24 sm:pb-24 xl:pb-0'>
            <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
              <div className='absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl'>
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25'
                />
              </div>
            </div>
            <div className='mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch'>
              <div className='-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none'>
                <div className='relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto'>
                  <Image
                    alt=''
                    src='/selfie.jpg'
                    width={800}
                    height={400}
                    className='absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'
                  />
                </div>
              </div>
              <div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24'>
                <figure className='relative isolate pt-6 sm:pt-12'>
                  <svg
                    fill='none'
                    viewBox='0 0 162 128'
                    aria-hidden='true'
                    className='absolute left-0 top-0 -z-10 h-32 stroke-white/20'
                  >
                    <path
                      d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
                      id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                    />
                    <use x={86} href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb' />
                  </svg>
                  <blockquote className='text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9'>
                    <p>
                      My goals are to continue to grow my industry knowledge and leadership skills. To sow the seeds of
                      innovation, to nurture new attitudes. I strive to make each day better than the last and make my
                      passions profitable. I don't mind the role of student, but I have a knack for being a teacher and
                      mentor. I want to cultivate strong effective relationships and to build winning teams.
                    </p>
                  </blockquote>
                  <figcaption className='mt-8 text-base'>
                    <div className='font-semibold text-white'>Perry Bailes</div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-8 max-w-7xl px-6 py-20 lg:px-8'>
            <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
              {features.slice(3).map(feature => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <feature.icon aria-hidden='true' className='absolute left-1 top-1 h-5 w-5 text-indigo-600' />
                    {feature.name}
                  </dt>{' '}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}
