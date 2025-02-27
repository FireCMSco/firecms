import { ModeControllerContext } from "../contexts/ModeController";
import { useContext } from "react";

/**
 * Use this controller to change color mode
 * @group Hooks and utilities
 */
export interface ModeController {
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark" | "system") => void;
}

/**
 * Hook to retrieve the current mode ("light" | "dark"), and `setMode`
 * or `toggle` functions to change it.
 *
 * Consider that in order to use this hook you need to have a parent
 * `FireCMS`
 *
 * @see ModeController
 * @group Hooks and utilities
 */
export const useModeController = () => useContext(ModeControllerContext);
