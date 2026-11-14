import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const BackgroundMusic: React.FC = () => {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolume, audioAvailable } = useAudio();
  const [showSlider, setShowSlider] = useState(false);

  if (!audioAvailable) return null;

  return (
    <div className="relative inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-xs border border-gold/30 rounded-full px-2.5 py-1 shadow-xs">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="p-1 rounded-full text-espresso hover:text-gold transition-colors focus:outline-none"
        title={isPlaying ? 'Pause Instrumental Music' : 'Play Instrumental Music'}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 text-gold-dark" />
        ) : (
          <Play className="w-3.5 h-3.5 text-espresso/70" />
        )}
      </button>

      {/* Soundwaves indicator when playing */}
      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3 px-0.5">
          <span className="w-0.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="w-0.5 h-3 bg-gold rounded-full animate-pulse [animation-delay:200ms]" />
          <span className="w-0.5 h-2 bg-gold rounded-full animate-pulse [animation-delay:400ms]" />
        </div>
      )}

      {/* Mute/Volume Icon & Slider Trigger */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
      >
        <button
          onClick={toggleMute}
          className="p-1 rounded-full text-espresso/70 hover:text-gold transition-colors focus:outline-none"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute Music' : 'Mute Music'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 text-espresso/50" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-gold" />
          )}
        </button>

        {/* Volume slider popover on hover/touch */}
        {showSlider && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50">
            <div className="bg-ivory border border-gold/40 rounded-xl p-2 shadow-lg flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  if (isMuted) toggleMute();
                  setVolume(parseFloat(e.target.value));
                }}
                className="w-16 h-1 accent-[#B69558] cursor-pointer"
                aria-label="Volume slider"
              />
              <span className="text-[10px] font-sans font-medium text-espresso/70 w-6 text-right">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

