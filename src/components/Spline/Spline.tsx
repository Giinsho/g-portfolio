"use client"
import { useEffect, useState } from "react"
import { SplineScene } from "./splite.js"

export function Spline() {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            // Reduce opacity as you scroll down (0.2 min, 1 max)
            const scrollY = window.scrollY
            const maxScroll = window.innerHeight * 2 // tweak based on content length
            const newOpacity = Math.max(0.2, 1 - scrollY / maxScroll)
            setOpacity(newOpacity)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className="fixed w-full h-full  pointer-events-none"
            style={{ opacity, transition: "opacity 0.3s ease-out" }}
        >
            <div className="fixed w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] sm:right-5 right-0 top-10">
                <SplineScene
                    scene="https://prod.spline.design/BdX9WRR7Tjuo-yQa/scene.splinecode"
                    className="touch-none"
                />
            </div>
        </div>
    )
}

export default Spline
