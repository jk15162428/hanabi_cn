---
id: level-4
title: 进阶4 - Basic Chop Moves
---

import TrashChopMove1 from '@site/image-generator/yml/level-4/trash-chop-move-1.yml';
import TrashChopMove2 from '@site/image-generator/yml/level-4/trash-chop-move-2.yml';
import TrashChopMove3 from '@site/image-generator/yml/level-4/trash-chop-move-3.yml';
import FivesChopMove1 from '@site/image-generator/yml/level-4/5s-chop-move-1.yml';
import FivesChopMove2 from '@site/image-generator/yml/level-4/5s-chop-move-2.yml';
import ChopMoveNew from '@site/image-generator/yml/level-4/chop-move-new.yml';
import ChopMoveNewException from '@site/image-generator/yml/level-4/chop-move-new-exception.yml';
import ChopMovePrompt from '@site/image-generator/yml/level-4/chop-move-prompt.yml';

## 规定

<br />

### Chop Moves（弃牌位挪移）

- 一般情况下，玩家们会弃掉他们最老的（最右侧的）未提示过的卡牌。然而，有时玩家可以知道一张未提示的卡牌是相当重要的。
- 「Chop Move」是一种特殊的操作，告诉一名玩家他现在chop上的未提示的卡牌是非常重要的。
- 在「Chop Move」后，那名玩家会认为自己的chop被一个“隐式”的提示点到了。因此，他们的chop会往左“挪移”，挪到下一张最右侧的，没有提示的卡牌。
- 「Chop Move」是永久的，就是说「Chop Moved」的卡在之后不应该被弃掉。（除非他们变成了废牌）
- 两种最为常见的「Chop Moves」将在下面讲解。

<br />

## 特殊操作

<br />

### The Trash Chop Move

- 在游戏的中期，如果所有的1都已经被打出，而一名玩家提示了1，这就有点奇怪。（根据「Good Touch Principle」，玩家不应该点到那些已经打过的卡牌。）这种情况下，1都被认为是废牌。
- 这个提示一定有更深层次的含义。我们不难推断出废牌右侧的卡牌都是重要的。这个提示的目的就是给那名玩家一个安全的弃牌对象。
- 然而，除了给出一个可以安全弃掉的牌外，这个提示也会「Chop Move」**所有**废牌右侧的牌。
- 例如，在一个三人游戏中：
  - 所有的1都已经打出。
  - Bob手中没有任何提示过的卡牌。
  - Alice向Bob提示了1，点到了4号槽位的1。
  - Bob「Chop Move」自己的5号槽位。
  - Bob弃掉了1。
  - Bob现在的chop变成了4号槽位。

<TrashChopMove1 />

- 大多数时间内，「Trash Chop Move」一般只会用来「Chop Move」一张卡（即废牌与chop只隔一张牌）。不过，你也可以一次性「Chop Move」多张牌。
- 例如，在一个三人游戏中：
  - 所有的1都已经打出。
  - Bob手中没有任何提示过的卡牌。
  - Alice向Bob提示了1，点到了1号槽位的1。
  - Bob「Chop Move」自己的2号、3号、4号和5号槽位（一次性「Chop Move」了四张牌）。
  - Bob弃掉了1。
  - Bob现在的chop变成了1号槽位。

<TrashChopMove2 />

- *Trash Chop Moves* are most commonly performed with a number 1 clue because it is likely that in the middle of a game, all of the 1's will be already played. But it could also be done with a number two 2 clue if all the 2's are already played / accounted for. Or, it could be done with a red clue if all of the red cards are already played / accounted for. And so forth.
- Strategy wise, the *Trash Chop Move* is used for two main reasons:
  1. Sometimes there are multiple critical cards in a row on chop and it falls to one player to save all of them. In this situation, a multiple-card *Chop Move* could be the only way to do it.
  1. Some cards (e.g. a *one-away-from-playable* 3) are quite useful to the team, but "illegal" to touch directly (as touching them directly with a clue would imply that they are playable right now). If the game is going well, then it can be useful to "waste" a clue in order to have the card saved permanently.
- Note that you are **not** allowed to *Trash Chop Move* a card that you can just clue directly with a *Save Clue* (unless there are multiple critical cards in a row on chop and you have no other choice). This is because having some positive information is always better than having the card be a mystery.
- If a *Trash Chop Move* touches **multiple** trash cards, then it only *Chop Moves* the cards to the right of the right-most trash card.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in slot 2 and a 1 in slot 4.
  - Bob **only** *Chop Moves* his slot 5 card.

<TrashChopMove3 />

<br />

### The 5's Chop Move (5CM)

