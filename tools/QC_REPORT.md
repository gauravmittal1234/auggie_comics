# Auggie Comics — QC report (feedback round 1)

Every bug below was found during this round's QC and fixed. Automated checks live in `tools/qc.js`
(open `tools/sheet.html` on the dev server, then run `AuggiQC.run()` in the console; `AuggiQC.snap(id, page, lang)`
saves a page image through `tools/serve.py`).

Automated layout check across every page of every comic in both languages:
- start of this round: **1,119** layout problems
- now: see the final numbers at the bottom

## Read-aloud
1. Hindi read-aloud was silent in Chrome: the voice list loads late and the first tap found no voices. Now waits for voices.
2. Hindi text could be handed to an English voice, which reads Devanagari as silence or noise. Only Hindi voices read Hindi now.
3. No explanation when a device has no Hindi voice. Now shows the exact steps for iPhone/Mac and Android.
4. Chrome cut long pages off after about 15 seconds. Now speaks sentence by sentence.
5. Chrome ignored a new "Read to me" right after "Stop". Adds a short pause before speaking again.
6. Chrome could drop sentences mid-page (speech objects garbage-collected). Keeps them alive until spoken.
7. Robotic delivery: extreme pitches (0.5–2.0) per character. Now one natural child voice with gentle pitch shifts.
8. Low-quality novelty voices (Bells, Bad News, eSpeak) could be chosen. Voices are ranked: neural/"Natural", Google, premium first.
9. A long list of confusing voice names. Replaced by a simple Girl / Boy switch, remembered between visits.
10. Switching voice while reading kept the old voice. Restarts the page with the new one.
11. No pauses between lines, so dialogue ran together. Short pause between sentences, longer between speakers.
12. Optional hook for studio-quality voices: set `window.AUGGIE_TTS = { url }` to use a text-to-speech server.

## Home page and filters
13. Home page cluttered by a wall of 18 topic chips. Filters now sit behind a Filters button.
14. No sense of how many comics each topic has. Topic tiles with counts on the home page, counts on every filter chip.
15. Active filters were invisible once the panel was closed. Active-filter chips with ✕, plus Clear all.
16. No hint that filters were on. Red counter badge on the Filters button.
17. The results count ("Showing 6 of 126") appeared under the wrong heading.
18. Topics with no comics for the chosen age could still be tapped. They are greyed out.
19. A topic tile could not be switched off. Tapping it again clears it.
20. New topics (School, Holidays, Forest, Office, Ghost Fun) had no names or colours.
21. "Read next" only matched age. Now suggests the same topic first.

## PDF download
22. Pages were printed edge to edge, so printers cut off outer panels and words. 9 mm safety margin on every page.
23. PDF lettering could use fallback fonts if the comic fonts had not loaded yet, making text wider than planned. Waits for the fonts.
24. Long single lines (page header title, cover blurb, lesson label) could run past their box. Every such line now shrinks to fit.
25. Cover blurb was forced onto one line and ran off the page for long blurbs. Wraps onto two lines in a taller band.
26. Long cover titles could wrap to three lines and collide with the art. Shrinks to at most two lines.

## Comic pages: design and layout
27. Characters overlapped each other (154 panel checks). Each character is measured and kept apart.
28. Characters stood partly outside the panel (12). Rows that do not fit are repacked evenly.
29. Speech bubbles covered faces (246). Bubble spots are scored and faces are no-go zones.
30. Speech bubbles overlapped each other (129). Bubbles in a panel are now placed together as a set.
31. Speech bubbles overlapped the yellow caption (28). Words never touch other words.
32. Sound-effect bursts covered faces (77). Faces are no-go zones for bursts too.
33. Sound-effect bursts covered bubble text. Bubbles are no-go zones; tight panels get a smaller burst.
34. Bubbles read in the wrong order (answer above the question, 34). Enforced top-to-bottom, then left-to-right.
35. Characters in a conversation looked away from each other (19). Speakers turn to face each other automatically.
36. Faces were tiny in one- and two-character panels. Camera shots: medium and two-shot close-ups, cropped below the knees.
37. Three-character panels were squashed. Staged in two rows; the middle character stands a little further back.
38. Back-row characters were hidden behind others (66). Back row only for three or more, standing between the others.
39. Heads landed under the words in text-heavy panels. The layout reserves room for the words before placing people.
40. Narrow panels had more words than room. They are lettered a little smaller (down to 78%), like a real letterer.
41. A single long word could be wider than its bubble. The bubble text shrinks to fit.
42. Very long bubbles (6+ lines) became towers. They reflow wider and a little smaller.
43. Three-character panels could land in half-width slots. The page layout picker avoids that.
44. Covers: the title band hid the hero's face. The cover scene now ends at the band.
45. Covers: small figures in a big empty sky. Covers use a close "hero shot".
46. People sitting in offices, cafés and classrooms sat cross-legged on the floor. They now sit on a chair.
47. Auggie's sniffing pose looked like a detached head on a tube. The neck now flows down to a lowered head.
48. Characters floated with no contact with the ground. Soft contact shadows under everyone standing.

## Infrastructure
49. After an update, readers' browsers could keep old scripts from cache (GitHub Pages caches ~10 minutes), mixing old and new code. Every script and stylesheet link now carries a version tag.
50. The local preview server let the browser cache scripts, hiding fixes during testing. Dev server sends no-cache headers.
51. The arrow-key page turner assumed every key press came from a page element and could throw for others. Hardened, and it now ignores Alt/Ctrl/Cmd shortcuts (browser back/forward).
52. Crowd staging that sent the tallest character to the back hid more faces (20). Reverted to the middle character, standing visibly further back.
53. On iPhone and iPad, Safari only lets speech start from inside the tap. The new read-aloud waited for voices first, which could leave iOS silent. The tap now unlocks speech straight away, and reading starts immediately when nothing else is playing.
54. Characters running together were turned to face each other (to "talk"), so one looked like it was running backwards. When everyone in a panel is running or leaping, they now run the same way (`tools/fix-runners.js`).
55. Stargazing stories had to use the outer-space background, so a village night sky showed a ringed planet. New `nightsky` background (Milky Way, crescent moon, village rooftops) used for comics 136 and 138.
56. Carrots are Auggie's running gag, but there was no carrot to draw, so they only existed in the words. New `carrot` prop (and it can float in space scenes).
