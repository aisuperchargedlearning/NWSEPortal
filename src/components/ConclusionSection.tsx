import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

export function ConclusionSection() {
  const [isPlayingConclusion, setIsPlayingConclusion] = useState(false);
  const [isPlayingMistakes, setIsPlayingMistakes] = useState(false);
  const conclusionAudioRef = useRef<HTMLAudioElement>(null);
  const mistakesAudioRef = useRef<HTMLAudioElement>(null);

  const handleConclusionPlayPause = () => {
    if (isPlayingConclusion) {
      conclusionAudioRef.current?.pause();
    } else {
      mistakesAudioRef.current?.pause();
      setIsPlayingMistakes(false);
      conclusionAudioRef.current?.play();
    }
    setIsPlayingConclusion(!isPlayingConclusion);
  };

  const handleMistakesPlayPause = () => {
    if (isPlayingMistakes) {
      mistakesAudioRef.current?.pause();
    } else {
      conclusionAudioRef.current?.pause();
      setIsPlayingConclusion(false);
      mistakesAudioRef.current?.play();
    }
    setIsPlayingMistakes(!isPlayingMistakes);
  };

  const handleConclusionEnded = () => {
    setIsPlayingConclusion(false);
  };

  const handleMistakesEnded = () => {
    setIsPlayingMistakes(false);
  };

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Final Notes</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleConclusionPlayPause}
          className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {isPlayingConclusion ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span className="ml-2">Conclusions</span>
        </button>
        <button
          onClick={handleMistakesPlayPause}
          className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {isPlayingMistakes ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span className="ml-2">Mistakes to Avoid</span>
        </button>
        <audio
          ref={conclusionAudioRef}
          src="https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/WF2+Conclusions+for+all+applicants.mp3"
          onEnded={handleConclusionEnded}
        />
        <audio
          ref={mistakesAudioRef}
          src="https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/10+Mistakes+to+avoid.mp3"
          onEnded={handleMistakesEnded}
        />
      </div>
    </div>
  );
}