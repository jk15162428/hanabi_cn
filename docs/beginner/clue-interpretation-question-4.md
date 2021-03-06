---
id: clue-interpretation-question-4
title: 提示解读（习题4）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClueInterpretationQuestion4 from '@site/image-generator/yml/beginner/clue-interpretation-question-4.yml';

<BeginnersGuideProgress id="clue-interpretation-question-4" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: '问题', value: 'question'},
    {label: '题解', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob has a clued 2 in this hand.
- Alice clues blue to Bob, touching slot 3, slot 4, and slot 5.

1. What slot is focused?
1. Is this a *Play Clue* or a *Save Clue*?
1. What *card note* does Bob write on the focused card?

</TabItem>
<TabItem value="solution">

1. Slot 4 is focused (i.e. the "new" card that was on chop).
1. Blue 1 is played on the stacks and Bob already has a blue 2. Thus, the focused blue card can be either a blue 3, a blue 4, or a blue 5.
    - If it is a blue 3, then this would be a *Chop-Focus Delayed Play Clue* through his own blue 2. That is legal.
    - If it is a blue 4, then this would be a *Critical Save* on the blue 4.
    - If it is a blue 5, then it wouldn't make any sense, because blue 5 is not playable. Blue 5 is critical, but it must be saved with a number 5 clue as a *5 Save*.
    - Thus, this can either be a *Chop-Focus Delayed Play Clue* on the blue 3 or a *Critical Save* on the blue 4.
1. Bob writes a *card note* of "blue 3, blue 4" on his slot 4 card.

- Note that before this clue, Bob was not able to play the 2 in his hand, because it could have been the yellow 2 (which is not playable).
- This blue clue "filled in" his 2 to be the blue 2, so now Bob can go ahead and play it.
- However, this does **not** make the clue a *Play Clue*. Since it was focused on slot 4, it is first and foremost a potential *Save Clue* that happened to have a "side-effect" of making the blue 2 playable. (Blue 2 was not the focus of the clue.)

</TabItem>
</Tabs>

<ClueInterpretationQuestion4 />
