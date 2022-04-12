---
id: level-3
title: 进阶3 - 基础策略
---

import PlayingMultiple1s1 from '@site/image-generator/yml/level-3/playing-multiple-1s-1.yml';
import PlayingMultiple1s2 from '@site/image-generator/yml/level-3/playing-multiple-1s-2.yml';
import PlayingMultiple1s3 from '@site/image-generator/yml/level-3/playing-multiple-1s-3.yml';
import FixClue1 from '@site/image-generator/yml/level-3/fix-clue-1.yml';
import FixClue2 from '@site/image-generator/yml/level-3/fix-clue-2.yml';
import FixClue3 from '@site/image-generator/yml/level-3/fix-clue-3.yml';
import FixClue4 from '@site/image-generator/yml/level-3/fix-clue-4.yml';
import SarcasticDiscard from '@site/image-generator/yml/level-3/sarcastic-discard.yml';
import InformationLock from '@site/image-generator/yml/level-3/information-lock.yml';

- 从现在开始，只要你觉得自己熟练掌握了前一个进阶的内容，你可以随时学习下一个进阶等级。
- 对于进阶3-9的内容，比较好的建议是每个进阶练习10-15把游戏。
- 对于之后的进阶内容，比较好的建议是每个进阶练习15-20把游戏。
- 不要急于学习下一个进阶的内容！如果你还未融会贯通所学的知识，你很可能会让队友失望。

<br />

## 约定

<br />

### 多张1可打时

#### 第一环：起手牌需反向打出

- 如果你的手中有多于一张1被提示，**你应该假设它们都可以被打出**。（这仅适用于1，为什么？想想「点优原则」。）
- 我们规定在游戏开局打出数字1是一种特殊情况：你应该总是**从右往左打出起手牌中的1**。（这是一个特殊情况，因为一般情况下，「打出提示」意味着打出最左边的卡。）
- 在下面的例子中：
  - 在游戏开始的第一轮，Alice向Bob提示数字1，点到了三张1（2号、3号和4号槽位）。
  - 由「点优原则」可知，Bob知道他手中的三张牌都可以打出。
  - Bob应该优先打出4号槽位的卡牌，然后是3号槽位，最后是2号槽位的卡牌。

<PlayingMultiple1s1 />

