---
id: finesse
title: The Finesse（巧技）
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Finesse1 from '@site/image-generator/yml/beginner/finesse-1.yml';
import Finesse2 from '@site/image-generator/yml/beginner/finesse-2.yml';

<BeginnersGuideProgress id="finesse" />

- 通常情况下，玩家都会选择打出由其他队员提示过的卡牌。
- 然而，我们可以做到让一名玩家盲打出一张完全没有提示的卡牌。
- 在下面的例子中：
  - Bob手中没有任何提示过的牌。
  - Alice向Cathy提示了红色，点到了红4。这肯定是一个对红4的「Play Clue」。
  - Bob看到红4现在并不可被打出，若假设Alice没有犯错，那么这个提示一定暗示着有人持有红3。
  - Bob没发现其他玩家手中有红3。所以，Alice的行为保证着他一定有红3。
  - 通常情况下，这会被理解为一个「Prompt」。但Bob手中并没有红色卡牌，也没有数字3。那红3去哪了？
  - Bob知道这肯定是一个「Finesse」——他确定自己的左手第一张未被提示的卡牌一定是张红3。
  - Bob盲打出1号槽位的卡牌，这是一张红3。
  - Cathy看到在给出红色提示后盲打即刻发生，她知道自己一定有着接下来的牌，那张红4。
  - Cathy打出红4。

<Finesse1 />

### Prompt > Finesse

- **「Prompt」永远优先于「Finesse」**。
- 这意味着如果Alice需要在两者之间作出抉择：
  1. 打出自己手中一张有着红色提示的卡牌，和
  1. 盲打出自己「Finesse Position」（巧技位）上可能的红色卡牌。
- 那么Alice永远都应该选择做第一种行动。

<br />

### Finesse Urgency（巧技的紧急性）

- 「Finesse」出现时，会导致暂时的信息错位。
- 譬如，在先前的案例中，如果Bob没有盲打，而是弃牌，Cathy就会认为自己有着红3。但她实际上并没有红3，这意味着队伍中的信息不再同步。
- 出于这个缘由，盲打一张牌完成「Finesse」是非常重要的——这么做后，信息再次同步。因此，**如果玩家被应用「Finesse」，他们往往应该立刻盲打出Finesse Position的卡牌**，即使他们还有其他重要的卡牌需要打出，或者有非常好的提示可以给出。

<br />

### Finesse Position

我们定义「Finesse Position」为玩家最左端的未被提示的卡牌。一个玩家的「Finesse Position」可以移动，移动后，仍然可以应用「Finesse」。
- 在下面的例子中：
  - Alice向Cathy提示红色，点到了1号与2号槽位的卡牌。
  - Cathy假设自己的1号槽位为红1。
  - 接着，Bob向Donald提示蓝色，点到了蓝2。
  - 现在轮到Cathy。她知道自己一定有蓝1，Bob正使用「Finesse」。
  - 盲打蓝1要比打出红1更加重要。
  - 平时，Cathy的「Finesse Position」是她最左端的卡牌。不过，既然她的1号与2号槽位都已被提示，她的「Finesse」位移到了3号槽位。因此，Cathy必须盲打出在3号槽位的蓝1。

<Finesse2 />
