import { create } from "zustand";

export const useStoreBase = create<{ background: string }>(() => ({
	background: "#0099FF",
}));

/** Returns [store, setStore] for compatibility with the Framer-style API. */
export function useStore(): [
	{ background: string },
	(partial: { background?: string }) => void,
] {
	const state = useStoreBase();
	return [state, useStoreBase.setState];
}

export function randomColor(): string {
	return (
		"#" +
		Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padStart(6, "0")
	);
}
