// Genre.tsx
"use client";

const Genres = [
  { name: "Action" },
  { name: "Adventure" },
  { name: "Animation" },
  { name: "Biography" },
  { name: "Comedy" },
  { name: "Crime" },
  { name: "Documentary" },
  { name: "Drama" },
  { name: "Family" },
  { name: "Fantasy" },
  { name: "Film-Noir" },
  { name: "Game-Show" },
  { name: "History" },
  { name: "Horror" },
  { name: "Music" },
  { name: "Musical" },
  { name: "Mystery" },
  { name: "News" },
  { name: "Reality-TV" },
  { name: "Romance" },
  { name: "Sci-Fi" },
  { name: "Short" },
  { name: "Sport" },
  { name: "Talk-Show" },
  { name: "Thriller" },
  { name: "War" },
  { name: "Western" },
  // Add more as needed
];

export const GenreList = ({ onClick }: { onClick?: (genre: string) => void }) => {
  return Genres.map((el, index) => (
    <div key={index}>
      <div 
        onClick={() => onClick?.(el.name)}
        className="cursor-pointer" 
      >
        {el.name}
      </div>
    </div>
  ));
};

// Or export the Genres array if you want to map it directly from the page:
export { Genres };
