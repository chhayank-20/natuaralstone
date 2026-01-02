import * as THREE from 'three'

interface TileMaterialProps {
    color?: string
    roughness?: number
    metalness?: number
    textureUrl?: string
}

export function createTileMaterial({
    color = '#ffffff',
    roughness = 0.5,
    metalness = 0.1,
    // textureUrl will be used in the future
}: TileMaterialProps = {}): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
    })
}
