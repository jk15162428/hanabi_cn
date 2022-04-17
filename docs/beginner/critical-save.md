---
id: critical-save
title: Critical Save（保留关键卡牌）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import CriticalSave from '@site/image-generator/yml/beginner/critical-save.yml';

<BeginnersGuideProgress id="critical-save" />

- Critical Card被定义为每种卡牌的最后一张。例如：
  - 如果Alice手中有张红2，另一张红2在抽排堆中，那么Alice的红2就不是Critical Card。
  - 如果Alice手中有张红2，另一张红2已经被弃掉，那么Alice的红2就是Critical Card。
  - 如果Alice手中有张红5，那它永远被视为Critical Card。（花火默认规则下，每种花色的5只有1张）。
- 显而易见，我们需要给予Critical Card「Save Clues」以防止它们被弃掉。（如果Critical Card被弃掉了，那么本局游戏的最高分就会衰减）
- 只要这张Critical Card不是数字5，我们规定玩家可以使用**颜色提示或数字提示**来保留Critical Card。
- 在下面的例子中：
  - Alice向Bob提示了蓝色，点到了4号槽位的卡牌。
  - 提示前，Bob手中只有5号槽位的单张5被提示过。
  - Bob第一反应认为这可能是给蓝2的「Play Clues」。然而，因为这个提示focus在了chop上，这也可能是一个「Save Clues」。
  - Bob看了眼弃牌堆，发现里面躺着张蓝4。因此，这可能是一个对蓝4的「Save Clues」。Bob知道这个回合他不应该动这张卡卡牌。
  - Bob标记这张牌位蓝2或蓝4，方便他之后查阅。然后他选择弃牌。

<CriticalSave />
