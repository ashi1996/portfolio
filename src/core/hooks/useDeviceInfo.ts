import { useState, useEffect, useCallback } from 'react'

interface ObjectType  {
    width: undefined | number,
    height: undefined | number,
    isMobile: boolean,
    isTablet: boolean,
    isDesktop: boolean
}

function GetDeviceInfo() {

    // Change the value as per your config
    const SCREEN_SIZES = {
        MOBILE_WIDTH: 576, // For mobile devices
        TABLET_WIDTH: 800, // For tablet devices
    }

    const { MOBILE_WIDTH, TABLET_WIDTH } = SCREEN_SIZES

    const [object, setObject] = useState<ObjectType>({
        width: undefined,
        height: undefined,
        isMobile: false,
        isTablet: false,
        isDesktop: false
    })

    const handleResize = useCallback(() => {
        const width = document.documentElement.clientWidth || window.innerWidth;
        const height = document.documentElement.clientHeight || window.innerHeight
        setObject({
            width: width,
            height: height,
            isMobile: width <= MOBILE_WIDTH,
            isTablet: width > MOBILE_WIDTH && width <= TABLET_WIDTH,
            isDesktop: width > TABLET_WIDTH
        })
    }, [MOBILE_WIDTH, TABLET_WIDTH])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => { window.removeEventListener('resize', handleResize) }
    }, [handleResize])

    return object
}

export default GetDeviceInfo