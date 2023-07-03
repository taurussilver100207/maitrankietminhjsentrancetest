import { useState } from 'react'
import RandomColor from './RandomColor'
import GradientPicker from './GradientPicker'

const HomePage = () => {
    const [pageType, setPageType] = useState("gradientPicker")
    const isRandomColor = pageType === "randomColor"
    const isGradientPicker = pageType === "gradientPicker"
    const handleChangePage = () => {
        if (pageType == "gradientPicker") {
            setPageType("randomColor")
        } else {
            setPageType("gradientPicker")
        }
    }
    return (
        <>
            {isRandomColor && (
                <RandomColor/>
            )}
            {isGradientPicker && (
                <GradientPicker/>
            )}
            <center>    
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-3' onClick={() => handleChangePage()}>
                    {isRandomColor ? "Pick gradient" : "Random color"}
                </button>
            </center>
        </>
    )
}

export default HomePage