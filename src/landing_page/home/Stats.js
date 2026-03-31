import React from 'react';

function Stats() {
  return ( 
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-2'>Trust with confidance</h1>

          <h2 className='fs-4 mt-5'>Customer-first always</h2>
          <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with 3.5+ lakh crore worth of equity investements.</p>

          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. Highquality apps that you use at your pace, the way you like.</p>

          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investements in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 className='fs-4'>Do batter with money</h2>
          <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facilitate transactions. but actively help you do batter with your money.</p>
        </div>
        <div className='col-6 p-5'>
          <img src='/media/ecosystem.png' alt='ecosystem' style={{width:"90%"}}/>
          <div className='text-center'>
            <a href='/product' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href='/product' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Stats;