---
id: critical-save
title: 保留关键卡牌（Critical Save）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import CriticalSave from '@site/image-generator/yml/beginner/critical-save.yml';

<BeginnersGuideProgress id="critical-save" />

- 关键卡牌被定义为每种卡牌的最后一张。例如：
  - 如果Alice手中有张红2，另一张红2在抽排堆中，那么Alice的红2就不是关键卡牌。
  - 如果Alice手中有张红2，另一张红2已经被弃掉，那么Alice的红2就是关键卡牌。
  - 如果Alice手中有张红5，那它永远被视为关键卡牌。（花火默认规则下，每种花色的5只有1张）。
- 显而易见，我们需要给予关键卡牌*保留提示*以防止它们被弃掉。（如果关键卡牌被弃掉了，那么本局游戏的最高分就会衰减）
- 只要这张关键卡牌不是数字5，我们规定玩家可以使用**颜色提示或数字提示**来保留关键卡牌。
- 在如下的例子中：
  - Alice向Bob提示了蓝色，点到了4号槽位的卡牌。
  - 提示前，Bob手中只有5号槽位的单张5被提示过。
  - Bob第一反应认为这可能是给蓝2的*打出提示*。然而，因为这个提示聚焦在了弃牌位上，这也可能是一个*保留提示*。
  - Bob看了眼弃牌堆，发现里面躺着张蓝4。因此，这可能是一个对蓝4的*保留提示*。Bob知道这个回合他不应该动这张卡卡牌。
  - Bob标记这张牌位蓝2或蓝4，方便他之后查阅。然后他选择弃牌。

<CriticalSave />
