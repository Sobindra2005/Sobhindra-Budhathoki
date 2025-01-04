"use client"
import React from 'react';
import Gallery from "../../components/Gallery"
import { useParams } from 'next/navigation';

const GalleryPage = () => {
    const params=useParams();
    
    return (
        <div>
            <Gallery />
        </div>
    );
};

export default GalleryPage;