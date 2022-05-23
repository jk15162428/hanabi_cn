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

- 有些时候，玩家可以只用一个提示「Prompt」来同时示意**两张**（或更多）卡牌，听上去真不错呢。
- 见下面的例子，在一个三人游戏中：
  - 红1已经被打出。
  - Alice向Cathy提示了红色，点到了一张红4。这肯定是一个「Play Clue」，因为红4还没到chop上。
  - Bob手中有两张提示过的红色卡牌。既然Alice已经指明了红4现在是可以被打出的，他就可以知道自己手中的两张红牌必然是红2和红3（从左往右）。
  -Bob先打出左边的红2。下一回合，他打出另一张红3。

<DoublePrompt />

<br />

### The Double Finesse / Triple Finesse / Quadruple Finesse（多重巧技）

- 通常而言，「Finesses」一般会通过提示一张仍差一张才能打的卡牌（one-away-from-playable）。但是，如果你给出一张仍差两张才能打的卡牌，那么让两名不同的玩家盲打是说得通的。这很效率，因为是一个3-for-1提示。
- 见下面的例子，在一个四人游戏中：
  - 红1已经被打出。
  - Alice向Donald提示了红色，点到了一张红4。
  - Bob从「Finesse Position」打出一张红2。
  - Cathy从「Finesse Position」打出一张红3。
  - Donald打出红4。

<DoubleFinesse1 />

- 类似的，让一名玩家连着盲打两次也是同样的思路。因为这种情况下，那名玩家会发现需要盲打的牌并不在其他玩家手牌中，所以他们会从左往右连着盲打两轮（也就是先打1号槽位的卡牌，再打2号槽位的卡牌）。
- 见下面的例子，在一个三人游戏中：
  - 游戏刚刚开始，还没有任何卡牌被打出。
  - Alice向Cathy提示了红色，点到了一张红3。
  - Bob盲打出1号槽位的红1。
  - Cathy正常情况下会思考自己是否有红2，因为红2连着刚刚打出的红1。但是她发现在提示给出的那个回合，红1的右边就是张红2。
  - 因此，Cathy弃牌，等待一个回合看Bob会不会盲打红2。如果他没有盲打，那这就是个标准的「Finesse」，Cathy会认为自己那张是红2。如果Bob盲打了，那么这就是个「Double Finesse」，而她的红牌是张红3。
  - 下一回合，Bob从2号槽位盲打出红2。Cathy现在知道自己手中是张红3。

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

- 在一个标准的「Finesse」中，你会向需要盲打的那名玩家身后抛去一个提示。
  - 即：提示 --> 盲打 --> 打出提示过的牌。
- 如果你向需要盲打的那名玩家**前面**抛去一个「Finesse」提示，这就是「Reverse Finesse」。它比标准的「Finesse」更加复杂，也更难看出来。
  - 即：提示 --> 被提示的玩家做一件不相关的事情 --> 盲打 --> 打出提示过的牌。
- 因为我们规定「Reverse Finesses」理应存在，所以玩家在打出手中的牌前要小心一点。被给了提示的玩家要留心其他玩家的「Finesse Position」。如果一张能打的牌在某人的「Finesse Position」中，并且“接”（connects）上了刚刚的提示，那**他们就应该推迟打出刚刚提示的卡牌**至少一轮，看看究竟是什么情况。
  - 如果确实有玩家盲打，那么这就意味着手中提示过的牌是下一张需要打的牌。
  - 譬如，在一个三人游戏中：
    - 游戏刚刚开始，还没有牌被打出。
    - Alice向Bob提示了红色，点到了他的红2。
    - 接着轮到Bob的回合。通常来说，Bob第一反应是这是张红1，可以立刻打出。
    - 但是，Bob也注意到在Cathy的1号槽位有一张红1。因此，他应该给Cathy至少一动的机会来确认这究竟是不是「Reverse Finesse」。如果Cathy没有盲打，那么Bob手中的就是红1，他可以在下一轮打出。
    - Bob弃牌。
    - Cathy盲打出红1，Bob现在知道他手中是红1连接着的红2。

<ReverseFinesse />

- 如果那名可能有着“连接”牌的玩家**没有**盲打，那么刚刚提示的卡牌大概率就是另一张复制（即相同的卡牌），下一轮就可以打出。
- 例如，在一个三人游戏中：
  - 跟之前的例子完全一样，Bob被提示了红色，他会怀疑这是一个「Reverse Finesse」而选择弃牌。
  - Cathy做了个无关紧要的行为。
  - 现在Bob知道手中的一定是张红1。

<br />

### The Self-Finesse（自巧技）

