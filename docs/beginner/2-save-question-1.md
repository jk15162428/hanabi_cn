---
id: 2-save-question-1
title: 保留2（习题1）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TwoSaveQuestion1 from '@site/image-generator/yml/beginner/2-save-question-1.yml';

<BeginnersGuideProgress id="2-save-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: '问题', value: 'question'},
    {label: '题解', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues number 2 to Bob, touching his slot 4.
- From Bob's perspective, is this a *Play Clue* or a *Save Clue*?
- What *card note* does Bob write?

</TabItem>
<TabItem value="solution">

- This cannot be a *Save Clue* because the clue did not touch the card on Bob's chop. Thus, it must be a *Play Clue*.
- Bob writes a *card note* that includes the following identities:
  - blue 2 (directly playable)
  - yellow 2 (as a *Delayed Play Clue* through Cathy's yellow 1)

</TabItem>
</Tabs>

<TwoSaveQuestion1 />
