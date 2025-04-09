'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

export default function Work() {
  return (
    <div className='bg-white min-h-screen'>
      <main className=''>
        {/* <div className='py-12 bg-gray-50 '>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-base font-semibold leading-7 text-center text-indigo-600'>What I Do</h2>
              <p className='mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Technical and Team Management Excellence
              </p>
            </div>
            <div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-20 md:mt-14 lg:px-8'>
              <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                <div className='relative pl-9 flex flex-col'>
                  <dt className='inline font-semibold text-gray-900'>Leadership</dt>
                  <dd className='inline'>Expert in cultivating successful teams and driving business initiatives.</dd>
                </div>
                <div className='relative pl-9 flex flex-col'>
                  <dt className='inline font-semibold text-gray-900'>Systems Management</dt>
                  <dd className='inline'>Proficient in systems administration and technical operations.</dd>
                </div>
                <div className='relative pl-9 flex flex-col'>
                  <dt className='inline font-semibold text-gray-900'>Project Management</dt>
                  <dd className='inline'>Skilled in implementing initiatives aligned with business goals.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div> */}
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Areas of Expertise</h2>
              <p className='mt-2 text-lg leading-8 text-indigo-600'>Core competencies and technical proficiencies</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Technical Systems</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• CRM & AI Implementation</li>
                    <li>• System Administration</li>
                    <li>• Infrastructure Management</li>
                    <li>• Security & Compliance</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Leadership</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Team Development</li>
                    <li>• Strategic Planning</li>
                    <li>• Budget Management</li>
                    <li>• Process Improvement</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Business Impact</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Project Management</li>
                    <li>• Data Analytics</li>
                    <li>• Vendor Relations</li>
                    <li>• Change Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className='bg-gray-50 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Career Journey</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>Two decades of IT leadership and innovation</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='relative'>
                <div className='absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2'></div>
                <div className='space-y-8'>
                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='ml-auto sm:w-5/12 p-6 bg-white rounded-lg shadow-sm transition-all duration-300 transform group-hover:scale-[1.1] hover:shadow-lg cursor-pointer'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Director of IT and Technical Operations</h3>
                        <p className='mt-1 text-sm text-indigo-600'>TheVets • 2024 - Present</p>
                        <p className='mt-2 text-gray-600'>
                          Leading technical operations and driving organizational excellence through innovative
                          solutions.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Created culture of accountability and leadership</li>
                          <li>• Implemented AI solutions for management systems</li>
                          <li>• Managed technical infrastructure and budget</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='mr-auto sm:w-5/12 p-6 bg-white rounded-lg shadow-sm transition-all duration-300 transform group-hover:scale-[1.1] hover:shadow-lg cursor-pointer'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Director of Technology</h3>
                        <p className='mt-1 text-sm text-indigo-600'>BetterVet • 2021 - 2024</p>
                        <p className='mt-2 text-gray-600'>
                          Scaled technical operations and infrastructure during rapid company expansion.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Scaled from 1 to 27 US cities</li>
                          <li>• Managed CRM, AI, and infrastructure projects</li>
                          <li>• Led technical team recruitment and training</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='ml-auto sm:w-5/12 p-6 bg-white rounded-lg shadow-sm transition-all duration-300 transform group-hover:scale-[1.1] hover:shadow-lg cursor-pointer'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Manager, Account Review and Coaching</h3>
                        <p className='mt-1 text-sm text-indigo-600'>Constant Contact • 2014 - 2017</p>
                        <p className='mt-2 text-gray-600'>
                          Led email marketing excellence and team development initiatives.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Built high-performing email marketing teams</li>
                          <li>• Created Salesforce dashboards and analytics</li>
                          <li>• Improved customer education and satisfaction</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='relative group'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                    <div className='mr-auto sm:w-5/12 p-6 bg-white rounded-lg shadow-sm transition-all duration-300 transform group-hover:scale-[1.1] hover:shadow-lg cursor-pointer'>
                      <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold text-gray-900'>Manager, Technical Support</h3>
                        <p className='mt-1 text-sm text-indigo-600'>LogMeIn • 2006 - 2014</p>
                        <p className='mt-2 text-gray-600'>
                          Led global technical support operations and team development.
                        </p>
                        <ul className='mt-3 space-y-1 text-sm text-gray-500'>
                          <li>• Managed 24x7 global support teams</li>
                          <li>• Improved NPS/CSAT metrics</li>
                          <li>• Generated $2.5M in support-to-sales conversions</li>
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
        {/* <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Areas of Expertise</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>Core competencies and technical proficiencies</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Technical Systems</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• CRM & AI Implementation</li>
                    <li>• System Administration</li>
                    <li>• Infrastructure Management</li>
                    <li>• Security & Compliance</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Leadership</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Team Development</li>
                    <li>• Strategic Planning</li>
                    <li>• Budget Management</li>
                    <li>• Process Improvement</li>
                  </ul>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8'>
                  <h3 className='text-lg font-semibold leading-8 text-gray-900'>Business Impact</h3>
                  <ul className='mt-4 space-y-2 text-gray-600'>
                    <li>• Project Management</li>
                    <li>• Data Analytics</li>
                    <li>• Vendor Relations</li>
                    <li>• Change Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              {/* <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Ready to Transform Your Organization?
              </h2> */}
              <p className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Let's discuss how my experience in technical leadership and team development can benefit your
                organization.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='mailto:perry.bailes@gmail.com'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get in Touch
                </a>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  View Resume <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className='bg-gray-50 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Education</h2>
              <p className='mt-2 text-lg leading-8 text-indigo-600'>Academic achievements and continuous learning</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <h3 className='text-lg font-semibold text-gray-900'>Endicott College</h3>
                  <p className='mt-2 text-gray-600'>MBA/MS, Information Technology</p>
                  <p className='text-sm text-indigo-600'>TBD</p>
                </div>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <h3 className='text-lg font-semibold text-gray-900'>Georgia Southern University</h3>
                  <p className='mt-2 text-gray-600'>BBA, Business and Information Systems</p>
                  <p className='text-sm text-indigo-600'>2002</p>
                </div>
                <div className='rounded-2xl bg-white p-8 shadow-sm'>
                  <h3 className='text-lg font-semibold text-gray-900'>Georgia Southern University</h3>
                  <p className='mt-2 text-gray-600'>BA, History, Asian Studies</p>
                  <p className='text-sm text-indigo-600'>1996</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Client Testimonials</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600'>What clients say about working with me</p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-2xl bg-gray-50 p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "Perry transformed our IT infrastructure with innovative solutions that significantly improved our
                    operational efficiency."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Sarah Johnson, CEO</p>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "His leadership and technical expertise were instrumental in our digital transformation journey."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Michael Chen, CTO</p>
                </div>
                <div className='rounded-2xl bg-gray-50 p-8 shadow-sm'>
                  <p className='text-gray-600'>
                    "Working with Perry was a game-changer for our business. His solutions were both practical and
                    forward-thinking."
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>- Emily Rodriguez, Director of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Call to Action Section */}
      </main>
      {/* Get in Touch section */}
    </div>
  )
}