- 给需要盲打的玩家一个提示来施展「Finesse」也是合乎逻辑的。
- 譬如，在一个三人游戏中：
  - 所有的1都已经被打出。
  - Alice向Cathy提示了3，点到了2号槽位的一张3。
  - Bob弃牌。
  - Cathy知道刚刚对3的提示是「Play Clue」，但没有任何一张3是即刻能打的。因此，一名玩家手中一定有一张能承上启下的2。因为Bob弃牌了，Cathy肯定就有着这张2。
  - 因此，Cathy从「Finesse Position」打出一张**任意颜色**的2，顺利打出后发现是张红2。
  - Cathy现在知道她手中的3肯定接着刚刚的2，她将手中的3标记为红3。

<SelfFinesse />

- 注意，「Self-Finesse」可能会比较难施展，因为收到提示的玩家**只**会在**没有其他任何可能性**的情况下才考虑「Self-Finesse」，譬如说：
  - 如果这个提示看上去**可能**是一个「Play Clue」，那么收到提示的玩家不会盲打，他们会直接打出刚刚提示的卡牌。
  - 如果这个提示看上去**可能**是一个「Prompt」，那么收到提示的玩家会将这个提示视为「Prompt」而什么都不会打。（至少会等到其他玩家有机会打出被「Prompt」的牌。）
  - 如果这个提示看上去**可能**是一个「Reverse Finesse」，那么收到提示的玩家会将这个提示视为「Reverse Finesse」而什么都不会打。（至少会等到其他玩家有机会盲打出承上启下的卡牌。）

<br />

## 一般原则

<br />

### Trash（废牌）

- 「Trash」被定义为已经打出过的卡牌。所以，他们对团队毫无作用。
- 玩家应该尽量避免“点”到废牌，因为会违背「Good Touch Principle」。
  - 但偶尔，违背「Good Touch Principle」故意提示一张废牌是有用的。在之后的章节中我们会讲解这样的操作。
- 在有些花色已经被拦腰截断的情况下，不需要的卡牌也被认为是废牌。譬如，如果两张红3都被弃掉了，那么红4和红5也被视为废牌。

<br />

## 常见的错误

<br />

### Stomping on a Finesse（错失「Finesse」）

- 当一名玩家本可以给出一个「Finesse」让某张牌被盲打时，却选择直直给这张需要被盲打的牌提示的时候，我们就说他错失了一个「Finesse」。通常来说，这表明那名给出提示的玩家并没有太留心，没能看到一个可能的「Finesse」。
- 错失（Stomping）一个「Finesse」会导致队伍白白浪费一个clue。

<br />

### 打错牌之后应该做些什么

- 当一张牌打错的时候，队伍会得到一个“红叉”（strike）（在英文中也有时用bomb指代）。
- 如果队伍有了三个红叉，那么就会直接游戏结束得到0分。应该**不惜一切代价**避免这种情况。
  - 特例是当玩家们想要在某一个相当困难的变体上获得满分，不过这并不常见。
- Building on this concept, it can also be **very bad** to get **two strikes in a row**. For example, say that Alice performs a bad clue and Bob misplays, causing a strike. And then Cathy "still believes" the original clue (thinking that Bob was the one who made the mistake instead of Alice), and Cathy goes on to misplay, causing yet another strike.
- So, in general, we want to **isolate one mistake to one strike**. Why? Since Hanabi is so difficult, mistakes are common, and we don't want to push the team to the precipice of failure after one tiny mistake. That kind of thing is not very good for the overall win-rate.
- This means that when a strike happens, **the state of information should "reset"** back to what it was before the mistake happened, at least most of the time.
- For example, if Alice clues red to Cathy, and Bob misplays a card, then Cathy should **not** go on to play any of her red cards, and Cathy should **not** make any assumptions about what her red cards could be. Obviously, some kind of mistake happened, and Cathy should sit and wait patiently for further instructions.

<br />

### 错误的「Prompt」

- Utopia：这是一个非常常见的错误，请务必重视这个章节。（但我还没翻译2333）
- 首先，你应该看一下“[打错牌之后应该做些什么](#打错牌之后应该做些什么)”这个小节。
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

## 进阶2习题

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: '问题', value: 'question'},
    {label: '题解', value: 'solution'},
  ]}>
<TabItem value="question">

- 目前还处于**开局**，还剩下一个提示。
- Alice应该采取什么行动？

</TabItem>
<TabItem value="solution">

- 对Alice而言唯一可行的行动就是给Donald一个「5 Stall」（点到紫5）。此时并没有其他可行的Play或Save clues能给。根据先前其他玩家的提示，Alice也可以考虑弃牌，但她看到Bob、Cathy和Donald的chop全是废牌，抢走他们的提示让他们选择弃牌并不是什么自私的选择。

</TabItem>
</Tabs>

<EarlyGameQuestion4 />
