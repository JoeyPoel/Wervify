import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ChatMessage {
  text: string;
  sender: 'me' | 'them';
  timestamp?: string;
  speaker?: string;
}

export interface LiveChatSimulationProps {
  messages: ChatMessage[];
  showTimestamps?: boolean;
  className?: string;
  onComplete?: () => void;
}

/**
 * Animated Typing Bubble Indicator with wave dots.
 */
const TypingBubble: React.FC<{ isMe: boolean }> = ({ isMe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl shadow-xs ${
        isMe
          ? 'rounded-br-xs bg-wervify-cobalt text-white shadow-wervify-cobalt/20'
          : 'rounded-bl-xs bg-slate-100 dark:bg-wervify-marine/50 text-slate-500 dark:text-slate-300 border border-slate-200/70 dark:border-wervify-marine/60'
      }`}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.18,
          }}
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            isMe ? 'bg-white/80' : 'bg-slate-500 dark:bg-slate-300'
          }`}
        />
      ))}
    </motion.div>
  );
};

/**
 * Interactive sequential Live Chat Simulation.
 * Simulates real-time AI conversation flow with natural typing pacing.
 * The conversation concludes on Bo's confirmation message without a trailing typing bubble.
 * @param props LiveChatSimulationProps
 */
export const LiveChatSimulation: React.FC<LiveChatSimulationProps> = ({
  messages,
  showTimestamps = true,
  className = '',
  onComplete,
}) => {
  // Step progression:
  // 0: Initial message from Bo visible
  // 1: Candidate is typing (typing bubble replaces message 2 slot)
  // 2: Candidate message 2 lands
  // 3: Bo is typing (typing bubble replaces message 3 slot)
  // 4: Bo message 3 lands (complete conversation)
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 2200);
    const timer3 = setTimeout(() => setStep(3), 3100);
    const timer4 = setTimeout(() => {
      setStep(4);
      if (onComplete) onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`w-full flex flex-col gap-3 text-xs sm:text-sm ${className}`}>
      {/* Message 1 (Bo) */}
      {messages[0] && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col items-start"
        >
          <div className="flex items-center gap-2 mb-1 px-1 text-[11px] font-medium text-slate-400">
            {messages[0].speaker && (
              <span className="font-semibold text-slate-600 dark:text-slate-300">
                {messages[0].speaker}
              </span>
            )}
            {showTimestamps && messages[0].timestamp && <span>{messages[0].timestamp}</span>}
          </div>
          <div className="px-4 py-2.5 rounded-2xl rounded-bl-xs bg-slate-100 dark:bg-wervify-marine/60 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-wervify-marine/70 shadow-xs leading-relaxed max-w-[90%]">
            {messages[0].text}
          </div>
        </motion.div>
      )}

      {/* Message 2 Slot: Candidate typing OR Candidate Message */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full flex justify-end"
        >
          <TypingBubble isMe={true} />
        </motion.div>
      )}

      {step >= 2 && messages[1] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          className="w-full flex flex-col items-end"
        >
          <div className="flex items-center gap-2 mb-1 px-1 text-[11px] font-medium text-slate-400 justify-end">
            {messages[1].speaker && (
              <span className="font-semibold text-wervify-cobalt dark:text-wervify-azure">
                {messages[1].speaker}
              </span>
            )}
            {showTimestamps && messages[1].timestamp && <span>{messages[1].timestamp}</span>}
          </div>
          <div className="px-4 py-2.5 rounded-2xl rounded-br-xs bg-wervify-cobalt text-white shadow-xs leading-relaxed max-w-[90%] font-medium">
            {messages[1].text}
          </div>
        </motion.div>
      )}

      {/* Message 3 Slot: Bo typing OR Bo Final Message */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full flex justify-start"
        >
          <TypingBubble isMe={false} />
        </motion.div>
      )}

      {step >= 4 && messages[2] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          className="w-full flex flex-col items-start"
        >
          <div className="flex items-center gap-2 mb-1 px-1 text-[11px] font-medium text-slate-400">
            {messages[2].speaker && (
              <span className="font-semibold text-slate-600 dark:text-slate-300">
                {messages[2].speaker}
              </span>
            )}
            {showTimestamps && messages[2].timestamp && <span>{messages[2].timestamp}</span>}
          </div>
          <div className="px-4 py-2.5 rounded-2xl rounded-bl-xs bg-slate-100 dark:bg-wervify-marine/60 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-wervify-marine/70 shadow-xs leading-relaxed max-w-[90%]">
            {messages[2].text}
          </div>
        </motion.div>
      )}
    </div>
  );
};
