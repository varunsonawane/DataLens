import { DottedSurface } from '../components/ui/dotted-surface';
import { cn } from '../lib/utils';
import { ArrowRight, ChevronUp } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
	const controls = useAnimation();

	const handleDragEnd = async (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const swipeThreshold = -100; // Drag up by 100px to trigger
		const velocityThreshold = -500; // Or fast swipe up

		if (info.offset.y < swipeThreshold || info.velocity.y < velocityThreshold) {
			// Animate out
			await controls.start({
				y: '-100vh',
				opacity: 0,
				transition: { duration: 0.4, ease: 'easeInOut' },
			});
			onGetStarted();
		} else {
			// Snap back
			controls.start({
				y: 0,
				transition: { type: 'spring', bounce: 0.4, duration: 0.6 },
			});
		}
	};

	return (
		<motion.div 
			animate={controls}
			drag="y"
			dragConstraints={{ top: 0, bottom: 0 }}
			dragElastic={{ top: 0.6, bottom: 0.1 }}
			onDragEnd={handleDragEnd}
			className="relative z-50 h-[100dvh] w-full overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col touch-none cursor-grab active:cursor-grabbing font-sans transition-colors duration-300"
		>
			<DottedSurface className="absolute inset-0 z-0 pointer-events-none" />
			
			<div className="relative z-10 flex flex-col items-center justify-start flex-1 w-full max-w-4xl px-4 pt-[22vh] mx-auto text-center select-none">
				
				{/* Glowing backdrop */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute top-[30%] left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]',
						'blur-[100px]',
					)}
				/>
				
				{/* Title */}
				<h1 className="relative z-20 mb-6 font-sans text-6xl font-extrabold tracking-tight text-transparent drop-shadow-sm md:text-8xl bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 transition-colors">
					DataLens
				</h1>
				
				{/* Subtitle */}
				<p className="max-w-2xl mx-auto mb-12 text-lg font-medium tracking-wide md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
					Unlock the power of multimodal AI to turn your raw data into compelling stories and interactive insights.
				</p>
				
				{/* Action Button */}
				<button
					onClick={async () => {
						await controls.start({
							y: '-100vh',
							opacity: 0,
							transition: { duration: 0.4, ease: 'easeInOut' },
						});
						onGetStarted();
					}}
					className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[1.1rem] font-medium text-white transition-all duration-300 bg-emerald-600 rounded-full hover:bg-emerald-500 hover:scale-105 active:scale-95 z-20 shadow-none border border-transparent"
				>
					<span>Get Started</span>
					<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
					<div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</button>
			</div>

			{/* Swipe Up Indicator */}
			<div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-1.5 text-slate-500 dark:text-slate-400 animate-pulse pointer-events-none select-none z-10 transition-colors">
				<span className="text-xs font-bold tracking-[0.2em] uppercase">Swipe Up</span>
				<ChevronUp className="w-6 h-6" strokeWidth={2} />
			</div>
		</motion.div>
	);
}
