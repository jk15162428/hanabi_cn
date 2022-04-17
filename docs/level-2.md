---
id: level-2
title: 进阶2 - Basic Moves（初级操作）
---

import DoublePrompt from '@site/image-generator/yml/level-2/double-prompt.yml';
import DoubleFinesse1 from '@site/image-generator/yml/level-2/double-finesse-1.yml';
import DoubleFinesse2 from '@site/image-generator/yml/level-2/double-finesse-2.yml';
import PromptFinesse from '@site/image-generator/yml/level-2/prompt-finesse.yml';
import ReverseFinesse from '@site/image-generator/yml/level-2/reverse-finesse.yml';
import SelfFinesse from '@site/image-generator/yml/level-2/self-finesse.yml';
import WrongPrompt from '@site/image-generator/yml/level-2/wrong-prompt.yml';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EarlyGameQuestion4 from '@site/image-generator/yml/beginner/early-game-question-4.yml';

- 进阶2的策略在游玩几局游戏后就可以开始学习啦。

<br />

## 特殊操作

### The 5 Stall (Cluing Off Chop 5's)（5踏步）

- 通常来说，只有在5到了chop上时你才能给它来一个「Save Clue」，如果你给一个**不在**chop上的5提示了数字5，那么这看着就很像「Play Clue」（或者其他一些进阶策略）。
- 有个例外，在「Early Game」（开局）时，你**被**允许给不在chop上的5「Save Clue」。这么做只是会被简单的认为是“stall”（踏步），意味着你是想将「Early Game」延长那么一小会。
- 但是，你**只**在没有别的事可以做时才允许stall，意思就是说所有“寻常的”「Play Clues」和「Save Clues」都应该已经被给出。
- 一般而言，「5 Stalls」只会在「Early Game」使用。不过呢，你也可能在「Mid-Game」（中局）看到有些玩家会进行「5 Stalls」出于某些原因，譬如说他们不能弃牌。
- 对于进阶8的玩家来说，会额外增加一些有关「5 Stalls」的规则。
- 对于进阶17的玩家来说，「2 Saves」和「5 Stalls」之间会有一个特殊的联动操作。

<br />

### The Double Prompt / Triple Prompt / Quadruple Prompt（多重示意）

- Sometimes, someone can give a *Prompt* that is prompting **two** (or more) cards with one clue, which is pretty good.
- For example, in a 3-player game:
  - Red 1 is played on the stacks.
  - Alice clues Cathy red, which touches a red 4. This must be a *Play Clue*, because the red 4 is not on chop.
  - Bob has two clued red cards in his hand. Since Alice has indicated that the red 4 must be playable right now, he knows that his two red cards must be a red 2 and a red 3 (in order from left-to-right).
  - Bob plays the left-most card as the red 2. On Bob's next turn, he plays the other red card as the red 3.

<DoublePrompt />

<br />

### The Double Finesse / Triple Finesse / Quadruple Finesse（多重巧技）

- Typically, *Finesses* are performed by cluing a *one-away-from-playable* card. However, it is possible to get two different people to blind-play their cards in a row if you give a clue to a *two-away-from-playable* card. This is very efficient, as it is a 3-for-1 clue.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - Alice clues Donald red, which touches a red 4.
  - Bob plays red 2 from his *Finesse Position*.
  - Cathy plays red 3 from her *Finesse Position*.
  - Donald plays red 4.

<DoubleFinesse1 />

- Similarly, it is possible to get a single player to blind-play 2 cards in a row. In this situation, since they see that the blind cards are not in anyone else's hands, they will blind-play two turns in a row, playing from left to right.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Cathy, touching a red 3.
  - Bob blind-plays red 1 from slot 1.
  - Cathy would normally think that she has red 2, which would connect to the red 1 that was just played. However, she sees that when the clue happened, there was a red 2 next to the red 1.
  - Thus, Cathy discards, giving Bob a chance to blind-play the red 2. If he does not blind-play it, then it was a normal *Finesse* and she has red 2. If he does blind-play it, then it was a *Double Finesse* and she has red 3.
  - On his next turn, Bob blind-plays red 2 from slot 2. Cathy now knows that she has the red 3.

