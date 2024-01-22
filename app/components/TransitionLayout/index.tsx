"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import "./styles.module.css";

const variants: any = {
	in: {
		scale: 0.8,
		y: 100,
		x: "100%",
		transition: {
			duration: 0.4,
		},
	},
	center: {
		x: 0,
		scale: 0.8,
		transformOrigin: "top",
		transition: {
			duration: 0.4,
		},
	},
	scaleUp: {
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: 0.5,
		},
	},
	scaleDown: {
		scale: 0.8,
		y: 100,
		transition: {
			duration: 0.4,
		},
	},
	out: {
		opacity: 0,
		x: "-100%",
		transition: {
			duration: 0.4,
			delay: 0.5,
		},
	},
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
	const pathName = usePathname();
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="effect-3">
			<AnimatePresence mode="wait">
				<motion.div
					key={pathName}
					variants={!shouldReduceMotion ? variants : null}
					initial="in"
					animate={["center", "scaleUp"]}
					exit={["scaleDown", "out"]}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default TransitionLayout;
