import { forwardRef, type ComponentType, type Ref } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useStore, randomColor } from "../store/useStore";

type MotionDivProps = HTMLMotionProps<"div">;

export function withRotate<P extends MotionDivProps>(
	Component: ComponentType<P>,
): ComponentType<P> {
	return forwardRef<HTMLDivElement, P>((props, ref) => {
		const { animate, transition, ...rest } = props as P & { animate?: object; transition?: object };
		return (
			<Component
				ref={ref}
				{...(rest as P)}
				animate={{ ...animate, rotate: 90 }}
				transition={{ duration: 2, ...transition }}
			/>
		);
	}) as ComponentType<P>;
}

export function withHover<P extends MotionDivProps>(
	Component: ComponentType<P>,
): ComponentType<P> {
	return forwardRef<HTMLDivElement, P>((props, ref) => {
		const { whileHover, ...rest } = props as P & { whileHover?: object };
		return (
			<Component
				ref={ref}
				{...(rest as P)}
				whileHover={{ scale: 1.05, ...whileHover }}
			/>
		);
	}) as ComponentType<P>;
}

export function withRandomColor<P extends MotionDivProps>(
	Component: ComponentType<P>,
): ComponentType<P> {
	return forwardRef<HTMLDivElement, P>((props, ref) => {
		const [store, setStore] = useStore();
		const { animate, onClick, ...rest } = props as P & { animate?: object; onClick?: (e: React.MouseEvent) => void };
		return (
			<Component
				ref={ref}
				{...(rest as P)}
				animate={{ ...animate, background: store.background }}
				onClick={(e) => {
					setStore({ background: randomColor() });
					onClick?.(e);
				}}
			/>
		);
	}) as ComponentType<P>;
}
