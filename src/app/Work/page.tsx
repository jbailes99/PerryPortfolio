'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

export default function Work() {
  return (
    <div className='bg-white min-h-screen'>
      <main className='pt-12'>
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
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className='bg-gray-50 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Career Journey</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>Key milestones in my professional development</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='relative'>
                {/* Timeline line */}
                <div className='absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2'></div>

                {/* Timeline items */}
                <div className='space-y-8'>
                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='ml-auto w-5/12 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Senior IT Manager</h3>
                        <p className='mt-1 text-sm text-indigo-600'>2018 - Present</p>
                        <p className='mt-2 text-gray-600'>
                          Led cross-functional teams in implementing enterprise-wide IT solutions, driving digital
                          transformation initiatives.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Managed $2M+ IT budget</li>
                          <li>• Led team of 15+ professionals</li>
                          <li>• Implemented cloud-first strategy</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='mr-auto w-5/12 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>IT Consultant</h3>
                        <p className='mt-1 text-sm text-indigo-600'>2015 - 2018</p>
                        <p className='mt-2 text-gray-600'>
                          Provided strategic IT guidance to multiple organizations, optimizing their technology
                          infrastructure.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Advised 20+ clients</li>
                          <li>• Reduced costs by 30%</li>
                          <li>• Improved system uptime</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='ml-auto w-5/12 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Systems Engineer</h3>
                        <p className='mt-1 text-sm text-indigo-600'>2012 - 2015</p>
                        <p className='mt-2 text-gray-600'>
                          Designed and implemented critical infrastructure systems, ensuring high availability and
                          performance.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Built scalable systems</li>
                          <li>• Automated deployments</li>
                          <li>• Enhanced security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Technical Expertise</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>Core competencies and technologies I work with</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Infrastructure</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Cloud Architecture</li>
                    <li>• Network Design</li>
                    <li>• System Integration</li>
                    <li>• Security Implementation</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Management</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Team Leadership</li>
                    <li>• Project Planning</li>
                    <li>• Budget Management</li>
                    <li>• Strategic Planning</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Development</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• System Architecture</li>
                    <li>• API Design</li>
                    <li>• Database Management</li>
                    <li>• DevOps Practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-50 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Let's discuss how I can help your organization achieve its technology goals.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='mailto:perrybailes@gmail.com'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get in Touch
                </a>
                <a href='/contact' className='text-sm font-semibold leading-6 text-gray-900'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Client Testimonials</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>What clients say about working with me</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "Perry transformed our IT infrastructure with innovative solutions that significantly improved our
                    operational efficiency."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Sarah Johnson, CEO</p>
                </div>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "His leadership and technical expertise were instrumental in our digital transformation journey."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Michael Chen, CTO</p>
                </div>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "Working with Perry was a game-changer for our business. His solutions were both practical and
                    forward-thinking."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Emily Rodriguez, Director of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
      </main>
      {/* Get in Touch section */}
    </div>
  )
}
