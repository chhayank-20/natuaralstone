'use client'

import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Floor } from './Floor'
import { Wall } from './Wall'
import { Lights } from './lights'

export function RoomScene() {
    return (
        <>
            <Lights />
            <Floor />
            <Wall />
            <OrbitControls
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                makeDefault
            />
        </>
    )
}
