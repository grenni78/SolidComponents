import { createSignal, mergeProps } from "solid-js";

export interface ToggleSwitchProps {
    name: string,
    active_class?: string;
    inactive_class?: string;
}

export default (props: ToggleSwitchProps) => {
    props = mergeProps(
        {
            name: "toggle-btn" + new Date().getMilliseconds(),
            active_class: "bg-purple-600",
            inactive_class: "bg-gray-200",
        },
        props
    )
    
    const [active, setActive] = createSignal(false);


    return <button type="button" class={`${active() ? props.active_class : props.inactive_class} bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto`} role="switch" aria-checked={active ? true : false} aria-labelledby={`${props.name}-option-label`} onClick={() => setActive(!active())}>
        <span aria-hidden="true" class={`pointer-events-none ${active() ? 'translate-x-5' : 'translate-x-0'}  inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
        <input type="hidden" name={props.name} id={props.name} value={active() ? 1 : 0} />
    </button>
}
