import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    title: "Hackathon Brainstorming",
    height: "tall"
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    title: "Team Collaboration",
    height: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    title: "Project Presentation",
    height: "short"
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    title: "Code Review",
    height: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    title: "Team Discussion",
    height: "tall"
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
    title: "Winner Announcement",
    height: "short"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12"> 
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Event Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and success from our amazing hackathon journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-lg ${
                image.height === 'tall' ? 'row-span-2' : 
                image.height === 'medium' ? 'row-span-1' : 
                'row-span-1'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;