- Normally, we are only allowed to save 5's on chop (unless it is done with a *5 Stall* clue, which can happen in the *Early Game* and in other "stalling" situations).
- So, if a number 5 clue is performed on a 5 that is not on chop, and it is **not** a stalling situation, then it will normally look like a *Play Clue* on that 5.
- However, if the 5 is:
  - **one-away** from chop (or, if two or more 5's are clued and the right-most 5 is one-away from chop), and
  - the chop card is not a trash card
- Then, we agree that it has a special meaning, and that the clue is **not** a *Play Clue* at all.
- Instead, it is understood that the clue is a *5's Chop Move*, and the player should *Chop Move* in a manner similar to the *Trash Chop Move*.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 5's to Bob, which touches a 5 on slot 4.
  - Bob *Chop Moves* his slot 5 card. Bob's new chop is his slot 3.

<FivesChopMove1 />

- Similar to the *Trash Chop Move*, if a *5's Chop Move* touches **multiple** 5's, then it only *Chop Moves* the cards to the right of the right-most 5.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 5's to Bob, which touches a 5 in slot 2 and a 5 in slot 4.
  - Bob **only** *Chop Moves* his slot 5 card. Bob's new chop is his slot 3.

<FivesChopMove2 />

- Note that the *5's Chop Move* is different than the *Trash Chop Move* in that you can only chop move **one** card with it. Thus, if you clue a 5 and it is **two** (or more) slots away from the chop, then it is to be assumed to be a *Play Clue* on the 5.
  - When counting how far away from chop a card is, you should only look at **unclued** cards.
- Remember that *5 Stalls* takes precedence over *5's Chop Moves*. Thus, if a number 5 clue **could** just be a *5 Stall* (e.g. it is the *Early Game*), then it should not *Chop Move* anything.
  - Technically, one could try to analyze whether a clue is a *5 Stall* or *5's Chop Move* by looking at whether the clue-giver had a different clue to give, since *5 Stalls* are only permitted if all "normal" *Play Clues* and *Save Clues* have been extinguished. However, this analysis relies on asymmetric information, and can be confusing even for experienced players. So, this move is not introduced until [level 17](level-17.md#special-moves).
- For level 17+ players, see the *[Early 5's Chop Move](level-17.md#the-early-5s-chop-move)*.
- For level 20+ players, there are [additional rules](level-20.md#interaction-with-5-rank-clues) relating to the *5's Chop Move*.

<br />

## General Principles

<br />

### Chop Moves & New Clues

- Once a card has been *Chop Moved* and is no longer in danger of being discarded, it is treated as an already-clued card with regards to new clues given to that hand.
- For example, in a 3-player game:
  - All of the 1's have been played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in his slot 4.
  - Bob *Chop Moves* his slot 5.
  - Bob discards the 1.
  - Bob's chop is now his slot 4.
  - Cathy clues blue to Bob, which touches his slot 1 (the card he just drew) and his slot 5 (the card that was just *Chop Moved*).
  - Bob knows that the focus of the clue is always on the new card introduced, so this is **not** chop-focus, and the focus of the clue is on slot 1.
  - Thus, Bob will play blue 2 from slot 1 on his next turn.

<ChopMoveNew />

- The exception to the above rule is if a clue is given that touches a *Chop Moved* card for the first time and only "old" cards are touched.
- For example, in a 3-player game of the rainbow variant:
  - All the 2's are played on the stacks.
  - Bob has an unknown red card on slot 3, an unknown red card on slot 4, and a *Chop Moved* card in slot 5 (that is completely unclued).
  - Alice clues blue to Bob, which touches slot 3, slot 4, and slot 5. (Slot 3 and slot 4 are "filled in" to be rainbow cards and slot 5 is now a true blue card.)
  - Bob knows that the focus of the clue is normally on the new card introduced, but all three of the cards that were touched were "old".
  - Bob knows that when old cards are re-touched, the focus of the clue is the left-most of those cards.
  - However, Bob also knows that this is the exception to the rule. In this specific case, putting a positive clue on the *Chop Moved* card was more important than filling in the rainbow cards, so by convention the focus of the clue is his slot 5.

<ChopMoveNewException />

<br />

### Chop Moves & Prompts

- *Chop Moves* interact with *Prompts* & *Finesses* in a potentially confusing way. *Chop Moved* cards should **not** be played into *Prompts*, even though they are imagined to have an "invisible" clue on them.
- For example:
  - All the 1's are played on the stacks.
  - Bob has no cards clued in his hand, but he is *Chop Moved* for a mystery card on his slot 5.
  - Alice clues Cathy red, which touches a red 3.
  - Bob knows that he is promised the red 2. If this is a *Finesse*, then he has the red 2 on his *Finesse Position* (slot 1).
  - However, Bob is also *Chop Moved* for a card. Bob knows that *Chop Moved* cards have an "invisible" clue around them, and Bob also knows that *Prompts* are said to take precedence over *Finesses*.
  - So should he play his slot 1 as a *Finesse* or his slot 5 as a *Prompt*? In this situation, Bob knows that *Prompts* do not apply to *Chop Moved* cards, so Bob should play his slot 1.

<ChopMovePrompt />

<br />

## Common Mistakes

<br />

### Critical Discards after a Chop Move (Mistake)

- If a player *Chop Moves* a card, and then the next time they discard, they discard a critical card, then obviously some kind of mistake occurred.
- The best explanation is that the *Chop Move* was never intended in the first place.
- Thus, when this happens, the player should "undo" the *Chop Move*.

<br />

### Undoing an Accidental Chop Move (Mistake)

- Often times a player can misinterpret a clue as a *Chop Move* when it really had some other meaning. If this happens, after they discard their new *Chop*, everyone else on the team will know that an accidental *Chop Move* has occurred.
- Later on in the game, sometimes a player in this situation can retroactively realize that they have made a mistake by *Chop Moving* earlier on. They might be tempted to shift their chop back to where it is supposed to be.
- However, unless they discard a critical card (see the above section), players should **not ever undo a *Chop Move***, because they could be discarding a now-critical card that was not critical at the time of the original mistake. Everyone else on the team did not bother to clue the now-critical card, because they thought it was safely *Chop Moved*.
