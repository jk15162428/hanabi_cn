---
id: play-clues-question-1
title: Play Clues（习题1）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PlayCluesQuestion1 from '@site/image-generator/yml/beginner/play-clues-question-1.yml';

<BeginnersGuideProgress id="play-clues-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: '题目', value: 'question'},
    {label: '题解', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues blue to Bob, which touches one card on slot 3.
- From Bob's perspective, this must be a *Play Clue*. Bob marks down the identity of the card.
- What *card note* (i.e. card identity) does Bob write?

</TabItem>
<TabItem value="solution">

- Bob writes "blue 2".
  - (Since the blue 1 is already played, the next blue card to play is the blue 2.)

</TabItem>
</Tabs>

<PlayCluesQuestion1 />
