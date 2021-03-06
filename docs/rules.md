---
id: rules
title: 规则
---
import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import RulesWin from '@site/image-generator/yml/beginner/rules-win.yml';
import Cards from '@site/image-generator/yml/beginner/rules-cards.yml';
import PlayCard from '@site/image-generator/yml/beginner/rules-play-card.yml';

本页面目前由Utopia单独编写，之后可能会改成[这篇](https://github.com/Hanabi-Live/hanabi-live/blob/main/docs/RULES.md)的翻译。

游戏的背景日本一个十分有特点民俗活动——花火大会。在这段时间里，日本各地都会有或大或小的烟火表演。参与的人在这一天会换上浴衣，带上小伙伴去河畔观赏演出。一边吃吃喝喝逛逛玩玩，一边欣赏绚烂的烟花。而在《花火》这款桌游中，玩家的目标就是通力合作，放出最绚烂的烟花。

基础模式的花火牌组包含五种花色，在Hanab Live中，这五种基础花色红、黄、绿、蓝、紫。不同的平台可能会用不同的颜色（譬如白），但在没有附加规则的情况下，每种花色之间并无区别。如下图：

<Cards />

每组花色各有三张1、两张2、3、4以及一张5（共10张）。玩家的目标是将每种花色按数字1到5的顺序依次打出，每打出一张牌获得1分。

游戏开始时配以8个可用的提示标记和3条命。开始游戏时，每名玩家根据游戏人数发牌（2/3名玩家各发5张，4/5名玩家各发4张，6名玩家各发3张），所有玩家都不能看到自己的手牌，但可以看到其他玩家的手牌。游戏以轮流回合形式进行，每名玩家在其回合能作出且必须作出以下一个行动：
1. 提示：一名玩家需要向一名其他玩家提示一种花色或数字的全部牌所处的位置。玩家须给出完整及正确无误的提示，在Hanab Live中，默认规则不允许空提示（即提示不含有某种花色或数字）。每次提示须消耗一个提示标记，当提示标记为零时，则不能选择提示。
1. 弃牌：一名玩家可以选择弃置自己的一张手牌至弃牌堆。此牌不能再加入游戏及打出。弃置一张手牌可以**补充**一个提示并摸一张牌。当提示标记为满（八个）时，玩家不能选择弃牌。
1. 打出手牌：玩家可以尝试打出一张牌，若打出的牌可以接在对应花色下（如桌面上的红色牌为2，玩家打出一张红色3），则此牌为有效。否则玩家将扣除一条命，若生命数减少为0（即打错3次）则游戏完结（获0分）。当玩家成功打出一种花色的完整一组5张牌，则可补充一个提示（若提示已为8，则无法补充提示），玩家不论打出成功与否均须摸一张牌，打出无效的牌与被弃置的牌等效，无法再加入游戏。
游戏以轮流回合制进行，除了达到满分、失误三次外，游戏还有一种结束方式：在牌库没有牌时，即进行最后一个回合。即：抽到最后一张牌的下一名玩家开始每名玩家再行动一轮。

## 打出手牌：

需要强调的是，玩家**不需要**指出自己打出的牌具体为什么牌，只需要该牌能被接到出牌堆上任一花色下面，此牌即有效。
- 在下面的例子中：
  - 这是游戏的开局，目前还没有给出任何提示，打出任何卡牌。
  - Alice向Bob提示了数字1，但到了2、3、4号槽位的卡牌。
  - Bob看到出牌堆中没有任何1已被打出，所以自己手牌中的3张1无论自己选择哪张都可以成功打出。

<PlayCard />

## 胜利？

本游戏并没有明确的胜利条件，但我们应该追求高标准，所以只在获得满分时称之为胜利。
- 在下面的例子中：
  - 出牌堆中已经打出了24张牌，仅剩蓝4尚未打出。
  - Alice手中有一张已经完全明了的蓝5，她知道只要打出这张牌游戏就会结束并获得满分，所以没有必要弃牌或提示。
  - Alice打出蓝5，游戏结束，获得25分。

固然，追求胜利是我们的目标，但不能过度追求胜利。在很多对局中，由于牌序问题，玩家绝无可能拿到满分。所以如果在游戏中因为失误等原因导致最高分下降，也不能半途而废。在游戏结束后好好复盘，在过程中提升自己，才是我们的最终目标。

<br />

<RulesWin />