<DoubleFinesse2 />

<br />

### The Prompt + Finesse（示意+巧技）

- 一般来说，玩家总是优先考虑「Prompts」而非「Finesses」。那么，我们有没有可能先「Prompt」一名玩家手中的牌，**再**让他们下一轮盲打出自己「Finesse Position」的牌呢？
- 见下面的例子，在一个三人游戏中：
  - 红1已经打出。
  - Bob在自己的4号槽位有一张提示过的红色卡牌。
  - Alice向Cathy提示了红色，点到了一张红4，而这是一个「Play Clue」。
  - Bob知道他手里一定有红2和红3（这样红4才是可以打出的），但他手里只有一张提示过的红色卡牌。所以这一定是对他而言的「Prompt」及「Finesse」。
  - 既然「Prompts」优先于「Finesses」，他先打出4号槽位的红色卡牌，成功打出一张红2。
  - 下一回合，Bob盲打出位于2号槽位的红3。（他的「Finesse Position」在先前是1号槽位，但抽了张卡后变成了2号槽位。）

<PromptFinesse />

<br />

### The Reverse Finesse（逆向巧技）

- In a normal *Finesse*, you give a clue to a player who comes after the player blind-playing a card.
  - i.e. clue --> blind-play --> clued-card plays
- If you give a *Finesse* clue to someone who gets to have a turn **before** the blind-play occurs, it is called a *Reverse Finesse*. This is more complicated than a normal *Finesse* and is harder to see.
  - i.e. clue --> clued player does unrelated action --> blind-play --> clued-card plays
- Because we agree that *Reverse Finesses* should exist, players need to be careful before playing any cards. Players in this situation need to check out everyone else's *Finesse Position*. If a card in someone's *Finesse Position* is playable and "connects" to the clue, then **they should defer playing the clued card** for at least one go-around and wait to see what happens.
- If a blind-play does happen, then it means that the clued card is the next card in the chain.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob red, which touches his red 2.
  - Next, it is Bob's turn. Normally, Bob would think that he had the red 1, and play it immediately.
  - However, Bob also notices that on Cathy has a red 1 on her slot 1 position. Thus, he has to give a chance for Cathy to prove whether or not a *Reverse Finesse* is happening. If Cathy does not blind-play anything, then Bob should have the red 1, and he can play it on his next turn.
  - Bob discards.
  - Cathy blind-plays the red 1. Bob now knows that he has the connecting red 2.

<ReverseFinesse />

- If the player with the "connecting" card **does not** blind-play, then the clued card is probably the other copy, and can be played on the next turn.
- For example, in a 3-player game:
  - The setup is the same as the last example. Bob is clued red, so he suspects a *Reverse Finesse* is occurring and discards.
  - Cathy does an unrelated action.
  - Now Bob knows that the red card in his hand is actually the red 1.

<br />

### The Self-Finesse（自巧技）

- It is also possible to perform a *Finesse* on a player by giving **them** a clue.
- For example, in a 3-player game:
  - All of the 1's are played on the stacks.
  - Alice clues number 3 to Cathy, touching one 3 on slot 2.
  - Bob discards.
  - Cathy knows that this was a *Play Clue* on the 3, but there are no 3's that are directly playable. Thus, someone must have the connecting 2. Since Bob discarded, Cathy must be the one who has the connecting 2.
  - Thus, Cathy plays her *Finesse Position* card as **any** 2. It is a red 2 and it successfully plays.
  - Cathy now knows that her 3 must connect to the 2, so she marks her 3 as a red 3.

<SelfFinesse />

- Note that *Self-Finesses* can be difficult to perform because the player receiving the clue will **only** consider the possibility of a *Self-Finesse* **if there are no other possibilities** for the clue. For example:
  - If the clue looks like it *could* just be a normal/direct *Play Clue* on a card, then the clue receiver will not blind-play anything - they will just play the card that was clued.
  - If the clue looks like it *could* be a *Prompt*, then the clue receiver will not play anything and assume that it is a *Prompt*. (At least, until the other player has had a chance to play the *Prompted* card.)
  - If the clue looks like it *could* be a *Reverse Finesse*, then the clue receiver will not play anything and assume that it is a *Reverse Finesse*. (At least, until the other player has had a chance to blind-play the card.)

