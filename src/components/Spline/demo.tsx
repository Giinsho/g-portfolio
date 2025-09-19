'use client'
import { SplineScene } from "../Spline/splite.js";
import { Card } from "../Spline/card.js"
import { Spotlight } from "../Spline/spotlight.js"
import Navbar from "../Navbar/Navbar.jsx"
import styles from "../../../src/style.js";

export function Demo() {
    return (
        <Card className=" bg-black/[0.01] ">
            <div className="flex ">

                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>



                {/* Right content */}

            </div>
            <div className=" relative">
                <SplineScene
                    scene="https://prod.spline.design/UunySgE4o2R0hny2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </Card>
    )
}
export default Demo