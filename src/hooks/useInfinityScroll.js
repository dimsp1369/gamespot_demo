import {useCallback, useRef} from "react";
import {useDispatch} from "react-redux";

export default function useInfinityScroll(getCallback, next) {
    const dispatch = useDispatch()
    const observer = useRef()

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log('Next')
                dispatch(getCallback(next))
            }
        })
        if (node) observer.current.observe(node)
    }, [next])

    return {lastElementRef}

}