<br />

## General Principles

<br />

### Trash

- *Trash* cards are defined as cards that have already been played. Thus, they are useless to the team.
- Players should generally avoid "touching" trash cards with a clue, as doing so would violate *Good Touch Principle*.
  - Rarely, it can be useful to deliberately clue a trash card and violate *Good Touch Principle* in order to perform a special move. Several such moves are covered later on.
- In the case where a suit is partially "dead", the unneeded cards are also considered trash. For example, if both copies of the red 3 have been discarded, then the red 4 and the red 5 are both considered trash.

<br />

## Common Mistakes

<br />

### Stomping on a Finesse

- This is the term used for when a player clues a card directly that was going to be blind-played from a *Finesse*. Typically, this means that the player who gave the clue was not paying attention and failed to see that a *Finesse* happened at all.
- *Stomping* on a *Finesse* essentially wastes a clue for the team.

<br />

### What to Do After a Strike

- When a card is misplayed and goes to the discard pile, the team accumulates a *strike* (which is also referred to as a *bomb*).
- If three strikes are accumulated, the team will get a score of 0. This is to be **avoided at all costs**.
  - One exception is when players are explicitly going for a perfect score in a really tough variant, but this is less common.
- Building on this concept, it can also be **very bad** to get **two strikes in a row**. For example, say that Alice performs a bad clue and Bob misplays, causing a strike. And then Cathy "still believes" the original clue (thinking that Bob was the one who made the mistake instead of Alice), and Cathy goes on to misplay, causing yet another strike.
- So, in general, we want to **isolate one mistake to one strike**. Why? Since Hanabi is so difficult, mistakes are common, and we don't want to push the team to the precipice of failure after one tiny mistake. That kind of thing is not very good for the overall win-rate.
- This means that when a strike happens, **the state of information should "reset"** back to what it was before the mistake happened, at least most of the time.
- For example, if Alice clues red to Cathy, and Bob misplays a card, then Cathy should **not** go on to play any of her red cards, and Cathy should **not** make any assumptions about what her red cards could be. Obviously, some kind of mistake happened, and Cathy should sit and wait patiently for further instructions.

<br />

### The Wrong Prompt

- First, see the section on [What to Do After a Strike](#what-to-do-after-a-strike).
- Normally, after a strike happens, you are supposed to relax and not make any additional assumptions.
- However, there is one major exception. A common mistake in Hanabi is to attempt to perform a *Finesse* when there is a matching clued card in that player's hand. Since *Prompts* take precedence over *Finesses*, the player will always play their matching clued card first.
- When a card is *Prompted* and it misplays, everyone can read into this mistake - it was almost certainly a *Wrong Prompt*, meaning that the player who gave the clue probably intended for the *Finesse Position* card to play instead.
- Thus, if there is nothing else special about the situation, the player who misplayed should go on to play their *Finesse Position* card on the next turn.
- For example, in a 3-player game:
  - All of the 1's are played on the stacks.
  - Alice sees that Bob has a red 2 on his *Finesse Position*.
  - Alice clues red to Cathy, touching a red 3 as a *Play Clue*. She is trying to perform a *Finesse*.
  - Bob sees that Alice is signaling that he has the red 2. This must be a *Prompt*, so Bob plays his clued red card as a red 2.
  - However, it is actually a red 4 and it misplays. Oops! Alice forgot that Bob had a clued red card in his hand.
  - Bob knows that this was a *Wrong Prompt*. He really does the have the red 2 and it was on his *Finesse Position* at the time of the clue.
  - On his next turn, Bob blind-plays his slot 2. (It is on slot 2 now because he drew a card when he misplayed the red 4.)

<WrongPrompt />

## Questions for Level 2

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- It is currently the *Early Game*. There is 1 clue token left.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- The only legal move is for Alice to give a *5 Stall* to Donald
  (touching the purple 5).
  There are no other legal Play or Save clues to give at this time.

</TabItem>
</Tabs>

<EarlyGameQuestion4 />
