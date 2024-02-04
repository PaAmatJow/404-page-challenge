'use client'

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { noto900 } from './fonts';
import Link from 'next/link';

const NotFound = () => {
  const [isLoading, setIsloading] = useState(true);

	const progressRef = useRef(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

  

	useEffect(() => {
		gsap.to(progressRef.current, {
			value: 100,
			duration: 10,
			ease: 'power1.out',
		});

    if (wrapperRef.current && buttonRef.current) {
			const wrapperRect = wrapperRef.current.getBoundingClientRect();
			const buttonRect = buttonRef.current.getBoundingClientRect();

			buttonRef.current.addEventListener('mouseover', () => {
				const x =
					Math.floor(Math.random() * (wrapperRect.width - buttonRect.width)) +
					1;
				const y =
					Math.floor(Math.random() * (wrapperRect.height - buttonRect.height)) +
					1;

				buttonRef.current!.style.left = x + 'px';
				buttonRef.current!.style.top = y + 'px';
			});
		}
  
	}, []);

	setTimeout(() => {
		setIsloading(false)
	}, 10000)

	const textOne = 'redirecting to a matching page on the dark web... 😈'
	const textTwo = `I'm joking 😂. Head back to homepage`

	return (
		<div className='h-screen w-full flex items-center justify-center bg-[#bbb'>
			<div className='relative h-[95%] w-[96%] m-auto bg-[#1e1f20]  text-white rounded-2xl overflow-hidden'>
				<div className='text-center absolute top-[-40%] left-[50%] translate-x-[-50%] '>
					<h1 className={`${noto900.className} text-[30vw]`}>404</h1>
					<p className='text-[2vw] absolute bottom-[5%] left-[50%] translate-x-[-50%] w-full'>
						Page not found.
					</p>
				</div>
				<div className='absolute top-[55%] h-[40%] w-full z-20'>
					<div
						ref={wrapperRef}
						className='flex flex-col items-center gap-[30px] w-[1000px] mx-auto h-full'
					>
						<div className='flex flex-col items-center gap-[10px] w-[500px] mx-auto'>
							<p className=''>{isLoading ? textOne : textTwo}</p>
							<progress
								className='w-full h-2 bg-gray-400 myProgressBar rouunded-full'
								ref={progressRef}
								value='0'
								max='100'
							></progress>
						</div>
						{isLoading ? (
							<button
								ref={buttonRef}
								className='px-5 py-1 bg-white text-[#1e1f20] rounded-md absolute left-[50%] translate-x-[-50%] top-[70px] border border-black transition-all duration-100'
							>
								Cancel
							</button>
						) : (
							<Link href='/'>
								<button className='px-5 py-1 bg-white text-[#1e1f20] rounded-md absolute left-[50%] translate-x-[-50%] top-[70px]'>
									Homepage
								</button>
							</Link>
						)}
					</div>
				</div>
				<div className='text-center absolute bottom-[-54%] left-[50%] translate-x-[-50%] '>
					<h1 className={`${noto900.className} text-[30vw]`}>404</h1>
				</div>
			</div>
		</div>
	);
};
export default NotFound;

