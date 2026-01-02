'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Canvas to disable SSR for the entire 3D context
const Canvas = dynamic(
    () => import('@react-three/fiber').then((mod) => mod.Canvas),
    { ssr: false }
)

interface SceneCanvasProps {
    children: React.ReactNode
}

export default function SceneCanvas({ children }: SceneCanvasProps) {
    return (
        <div className="relative h-full w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <Canvas
                shadows
                camera={{ position: [0, 5, 8], fov: 50 }}
                className="h-full w-full block"
            >
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </Canvas>
        </div>
    )
}
