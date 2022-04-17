---
id: delayed-play-clues
title: Delayed Play Clues（滞后打出提示）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import DelayedPlayClues from '@site/image-generator/yml/beginner/delayed-play-clues.yml';

<BeginnersGuideProgress id="delayed-play-clues" />

- 我们允许给出这样的「Play Clues」：这张牌只有在其他玩家打出同种花色的卡牌**后**才能被打出。这种提示被称为「Delayed Play Clues」。
- 我们规定应将**所有「Play Clues」**都视为**可能的「Delayed Play Clues」**。
- 譬如，在一个三人游戏中：
  - Alice向Bob提示了数字2，这是一个2的「Play Clues」。
  - 现在到了Bob的回合，如果他的2是红2，那他就可以立即打出。
  - 然而，Bob也意识到这可能是一个对于黄1、绿1或蓝1的「Delayed Play Clues」。所以，Bob必须等待Cathy将所有的1全部打出后再打出手中的2。
  - Bob在卡牌上做好笔记，然后弃牌。

<DelayedPlayClues />
