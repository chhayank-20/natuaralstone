'use client'

import React from 'react'
import * as THREE from 'three'

interface WallProps {
    material?: THREE.Material
}

export function Wall({ material }: WallProps) {
    return (
        <mesh position={[0, 2.5, -5]} receiveShadow>
            <planeGeometry args={[10, 5]} />
            {material ? (
                <primitive object={material} attach="material" />
            ) : (
                <meshStandardMaterial color="#e0e0e0" />
            )}
        </mesh>
    )
}
