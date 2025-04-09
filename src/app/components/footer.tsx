'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-white '>
      <div className='container  mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Quick Links */}
          <div className='flex flex-col  items-center text-center'>
            <h3 className='text-sm mb-2 text-blue-100 mt-2'>Quick Links</h3>
            <ul className='space-y-1 text-xs mt-1 flex space-x-4 '>
              <li>
                <Link href='/' className='hover:text-blue-400 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/Work' className='hover:text-blue-400 transition-colors'>
                  Experience & Expertise
                </Link>
              </li>
              <li>
                <Link href='/#contact' className='hover:text-blue-400 transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center text-center'>
            <h3 className='text-sm  mb-2 text-blue-100 mt-2'>Connect</h3>
            <div className='flex space-x-4 mt-1 text-xs '>
              <a
                href='https://www.linkedin.com/in/perrybailes'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors'
                aria-label='View Resume'
              >
                <FaFilePdf size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col text-xs items-center text-center'>
            <h3 className='text-sm  mb-1 text-blue-100 mt-2'>Contact</h3>
            <a
              href='mailto:perry.bailes@gmail.com'
              className='hover:text-blue-400 transition-colors'
              aria-label='Email Perry Bailes'
            >
              <FaEnvelope size={16} />
            </a>
            <p className='mb-2 mt-1'>Boston, MA</p>
          </div>
        </div>

        {/* Copyright */}
        <div className='py-2 border-t w-1/2 mx-auto border-gray-800 text-center'>
          <p className='text-xs'>&copy; {currentYear} Perry Bailes</p>
        </div>
      </div>
    </footer>
  )
}
