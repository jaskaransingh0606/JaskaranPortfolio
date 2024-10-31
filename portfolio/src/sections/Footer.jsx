import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7  pb-3 border-t border-black-300 flex justify-between items-center flex-wrap mt-60'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms and conditions</p>
            <p>|</p>
            <p>Privacy policy</p>
        </div>

        <div className='flex gap-3'>
            <div > 
                <a href='https://github.com/jaskaransingh0606' className='social-icon'>
                <img src='/assets/github.svg' className='w-1/2 h-1/2'/>
                </a>
            </div>

            <div className='social-icon'> 
                <a href='https://www.linkedin.com/in/jaskaran-singh-994353212/' className='social-icon'>
                <img src='/assets/linkedinlogo.png' className='w-1/2 h-1/2'/>
                </a>
            </div>

        </div>
        <div>
        <p className='text-white-500'>© 2024 All Rights reserved</p>
        </div>
      
    </section>
  )
}

export default Footer
