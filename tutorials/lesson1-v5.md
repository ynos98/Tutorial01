### @hideIteration true 
### @explicitHints 1

# Unit3

## 前回のふりかえり
前回のふりかえりをしよう。
callコマンド、turnコマンドをつくったところからはじめるよ。

### ~ tutorialhint
```blocks
player.onChat("call", function () {
    easyBlock.agentTeleportToPlayer()
})
player.onChat("turn", function () {
    easyBlock.agentTurn(TurnDir.Right)
})
```
```ghost
player.onChat("call", function () {
    easyBlock.agentTeleportToPlayer()
})
player.onChat("turn", function () {
    easyBlock.agentTurn(TurnDir.Right)
})
```

## (ふりかえり) インベントリのじゅんびをしよう
エージェントを右クリックして、インベントリにレンガを入れてあげよう。<br><br>
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
``||player: チャットコマンド||``を出して、名前を **wall1** にしよう。<br>
``||loops: くりかえし||`` をチャットコマンドの中に入れて、その中に ``||easyBlock: エージェント||`` をうごかすコマンドを入れよう。
* エージェントが右にうごきながらブロックをおくには、どうすればいいかな？

できあがったら、「T」キーでチャットをひらいて **wall1** と入れてみよう。

### ~ tutorialhint
エージェントがいるばしょにはブロックをおけないから、まずは右に1歩うごこう。<br>
そのあとで、左どなりにブロックをおいてみよう。

```blocks
player.onChat("wall1", function () {
    for (let index = 0; index < 4; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
})
```
```ghost
player.onChat("wall1", function () {
    for (let index = 0; index < 4; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
})
```

## ここから
つぎは、高いカベをつくってみよう。<br><br>
``||player: チャットコマンド||``を出して、名前を **wall2** にしよう。<br>
**wall1** と同じように、``||loops: くりかえし||`` をチャットコマンドの中に入れよう。<br>
* カベの長さは **3マス** にすること
* カベをたてたあと、エージェントを **さいしょにいたばしょの1マス上** にうごかすこと

できあがったら、「T」キーでチャットをひらいて **wall2** と **4回** 入れてみよう。

### ~ tutorialhint
ブロックをすべておいたら、まずは上に1歩うごこう。<br>
そのあとで、右に進んだ分だけ左にもどれば、さいしょにいたばしょの1マス上になるよ。

```blocks
player.onChat("wall2", function () {
    for (let index = 0; index < 3; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Left, 3)
})
```
```ghost
player.onChat("wall2", function () {
    for (let index = 0; index < 3; index++) {
        easyBlock.agentMove(SixDir.Right, 1)
        easyBlock.agentPlace(SixDir.Left)
    }
    easyBlock.agentMove(SixDir.Up, 1)
    easyBlock.agentMove(SixDir.Left, 3)
})
```
