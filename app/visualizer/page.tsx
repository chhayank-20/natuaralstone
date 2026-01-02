import React from 'react'
import { Card } from "@/components/ui/card"
import SceneCanvas from '@/components/scene/SceneCanvas'
import { RoomScene } from '@/components/scene/RoomScene'

export default function VisualizerPage() {
    return (
        <div className="container mx-auto p-4 h-screen max-h-[900px] flex flex-col md:flex-row gap-4">
            {/* Left side: UI placeholder */}
            <Card className="w-full md:w-1/3 p-6 flex flex-col gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tile Controls</h2>
                    <p className="text-muted-foreground">
                        Use these controls to configure the room tiles.
                        (Placeholders for Future UI)
                    </p>
                </div>

                <div className="flex-1 bg-muted/20 rounded-md border border-dashed flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Control Panel Placeholder</span>
                </div>
            </Card>

            {/* Right side: SceneCanvas with RoomScene */}
            <Card className="flex-1 overflow-hidden relative min-h-[500px]">
                <SceneCanvas>
                    <RoomScene />
                </SceneCanvas>
            </Card>
        </div>
    )
}
