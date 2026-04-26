import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import spellsImage from "../../../../assets/spells-page.png";
import {
  potterSpellsPageHint,
  potterSpellsPagePrimaryButton,
  potterSpellsPageSecondaryButton,
  potterSpellsPageTitle,
} from "../../../../styles/potter-typography";

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface SpellsPageProps {
  onUnlock: () => void;
  onBack: () => void;
  showExplicitHint: boolean;
}

export const SpellsPage = ({
  onUnlock,
  onBack,
  showExplicitHint,
}: SpellsPageProps) => {
  const recoverableErrors = new Set(["no-speech", "aborted"]);
  const [isListening, setIsListening] = useState(false);
  const [typedSpell, setTypedSpell] = useState("");
  const [statusText, setStatusText] = useState(
    showExplicitHint
      ? "Say “Lumos” aloud to light the corridor."
      : "Speak the spell that brings light to the darkest places."
  );
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const heardSpellRef = useRef(false);
  const shouldKeepListeningRef = useRef(false);
  const pendingRestartRef = useRef(false);
  const retryCountRef = useRef(0);
  const stopTimeoutRef = useRef<number | null>(null);
  const listeningDeadlineRef = useRef<number | null>(null);

  const isSupported = useMemo(
    () => Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
    []
  );

  useEffect(() => {
    if (!isSupported) return;

    const RecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!RecognitionCtor) return;

    const recognition = new RecognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript ?? "")
        .join(" ")
        .trim()
        .toLowerCase();

      if (transcript.includes("lumos")) {
        heardSpellRef.current = true;
        shouldKeepListeningRef.current = false;
        setStatusText("Spell recognized. The corridor is lighting up...");
        setIsListening(false);
        if (stopTimeoutRef.current) {
          window.clearTimeout(stopTimeoutRef.current);
          stopTimeoutRef.current = null;
        }
        recognition.stop();
        window.setTimeout(onUnlock, 500);
        return;
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (
        (recoverableErrors.has(event.error) || event.error === "network") &&
        shouldKeepListeningRef.current &&
        retryCountRef.current < 6
      ) {
        pendingRestartRef.current = true;
        setStatusText(
          event.error === "no-speech"
            ? "The corridor needs a clearer spell. Try again..."
            : "Hold steady. The magic is trying to catch your voice..."
        );
        return;
      }

      shouldKeepListeningRef.current = false;
      pendingRestartRef.current = false;
      setStatusText(`The spell misfired (${event.error}). Try again or type it below.`);
      setIsListening(false);
      if (stopTimeoutRef.current) {
        window.clearTimeout(stopTimeoutRef.current);
        stopTimeoutRef.current = null;
      }
    };

    recognition.onend = () => {
      const stillWithinWindow =
        typeof listeningDeadlineRef.current === "number" &&
        Date.now() < listeningDeadlineRef.current;

      if (
        (pendingRestartRef.current ||
          (shouldKeepListeningRef.current &&
            !heardSpellRef.current &&
            stillWithinWindow)) &&
        retryCountRef.current < 6
      ) {
        pendingRestartRef.current = false;
        retryCountRef.current += 1;
        window.setTimeout(() => {
          try {
            setIsListening(true);
            recognition.start();
          } catch {
            setStatusText("The spell slipped away. Try once more.");
            setIsListening(false);
            shouldKeepListeningRef.current = false;
          }
        }, 180);
        return;
      }

      if (shouldKeepListeningRef.current && !heardSpellRef.current) {
        setStatusText("The castle heard nothing. Try the spell once more.");
      }

      shouldKeepListeningRef.current = false;
      setIsListening(false);
      if (stopTimeoutRef.current) {
        window.clearTimeout(stopTimeoutRef.current);
        stopTimeoutRef.current = null;
      }
      listeningDeadlineRef.current = null;
    };

    recognitionRef.current = recognition;

    return () => {
      shouldKeepListeningRef.current = false;
      pendingRestartRef.current = false;
      if (stopTimeoutRef.current) {
        window.clearTimeout(stopTimeoutRef.current);
        stopTimeoutRef.current = null;
      }
      listeningDeadlineRef.current = null;
      recognition.stop();
      recognitionRef.current = null;
    };
  }, [isSupported, onUnlock]);

  const startListening = () => {
    if (!recognitionRef.current) return;
    if (shouldKeepListeningRef.current) return;

    heardSpellRef.current = false;
    shouldKeepListeningRef.current = true;
    pendingRestartRef.current = false;
    retryCountRef.current = 0;
    listeningDeadlineRef.current = Date.now() + 7000;
    setStatusText(
      showExplicitHint ? "Listening for Lumos..." : "Listening for the light spell..."
    );
    setIsListening(true);
    if (stopTimeoutRef.current) {
      window.clearTimeout(stopTimeoutRef.current);
    }
    stopTimeoutRef.current = window.setTimeout(() => {
      if (!heardSpellRef.current && recognitionRef.current) {
        shouldKeepListeningRef.current = false;
        recognitionRef.current.stop();
        setStatusText("The spell faded out. Try again and speak a little longer.");
      }
    }, 7000);
    try {
      recognitionRef.current.start();
    } catch {
      setStatusText("The spell wouldn't start. Wait a moment or type it below.");
      setIsListening(false);
      shouldKeepListeningRef.current = false;
    }
  };

  const handleTypedUnlock = () => {
    if (typedSpell.trim().toLowerCase().includes("lumos")) {
      setStatusText("Spell recognized. The corridor is lighting up...");
      window.setTimeout(onUnlock, 350);
      return;
    }

    setStatusText("That wasn't the right spell. Try again.");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      component="main"
      sx={{
        pr: "3vw",
        minHeight: "100vh",
        backgroundImage: `url(${spellsImage})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255, 239, 175, 0.12), rgba(0,0,0,0.88) 56%)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.2,
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography sx={potterSpellsPageTitle}>
          Very well. Prove it. <br /> Speak the spell <br /> that brings light.
        </Typography>
        <Typography sx={potterSpellsPageHint}>
          {showExplicitHint
            ? "Hint: cast Lumos."
            : "Those who know the spell won't need the hint."}
        </Typography>
        <Typography
          sx={{
            color: "#f6e5b2",
            textAlign: "center",
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: { xs: "1.05rem", md: "1.35rem" },
            lineHeight: 1.45,
            mb: 1,
          }}
        >
          {statusText}
        </Typography>
        <Button
          onClick={startListening}
          disabled={!isSupported || isListening}
          sx={potterSpellsPagePrimaryButton}
        >
          {isListening ? "Listening..." : "Cast The Spell"}
        </Button>
        <Box
          sx={{
            width: "min(460px, 88vw)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.2,
            alignItems: "stretch",
            mt: 1,
          }}
        >
          <TextField
            value={typedSpell}
            onChange={(event) => setTypedSpell(event.target.value)}
            placeholder={showExplicitHint ? "Type Lumos" : "Type the spell"}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#f6e5b2",
                backgroundColor: "rgba(8, 5, 3, 0.6)",
                borderRadius: "14px",
                "& fieldset": {
                  borderColor: "rgba(244, 221, 176, 0.68)",
                },
                "&:hover fieldset": {
                  borderColor: "#f4ddb0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f4ddb0",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "rgba(246, 229, 178, 0.72)",
                opacity: 1,
              },
            }}
          />
          <Button onClick={handleTypedUnlock} sx={potterSpellsPageSecondaryButton}>
            Unlock
          </Button>
        </Box>
        <Button onClick={onBack} sx={potterSpellsPageSecondaryButton}>
          Back
        </Button>
        {!isSupported && (
          <Typography
            sx={{
              color: "#f6e5b2",
              textAlign: "center",
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontSize: { xs: "0.95rem", md: "1.15rem" },
              mt: 1,
            }}
          >
            Voice spells are unavailable in this browser.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
