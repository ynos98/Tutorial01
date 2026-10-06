### @hideIteration true 
### @explicitHints 1

# Unit3

## 前回のふりかえり
前回のふりかえりをしよう。
callコマンド、turnコマンドをつくるところからはじめるよ。

## (ふりかえり) callコマンドを作ろう
``||player: チャットコマンド||``を出して、名前を **call** にしよう。<br>
チャットコマンドの中に ``||easyBlock: エージェントをよぶ||`` を入れよう。

### ~ tutorialhint
```blocks
player.onChat("call", function () {
    easyBlock.agentTeleportToPlayer()
})
```
```ghost
player.onChat("call", function () {
    easyBlock.agentTeleportToPlayer()
})
```

## (ふりかえり) turnコマンドを作ろう
``||player: チャットコマンド||``を出して、名前を **turn** にしよう。<br>
チャットコマンドの中に ``||easyBlock: 右を向く||`` を入れよう。

終わったら、再生ボタンをクリックして「T」キーでチャットをひらき
**call** と **turn** と入れてみよう。

### ~ tutorialhint
```blocks
player.onChat("turn", function () {
    easyBlock.agentTurn(TurnDir.Right)
})
```
```ghost
player.onChat("turn", function () {
    easyBlock.agentTurn(TurnDir.Right)
})
```

## (ふりかえり) インベントリのじゅんびをしよう１
エージェントを右クリックして、インベントリに**石レンガのへい**を入れてあげよう。<br>
石レンガは **レンガ屋** のおじさんからもらおう。家の中にある作業台をつかって、**石レンガのへい**をつくれるよ。

## (ふりかえり) インベントリのじゅんびをしよう２
じゅんびのためのブロックを **最初だけ** の中に入れよう。<br>
``||easyBlock: スロット 1 をつかう||`` を入れて、インベントリのいちばん左上のスロットをつかうようにしよう。<br>
``||easyBlock: なくなったら次のスロットをつかう||``を入れて、ブロックをつかいきったら次のスロットに行くようにしよう。

### ~ tutorialhint
```blocks
easyBlock.agentSetSlot(1)
easyBlock.agentPlaceFromAnySlot(true)
```
```ghost
easyBlock.agentSetSlot(1)
easyBlock.agentPlaceFromAnySlot(true)
```

## (ふりかえり) カベをつくろう
よこに長いカベをつくってみよう。<br><br>
``||player: チャットコマンド||``を出して、名前を **wall** にしよう。<br>
``||loops: くりかえし||`` をチャットコマンドの中に入れて、その中に ``||easyBlock: エージェント||`` をうごかすコマンドを入れよう。
* エージェントが右にうごきながらブロックをおくには、どうすればいいかな？

できあがったら、「T」キーでチャットをひらいて **wall** と入れてみよう。

### ~ tutorialhint
エージェントがいるばしょにはブロックをおけないから、まずは右に1歩うごこう。<br>
そのあとで、左どなりにブロックをおいてみよう。

```blocks
player.onChat("wall", function () {
    for (let index = 0; index < 4; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
})
```
```ghost
player.onChat("wall", function () {
    for (let index = 0; index < 4; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
})
```

## ゾンビをおいこむ道をつくろう
**wall** コマンドをかいぞうしながら、ゾンビをおいこむ道をつくろう。<br><br>
村の左にあるお手本を見ながら、エージェントに道をつくってもらおう。
**wall** コマンドをかいぞうして **つくるカベの長さ** をかえたり、**turn** コマンドでむきをかえながら、道をつくれるかな？<br><br>

できあがったら、**call** コマンドでエージェントを道の入口によんでみよう。

## エージェントが道のあいだをうごけるようにしよう１
左、まん中、右の3つの道をエージェントが動けるようにしよう。
まずは、**call** コマンドでエージェントをいちばん左の道の入口によんで、**turn** コマンドで前をむかせよう。

## エージェントが道のあいだをうごけるようにしよう２
``||player: チャットコマンド||``を出して、名前を **right** にしよう。rightはえいごで **右** のことだよ。<br>
``||easyBlock: 前に1マス進む||``コマンドを3つ入れて、それぞれ **むき** や **マスの数** をかえてみよう。<br>
とちゅうでカベにぶつからないように、気を付けよう。<br><br>

できあがったら、**right** コマンドでエージェントを右の道にうごかしてみよう。

### ~ tutorialhint
カベにぶつからないよう、1マス上がってからうごきだそう。
道と道のあいだは12マスあるよ。うまくかぞえられたかな？
```blocks
player.onChat("right", function () {
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Right, 12)
    easyBlock.agentMove(SixDir.Down, 1)
})
```
```ghost
player.onChat("right", function () {
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Right, 12)
    easyBlock.agentMove(SixDir.Down, 1)
})
```

## エージェントが道のあいだをうごけるようにしよう３
こんどは左にうごくコマンドをつくろう。<br><br>
``||player: チャットコマンド||``を出して、名前を **left** にしよう。leftはえいごで **左** のことだよ。<br>
**right** コマンドと同じものをつくって、エージェントがうごく**むき**だけをかえればOK！

できあがったら、**left** コマンドでエージェントを左の道にうごかしてみよう。

### ~ tutorialhint
```blocks
player.onChat("left", function () {
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Left, 12)
    easyBlock.agentMove(SixDir.Down, 1)
})
```
```ghost
player.onChat("left", function () {
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Left, 12)
    easyBlock.agentMove(SixDir.Down, 1)
})
```