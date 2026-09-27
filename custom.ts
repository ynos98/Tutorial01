/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/
enum TurnDir {
    //% block="右"
    Right = TurnDirection.Right,
    //% block="左"
    Left = TurnDirection.Left
}

enum SixDir {
    //% block="前"
    Front = SixDirection.Forward,
    //% block="うしろ"
    Back = SixDirection.Back,
    //% block="右"
    Right = SixDirection.Right,
    //% block="左"
    Left = SixDirection.Left,
    //% block="上"
    Up = SixDirection.Up,
    //% block="下"
    Down = SixDirection.Down
}

/**
 * Custom blocks
 */
//% block="ベーシック" weight=100 color=#FF4500 icon="\uf11b"
namespace easyBlock {
    /**
     * エージェントをプレイヤーのいる場所によぶ
     */
    //% group="エージェントをよぶ"
    //% block="エージェントをよぶ"
    //% weight=990
    export function agentTeleportToPlayer(): void {
        agent.teleportToPlayer()
    }

    /**
     * エージェントの向きを変える
     * @param dir エージェントの向き
     */
    //% group="エージェントをうごかす"
    //% block="%dir を向く"
    //% weight=890
    export function agentTurn(dir: TurnDir): void {
        agent.turn(dir)
    }

    /**
     * エージェントを移動させる
     * @param dir 進む方向
     * @param blocks 進むマス数
     */
    //% group="エージェントをうごかす"
    //% block="%dir に %blocks マス進む"
    //% blocks.defl=1
    //% weight=880
    export function agentMove(dir: SixDir, blocks: number): void {
        agent.move(dir, blocks)
    }

    /**
     * エージェントのスロットを有効化
     */
    //% group="エージェントがつくる"
    //% block="スロット %slot をつかう"
    //% slot.defl=1
    //% weight=790
    export function agentSetSlot(slot: number): void {
        agent.drop(SixDir.Front, 1, slot)
    }

    /**
     * アイテムがなくなったら次のスロットを使う
     */
    //% group="エージェントがつくる"
    //% block="なくなったら次のスロットをつかう %on"
    //% on.defl=true
    //% on.shadow=toggleOnOff
    //% weight=780
    export function agentPlaceFromAnySlot(on: boolean): void {
        agent.setAssist(PLACE_FROM_ANY_SLOT, on)
    }

    /**
     * エージェントに置かせる
     * @param dir ブロックを置く向き
     */
    //% group="エージェントがつくる"
    //% block="%dir にブロックをおく"
    //% weight=770
    export function agentPlace(dir: SixDir): void {
        agent.place(dir)
    }

    /**
     * エージェントに壊させる
     * @param dir ブロックを壊す向き
     */
    //% group="エージェントがつくる"
    //% block="%dir のブロックをこわす"
    //% weight=760
    export function agentDestroy(dir: SixDir): void {
        agent.destroy(dir)
    }

    /**
     * エージェントが落とす
     */
    //% group="エージェントのもちもの"
    //% block="ブロックを %quantity コ おとす"
    //% quantity.defl=1
    //% weight=690
    export function agentDrop(quantity: number): void {
        agent.drop(SixDir.Front, 1, quantity)
    }

    /**
     * エージェントが拾う
     */
    //% group="エージェントのもちもの"
    //% block="おちているブロックをひろう"
    //% weight=680
    export function agentCollect(): void {
        agent.collectAll()
    }

    /**
     * エージェントのとなりのマスにブロックがあるか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir にブロックがある"
    //% weight=590
    export function agentDetectBlock(dir: SixDir): boolean {
        return agent.detect(AgentDetection.Block, dir)
    }

    /**
     * エージェントのとなりのマスにブロックがないか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir にブロックがない"
    //% weight=580
    export function agentDetectBlockNegate(dir: SixDir): boolean {
        return !agent.detect(AgentDetection.Block, dir)
    }

    /**
     * エージェントのとなりのマスに特定のブロックがあるか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir に %block がある"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% weight=570
    export function agentDetectSpecificBlock(dir: SixDir, block: number): boolean {
        let result: boolean = false;
        if (agent.inspectBlock(dir) == block) {
            result = true;
        }
        return result;
    }

    /**
     * エージェントのとなりのマスに特定のブロックがないか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir に %block がない"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% weight=560
    export function agentDetectSpecificBlockNegate(dir: SixDir, block: number): boolean {
        let result: boolean = false;
        if (agent.inspectBlock(dir) == block) {
            result = true;
        }
        return !result;
    }

    /**
     * エージェントを待機させる
     * @param seconds 秒数
     */
    //% group="エージェントをせいぎょする"
    //% block="%seconds 秒まつ"
    //% seconds.defl=1
    //% weight=490
    export function agentWait(seconds: number): void {
        let ms: number = seconds * 1000;
        loops.pause(ms)
    }
}