- （这个约定背后的逻辑在[约定解释文档](https://github.com/hanabi/hanabi.github.io/blob/main/misc/convention-reasons.md#play-order-of-multiple-1s)中有解释）

<br />

#### 第二环：新1原则

- 如果：
  - 一名玩家手中的两张（或更多）张卡牌被提示1，
  - 其中一张（或多张）1在起手牌中，
  - 并且有另一张不在起手牌中，
  - 那么“最新的”卡牌直觉上来说更为重要。（否则，这个提示之前就应该被给出）
- 因此，刚抓上来的1应该总是比原本留在起手牌中的1先打出。
- 我们接着上面的那个例子，假设：
  - Bob打出了4号槽位的卡牌。成功打出1张红1。（他之后抽了张牌，其他牌会依次往右挪一格）
  - Alice向Bob提示了数字1，点到了1号槽位的新牌，重新点到了3号与4号槽位的1。
  - Bob知道新抽的1优先级更高，他打出1号槽位的卡牌。
  - 之后，Bob恢复到先前的打牌顺序中，先打出4号槽位的1，再打出3号槽位的1。

<PlayingMultiple1s2 />

<br />

#### 第三环：弃牌位聚焦特例

- 「新1原则」有一个例外：弃牌位聚焦优先级**更高**。
- 例子如下，在一个三人游戏中：
  - 红2与蓝2已经打出。
  - Alice弃掉了一张红4。
  - Bob向Alice提示了数字1，点到了1、2、3、5号槽位的4张1。
  - Alice知道正确的打出顺序是5，1，3，2：
    - 首先Alice知道通常情况下，你应该打出刚抓的1，再打出起手牌中的其他1。然而，*弃牌位聚焦*会覆盖掉这条规则，所以她知道自己5号槽位（弃牌位）的牌应该优先打出。
    - 之后，她使用「新1原则」，知道接下来应该打出1号槽位的1。
    - 再后，她会将剩下的1从右往左打出（因为它们都在起手牌中），所以她会打出3号槽位的1，再打出2号槽位的1。

<PlayingMultiple1s3 />

<br />

### 指正提示

- Nearly every clue is either a *Save Clue* or *Play Clue*. One small exception to this is a *Fix Clue*, which is an attempt to "fix" an impending misplay.
- *Fix Clues* are often needed when a duplicate card is touched. Cards are not normally duplicated (which follows from *Good Touch Principle*), but sometimes someone makes a mistake, or a sequence of particular cards makes duplicating necessary. Duplicate cards will lead to misplays, so it is the team's responsibility to fix the problem and intervene before this happens.
- In the example below:
  - Before the clue was given, Bob had an unknown purple card in his hand.
  - Alice knows that from *Good Touch Principle*, Bob will conclude that the card is a purple 5, and he will likely play it on his next turn.
  - Alice clues number 3 to Bob, which "fills in" the purple card and reveals that it is purple 3.
  - Since Bob was about to play this card, Bob knows that this was a *Fix Clue* and that he can now safely discard the purple 3.

<FixClue1 />

<br />

### 指正提示（点到多张牌时）

- **A clue cannot be a *Play Clue* and a *Fix Clue* at the same time.** If you receive a *Fix Clue* and it touches other ancillary cards, none of them are necessarily playable. The **only** information that a *Fix Clue* conveys is to fix the impending misplay or duplication.
- In the example below:
  - Before the clue was given, Bob has an unknown 1 in his hand.
  - Alice knows that from *Good Touch Principle*, Bob will conclude that his 1 is a green 1, and he will likely play it on his next turn.
  - Alice clues blue to Bob, which "fills in" the 1 and reveals that it is blue 1. The blue clue also touches a blue card on slot 1.
  - In this situation, Bob might be tempted to think that this is a *Play Clue* on a blue 2 in slot 1, especially considering that the slot 1 card was the only new card introduced in the clue. (And the focus of a clue should always be on the new card introduced.)
  - However, the fact that the blue clue "fixed" an impending misplay means that Alice may have had no choice but to clue blue, and she may not necessarily be trying to give a *Play Clue*.
  - Bob marks the blue card on slot 1 as either blue 2, blue 3, blue 4, or blue 5. He then discards the blue 1.

<FixClue2 />

<br />

### 指正提示（没有给出额外信息时）

- Usually a *Fix Clue* will "fill in" the card to explicitly make it known that the card is unplayable or duplicated. However, it is also possible to perform a *Fix Clue* just by cluing the card again.
- In the example below:
  - Alice clues Bob number 1 and it touches three 1's.
  - Bob successfully plays two 1's.
  - Alice clues Bob number 1 again, and all the clue does is re-touch the remaining 1.
  - Since Bob was going to play the 1 already without Alice doing anything, the clue must have some other meaning. Thus, it is a *Fix Clue*: the remaining 1 is bad, and Bob can safely discard it.

<FixClue3 />

- *Fix Clues* that give no additional information only "fix" one card.
- In the example below:
  - Alice clues Bob number 1 and it touches three 1's.
  - Bob successfully plays one 1.
  - Alice clues Bob number 1 again, and all the clue does is re-touch the two remaining 1's.
  - Since Bob was going to play his 1's already without Alice doing anything, the clue must have some other meaning. Thus, it is a *Fix Clue*: the 1 that Bob was about to play is bad, and Bob can safely discard it. Bob skips over the 1 that he was about to play (on slot 4) and plays the other one (on slot 3).

<FixClue4 />

<br />

## 特殊操作

<br />

### The Sarcastic Discard

- Occasionally, through a mistake (or complicated situation), the same card will be clued in two different people's hands. Generally, this is to be avoided, but sometimes it happens. Handling this can be tricky.
- Generally, the **first** player who fully realizes that they have the duplicate card should discard it (as opposed to playing it or holding on to it). This is called a *Sarcastic Discard*, and it communicates to the other player that they 100% have the discarded card. (This is because normally, from *Good Touch Principle*, we never discard cards that have been clued, so if a player discards a clued card, something special must be going on.)
- For example, in a 3-player game:
  - Red 2 is played on the stacks.
  - Alice has one red 3 clued in his hand with just number 3. (She does not know which suit it is.)
  - Alice clues number 3 to Bob, which touches one 3. (This is a mistake, because it might be violating *Good Touch Principle*.)
  - Bob knows that the only playable 3 is red 3. He also knows that Alice has a clued red 3 already in her hand. Thus, he knows that he has the red 3 and that Alice made a mistake.
  - Bob performs a *Sarcastic Discard* to pass the red 3 back to Alice.

<SarcasticDiscard />

- The *Sarcastic Discard* is similar to the *Prompt*, except that it is initiated by a discard instead of a clue.
- However, unlike a *Prompt*, if there are multiple cards that a *Sarcastic Discard* could apply to, then it does **not** promise that it is the left-most card. It only promises that they have the card somewhere. For example:
  - Alice *Sarcastic Discards* a red 3.
  - Bob has two cards clued with number 3 in his hand. He does not have any color information on either 3.
  - Bob can be certain that one of the two 3's is red 3, but he does not know which one it is yet.

<br />

## 一般原则

<br />

### Misplay Cost Principle

- On a turn where a player misplays and accumulates a strike for the team, they could have discarded instead and generated a clue.
- So, if you can spend one clue to stop one misplay, the value comes out even.
- Thus, since there are only 2 strikes allowed and accumulating strikes limits flexibility, it is almost always worth it to spend one clue to stop one strike.
- If it would require two clues to stop an impending misplay, then as long as the strike would not lose the game, it is usually best to let the player misplay the card and get a strike.

<br />

### 效率

- A big part of Hanabi is of trying to be as efficient as possible. This means that players will generally try to "get" as many cards with one clue as possible.
- If you use one clue to get one card, we refer to that as a 1-for-1 clue. For example:
  - On the first turn of the game, Alice clues Bob number 1, touching one 1 as a 1-for-1.
- If you use one clue to get two cards, we refer to that as a 2-for-1 clue. For example:
  - On the first turn of the game, Alice clues Bob number 1, touching two 1's as a 2-for-1. (Bob will play both.)
- 3-for-1 clues are even better than 2-for-1 clues, and so forth. It is even possible to perform a 9-for-1 clue with advanced techniques.
- If a clue touches two cards but only one of them will play right now, it **still counts** as a 2-for-1. This is because we assume that all touched cards will eventually play from *Good Touch Principle*. For example:
  - On the first turn of the game, Alice clues Bob red, touching a red 1 on slot 1 and a red 5 on slot 2 as a 2-for-1. (Bob will only play the red 1 and save the other red card for later.)
- On Hanab Live, the future required efficiency is shown on the right side of the screen. Future required efficiency is calculated by the following formula:
  - `number of cards that remain to be clued / number of clues remaining`
- **If future required efficiency is high, players should probably not perform 1-for-1 clues!** Instead, it is better to discard and try to let someone perform a *Finesse*.

<br />

### 节奏

- *Tempo* is a term used to describe the speed at which cards are played. (This is similar to how it is used in other games such as chess.)
- Hanabi can be thought of a race to get all the cards played before the time runs out. This means that even if the team is being extremely efficient, they can still lose the game if they are not playing their cards fast enough. Thus, players have to **strike a balance between *Efficiency* and *Tempo***. You can think of *Efficiency* and *Tempo* as the yin and yang of Hanabi.
- At the beginning of the game, there is a lot of time left, so players will generally prefer clues that get a lot of *Efficiency* over clues that get a lot of *Tempo*.
- At the end of the game, there is almost no time left, so players stop caring about *Efficiency* and start only caring about *Tempo*.
- On Hanab Live, "Pace" is shown at the right side of the screen. Pace is a measure of how many more discards can occur, so this essentially tells you how much time is left in the game. Starting pace is calculated by the following formula:
  - `current score + cards in deck + number of players - maximum score`
- Note that even at the beginning of the game, players might prefer a clue that gets *Tempo* over a more efficient clue if it will prevent the discard of some other useful card. It all depends on the context of the game!

<br />

### Information Lock Principle

#### Information Lock with the Full Identity

- As soon as a clue is given to a card, if it is enough to determine the card's full identity, then the assumed identity is said to be locked in to the card. (On Hanab Live, this is usually represented as a player writing an "identity note" on the card.)
- For example, in a 3-player no variant game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob red, touching a red card on slot 1 as a *Play Clue*.
  - Bob immediately right-clicks on the card and writes a note of "red 1".
  - This card is now "locked in" as a red 1. No future clues or actions from other players can ever change that.

#### Information Lock with a Superposition

- A *[superposition](https://en.wikipedia.org/wiki/Quantum_superposition)* is a term from [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics) that describes how something can be two different things at the same time. For example, an electron is a type of a particle, and an electron can either be "spin up" or "spin down". But an electron could also be in a superposition of both "spin up" and "spin down" at the same time, as weird as that sounds. If an electron happens to bounce off of something (e.g. is measured), then the superposition will "collapse" and it will **only** be in a "spin up" or "spin down" state. The details of quantum mechanics are not important - the point is that we treat unknown Hanabi cards sort of like unknown particles: even though they **really** have a true identity, we ignore that and treat them as being all of the possibilities at the same time.
- As soon as a clue is given to a card that could be two or more different things, then the assumed superposition of all of the possibilities is locked in to the card.
- For example, in 3-player rainbow game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob red, touching a red card on slot 1 as a *Play Clue*.
  - Bob immediately right-clicks on the card and writes a note" of "red 1 or rainbow 1".
  - This card is now "locked in" as this specific superposition. Future clues and actions can narrow down the cards in the superposition or completely collapse the superposition, but new cards can never be added to the superposition.

#### Information Lock on In-Between Cards

- As soon as a clue is given to a card that is not immediately playable, the assumed identity is locked in to the card **and** all of the in-between cards.
- For example, in a 4-player no variant game:
  - Red 1 is played on the stacks.
  - Bob has one card in his hand clued with number 2. (It is currently unknown.)
  - Cathy has one card in her hand clued with number 3. (It is currently unknown.)
  - Alice clues Donald red, touching a red 4 as a *Play Clue*.
  - Bob is promised to have the red 2. He writes a note of "red 2" on his clued 2. It is now locked in forever as that card.
  - Cathy is promised to have the red 3. She writes a note of "red 3" on her clued 3. It is now locked in forever as that card.
  - Donald knows that from *Good Touch Principle*, his red card cannot be red 2, since Bob has that card clued in his hand.
  - Donald knows that from *Good Touch Principle*, his red card cannot be red 3, since Cathy has that card clued in her hand.
  - Donald knows that he must therefore have the red 4. He writes a note of "red 4" on his red card. It is now locked in forever as that card.

<InformationLock />

#### Breaking Information Lock

- A direct conflict is the only thing that can "break" an information lock.
- For example, in a 3-player game:
  - Bob has a card in his hand that is touched with a number 2 clue. (It has no color clues on it.)
  - Bob has a written a note of "red 2" on the card, meaning that it has been "locked in" as a red 2. (Bob will permanently think that it is a red 2.)
  - Alice clues blue to Bob, which "fills in" the card as a blue 2.
  - It is now impossible for this card to be a red 2 - Bob knows that he was lied to earlier on in the game. Bob erases his note of "red 2" on the card and the *Information Lock* is broken.
