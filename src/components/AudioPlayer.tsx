import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  germanSrc: string;
  englishSrc: string;
}

export function AudioPlayer({ germanSrc, englishSrc }: AudioPlayerProps) {
  const [isPlayingGerman, setIsPlayingGerman] = useState(false);
  const [isPlayingEnglish, setIsPlayingEnglish] = useState(false);
  const germanAudioRef = useRef<HTMLAudioElement>(null);
  const englishAudioRef = useRef<HTMLAudioElement>(null);

  const handleGermanPlayPause = () => {
    if (isPlayingGerman) {
      germanAudioRef.current?.pause();
    } else {
      englishAudioRef.current?.pause();
      setIsPlayingEnglish(false);
      germanAudioRef.current?.play();
    }
    setIsPlayingGerman(!isPlayingGerman);
  };

  const handleEnglishPlayPause = () => {
    if (isPlayingEnglish) {
      englishAudioRef.current?.pause();
    } else {
      germanAudioRef.current?.pause();
      setIsPlayingGerman(false);
      englishAudioRef.current?.play();
    }
    setIsPlayingEnglish(!isPlayingEnglish);
  };

  const handleGermanEnded = () => {
    setIsPlayingGerman(false);
  };

  const handleEnglishEnded = () => {
    setIsPlayingEnglish(false);
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={handleGermanPlayPause}
        className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
      >
        {isPlayingGerman ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        <span className="ml-2">German</span>
      </button>
      <button
        onClick={handleEnglishPlayPause}
        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
      >
        {isPlayingEnglish ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        <span className="ml-2">English</span>
      </button>
      <audio
        ref={germanAudioRef}
        src={germanSrc}
        onEnded={handleGermanEnded}
      />
      <audio
        ref={englishAudioRef}
        src={englishSrc}
        onEnded={handleEnglishEnded}
      />
    </div>
  );
}