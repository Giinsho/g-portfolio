'use client'

import styles from '@/style'
import { Suspense, lazy, useRef, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const splineRef = useRef<any>(null)
    const initialCamera = useRef<any>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    function onLoad(splineApp: any) {
        splineRef.current = splineApp

        // Save initial camera transform
        if (splineApp._camera) {
            initialCamera.current = {
                position: { ...splineApp._camera.position },
                rotation: { ...splineApp._camera.rotation },
            }

        }
    }

    function resetCamera() {
        if (splineRef.current && initialCamera.current) {
            const cam = splineRef.current._camera
            cam.position.copy(initialCamera.current.position)
            cam.rotation.copy(initialCamera.current.rotation)
            cam.updateMatrixWorld(true) // Update matrix world to ensure camera is updated.

            // Ensure renderer updates
            splineRef.current.emitEvent('update')
        }
    }

    useEffect(() => {
        if (containerRef.current) {
            const logoDiv = containerRef.current.querySelector(
                "div[style*='position: absolute'][style*='bottom']"
            )
            if (logoDiv) {
                (logoDiv as HTMLElement).style.display = 'none'
            }
        }
    }, [])

    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            }
        >




            <Spline
                scene={scene}
                onLoad={onLoad}
                onMouseDown={resetCamera}
                className={`${className} pointer-events-none`}
            />




        </Suspense >
    )
}
