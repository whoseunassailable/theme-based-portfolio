import { Box, Typography } from "@mui/material";
import spellsImage from "../../../../assets/spells-page.png";
import {
  potterSpellsPageHint,
  potterSpellsPageTitle,
} from "../../../../styles/potter-typography";

export const SpellsPage = () => {
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
      }}
    >
      <Typography sx={potterSpellsPageTitle}>
        Very well. Prove it. <br /> Speak the unlocking <br /> charm out loud!
      </Typography>
      <Typography sx={potterSpellsPageHint}>
        Hint: It opens the locked doors...
      </Typography>
    </Box>
  );
};

// Gotcha—let’s do the “robot plan” version, not full code 👍

// I’ll assume: **React + TypeScript + Material UI + some router (React Router / Next.js / etc.)**

// ---

// ## Big Picture

// You need 3 things:

// 1. **A voice listener** that hears the word *“alohomora”*
// 2. **A command handler** that maps that word → “go to next page”
// 3. **A UI trigger** (e.g., a MUI button) that starts listening

// ---

// ## Step-by-step “robo” plan

// ### 1. Decide what “next page” means in your app

// * If you use **React Router**: “next page” = `navigate("/some-route")`
// * If you use **Next.js**: “next page” = `router.push("/some-route")`
// * If you use a **wizard-like portfolio**: “next page” = increment `currentStep` state

// 🧠 **Robot note:** Before coding voice stuff, write a normal function:

// ```ts
// function goToNextPage() {
//   // your routing or step logic
// }
// ```

// Everything else just calls this function.

// ---

// ### 2. Create a **speech recognition service** (Web Speech API wrapper)

// * In TypeScript, define a small wrapper around `window.SpeechRecognition || window.webkitSpeechRecognition`
// * Responsibilities of this wrapper:

//   * Initialize recognition instance
//   * Start listening
//   * Stop listening
//   * Emit recognized text to a callback

// 🧠 **Robot steps for service:**

// 1. Check if browser supports SpeechRecognition
// 2. If not, set a flag like `isSupported = false`
// 3. If yes:

//    * Create `recognition` instance
//    * Set options (language = `"en-US"`, maybe `continuous = true`)
//    * Attach `onresult` handler:

//      * Extract `transcript`
//      * Normalize (trim, lowercase)
//      * Call `onText(transcript)` callback

// You can implement this as:

// * A **plain class** (`VoiceRecognitionService`)
// * Or just a **function** that creates and returns the instance + handlers

// ---

// ### 3. Wrap that service in a **React hook**: `useVoiceCommand`

// Hook contract (conceptual):

// ```ts
// type VoiceCommandOptions = {
//   onCommand: (command: string) => void;       // called with recognized text
// };

// function useVoiceCommand(options: VoiceCommandOptions) {
//   // returns:
//   // - startListening(): void
//   // - stopListening(): void
//   // - listening: boolean
//   // - supported: boolean
// }
// ```

// 🧠 **Robot steps inside the hook:**

// 1. On first render:

//    * Detect SpeechRecognition support
//    * If supported, create recognition instance and save it in `useRef`
//    * Configure `onresult` event:

//      * Get transcript
//      * Pass to `options.onCommand(transcript)`
// 2. Track a `listening` state with `useState(false)`
// 3. `startListening`:

//    * If supported and not already listening:

//      * call `recognition.start()`
//      * set `listening = true`
// 4. `stopListening`:

//    * call `recognition.stop()`
//    * set `listening = false`
// 5. On component unmount:

//    * stop recognition
//    * clean up listeners

// ---

// ### 4. Interpret the transcript as **spells/commands**

// In the component that uses the hook:

// 1. Implement `handleVoiceCommand(transcript: string)`:

//    * Normalize transcript (lowercase, trim)

//    * Check if transcript contains magic word:

//      ```ts
//      if (transcript.includes("alohomora")) {
//        goToNextPage();
//      }
//      ```

//    * You can also map multiple spells to multiple actions later:

//      ```ts
//      const commandMap = [
//        { word: "alohomora", action: goToNextPage },
//        { word: "lumos", action: turnOnDarkMode },
//        // etc.
//      ];
//      ```

// 2. Pass `handleVoiceCommand` into `useVoiceCommand({ onCommand: handleVoiceCommand })`

// ---

// ### 5. Connect to a **Material UI button**

// In your page/component:

// 1. Use the hook:

//    ```ts
//    const { startListening, stopListening, listening, supported } =
//      useVoiceCommand({ onCommand: handleVoiceCommand });
//    ```

// 2. Create a MUI `<Button>`:

//    * `onClick` → `startListening`
//    * Label changes based on `listening`:

//      * If not listening: “Cast Alohomora 🔊”
//      * If listening: “Listening… 🎧”

// 3. Optionally show a warning if not supported:

//    * e.g., MUI `<Alert severity="warning">Voice commands not supported…</Alert>`

// 🧠 **Robot logic:**

// * IF `!supported` → show a fallback message, disable button
// * ELSE:

//   * Button enabled
//   * When clicked, call `startListening()`
//   * When done (or after a spell is recognized) you can auto-call `stopListening()`

// ---

// ### 6. Tie it all together

// **Control flow, from user perspective:**

// 1. User clicks **“Cast Alohomora”** button
// 2. Button’s `onClick` → `startListening()`
// 3. Browser asks for mic permission (first time only)
// 4. User says: **“alohomora”**
// 5. SpeechRecognition fires `onresult` → transcript `"alohomora"`
// 6. Hook calls `onCommand("alohomora")`
// 7. `handleVoiceCommand` sees `"alohomora"` → calls `goToNextPage()`
// 8. Router/step logic navigates to next portfolio section

// ---

// ### 7. Optional extras you can think about

// * **Timeout**: stop listening after X seconds if nothing is heard
// * **Feedback**: use MUI Snackbar to show “Spell recognized: Alohomora!”
// * **Accessibility**: also offer a normal “Next” button for non-voice users
// * **Config**: store the magic word in a constant or config file

// ---

// If you want, next step we can:

// * Turn this robot plan into a concrete `useVoiceCommand` hook skeleton in TS
// * Or design the spell → action mapping system to be more extensible (for more spells).
