'use client'

import React from 'react'
import * as THREE from 'three'

interface FloorProps {
    material?: THREE.Material
}

export function Floor({ material }: FloorProps) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            {material ? (
                <primitive object={material} attach="material" />
            ) : (
                <meshStandardMaterial color="#eeeeee" />
            )}
        </mesh>
    )
}
