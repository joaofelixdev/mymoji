'use client';

import Image from "next/image";
import React, { useRef, useState } from "react";

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
}: {
    beforeImage: string;
    afterImage: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dividerPosition, setDividerPosition] = useState(50); // percent

    const handleMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setDividerPosition(percent);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-lg cursor-ew-resize"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onMouseDown={handleMove}
        >
            {/* Before image */}
            <Image
                width={400}
                height={200}
                src={beforeImage}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* After image (clipped by divider) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${dividerPosition}%` }}
            >
                <Image
                    width={400}
                    height={200}
                    src={afterImage}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            {/* Divider line */}
            <div
                className="absolute inset-y-0 w-1 bg-white shadow-lg"
                style={{ left: `${dividerPosition}%`, transform: "translateX(-50%)" }}
            >
                {/* Circle handle */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-400 transform -translate-x-1/2 -translate-y-1/2 shadow"></div>
            </div>
        </div>
    );
}
