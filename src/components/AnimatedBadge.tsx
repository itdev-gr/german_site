import { forwardRef } from "react";
import { motion } from "framer-motion";
import { withRotate, withHover, withRandomColor } from "./animations";

const badgeStyles: React.CSSProperties = {
	display: "inline-block",
	padding: "0.35rem 0.9rem",
	borderRadius: "9999px",
	fontFamily: "var(--font-serif), Georgia, serif",
	fontSize: "0.95rem",
	fontWeight: 600,
	fontStyle: "italic",
	color: "#1e3c1e",
	border: "2px solid #e8c547",
	background: "rgba(232, 197, 71, 0.95)",
	transform: "rotate(-4deg)",
	cursor: "pointer",
};

const AnimatedBadgeInner = forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>(
	(props, ref) => {
		return (
			<motion.div
				ref={ref}
				{...props}
				style={{ ...badgeStyles, ...(props.style as object) }}
			>
				Since 1987
			</motion.div>
		);
	},
);

AnimatedBadgeInner.displayName = "AnimatedBadgeInner";

const AnimatedBadge = withRandomColor(withHover(withRotate(AnimatedBadgeInner)));

export default AnimatedBadge;
