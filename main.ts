player.onChat("call", function () {
    easyBlock.agentTeleportToPlayer()
})
player.onChat("turn", function () {
    easyBlock.agentTurn(TurnDir.Right)
})